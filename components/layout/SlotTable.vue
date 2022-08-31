<!-- LectorCC -->
<template #[`item.lectorCC`]="{ item }">
  <v-icon color="blue" @click="$emit('openLectorModal', item)">
    mdi-barcode-scan
  </v-icon>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    openLectorModal (item) {
      this.$emit('openLectorModal', item)
    }
  }
}
</script>
