<template>
  <v-app class="app-light" dark>
    <Loader />
    <Modal modal-color="red" :title="titleModal" width="800" />
    <v-main class="background" :class="sizeScreen">
      <v-container fluid>
        <Nuxt />
        <v-spacer />
      </v-container>
    </v-main>
    <Toast />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('option', ['titleModal']),
    sizeScreen () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'body-mobile'
        case 'sm':
          return 'body-small'
        case 'md':
          return 'body-small'
        case 'lg':
          return 'body-large'
        case 'xl':
          return 'body-large'
        default:
          return 'body-large'
      }
    }
  }
}
</script>

<style>
.body-large {
  background: url('./static/Img/backgroundGthUp.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.body-mobile {
  background: url('./static/Img/backgroundMobile.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.body-small {
  background: url('./static/Img/backgroundGthSM.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
