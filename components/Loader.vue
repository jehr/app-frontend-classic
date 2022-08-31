<template>
  <v-overlay opacity="2" color="white" :value="appLoaderActive" z-index="9999">
    <div class="d-flex flex-column justify-center align-center">
      <self-building-square-spinner
        :animation-duration="6000"
        :size="70"
        color="#001E6C"
      />
      <div class="font-weight-bold five--text my-10">
        {{ appLoaderMessage }}
      </div>
    </div>
  </v-overlay>
</template>

<script>
import { SelfBuildingSquareSpinner } from 'epic-spinners'
import { VModelLoader } from '~/interfaces/loader.interface.js'
import { modelGenerator } from '~/helpers/store.helper.js'

export default {
  components: {
    SelfBuildingSquareSpinner
  },

  computed: {
    ...modelGenerator([...VModelLoader], {
      path: 'app',
      mut: 'app/setProperty'
    })
  }
}
</script>

<style lang="scss" scoped></style>
