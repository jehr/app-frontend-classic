<template>
  <div class="styled-title" :class="[customClass ? customClass : '']">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
