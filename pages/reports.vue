<template>
  <v-container>
    <Reports v-if="user.userRol.length > 0" />
    <div v-else class="text-center" style="margin-top: 150px">
      <h3 class="text-center">
        Usted no cuenta con los permisos necesarios para realizar esta acción
      </h3>
      <div class="text-center pt-10">
        <v-list-item-avatar size="350">
          <img src="/undraw/404.svg">
        </v-list-item-avatar>
      </div>
    </div>
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
