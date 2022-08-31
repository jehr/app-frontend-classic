<template>
  <v-switch v-model="localSwitch" :label="!localSwitch ? 'No' : 'Si'" />
</template>

<script>
export default {
  props: {
    confirmation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      localSwitch: false
    }
  },
  watch: {
    localSwitch (val) {
      this.$emit('update:confirmation', val)
    }
  }
}
</script>
