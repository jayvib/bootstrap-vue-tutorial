<template>
  <div class="container">
    <h3>Default Size</h3>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
    <h3 class="mt-3">Small Size</h3>
    <b-button-group size="sm">
      <b-button>Left</b-button>
      <b-button>Middle</b-button>
      <b-button>Right</b-button>
    </b-button-group>
    <h3 class="mt-3">Large Size</h3>
    <b-button-group size="lg">
      <b-button>Left</b-button>
      <b-button>Middle</b-button>
      <b-button>Right</b-button>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    name: "Sizing"
  }
</script>

<style scoped>

</style>