<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense class="mt-4">
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
        <!-- Primer Apellidos -->
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
        <!-- Segundo Apellidos -->
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

        <!-- Fecha de expedicón -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
                v-model="suitableCitationItemDateOfExpeditionText"
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
              v-model="suitableCitationItemDateOfExpeditionText"
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
                v-model="suitableCitationItemDateOfBirthText"
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
              v-model="suitableCitationItemDateOfBirthText"
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
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="suitableCitationItemDepartmentOfExpedition"
            :rules="rules.suitableCitationItemDepartmentOfExpedition"
            prepend-inner-icon="mdi-form-textbox"
            label="Lugar de expedición"
            color="five"
            outlined
            rounded
            dense
          />
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
        <!-- Teléfono -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="suitableCitationItemPhone_1"
            :rules="rules.suitableCitationItemPhone_1"
            prepend-inner-icon="mdi-phone"
            label="Teléfono"
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
        <!-- Nombre Campaña -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <!-- Codigo Selección -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
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
        id: 1,
        name: 'NO TIENE EXPERIENCIA',
        value: 'NO TIENE EXPERIENCIA'
      },
      { id: 2, name: 'DE 3 A 6 MESES', value: 'DE 3 A 6 MESES' },
      { id: 3, name: 'DE 6 a 1 AÑO', value: 'DE 6 a 1 AÑO' },
      { id: 4, name: 'MAYOR A 1 AÑO', value: 'MAYOR A 1 AÑO' }
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
    menu2: false,
    menu3: false,
    dateOfBirth: '',
    dateOfIssueText: '',
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
    // suitableCitationItemEmail (val) {
    //   this.$nextTick(() => {
    //     this.suitableCitationItemEmail = validateExpresion(onlyEmail, val)
    //   })
    // },
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
    // experiencia
    // suitableCitationItemExperience (val) {
    //   this.$nextTick(() => {
    //     this.suitableCitationItemExperience = validateExpresion(onlyNumber, val)
    //   })
    // }
  },
  async mounted () {
    const data = JSON.parse(JSON.stringify(this.editedSuitableCitation))
    if (data.countryOfBirthId !== '') {
      await this.changeCountry(data.countryOfBirthId)
      await this.changeDepartments(data.stateOfBirthId)
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
    UpdateSuitableCitation: CitationController.put.updateSuitable,

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
        dateOfIssue: this.suitableCitationItemDateOfExpeditionText,
        dateOfBirth: this.suitableCitationItemDateOfBirthText
      }
      if (this.suitableCitationItem.id != null) {
        console.log(this.suitableCitationItem.id)
        this.UpdateSuitableCitation(this.suitableCitationItem.id, inputData)
      } else {
        this.CreateSuitableCitation(inputData)
      }
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
