<template>
  <v-form>
    <Card
      :min-height="minHeight"
      :height="height"
      :color="color"
      :flat="flat"
      :dark="dark"
      show-content
      show-header
    >
      <template slot="header">
        <CardHeader :title="title" :custom-class="customClass" />
      </template>
      <template slot="content">
        <slot name="form" />
      </template>
    </Card>
  </v-form>
</template>

<script>
import Card from '~/components/Card/Index'
import CardHeader from '~/components/Card/Header'

export default {
  components: {
    Card,
    CardHeader
  },

  props: {
    customClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    minHeight: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '100%'
    },
    dark: Boolean,
    flat: Boolean
  }
}
</script>
