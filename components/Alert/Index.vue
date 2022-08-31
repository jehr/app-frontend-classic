<template>
  <v-alert
    v-model="appAlertState"
    class="styled-position--alert"
    :type="appAlertType"
    border="left"
    elevation="10"
    min-width="500px"
    colored-border
    transition="scale-transition"
  >
    {{ appAlertMessage }}
    <template slot="close">
      <v-icon :color="appAlertType" @click="close">
        mdi-close-circle
      </v-icon>
    </template>
  </v-alert>
</template>

<script>
import { Alert, VModel } from './Interface'
import { propertiesGenerator } from '~/helpers'

export default {
  computed: {
    ...propertiesGenerator([...VModel], { path: 'app', mut: 'app/setProperty' })
  },

  watch: {
    appAlertState (val) {
      if (val) {
        setTimeout(() => {
          this.close()
        }, 5000)
      }
    }
  },

  methods: {
    close () {
      this.appAlert = { ...Alert }
    }
  }
}
</script>

<style lang="scss" scoped>
.styled {
  &-position {
    &--alert {
      z-index: 9999;
      position: fixed;
      bottom: 3%;
      right: 2%;
    }
  }
}
</style>
