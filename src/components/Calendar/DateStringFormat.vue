<template>
  <div class="container">
    <h2>Custom Date Format:</h2>
    <b-calendar
      :date-format-options="{year: 'numeric', month: 'short', day: '2-digit', weekday: 'short'}"
    ></b-calendar>

    <h2>Short Date Format:</h2>
    <b-calendar
      :date-format-options="{year:'numeric', month:'numeric', day:'numeric'}"
    >
    </b-calendar>
  </div>
</template>

<script>
  export default {
    name: "DateStringFormat"
  }
</script>

<style scoped>

</style>