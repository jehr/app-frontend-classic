<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense class="mt-4">
        <!-- Primer Nombre -->
        <v-col cols="6" xs="12" sm="12">
          <v-text-field
            v-model="suitableCitationItemFirstName"
            :rules="rules.suitableCitationItemFirstName"
            prepend-inner-icon="mdi-form-textbox"
            label="Primer Nombre"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Segundo Nombre -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemSecondName"
            :rules="rules.suitableCitationItemSecondName"
            prepend-inner-icon="mdi-form-textbox"
            label="Segundo Nombre"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Primer Apellidos -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemFirstSurname"
            :rules="rules.suitableCitationItemFirstSurname"
            prepend-inner-icon="mdi-form-textbox"
            label="Primer Apellido"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Segundo Apellidos -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemSecondSurname"
            :rules="rules.suitableCitationItemSecondSurname"
            prepend-inner-icon="mdi-form-textbox"
            label="Segundo Apellido"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Tipo de documento -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemDocumentTypeId"
            :rules="rules.suitableCitationItemDocumentTypeId"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-apps"
            label="Tipo de documento"
            :items="rawDocuments"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Documento -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemDocument"
            :rules="rules.suitableCitationItemDocument"
            prepend-inner-icon="mdi-numeric"
            label="Documento"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Fecha de expedicón -->
        <v-col cols="6">
          <v-menu
            ref="menu3"
            v-model="menu3"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dateOfExpedition"
                label="Fecha de expedición documento"
                prepend-inner-icon="mdi-calendar"
                :rules="[v => !!v || 'Campo Requerido']"
                dense
                readonly
                v-bind="attrs"
                color="pink"
                outlined
                rounded
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="dateOfExpedition"
              color="pink"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              locale="es-CO"
            />
          </v-menu>
        </v-col>
        <!-- Departamento de expedición -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemDepartmentOfExpedition"
            :rules="rules.suitableCitationItemDepartmentOfExpedition"
            prepend-inner-icon="mdi-form-textbox"
            label="Departamento de expedición"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Correo Electronico -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemEmail"
            :rules="rules.suitableCitationItemEmail"
            prepend-inner-icon="mdi-at"
            label="Correo Electronico"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Fecha de nacimiento -->
        <v-col cols="6" md="6">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dateOfBirth"
                label="¿Cual es tu fecha de nacimiento?"
                prepend-inner-icon="mdi-calendar"
                :rules="[v => !!v || 'Campo Requerido']"
                dense
                readonly
                v-bind="attrs"
                color="pink"
                outlined
                rounded
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="dateOfBirth"
              color="pink"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              locale="es-CO"
            />
          </v-menu>
        </v-col>
        <!-- Pais de nacimiento -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemCountryOfBirth"
            :rules="rules.suitableCitationItemCountryOfBirth"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-filter-outline"
            label="País de nacimiento"
            :items="rawCountries"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
            @change="changeCountry($event)"
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Estado de nacimiento -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemStateOfBirth"
            :rules="rules.suitableCitationItemStateOfBirth"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-filter-outline"
            label="Estado de nacimiento"
            :items="rawDepartments"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
            @change="changeDepartments($event)"
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Ciudad de nacimiento -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemCityOfBirthId"
            :rules="rules.suitableCitationItemCityOfBirthId"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-city-variant"
            label="Ciudad de nacimiento"
            :items="rawCities"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Teléfono -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemPhone_1"
            :rules="rules.suitableCitationItemPhone_1"
            prepend-inner-icon="mdi-phone"
            label="Teléfono 1"
            color="five"
            outlined
            rounded
            dense
          >
            <template #append>
              <Copy class="pt-1" :value="suitableCitationItemPhone_1" small />
            </template>
          </v-text-field>
        </v-col>
        <!-- Telefono 2 -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemPhone_2"
            :rules="rules.suitableCitationItemPhone_2"
            prepend-inner-icon="mdi-phone"
            label="Teléfono 2"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Teléfono WhatsApp -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemPhoneWhatsApp"
            :rules="rules.suitableCitationItemPhoneWhatsApp"
            prepend-inner-icon="mdi-whatsapp"
            label="Teléfono WhatsApp"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Dirección -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemAddress"
            :rules="rules.suitableCitationItemAddress"
            prepend-inner-icon="mdi-map-marker"
            label="Dirección"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Barrio -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemDistrict"
            :rules="rules.suitableCitationItemDistrict"
            prepend-inner-icon="mdi-map-marker"
            label="Barrio"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- EPS -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemEPS"
            :rules="rules.suitableCitationItemEPS"
            prepend-inner-icon="mdi-hospital"
            label="EPS"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Nombre Campaña -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemCampaignName"
            :rules="rules.suitableCitationItemCampaignName"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-filter-outline"
            label="Nombre campaña"
            :items="rawCampaings"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Fecha de Citación -->
        <!-- <v-col cols="12" md="6">
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dateOfSuitableCitation"
                label="Fecha de citación"
                prepend-inner-icon="mdi-calendar"
                :rules="[v => !!v || 'Campo Requerido']"
                dense
                readonly
                v-bind="attrs"
                color="pink"
                outlined
                rounded
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="dateOfSuitableCitation"
              color="pink"
              :active-picker.sync="activePicker"
              :min="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              locale="es-CO"
            />
          </v-menu>
        </v-col> -->
        <!-- Hora de citación -->
        <!-- <v-col cols="6">
          <v-menu
            ref="menu"
            v-model="menuChild1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="hourCitation"
                label="Hora citación"
                dense
                readonly
                v-bind="attrs"
                color="blue"
                outlined
                rounded
                v-on="on"
              />
            </template>
            <v-time-picker
              v-model="hourCitation"
              :landscape="$vuetify.breakpoint.smAndUp"
              ampm-in-title
            />
          </v-menu>
        </v-col> -->
        <!-- Estudios -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemLevelOfStudies"
            :rules="rules.suitableCitationItemLevelOfStudies"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-school"
            label="Nivel de estudio"
            :items="[
              { name: 'Bachiller', value: 'Bachiller' },
              { name: 'Técnico', value: 'Tecnico' },
              { name: 'Tecnólogo', value: 'Tecnologo' },
              { name: 'Pregrado', value: 'Pregrado' },
              { name: 'Postgrado', value: 'Postgrado' },
              { name: 'Maestría', value: 'Maestria' },
              { name: 'Doctorado', value: 'Doctorado' }
            ]"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Codigo Selección -->
        <v-col cols="6">
          <v-text-field
            v-model="suitableCitationItemCited"
            :rules="rules.suitableCitationItemCited"
            prepend-inner-icon="mdi-form-textbox"
            label="Código Selección"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Cargo -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemInterestedType"
            :rules="rules.suitableCitationItemInterestedType"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-filter-outline"
            label="Cargo"
            :items="rawJobs"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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

        <!-- Experiencia -->
        <v-col cols="6">
          <v-select
            v-model="suitableCitationItemExperience"
            :rules="rules.suitableCitationItemExperience"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-filter-outline"
            label="Experiencia"
            :items="rowExperience"
            item-color="primary"
            item-value="value"
            color="primary"
            outlined
            rounded
            dense
          >
            <template #selection="data">
              <v-chip color="primary" small dark>
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
        <!-- Observación--->
        <v-col cols="12">
          <v-textarea
            v-model="suitableCitationItemObservation"
            :rules="rules.suitableCitationItemObservation"
            prepend-inner-icon="mdi-text"
            label="Observación"
            color="five"
            outlined
            rounded
            dense
          />
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
              {{ suitableCitationItemId ? 'Actualizar' : 'Guardar' }}
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
import { VModelSuitableCitation } from '~/interfaces/components/pages/suitable-citation.interface'
import {
  onlyEmail,
  onlyNumber,
  onlyString,
  stringOrNumber
} from '~/plugins/regex'
import { CitationController } from '~/controllers/citation.controller'
import { GeneralController } from '~/controllers/general.controller'

export default {
  data: () => ({
    rowExperience: [
      {
        name: 'NO TIENE EXPERIENCIA',
        value: 'NO TIENE EXPERIENCIA'
      },
      { name: 'DE 3 A 6 MESES', value: 'DE 3 A 6 MESES' },
      { name: 'DE 6 a 1 AÑO', value: 'DE 6 a 1 AÑO' },
      { name: 'MAYOR A 1 AÑO', value: 'MAYOR A 1 AÑO' }
    ],
    campaings: [],
    jobs: [],
    expansion: [0, 1, 2, 3],
    countries: [],
    departments: [],
    cities: [],
    documents: [],
    CitationController,
    GeneralController,
    dialogDate: false,
    menuChild1: false,
    dialogBirthDate: false,
    actualDate: generateNxtDate().substr(0, 10),
    nextDate: generateNxtDate(0, 0, 15).substr(0, 10),
    maxDate: generateNxtDate(0, 0, 6).substr(0, 10),
    menu: false,
    menu2: false,
    menu3: false,
    dateOfBirth: '',
    dateOfExpedition: '',
    dateOfSuitableCitation: '',
    hourCitation: '',
    activePicker: null,
    valid: true,
    rules: {
      suitableCitationItemFirstName: [v => !!v || 'El nombre es requerido'],
      suitableCitationItemFirstSurname: [
        v => !!v || 'Los/El apellido(s) es requerido'
      ],
      suitableCitationItemDocument: [v => !!v || 'El documento es requerido'],
      suitableCitationItemDepartmentOfExpedition: [
        v => !!v || 'El departamento de expedición es requerido'
      ],

      suitableCitationItemDocumentTypeId: [
        v => !!v || 'El tipo de documento es requerido'
      ],
      suitableCitationItemEmail: [
        v => !!v || 'El correo electronico es obligatorio',
        v => onlyEmail.test(v) || 'El Correo Electrónico no es valido'
      ],
      suitableCitationItemDateOfBirth: [
        v => !!v || 'La fecha de nacimiento es requerida'
      ],
      suitableCitationItemPhone_1: [v => !!v || 'El teléfono 1 es obligatorio'],
      suitableCitationItemAddress: [
        v => !!v || 'La dirección de residencia es obligatoria'
      ],
      suitableCitationItemDistrict: [v => !!v || 'El barrio es obligatorio'],
      suitableCitationItemEPS: [v => !!v || 'La EPS es obligatoria'],
      suitableCitationItemCampaignName: [
        v => !!v || 'El nombre de la campaña es obligatorio'
      ],
      suitableCitationItemLevelOfStudies: [
        v => !!v || 'El nivel de estudio es obligatorio'
      ],

      programmingHour: [v => !!v || 'Hora es obligatoria'],
      suitableCitationItemCountryOfBirth: [
        v => !!v || 'La ciudad de nacimiento es obligatorio'
      ],
      suitableCitationItemStateOfBirth: [
        v => !!v || 'El departamento de nacimiento es obligatorio'
      ],
      suitableCitationItemCityOfBirthId: [
        v => !!v || 'La ciudad de nacimiento es obligatorio'
      ],
      suitableCitationItemCited: [v => !!v || 'El campo es obligatorio'],
      suitableCitationItemExperience: [
        v => !!v || 'La experiencia es obligatoria'
      ],
      suitableCitationItemInterestedType: [
        v => !!v || 'El cargo es obligatorio'
      ],
      suitableCitationItemObservation: [
        v => !!v || 'La observación es obligatoria'
      ],
      date: {
        field: [v => !!v || 'Fecha es requerida']
      }
    },
    programming: { date: '', hour: '' }
  }),

  computed: {
    ...mapState('app', ['isPosting']),
    ...mapState('citation', ['editedCitation']),
    ...mapState('suitableCitation', ['editedSuitableCitation']),
    ...propertiesGenerator([...VModelSuitableCitation], {
      path: 'suitableCitation',
      mut: 'suitableCitation/setProperty'
    }),
    isEqualDateProgramming () {
      return this.actualDate === this.programming.date
    },

    rawCountries () {
      return [...this.countries].map(country => ({
        name: country.name,
        value: country.id
      }))
    },

    rawDepartments () {
      return [...this.departments].map(department => ({
        name: department.name,
        value: department.id
      }))
    },

    rawCities () {
      return [...this.cities].map(city => ({
        name: city.name,
        value: city.id
      }))
    },

    rawDocuments () {
      return [...this.documents].map(document => ({
        name: document.name,
        value: document.id
      }))
    },

    rawJobs () {
      return [...this.jobs].map(job => ({
        name: job.name,
        value: job.name
      }))
    },

    rawCampaings () {
      return [...this.campaings].map(campaing => ({
        name: campaing.name,
        value: campaing.name
      }))
    }
  },

  watch: {
    // nombres
    suitableCitationItemFirstName (val) {
      this.$nextTick(() => {
        this.suitableCitationItemFirstName = validateExpresion(onlyString, val)
      })
    },
    suitableCitationItemSecondName (val) {
      this.$nextTick(() => {
        this.suitableCitationItemSecondName = validateExpresion(onlyString, val)
      })
    },
    // apellidos
    suitableCitationItemFirstSurname (val) {
      this.$nextTick(() => {
        this.suitableCitationItemFirstSurname = validateExpresion(
          onlyString,
          val
        )
      })
    },
    // apellidos
    suitableCitationItemSecondSurname (val) {
      this.$nextTick(() => {
        this.suitableCitationItemSecondSurname = validateExpresion(
          onlyString,
          val
        )
      })
    },
    // documento
    suitableCitationItemDocument (val) {
      this.$nextTick(() => {
        this.suitableCitationItemDocument = validateExpresion(onlyNumber, val)
      })
    },
    // dpto expedicion
    suitableCitationItemDepartmentOfExpedition (val) {
      this.$nextTick(() => {
        this.suitableCitationItemDepartmentOfExpedition = validateExpresion(
          onlyString,
          val
        )
      })
    },
    // correo
    suitableCitationItemEmail (val) {
      this.$nextTick(() => {
        this.suitableCitationItemEmail = validateExpresion(onlyEmail, val)
      })
    },
    // telefono 1
    suitableCitationItemPhone_1 (val) {
      this.$nextTick(() => {
        this.suitableCitationItemPhone_1 = validateExpresion(onlyNumber, val)
      })
    },
    // telefono 2
    suitableCitationItemPhone_2 (val) {
      this.$nextTick(() => {
        this.suitableCitationItemPhone_2 = validateExpresion(onlyNumber, val)
      })
    },
    // whatsapp
    suitableCitationItemPhoneWhatsApp (val) {
      this.$nextTick(() => {
        this.suitableCitationItemPhoneWhatsApp = validateExpresion(
          onlyNumber,
          val
        )
      })
    },
    // direccion
    suitableCitationItemAddress (val) {
      this.$nextTick(() => {
        this.suitableCitationItemAddress = validateExpresion(
          stringOrNumber,
          val
        )
      })
    },
    // EPS
    suitableCitationItemEPS (val) {
      this.$nextTick(() => {
        this.suitableCitationItemEPS = validateExpresion(stringOrNumber, val)
      })
    },
    // Campaña

    // pais
    suitableCitationItemCountryOfBirth (val) {
      this.$nextTick(() => {
        this.suitableCitationItemCountryOfBirth = validateExpresion(
          stringOrNumber,
          val
        )
      })
    },
    // departamento
    suitableCitationItemStateOfBirth (val) {
      this.$nextTick(() => {
        this.suitableCitationItemStateOfBirth = validateExpresion(
          stringOrNumber,
          val
        )
      })
    },
    // ciudad
    suitableCitationItemCityOfBirthId (val) {
      this.$nextTick(() => {
        this.suitableCitationItemCityOfBirthId = validateExpresion(
          stringOrNumber,
          val
        )
      })
    }
  },

  async created () {
    await this.initialize()
  },

  methods: {
    showOptionModal,
    validateExpresion,
    allowedStep: m => m % 5 === 0,
    CreateSuitableCitation: CitationController.post.createSuitable,

    async initialize () {
      const paramsGet = { without: 1 }

      this.countries = await GeneralController.get.allCountries(paramsGet)
      this.documents = await GeneralController.get.allDocuments(paramsGet)
      this.campaings = await GeneralController.get.allCampaings(paramsGet)
      this.jobs = await GeneralController.get.allJobs(paramsGet)
    },

    sendForm () {
      const inputData = {
        ...this.suitableCitationItem,
        dateOfIssue: this.dateOfExpedition,
        dateOfBirth: this.dateOfBirth
      }
      this.CreateSuitableCitation(inputData)
    },

    async changeCountry (event) {
      const id = event
      this.departments = await GeneralController.get.allDepartmentByIdCountry(
        id
      )
    },

    async changeDepartments (event) {
      const id = event
      this.cities = await GeneralController.get.allCitiesByIdDepartment(id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
