<template>
  <v-text-field
    v-model="localField"
    class="mt-5"
    :label="title"
    :prepend-inner-icon="icon"
    color="five"
    outlined
    dense
  />
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      localField: '',
      fieldClear: ''
    }
  },
  watch: {
    localField (val) {
      this.$emit('update:field', val)
    }
  },
  methods: {
    save () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },

    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    }
  }
}
</script>

<style></style>
