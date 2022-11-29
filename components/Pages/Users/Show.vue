<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense disabled class="mt-4">
        <v-col cols="12">
          <!-- select Tipification -->
          <v-select
            v-model="citationItemTypificationId"
            :rules="rules.citationItemTipification"
            :items="tipifications"
            label="Tipificación"
            rounded
            color="five"
            outlined
            dense
          />
        </v-col>
        <!-- Descripción -->
        <v-col cols="12">
          <v-textarea
            v-model="citationItemObservationNotSuitable"
            :rules="rules.citationItemObservationNotSuitable"
            prepend-inner-icon="mdi-text"
            label="Descripción"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <v-col cols="12" class="">
          <v-card-actions>
            <v-spacer />
            <v-btn text small @click="showOptionModal('isShowCitation')">
              Cerrar
            </v-btn>
            <v-btn
              :disabled="!valid || isPosting"
              :loading="isPosting"
              type="submit"
              color="three"
              :dark="true"
              rounded
              small
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState } from 'vuex'
import {
  propertiesGenerator,
  showOptionModal,
  toCamelCase
} from '~/plugins/helpers'
import { VModelCitation } from '~/interfaces/components/pages/citation.interface'
import { CitationController } from '~/controllers/citation.controller'
import { TipificationController } from '~/controllers/tipification.controller'

export default {
  props: {
    secondaryColor: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    citationItemDescription: '',
    tipifications: [],
    valid: true,
    type: 1,
    rules: {
      tipification: [v => !!v || 'La tipificación es requerida'],
      citationItemObservationNotSuitable: [
        v => !!v || 'La observación es requerida'
      ]
    }
  }),
  async fetch () {
    const tipifications = await TipificationController.get.all(1)
    this.tipifications = tipifications.map(tipification => ({
      value: tipification.id,
      text: tipification.name
    }))
  },

  computed: {
    ...mapState('app', ['isPosting']),
    ...mapState('citation', ['editedCitation']),

    ...propertiesGenerator([...VModelCitation], {
      path: 'citation',
      mut: 'citation/setProperty'
    })
  },
  methods: {
    showOptionModal,
    toCamelCase,
    UpdateCitationById: CitationController.put.byId,

    sendForm () {
      const inputData = {
        id: this.citationItemId,
        typificationId: this.citationItemTypificationId,
        observationNotSuitable: this.citationItemObservationNotSuitable
      }
      if (inputData.id) {
        this.UpdateCitationById(inputData.id, inputData, this.type)
      }
    }
  }
}
</script>
