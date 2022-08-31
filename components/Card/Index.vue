<template>
  <v-card
    class="rounded-xl"
    :class="[customClass ? customClass : '']"
    :elevation="elevation"
    :min-height="minHeight"
    :width="width"
    :height="height"
    :color="color"
    :dark="dark"
    :flat="flat"
  >
    <div v-if="showHeader">
      <slot name="header" />
    </div>
    <v-card-text v-if="showContent">
      <slot name="content" />
    </v-card-text>
    <v-card-actions v-if="showActions">
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    showHeader: Boolean,
    showContent: Boolean,
    showActions: Boolean,
    customClass: {
      type: String,
      default: ''
    },
    minHeight: {
      type: Number || String,
      default: 0
    },
    elevation: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    dark: Boolean,
    flat: Boolean
  }
}
</script>

<style lang="scss" scoped></style>
