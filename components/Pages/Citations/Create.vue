<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense class="mt-4">
        <!-- Nombre completo -->
        <v-col cols="12" sm="12" xs="12">
          <v-text-field
            v-model="citationItemFullName"
            :rules="rules.citationItemFullName"
            prepend-inner-icon="mdi-form-textbox"
            label="Nombre completo"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Documento -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <!-- Teléfono -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="citationItemPhone1"
            :rules="rules.citationItemPhone1"
            prepend-inner-icon="mdi-form-textbox"
            label="Teléfono"
            color="five"
            :counter="10"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Nombre Campaña -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-autocomplete
            v-model="citationItemCampaignName"
            :rules="rules.citationItemCampaignName"
            :items="rawCampaings"
            prepend-inner-icon="mdi-form-textbox"
            label="Nombre Campaña"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Tipo Interesado -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-autocomplete
            v-model="citationItemInterestedType"
            :rules="rules.citationItemInterestedType"
            prepend-inner-icon="mdi-form-textbox"
            :items="rawJobs"
            label="Cargo"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Fecha de Citación -->
        <v-col cols="12" md="4" lg="4" sm="12" xs="12">
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
        <v-col cols="12" md="4" lg="4" sm="12" xs="12">
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
        <v-col cols="12" md="4" lg="4" sm="12" xs="12">
          <v-select
            v-model="citationReasonType"
            :items="rawReason"
            label="Tipo de razon"
            item-color="three"
            item-value="value"
            color="three"
            outlined
            rounded
            dense
            prepend-inner-icon="mdi-filter-outline"
            :rules="rules.citationItemReasonType"
          >
            <template #selection="{item} ">
              <v-chip color="primary" small dark>
                {{ item.name }}
              </v-chip>
            </template>
            <template #item="{ item, attrs, on }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-title
                  :id="attrs['aria-labelledby']"
                  v-text="item.name"
                />
              </v-list-item>
            </template>
          </v-select>
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
import { GeneralController } from '~/controllers/general.controller'
import { generateNxtDate } from '~/helpers/time'
import { VModelCitation } from '~/interfaces/components/pages/citation.interface'
import { onlyNumber, onlyString } from '~/plugins/regex'
import { CitationController } from '~/controllers/citation.controller'

export default {
  data: () => ({
    CitationController,
    menuChild1: false,
    modalTime: true,
    dialogDate: false,
    citationReasonType: '',
    actualDate: generateNxtDate().substr(0, 10),
    nextDate: generateNxtDate(0, 0, 15).substr(0, 10),
    maxDate: generateNxtDate(0, 0, 6).substr(0, 10),
    reasonType: [],
    campaings: [],
    jobs: [],
    valid: true,
    rules: {
      citationItemFullName: [v => !!v || 'El nombre completo es requerido'],
      citationItemDocument: [v => !!v || 'El documento es requerido'],
      citationItemPhone1: [v => !!v || 'El teléfono es requerido'],
      citationItemCampaignName: [
        v => !!v || 'El nombre de la campaña es requerido'
      ],
      citationItemReasonType: [v => !!v || 'El tipo de razón es obligatorio'],
      citationItemInterestedType: [v => !!v || 'El tipo de cargo es requerido'],
      citationItemHourCitation: [
        v => !!v || 'La hora de citación es obligatoria'
      ],
      date: {
        field: [v => !!v || 'La fecha de citación es requerida']
      }
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
    isEqualDateProgramming () {
      return this.actualDate === this.programming.date
    },

    rawReason () {
      return [...this.reasonType].map(reason => ({
        name: reason.name,
        value: reason.id
      }))
    },
    rawCampaings () {
      return [...this.campaings].map(campaign => ({
        text: campaign.name,
        value: campaign.name
      }))
    },
    rawJobs () {
      return [...this.jobs].map(job => ({
        text: job.name,
        value: job.name
      }))
    }
  },

  watch: {
    // Nombre
    citationItemDocument (val) {
      this.$nextTick(() => {
        this.citationItemDocument = validateExpresion(onlyNumber, val)
      })
    },
    citationReasonType (val) {
      this.citationItemReasonType = val
    },
    // Descripcion
    citationItemFullName (val) {
      this.$nextTick(() => {
        this.citationItemFullName = validateExpresion(onlyString, val)
      })
    }
  },

  async created () {
    await this.initialize()
  },

  methods: {
    showOptionModal,
    validateExpresion,
    allCampaings: GeneralController.get.allCampaings,
    allJobs: GeneralController.get.allJobs,
    allowedStep: m => m % 5 === 0,
    CreateCitation: CitationController.post.create,
    UpdateCitationById: CitationController.put.byId,

    async initialize () {
      this.reasonType = await CitationController.get.reason()
      this.campaings = await this.allCampaings()
      this.jobs = await this.allJobs()
    },

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
