<template>
  <div>
    <v-speed-dial
      v-model="option"
      class="gp-btn-float"
      transition="slide-y-reverse-transition"
      direction="top"
      bottom
      right
    >
      <template #activator>
        <v-btn v-model="option" color="primary" dark fab>
          <v-icon v-if="option">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </template>
      <!-- Refrescar -->
      <v-btn color="blue" fab dark small @click="refreshCitation()">
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
      <!-- Nuevo -->
      <v-btn
        color="success"
        fab
        dark
        small
        @click="crudCreateOrUpdateCitation()"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import { crudCreateOrUpdateCitation } from '~/plugins/crud'
import { citation } from '~/interfaces/components/pages/citation.interface'

export default {
  data: () => ({
    citation,
    option: false
  }),

  methods: {
    crudCreateOrUpdateCitation,
    refreshCitation () {
      this.$emit('refreshCitations')
    }
  }
}
</script>

<style lang="scss" scoped>
.gp-btn {
  &-float {
    z-index: 200;
    position: fixed;
    bottom: 7%;
    right: 2%;
  }
}
</style>
