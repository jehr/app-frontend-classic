<template>
  <v-dialog
    id="modal"
    transition="dialog-bottom-transition"
    overlay-opacity="0.9"
    :value="isModal"
    :color="color"
    :width="width"
    :dark="dark"
    scrollable
    persistent
  >
    <ModalForms :color="color" :custom-class="customClass" :title="title" />
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import ModalForms from '~/components/Modal/Form'

export default {
  components: {
    ModalForms
  },
  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    },
    dark: Boolean
  },

  computed: {
    ...mapState('option', ['isModal', 'isFormUser'])
  }
}
</script>

<style lang="scss"></style>
