<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense disabled class="mt-4">
        <v-col cols="12">
          <v-select
            v-model="typeTipification"
            :menu-props="{ top: false, offsetY: true }"
            :rules="rules.tipification"
            prepend-inner-icon="mdi-filter-outline"
            label="Selecciona la tipificación"
            :items="tipifications"
            item-color="three"
            item-value="value"
            color="three"
            outlined
            rounded
            dense
            @click="getTipifications()"
          >
            <template #selection="data">
              <v-chip color="three" small dark>
                {{ data.item.name }}
              </v-chip>
            </template>
            <template #item="data">
              <small class="text--secondary">
                {{ data.item.name }}
              </small>
            </template>
          </v-select>
        </v-col>
        <!-- Descripción -->
        <v-col cols="12">
          <v-textarea
            v-model="citationItemNotObservation"
            :rules="rules.citationItemNotObservation"
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
            <v-btn
              text
              small
              @click="showOptionModal('isShowCitationAssistance')"
            >
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
    typeTipification: '',
    citationItemDescription: '',
    tipifications: [],
    valid: true,
    type: 2,

    rules: {
      tipification: [v => !!v || 'La tipificación es requerida'],
      citationItemNotObservation: [v => !!v || 'La observación es requerida']
    }
  }),

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

    async getTipifications () {
      this.tipifications = await TipificationController.get.all(this.type)
    },

    sendForm () {
      const inputData = {
        id: this.citationItemId,
        typificationId: this.typeTipification.id,
        observationNotSuitable: this.citationItemNotObservation
      }
      // console.log(inputData)
      if (inputData.id) {
        this.UpdateCitationById(inputData.id, inputData, this.type)
      }
    }
  }
}
</script>
