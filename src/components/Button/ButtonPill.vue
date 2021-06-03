<template>
  <div>
    <h2>Button Pill</h2>
    <b-button
      v-for="variant in variants"
      pill
      :key="variant"
      :variant="variant"
      class="mr-1">
      {{ variant}}
    </b-button>
  </div>
</template>

<script>
  import variants from '../../lib/variants'

  export default {
    name: "ButtonPill",
    data() {
      return {
        variants
      }
    }
  }
</script>

<style scoped>

</style>