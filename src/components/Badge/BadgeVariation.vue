<template>
  <div>
    <h2>Badge Context Variation</h2>
    <b-badge
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
    name: "BadgeVariation",
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