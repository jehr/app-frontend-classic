<template>
  <v-container fluid>
    <v-row class="mb-5" align="end">
      <v-col offset-md="3" cols="6" class="d-flex flex-row">
        <!-- BUSCADOR - CAMPO -->
        <v-col cols="12" md="9">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar por documento"
            color="five"
            hide-details
            outlined
            rounded
            dense
          />
        </v-col>
        <v-col cols="6" md="3">
          <!-- BOTON DE BUSCAR -->
          <v-btn
            color="primary"
            class="mt-1"
            dark
            rounded
            small
            @click="getAspirants"
          >
            Buscar
          </v-btn>
          <!-- BOTON DE LIMPIAR -->
          <v-btn
            color="grey"
            class="mt-1"
            dark
            rounded
            small
            @click="clearSearch"
          >
            Limpiar
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
    <!--- Table -->
    <v-row v-if="aspirants.length > 0">
      <v-col cols="12" md="12">
        <v-card class="rounded-xl pa-5" elevation="10" outlined>
          <Table :items="aspirants" :headers="headers" primary-color="white">
            <!-- Status -->
            <template #typification="{ category }">
              <ChipState
                :text="getTipification(category)"
                :color="getColorTipification(category)"
              />
            </template>
            <!-- Status -->
            <template #status="{ category }">
              <ChipState
                :text="getState(category)"
                :color="getColor(category)"
              />
            </template>
            <!-- Actions -->
            <template #actions="slotProps">
              <Actions
                :citation="slotProps.category"
                :document="slotProps.category.document"
              />
            </template>
          </Table>
        </v-card>
      </v-col>
      <Options />
    </v-row>
    <EmptyState v-else />
  </v-container>
</template>

<script>
import Actions from '~/components/Pages/Citations/Actions.vue'
import { AspirantController } from '~/controllers/aspirant.controller'
import EmptyState from '~/components/Pages/Selections/EmptyState'
import Options from '~/components/Pages/Selections/Options.vue'

export default {
  components: {
    EmptyState,
    Actions,
    Options
  },
  layout: 'layoutAdmin',
  middleware: ['set-endpoint', 'not-auth-admin'],

  data: () => ({
    aspirants: [],
    typeSearch: '',
    search: '',
    headers: [
      { text: 'Documento', align: 'start', value: 'document' },
      { text: 'Nombre', align: 'start', value: 'fullName' },
      { text: 'Telefono', align: 'start', value: 'phone_1' },
      { text: 'Fecha', align: 'start', value: 'rdate' },
      { text: 'Hora', align: 'start', value: 'hourOfCitation' },
      { text: 'Campaña', align: 'start', value: 'campaignName' },
      { text: 'Cargo', align: 'start', value: 'interestedType' },
      { text: 'Tipificación', align: 'center', value: 'typification' },
      { text: 'Estado', align: 'center', value: 'status' },
      { text: 'Acciones', value: 'actions', sortable: false }
    ]
  }),

  head () {
    return { title: 'Aspirantes' }
  },

  methods: {
    async getAspirants (loading) {
      const valueFilter = this.search

      this.aspirants = await AspirantController.get.byDocument(
        loading,
        valueFilter
      )
    },

    clearSearch () {
      this.search = ''
    }
  }
}
</script>
