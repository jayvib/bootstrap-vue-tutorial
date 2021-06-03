<template>
  <div class="container">
    <b-calendar v-model="value" :date-disabled-fn="dateDisabled" locale="en"></b-calendar>
  </div>
</template>

<script>
  export default {
    name: "DisablingDates",
    data() {
      return {
        value: ''
      }
    },
    methods: {
      dateDisabled(ymd, date) {
        const weekday = date.getDay()
        const day = date.getDate()
        return weekday === 0 || weekday === 6 || day === 13
      }
    }
  }
</script>

<style scoped>

</style>