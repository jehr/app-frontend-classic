<template>
  <v-row class="text-center pt-10 my-10" justify="center">
    <v-col class="d-flex justify-center" cols="12" md="12">
      <v-img src="/undraw/citation/empty-state.svg" max-width="350" />
    </v-col>
    <v-col cols="12" md="12">
      <p class="my-5">
        No se han encontrado citaciones previas, por favor consulte o adicione
        citaciones nuevas
      </p>
      <v-btn
        class="text-none"
        color="secondary"
        black
        dark
        rounded
        @click="crudCreateOrUpdateCitation()"
      >
        <v-icon left small>
          mdi-plus
        </v-icon>
        Crear citación
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { crudCreateOrUpdateCitation } from '~/plugins/crud'

export default {
  methods: {
    crudCreateOrUpdateCitation
  }
}
</script>

<style lang="scss" scoped></style>
