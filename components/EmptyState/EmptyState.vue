<template>
  <div
    style="width: 100%; height: 80vh"
    class="d-flex align-center justify-center"
  >
    <v-row class="text-center" justify="center">
      <v-col class="d-flex justify-center" cols="12" md="3">
        <v-img src="/img/empty.svg" max-width="270" />
      </v-col>
      <v-col cols="12">
        <p class="my-5">
          No se ha encontrado información.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    empty: false
  }),
  methods: {
    start () {
      this.empty = true
    }
  }
}
</script>
