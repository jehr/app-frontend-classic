<template>
  <v-container>
    <v-form ref="formInboundLogin" v-model="valid" @submit.prevent="sendForm">
      <v-row align="start">
        <v-col cols="12" md="3" offset-md="1">
          <div class="align-self-center">
            <!-- <div
              class="d-flex justify-center"
            >
              <img :src="imageMobile" class="mt-3" alt="Logo" width="140">
            </div> -->
            <!-- Bottoms login -->
            <v-row dense :style="'margin-top:' + height">
              <v-col cols="5" offset-md="4">
                <h2 style="color: white; text-align: center;" class="align-self-center">CLASSIC GYM</h2>
              </v-col>
              <v-col cols="12" md="12" xs="12" lg="12" sm="12" class="pt-10">
                <v-text-field
                  v-model="credentials.login"
                  :rules="rules.login"
                  prepend-inner-icon="mdi-shield-account-outline"
                  label="Login"
                  color="three"
                  outlined
                  rounded
                />
              </v-col>
              <v-col cols="12" md="12" xs="12" lg="12" sm="12">
                <v-text-field
                  v-model="credentials.password"
                  :rules="rules.password"
                  prepend-inner-icon="mdi-form-textbox-password"
                  autocomplete="off"
                  label="Contraseña"
                  type="password"
                  outlined
                  rounded
                />
              </v-col>
              <v-col cols="12" md="12">
                <v-btn
                  :disabled="!valid || isPosting"
                  :loading="isPosting"
                  :dark="valid"
                  color="#000"
                  type="submit"
                  rounded
                  block
                  large
                >
                  Iniciar Sesión
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import imageMobile from '~/static/Img/logo.png'
import { AuthController } from '~/controllers/auth.controller'

export default {
  name: 'Login',
  layout: 'layoutLogin',
  data: () => ({
    valid: true,
    imageMobile,
    rules: {
      login: [v => !!v || 'Login es requerido'],
      password: [v => !!v || 'Contraseña es requerida']
    },
    credentials: {
      login: '',
      password: ''
    },
    items: []
  }),

  head () {
    return {
      title: 'Login'
    }
  },

  computed: {
    ...mapState('app', ['isPosting']),
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '50px'
        case 'sm':
          return '400px'
        case 'md':
          return '130px'
        case 'lg':
          return '130px'
        case 'xl':
          return '420px'
        default:
          return '420px'
      }
    }
  },

  methods: {
    sendForm () {
      if (this.$refs.formInboundLogin.validate()) {
        AuthController.login.admin(this.credentials)
      }
    }
  }
}
</script>
<style>
.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: #fff;
}
</style>
