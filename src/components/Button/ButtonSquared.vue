<template>
  <div>
    <h2>Squared Button</h2>
    <b-button
      v-for="variant in variants"
      squared
      :key="variant"
      :variant="variant"
      class="mr-1">
      {{ variant }}
    </b-button>
  </div>
</template>

<script>
  import variants from "../../lib/variants"

  export default {
    name: "ButtonSquared",
    data() {
      return {
        variants
      }
    }
  }
</script>

<style scoped>

</style>