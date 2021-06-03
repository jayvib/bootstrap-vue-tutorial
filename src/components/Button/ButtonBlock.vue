<template>
  <div>
    <h2>Block-level buttons</h2>
    <b-button
      v-for="variant in variants"
      block
      :key="variant"
      :variant="variant">
      Block Level Button
    </b-button>
  </div>
</template>

<script>
  import variants from "../../lib/variants"

  export default {
    name: "ButtonBlock",
    data() {
      return {
        variants
      }
    }
  }
</script>

<style scoped>

</style>