<template>
    <v-container fluid>
      <!-- Cards and search -->
      <v-row>
        <!-- Filter -->
        <v-col
          order-lg="1"
          order-md="1"
          order-sm="1"
          order="2"
          cols="12"
          xl="3"
          lg="3"
          md="3"
          sm="6"
          xs="6"
        >
          <v-select
            v-model="typeSearch"
            :menu-props="{ top: false, offsetY: true }"
            prepend-inner-icon="mdi-filter-outline"
            label="Tipo de filtro"
            :items="[
              { name: 'Nombre', value: 'name' },
              { name: 'Documento', value: 'document' },
              { name: 'Teléfono', value: 'phone' }
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
        <!-- Search -->
        <v-col
          order-lg="2"
          order-md="2"
          order-sm="2"
          order="3"
          cols="12"
          xl="3"
          lg="3"
          md="3"
          sm="6"
          xs="6"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar por filtro seleccionado"
            color="five"
            hide-details
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Buttons -->
        <v-col
          order-lg="3"
          order-md="3"
          order-sm="3"
          order="4"
          cols="12"
          xl="2"
          lg="2"
          md="2"
          sm="4"
          xs="12"
        >
          <v-btn
            v-if="search && typeSearch"
            color="secondary"
            class="mt-1"
            dark
            rounded
            small
            @click="getCitations"
          >
            Buscar
          </v-btn>
          <v-btn
            v-if="search && typeSearch && citations.length > 0"
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
        <!-- cards -->
        <v-col
          order-lg="4"
          order-md="4"
          order-sm="4"
          order="1"
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="8"
          xs="12"
          class="d-flex flex-row justify-center"
        >
          <Overview
            :value="activeUsers"
            secondary-color="secondary"
            icon="mdi-arrow-up-bold"
            primary-color="primary"
            title="Gestionados"
            width="115"
            dark
          />
  
          <Overview
            class="mx-2"
            :value="inactiveUsers"
            icon="mdi-arrow-down-bold"
            secondary-color="secondary"
            primary-color="primary"
            title="Pendientes"
            width="115"
            dark
          />
  
          <Overview
            :value="totalUsers"
            icon="mdi-swap-vertical-bold"
            secondary-color="secondary"
            primary-color="primary"
            width="115"
            title="Total"
            dark
          />
        </v-col>
      </v-row>
      <!--- Table -->
      <v-row v-if="citations.length > 0">
        <v-col cols="12" md="12">
          <v-card class="rounded-xl pa-5" elevation="10" outlined>
            <Table :items="citations" :headers="headers" primary-color="white">
              <!-- Lector CC-->
              <template #lectorCC="{category}">
                <span hidden>{{ validLectorDocument(category.document) }} </span>
                <v-icon color="blue" @click="openModalLector(category)">
                  mdi-barcode-scan
                </v-icon>
              </template>
  
              <template #interestedType="{category}">
                <ChipState
                  :text="getTipification(category)"
                  :color="getColorTipification(category)"
                />
              </template>
  
              <!-- typification -->
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
        <Options @refreshCitations="reciveRefresh" />
      </v-row>
      <EmptyState v-else />
    </v-container>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  import { loader } from '~/interfaces/loader.interface'
  import Table from '@/components/layout/Table'
  import { propertiesGenerator } from '~/plugins/helpers'
  import Actions from '~/components/Pages/Citations/Actions.vue'
  import { AspirantController } from '~/controllers/aspirant.controller'
  import { CitationController } from '~/controllers/citation.controller'
  import {
    crudCreateOrUpdateCitation,
    crudShowCitation,
    uploadIdentificationDocument
  } from '~/plugins/crud'
  import { VModelCitation } from '~/interfaces/components/pages/citation.interface'
  import EmptyState from '~/components/Pages/Citations/EmptyState'
  import Options from '~/components/Pages/Citations/Options.vue'
  import Overview from '~/components/Pages/Citations/Overview.vue'
  
  export default {
    components: {
      EmptyState,
      Actions,
      Options,
      Overview,
      Table
    },
    layout: 'layoutAdmin',
    middleware: ['set-endpoint', 'not-auth-admin'],
  
    async asyncData () {
      const citations = await CitationController.get.all()
      return { citations: citations || [] }
    },
  
    data: () => ({
      citations: [],
      typeSearch: '',
      search: '',
      headers: [
        { text: 'Documento', align: 'start', value: 'document' },
        { text: 'Nombre', align: 'start', value: 'fullName' },
        { text: 'Telefono', align: 'start', value: 'phone_1' },
        { text: 'Fecha', align: 'start', value: 'rdate' },
        { text: 'Hora', align: 'start', value: 'hourOfCitation' },
        { text: 'Campaña Presence', align: 'start', value: 'campaignName' },
        { text: 'Campaña', align: 'start', value: 'cited_Uno27' },
        { text: 'Cargo', align: 'start', value: 'interestedType' },
        { text: 'Tipificación', align: 'center', value: 'typification' },
        { text: 'Estado', align: 'center', value: 'status' },
        { text: 'Lector CC', align: 'center', value: 'lectorCC' },
        { text: 'Acciones', value: 'actions', sortable: false }
      ]
    }),
  
    head () {
      return { title: 'Citaciones' }
    },
  
    computed: {
      ...mapState('app', ['isPosting']),
      ...mapState('citation', ['editedCitation']),
      ...propertiesGenerator([...VModelCitation], {
        path: 'citation',
        mut: 'citation/setProperty'
      }),
      activeUsers () {
        return [...this.citations].filter(user => user.statusOfManagement).length
      },
      inactiveUsers () {
        return [...this.citations].filter(user => !user.statusOfManagement).length
      },
      totalUsers () {
        return this.activeUsers + this.inactiveUsers
      }
    },
  
    watch: {
      search (val) {
        this.search = val.trim().toUpperCase()
      }
    },
  
    async mounted () {
      await this.initialize()
    },
    async beforeDestroy () {
      await this.$nuxt.$off('refresh-citation')
    },
    created () {
      loader.show('Estamos subiendo el documento, espere por favor...')
      this.$nuxt.$on('refresh-citation', () => {
        this.reciveRefresh()
      })
    },
  
    methods: {
      crudShowCitation,
      queryByDocument: AspirantController.get.dataDocument,
      crudCreateOrUpdateCitation,
      uploadIdentificationDocument,
      async getCitations (loading) {
        const valueFilter = this.search
  
        if (this.typeSearch === 'phone') {
          this.citations = await CitationController.get.byPhone(
            loading,
            valueFilter
          )
        } else if (this.typeSearch === 'document') {
          this.citations = await CitationController.get.byDocument(
            loading,
            valueFilter
          )
        } else if (this.typeSearch === 'name') {
          this.citations = await CitationController.get.byName(
            loading,
            valueFilter
          )
        } else {
          loader.show('Estamos consultando la información, espere por favor...')
        }
      },
  
      async clearSearch () {
        this.typeSearch = ''
        this.search = ''
        this.citations = await CitationController.get.all()
      },
  
      async onEvents () {
        await this.$nuxt.$on('refresh-category', (payload) => {
          this.getCitations(payload.loading)
        })
      },
  
      async initialize () {
        await this.onEvents()
        await this.getCitations()
      },
  
      getState (status) {
        if (status.isDuplicated) {
          return 'Duplicado'
        } else if (status.statusOfManagement) {
          return 'Gestionado'
        }
        return 'Pendiente'
      },
  
      getColor (status) {
        if (status.isDuplicated) {
          return {
            background: 'red darken-1',
            textColor: 'white',
            dark: true
          }
        } else if (status.statusOfManagement) {
          return { background: 'green darken-1', textColor: 'white', dark: true }
        }
        return { background: 'orange darken-1', textColor: 'white', dark: true }
      },
  
      getTipification (tipyfication) {
        if (tipyfication.typification) {
          return tipyfication.typification.description
        }
        return 'Sin Tipificación'
      },
  
      getColorTipification (tipyfication) {
        if (tipyfication.typification) {
          return {
            background: 'light-blue lighten-1',
            textColor: 'white',
            dark: true
          }
        }
        return { background: 'grey lighten-1', textColor: 'white', dark: true }
      },
      openModalLector (category) {
        this.uploadIdentificationDocument()
      },
      async validLectorDocument (document) {
        const result = await this.queryByDocument(document)
        if (result) {
          return 'green darken-1'
        } else {
          return 'blue darken-1'
        }
      },
      async reciveRefresh () {
        const citations = await CitationController.get.all()
        this.citations = citations
      }
    }
  }
  </script>
  