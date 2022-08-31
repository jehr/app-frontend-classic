<template>
  <v-container>
    <v-row class="mt-10" align="end">
      <v-col cols="3" offset-md="3" class="d-flex flex-row">
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
              v-model="dateBase"
              label="Ingrese una fecha para generar la base"
              prepend-inner-icon="mdi-calendar"
              :rules="[v => !!v || 'Campo Requerido']"
              dense
              readonly
              v-bind="attrs"
              color="primary"
              outlined
              rounded
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="dateBase"
            color="primary"
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
      <v-col cols="3" md="3">
        <v-btn
          color="primary"
          class="mb-8"
          dark
          rounded
          small
          @click="generateBase"
        >
          Generar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { BaseController } from '~/controllers/base.controller'
import { URL_PATH } from '~/config/api.config'

export default {
  layout: 'layoutAdmin',
  middleware: ['set-endpoint', 'not-auth-admin'],

  data: () => ({
    menu: false,
    activePicker: null,
    dateBase: ''
  }),

  methods: {
    async generateBase (loading) {
      const date = this.dateBase
      const data = await BaseController.get.getByDay(loading, date)

      if (data && data.url) {
        window.open(`${URL_PATH}/${data.url}`, '_blank')
        this.dateBase = ''
      }
    }
  }
}
</script>
