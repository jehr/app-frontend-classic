<template>
  <v-dialog
    v-model="appToastActive"
    class="rounded-xl"
    min-width="300"
    max-width="300"
    min-height="300"
    max-height="300"
  >
    <v-card
      class="d-flex flex-column rounded-lg justify-center align-center pa-5"
      color="white"
      elevation="10"
    >
      <v-icon class="my-4" :color="appToastColor" x-large>
        {{ appToastIcon }}
      </v-icon>
      <div class="font-weight-bold text-center my-2">
        {{ appToastMessage }}
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { VModelToast, toast } from '~/interfaces/toast.interface.js'
import { modelGenerator } from '~/helpers/store.helper.js'

export default {
  computed: {
    ...modelGenerator([...VModelToast], { path: 'app', mut: 'app/setProperty' })
  },

  watch: {
    appToastActive (val) {
      if (val) {
        setTimeout(() => toast.close(), 10000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.k-tost {
  &-position {
    z-index: 9998;
    position: fixed;
    top: 20px;
    left: 20px;
  }
}
</style>
