<template>
  <v-chip
    class="font-weight-bold my-2 mx-3"
    :class="[`${color.textColor}--text`]"
    :color="color.background"
    :dark="color.dark"
    small
  >
    <v-icon x-small left>
      {{ text ? 'mdi-arrow-up-bold-circle' : 'mdi-arrow-down-bold-circle' }}
    </v-icon>
    <small v-text="text" />
  </v-chip>
</template>

<script>
export default {
  props: {
    status: Boolean,
    color: {
      type: Object,
      default: () => ({
        background: 'gray darken-4',
        textColor: 'black',
        dark: false
      })
    },
    text: {
      type: String,
      default: 'Sin definir'
    }
  }
}
</script>

<style lang="scss" scoped></style>
