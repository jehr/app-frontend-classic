<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense class="mt-4">
        <!-- Tipo de documento -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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

        <!-- Primer Nombre -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <!-- Primer Apellido -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <!-- Segundo Apellido -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <!-- Sexo -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-select
            v-model="suitableCitationItemGender"
            :rules="rules.suitableCitationItemGender"
            item-name="name"
            item-value="value"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-gender-male-female"
            label="Genero"
            :items="rowGender"
            item-color="primary"
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
        <!-- Pais de nacimiento -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <!-- Fecha de nacimiento -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
                v-model="suitableCitationItemDateOfBirth"
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
              v-model="suitableCitationItemDateOfBirth"
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
        <!-- Fecha de expedicion -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-menu
            ref="menu"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="suitableCitationItemDateOfExpedition"
                label="¿Cual es tu fecha de expedicion?"
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
              v-model="suitableCitationItemDateOfExpedition"
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
        <!-- Lugar de Expedicion -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="suitableCitationItemCityDateOfIssue"
            prepend-inner-icon="mdi-form-textbox"
            label="Lugar de Expedicion"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Grupo sanguineo -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-select
            v-model="suitableCitationItemBloodGroup"
            :rules="rules.suitableCitationItemBloodGroup"
            item-name="name"
            item-value="value"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-water"
            label="Grupo sanguineo"
            :items="rowBloodGroup"
            item-color="primary"
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

        <!-- Botones -->
        <v-col cols="12" class="mt-4">
          <v-card-actions>
            <v-spacer />
            <v-btn text small @click="showOptionModal('isFormUser')">
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
              {{ suitableCitationItemId ? 'Enviar datos' : 'Guardar' }}
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
    rowGender: [
      { name: 'MASCULINO', value: 'M' },
      { name: 'FEMENINO', value: 'F' }
    ],
    rowBloodGroup: [
      { name: 'O+', value: 'O+' },
      { name: 'O-', value: 'O-' },
      { name: 'A+', value: 'A+' },
      { name: 'A-', value: 'A-' },
      { name: 'B+', value: 'B+' },
      { name: 'B-', value: 'B-' },
      { name: 'AB+', value: 'AB+' },
      { name: 'AB-', value: 'AB-' }
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
    menu1: false,
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
  async mounted () {
    if (this.editedSuitableCitation.countryOfBirthId !== undefined) {
      await this.changeCountry(this.editedSuitableCitation.countryOfBirthId)
      await this.changeDepartments(this.editedSuitableCitation.stateOfBirthId)
    }
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
        dateOfIssue: this.suitableCitationItemDateOfExpedition,
        dateOfBirth: this.suitableCitationItemDateOfBirth
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
