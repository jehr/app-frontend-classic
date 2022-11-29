<template>
  <div style="width: 100%" class="mx-2 d-flex align-center">
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list dense flat color="white">
        <!-- Apto -->
        <v-list-item
          v-if="!validExistUserInSuitable(document)"
          link
          @click="crudAptoCreateOrUpdate(citation)"
        >
          <!-- id:20 es re agendado -->
          <v-list-item-icon class="mr-3">
            <v-icon color="success" small>
              mdi-check-bold
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Apto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Editar-->
        <v-list-item
          v-if="validExistUserInSuitable(document)"
          link
          @click="getDataSuitable()"
        >
          <v-list-item-icon class="mr-3">
            <v-icon color="gray" small>
              mdi-account-edit
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Editar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- No apto -->
        <v-list-item link @click="crudShowCitation(citation)">
          <v-list-item-icon class="mr-3">
            <v-icon color="red" small>
              mdi-close-circle
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>No Apto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- No Asiste -->
        <v-list-item link @click="showCitation(citation)">
          <v-list-item-icon class="mr-3">
            <v-icon color="grey" small>
              mdi-account-remove
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>No Asiste</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Duplicado -->
        <v-list-item link @click="duplicate(citation)">
          <v-list-item-icon class="mr-3">
            <v-icon color="warning" small>
              mdi-content-duplicate
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Duplicado</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list v-else>
        <v-list>
          <v-list-item-title>
            No se pueden realizar acciones sobre esta citación
          </v-list-item-title>
        </v-list>
      </v-list> -->
    </v-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { validateAccess } from '~/plugins/helpers'
import { CitationController } from '~/controllers/citation.controller'
import {
  uploadIdentificationDocument,
  crudCreatesuitableCitation,
  updatesuitableCitation,
  crudShowCitation,
  crudAptoCreateOrUpdate,
  showCitation
} from '~/plugins/crud'
import { Citation } from '~/interfaces/components/pages/citation.interface'

export default {
  props: {
    citation: {
      type: Object,
      required: true,
      default: () => Citation
    },
    document: { type: String, required: true, default: '' }
  },

  async asyncData () {
    const citations = await CitationController.get.all()
    return { citations: citations || [] }
  },

  data: () => ({
    CitationController,
    userValid: false,
    recruitmentValid: true
  }),
  computed: {
    ...mapState('app', ['user']),
    customId () {
      return this.citation.id
    },

    // Status
    customStatus () {
      return this.citation.active
    },

    customTipification () {
      return this.citation.typification
    }
  },
  methods: {
    validateAccess,
    crudShowCitation,
    showCitation,
    uploadIdentificationDocument,
    crudCreatesuitableCitation,
    updatesuitableCitation,
    crudAptoCreateOrUpdate,
    getRecruiment: CitationController.get.byRecruiment,

    async getDataSuitable () {
      // const data = await CitationController.get.suitableByDocument(document)
      const { data } = await this.getRecruiment(this.citation.recruitmentId)
      this.updatesuitableCitation(data)
    },

    validExistUserInSuitable (document) {
      this.getRecruiment(this.citation.recruitmentId).then((response) => {
        CitationController.get
          .suitableByDocument(document)
          .then(({ result }) => {
            if (!result && this.citation.typification !== null) {
              if (this.citation.typification.id === 20) {
                this.userValid = false
              }
            } else {
              this.userValid = this.citation.statusOfManagement
            }
            if (
              !response.result &&
              this.citation.typification !== null &&
              this.citation.statusOfManagement
            ) {
              if (this.citation.typification.id !== 1) {
                this.recruitmentValid = false
              } else {
                this.recruitmentValid = true
              }
            } else {
              this.userValid = this.citation.statusOfManagement
            }
          })
      })
      return !this.recruitmentValid ? this.recruitmentValid : this.userValid
    },

    async duplicate (data) {
      if (data.id) {
        await CitationController.get.duplicate(data.id)
      }
    }
  }
}
</script>
