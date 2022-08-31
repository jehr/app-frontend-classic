<template>
  <v-icon
    :color="isCopied ? 'success' : ''"
    :small="small"
    :x-small="xsmall"
    right
    @click="customCopy(displayValue)"
  >
    {{ isCopied ? 'mdi-check-circle' : 'mdi-content-copy' }}
  </v-icon>
</template>

<script>
import { doCopy } from '~/plugins/helpers'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    small: Boolean,
    xsmall: Boolean
  },

  data: () => ({
    isCopied: false
  }),

  computed: {
    displayValue () {
      return this.value ? this.value : 'Sin información'
    }
  },

  methods: {
    doCopy,

    customCopy (message = '') {
      this.doCopy(message.toUpperCase())
      this.isCopied = true
      setTimeout(() => (this.isCopied = false), 1000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
