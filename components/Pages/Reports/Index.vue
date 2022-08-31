<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="10" class="pb-10">
          <div class="text-center py-10">
            <h5 class="secondary--text text-uppercase">
              Descargar reporte citaciones aptas
            </h5>
          </div>
          <div>
            <v-row>
              <v-col cols="10" md="8" offset="1">
                <v-select
                  v-model="typeDowload"
                  :menu-props="{ top: false, offsetY: true }"
                  prepend-inner-icon="mdi-filter-outline"
                  label="Tipo de descarga"
                  :items="[
                    { name: 'APTOS', value: '1' },
                    { name: 'CITADOS', value: '8' },
                    { name: 'NO APTOS', value: '2' },
                    { name: 'NO ASISTE', value: '4' },
                    { name: 'PERSONAS ESCANEADAS', value: '5' },
                    { name: 'POR GESTIONAR', value: '3' },
                    { name: 'TODOS', value: '7' }
                  ]"
                  item-color="primary"
                  item-value="value"
                  color="primary"
                  outlined
                  rounded
                  dense
                  hide-details
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
              <v-col cols="10" :md="doubleDate ? 4 : 8" offset="1">
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
                      v-model="dateReportApto"
                      :label="
                        doubleDate === true
                          ? 'Fecha de reporte inicio'
                          : 'Fecha de reporte'
                      "
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
                    v-model="dateReportApto"
                    color="pink"
                    :active-picker.sync="activePicker"
                    :max="
                      new Date(
                        Date.now() - new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .substr(0, 10)
                    "
                    min="1950-01-01"
                    locale="es-CO"
                  />
                </v-menu>
              </v-col>
              <v-col
                v-if="typeDowload === '5' || typeDowload === '7'"
                cols="10"
                md="4"
              >
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
                      v-model="dateReportEnd"
                      label="Fecha de reporte fin"
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
                    v-model="dateReportEnd"
                    color="pink"
                    :active-picker.sync="activePicker"
                    :max="
                      new Date(
                        Date.now() - new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .substr(0, 10)
                    "
                    min="1950-01-01"
                    locale="es-CO"
                  />
                </v-menu>
              </v-col>
              <v-col
                v-if="typeDowload && dateReportApto"
                cols="8"
                md="4"
                offset="1"
              >
                <v-btn
                  color="secondary"
                  class="mt-1"
                  dark
                  rounded
                  small
                  @click="getReport"
                >
                  Generar
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-col cols="10" md="6">
        <div class="text-center pt-10">
          <v-list-item-avatar size="350">
            <img src="/Img/logo3.svg">
          </v-list-item-avatar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ReportController } from '~/controllers/report.controller'
import { URL_PATH } from '~/config/api.config'

export default {
  data: () => ({
    dateReportApto: '',
    dateReportEnd: '',
    dateReportNoApto: '',
    typeDowload: '',
    menu: false,
    menu2: false,
    doubleDate: false,
    activePicker: null
  }),
  watch: {
    typeDowload () {
      if (this.typeDowload === '5' || this.typeDowload === '7') {
        this.doubleDate = true
      } else {
        this.doubleDate = false
      }
    }
  },

  methods: {
    async getReport (loading) {
      const date = this.dateReportApto
      const dateEnd = this.dateReportEnd
      let data = null

      if (this.typeDowload === '1') {
        data = await ReportController.get.byApto(loading, date)
      } else if (this.typeDowload === '2') {
        data = await ReportController.get.byNoApto(loading, date)
      } else if (this.typeDowload === '3') {
        data = await ReportController.get.byGestions(loading, date)
      } else if (this.typeDowload === '4') {
        data = await ReportController.get.byNoAssistence(loading, date)
      } else if (this.typeDowload === '5') {
        data = await ReportController.get.byDataDocumentScanned(
          loading,
          date,
          dateEnd
        )
      } else if (this.typeDowload === '6') {
        data = await ReportController.get.byGeneral(loading, date)
      } else if (this.typeDowload === '7') {
        data = await ReportController.get.all(loading, date, dateEnd)
      } else if (this.typeDowload === '8') {
        data = await ReportController.get.byCitations(loading, date)
      }

      if (data && data.url) {
        window.open(`${URL_PATH}/${data.url}`, '_blank')
        this.dateReportApto = ''
        this.typeDowload = ''
      }
    }
  }
}
</script>
