<template>
  <div>
    <Card
      color="white"
      :width="$vuetify.breakpoint.width > 600 ? '135' : width"
      show-content
      show-header
      elevation="7"
    >
      <template slot="header">
        <v-card-title>
          <h6
            :class="[`${primaryColor}--text  font-weight-bold`]"
            v-text="title"
          />
          <v-spacer />
          <v-icon
            v-if="$vuetify.breakpoint.width > 600"
            small
            :color="secondaryColor"
            v-text="icon"
          />
        </v-card-title>
      </template>
      <template slot="content">
        <h2 :class="[`${primaryColor}--text mx-4`]" v-text="value" />
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    primaryColor: {
      type: String,
      default: ''
    },
    secondaryColor: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: '0'
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    dark: Boolean
  }
}
</script>
