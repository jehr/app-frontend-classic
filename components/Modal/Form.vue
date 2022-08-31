<template>
  <Card v-if="isModal" show-content show-header :color="color" :width="width">
    <template slot="header">
      <CardHeader
        :title="title"
        :custom-class="`primary white--text px-4 py-3 text-center`"
        style="font-size: 22px; font-weight: bold"
      />
    </template>
    <template slot="content">
      <FormCitation v-if="isFormCitation" />
      <ShowCitation v-if="isShowCitation" secondary-color="three" />
      <ShowCitationAssistance
        v-if="isShowCitationAssistance"
        secondary-color="three"
      />
      <FormSuitableCitation v-if="isFormSuitableCitation" />
      <FormSuitable v-if="isFormSuitable" />
      <FormSelection v-if="isFormSelection" />
      <AptoCreate v-if="isAptoCreate" />
      <UploadDocument v-if="isFormUploadDocument" />
    </template>
  </Card>
</template>

<script>
import { mapState } from 'vuex'
import FormCitation from '~/components/Pages/Citations/Create.vue'
import ShowCitation from '~/components/Pages/Citations/Show.vue'
import ShowCitationAssistance from '~/components/Pages/Citations/ShowAssistence.vue'
import FormSuitableCitation from '~/components/Pages/Citations/SuitableCitation.vue'
import FormSuitable from '~/components/Pages/Citations/Suitable.vue'
import FormSelection from '~/components/Pages/Selections/Create.vue'
import CardHeader from '~/components/Card/Header.vue'
import Card from '~/components/Card/Index'
import AptoCreate from '~/components/Pages/Citations/AptoCreate.vue'
import UploadDocument from '~/components/Pages/Citations/UploadDocument.vue'

export default {
  components: {
    FormCitation,
    ShowCitation,
    ShowCitationAssistance,
    UploadDocument,
    FormSuitableCitation,
    FormSuitable,
    FormSelection,
    CardHeader,
    AptoCreate,
    Card
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
    ...mapState('option', [
      'isFormCitation',
      'isShowCitation',
      'isShowCitationAssistance',
      'isFormSuitableCitation',
      'isFormSuitable',
      'isFormSelection',
      'isFormUploadDocument',
      'isAptoCreate',
      'isModal'
    ])
  }
}
</script>

<style lang="scss" scoped></style>
