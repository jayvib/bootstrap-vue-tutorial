<template>
  <div>
    <h2>Actionable Badges</h2>
    <b-badge
      href="#"
      v-for="variant in variants"
      :key="variant.toLocaleLowerCase()"
      class="mr-1"
      :variant="variant">
      {{ variant }}
    </b-badge>
  </div>
</template>

<script>
  export default {
    name: 'BadgeAction',
    data() {
      return {
        variants: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark"
        ]
      }
    }
  }
</script>

<style scoped>

</style>