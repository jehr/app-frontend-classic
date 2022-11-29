<template>
  <v-app class="app-light" dark>
    <v-app-bar clipped-left class="primary" app fixed>
      <v-toolbar-title class="white--text" @click="home">
        <img src="~/static/Img/logoGthMainWhite.png" alt="logo" width="90">
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="hiddenSidebar"
        style="float: right;"
        color="primary"
        @click="logout"
      >
        Salir
        <v-icon color="white">
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-if="!hiddenSidebar"
      clipped
      app
      permanent
      expand-on-hover
      class="primary"
    >
      <v-list>
        <div v-for="(route, index) in drawers" :key="index">
          <v-list-item-group color="primary" :no-action="true">
            <v-list-item :to="route.to">
              <v-list-item-icon>
                <v-icon color="white" v-text="route.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="white--text" v-text="route.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>
      </v-list>

      <template #append>
        <!-- Footer Drawer -->
        <v-list-item>
          <v-list-item-content style="text-align: center">
            <v-list-item-title class="white--text">
              version: {{ version }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="font-weight-bold mx-2 white" />
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon color="white" v-text="'mdi-exit-to-app'" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="'CERRAR SESIÓN'" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <Modal modal-color="red" :title="titleModal" width="800" />
    <v-main class="background">
      <v-container fluid>
        <Nuxt />
        <v-spacer />
      </v-container>
    </v-main>
    <Loader />
    <Toast />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import pjson from '~/package.json'
import logo from '~/static/Img/logoGthMainWhite.png'
import { validateAccess, logout } from '~/plugins/helpers'
export default {
  name: 'App',
  logo,
  data () {
    return {
      drawer: true,
      version: pjson.version || '1.0.0'
    }
  },

  computed: {
    ...mapState('admin', ['drawers']),
    ...mapState('option', ['titleModal']),
    hiddenSidebar () {
      if (this.$vuetify.breakpoint.width < 600) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    validateAccess,
    logout,
    home () {
      this.$router.push('/users')
    }
  }
}
</script>
