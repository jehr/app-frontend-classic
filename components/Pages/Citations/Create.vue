<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense class="mt-4">
        <!-- Documento -->
        <v-col cols="12" md="12" >
          <v-text-field
            v-model="citationItemDocument"
            :rules="rules.citationItemDocument"
            prepend-inner-icon="mdi-form-textbox"
            label="Documento"
            color="five"
            :counter="10"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Fecha de Citación -->
        <v-col cols="12" md="12" >
          <v-dialog
            ref="dialogDate"
            v-model="dialogDate"
            :return-value.sync="citationItemDateCitation"
            width="290px"
            persistent
          >
            <template #activator="{ on, attrs }">
              <v-combobox
                v-model="citationItemDateCitation"
                :rules="rules.date.field"
                v-bind="attrs"
                prepend-inner-icon="mdi-calendar"
                label="Fecha de citación"
                color="three"
                small-chips
                outlined
                rounded
                readonly
                dense
                chips
                v-on="on"
                :min="actualDate"
              >
                <template #selection="{ item }">
                  <v-chip color="three" small dark v-bind="attrs">
                    {{ item }}
                  </v-chip>
                </template>
              </v-combobox>
            </template>
            <v-date-picker
              v-model="citationItemDateCitation"
              locale="es-co"
              scrollable
            >
              <v-spacer />
              <v-btn text color="primary" @click="dialogDate = false">
                Cancelar
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogDate.save(citationItemDateCitation)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <!-- Hora de citación -->
        <v-col cols="12" md="12" >
          <v-dialog
            ref="dialog"
            v-model="menuChild1"
            :return-value.sync="citationItemHourCitation"
            persistent
            width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="citationItemHourCitation"
                label="Hora inicio"
                dense
                readonly
                v-bind="attrs"
                color="five"
                outlined
                rounded
                v-on="on"
              />
            </template>
            <v-time-picker
              v-if="modalTime"
              v-model="citationItemHourCitation"
              full-width
            >
              <v-spacer />
              <v-btn text color="primary" @click="modalTime = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(citationItemHourCitation)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <!-- Botones -->
        <v-col cols="12" class="mt-4">
          <v-card-actions>
            <v-spacer />
            <v-btn text small @click="showOptionModal('isFormCitation')">
              Cancelar
            </v-btn>
            <v-btn
              :disabled="!valid || isPosting"
              :loading="isPosting"
              color="five"
              type="submit"
              :dark="valid"
              rounded
              small
            >
              {{ citationItemId ? 'Actualizar' : 'Guardar' }}
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
  validateExpresion
} from '~/plugins/helpers'
import { generateNxtDate } from '~/helpers/time'
import { VModelCitation } from '~/interfaces/components/pages/citation.interface'
import { CitationController } from '~/controllers/citation.controller'

export default {
  data: () => ({
    CitationController,
    menuChild1: false,
    modalTime: true,
    dialogDate: false,
    actualDate: generateNxtDate().substr(0, 10),
    nextDate: generateNxtDate(0, 0, 15).substr(0, 10),
    maxDate: generateNxtDate(0, 0, 6).substr(0, 10),
    valid: true,
    rules: {
      citationItemDocument: [v => !!v || 'El documento es requerido'],
      citationItemHourCitation: [ v => !!v || 'La hora de citación es obligatoria' ],
      date: { field: [v => !!v || 'La fecha de citación es requerida']}
    },
    programming: { date: '', hour: '' }
  }),

  computed: {
    ...mapState('app', ['isPosting']),
    ...mapState('citation', ['editedCitation']),
    ...propertiesGenerator([...VModelCitation], {
      path: 'citation',
      mut: 'citation/setProperty'
    }),
  },

  watch: {
  },

  methods: {
    showOptionModal,
    validateExpresion,
    allowedStep: m => m % 5 === 0,
    CreateCitation: CitationController.post.create,
    UpdateCitationById: CitationController.put.byId,

    sendForm () {
      const inputData = { ...this.citationItem }
      if (inputData.id) {
        this.UpdateCitationById(inputData.id, inputData)
      } else {
        this.CreateCitation(inputData)
      }
    }
  }
}
</script>
