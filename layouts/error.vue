<template>
  <v-app dark>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" justify="center" align="center">
          <v-row justify="center" align="center">
            <v-col cols="5" justify="center" align="end">
              <h1 class="primary--text error-404">
                {{ error.statusCode }}
              </h1>
            </v-col>
            <v-divider vertical />
            <v-col cols="5" justify="center" align="start">
              <h3 class="primary--text error-message">
                LO SENTIMOS!
              </h3>
              <h3 class="primary--text error-sub-message">
                {{ displayMessage }}
              </h3>
            </v-col>
            <v-col cols="10" justify="start" align="center">
              <v-btn
                class="mt-10 font-weight-bold"
                color="primary"
                outlined
                dark
                to="/"
              >
                Regresar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data: () => ({
    pageNotFound: 'No se encontró la página que estás buscando.',
    otherError:
      'No tienes los permisos necesarios para acceder a esta ruta, comunicate con el administrador.'
  }),

  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },

  computed: {
    displayMessage () {
      if (this.error.statusCode === 404) { return 'No se encontró la página que estás buscando.' }
      return this.error.message
    }
  }
}
</script>

<style scope>
.error-404 {
  font-size: 120px;
}
.error-message {
  font-size: 60px;
}
.error-sub-message {
  font-size: 30px;
  word-break: break-word !important;
}
</style>
