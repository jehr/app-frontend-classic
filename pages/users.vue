<template>
    <v-container>
      <v-row>
        <v-col cols="2" style="border-color: 1px solid red;">
            <v-row>
                <!-- cards -->
                <v-col
                    cols="12"
                    class="d-flex flex-column"
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
                            class="pt-5"
                            :value="inactiveUsers"
                            icon="mdi-arrow-down-bold"
                            secondary-color="secondary"
                            primary-color="primary"
                            title="Pendientes"
                            width="115"
                            dark
                        />
                        <Overview
                            class="pt-5"
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
        </v-col>
        <v-col cols="10">
            <v-row>
                <!-- Filter -->
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-select
                    v-model="typeSearch"
                    :menu-props="{ top: false, offsetY: true }"
                    prepend-inner-icon="mdi-filter-outline"
                    label="Tipo de filtro"
                    :items="[
                      { name: 'Nombre', value: 'name' },
                      { name: 'Documento', value: 'document' }
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
                 md="7"
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
                  md="1"
                >
                  <v-btn
                    v-if="search && typeSearch"
                    color="primary"
                    class="mt-1"
                    dark
                    rounded
                    small
                    @click="getCitations"
                  >
                    Buscar
                  </v-btn>
                  <v-btn
                    v-if="search && typeSearch && users.length > 0"
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

            </v-row>

      <!--- Table -->
      <v-row v-if="users.length > 0">
        <v-col cols="12" md="12">
          <v-card class="rounded-xl pa-5" elevation="10" outlined>
            <Table :items="users" :headers="headers" primary-color="white">
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
        </v-col>
       
      </v-row>
     
    </v-container>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  import { loader } from '~/interfaces/loader.interface'
  import Table from '@/components/layout/Table'
  import { propertiesGenerator } from '~/plugins/helpers'
  import Actions from '~/components/Pages/Users/Actions.vue'
  import { AspirantController } from '~/controllers/aspirant.controller'
  import { CitationController } from '~/controllers/citation.controller'
  import { UserController } from '~/controllers/user.controller'
  import {
    crudCreateOrUpdateCitation,
    crudShowCitation,
    uploadIdentificationDocument
  } from '~/plugins/crud'
  import { VModelCitation } from '~/interfaces/components/pages/citation.interface'
  import EmptyState from '~/components/Pages/Users/EmptyState'
  import Options from '~/components/Pages/Users/Options.vue'
  import Overview from '~/components/Pages/Users/Overview.vue'
  
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
      const users = await UserController.get.all()
      return { users: users.data || [] }
    },
  
    data: () => ({
      users: [],
      typeSearch: '',
      search: '',
      headers: [
        { text: 'Documento', align: 'start', value: 'document' },
        { text: 'Nombre', align: 'start', value: 'names' },
        { text: 'Telefono', align: 'start', value: 'phone1' },
        { text: 'Correo', align: 'start', value: 'email' },
        { text: 'Estado', align: 'center', value: 'status' },
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
        console.log(this.users)
        // return [...this.users].filter(user => user.statusOfManagement).length
      },
      // inactiveUsers () {
      //   return [...this.users].filter(user => !user.statusOfManagement).length
      // },
      // totalUsers () {
      //   return this.activeUsers + this.inactiveUsers
      // }
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
          this.users = await UserController.get.byPhone(
            loading,
            valueFilter
          )
        } else if (this.typeSearch === 'document') {
          this.users = await UserController.get.byDocument(
            loading,
            valueFilter
          )
        } else if (this.typeSearch === 'name') {
          this.users = await UserController.get.byName(
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
        this.users = await UserController.get.all()
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
        const users = await UserController.get.all()
        this.users = users
      }
    }
  }
  </script>
  