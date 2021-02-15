<template>
  <div>
    <h2>Badge Pill</h2>
    <b-badge
      pill
      v-for="variation in variations"
      :key="variation"
      :variant="variation"
      class="mr-1">
      {{ variation }}
    </b-badge>
  </div>
</template>

<script>
  export default {
    name: "BadgePill",
    data() {
      return {
        variations: [
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