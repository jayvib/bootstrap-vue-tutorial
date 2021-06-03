<template>
  <div class="container">
    <h2>Variant</h2>
    <b-calendar
      selected-variant="success"
      today-variant="info"
      nav-button-variant="primary"
    ></b-calendar>
    <br><br>
    <h2>Width</h2>
    <b-calendar width="500px" locale="en-PH"></b-calendar>
  </div>
</template>

<script>
  export default {
    name: "Styling"
  }
</script>

<style scoped>

</style>