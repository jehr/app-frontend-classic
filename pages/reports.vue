<template>
  <v-container>
    <Reports  />
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import Reports from '~/components/Pages/Reports/Index.vue'

export default {
  components: {
    Reports
  },
  layout: 'layoutAdmin',
  middleware: ['set-endpoint', 'not-auth-admin'],

  head () {
    return { title: 'Reportes' }
  },

  computed: {
    ...mapState('app', ['user'])
  }
}
</script>
