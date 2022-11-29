<template>
  <v-row class="text-center pt-10 my-10" justify="center">
    <v-col class="d-flex justify-center" cols="12" md="12">
      <v-img src="/undraw/citation/empty-state.svg" max-width="350" />
    </v-col>
    <v-col cols="12" md="12">
      <p class="my-5">
        No se han encontrado usuarios, por favor cree un nuevo o consulte con el administrador de la plataforma
      </p>
      <v-btn
        class="text-none"
        color="primary"
        black
        dark
        rounded
        @click="crudCreateOrUpdateUser()"
      >
        <v-icon left small>
          mdi-plus
        </v-icon>
        Crear Usuario
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { crudCreateOrUpdateUser } from '~/plugins/crud'

export default {
  methods: {
    crudCreateOrUpdateUser
  }
}
</script>

<style lang="scss" scoped></style>
