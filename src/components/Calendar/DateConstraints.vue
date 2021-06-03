<template>
  <div>
    <b-calendar :min="min" :max="max" v-model="value" locale="en"></b-calendar>
  </div>
</template>

<script>
  export default {
    name: "DateConstraints",
    data() {

      // Get the date today
      const now = new Date()
      const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())

      // Calculate the time 2 months ago
      const minDate = new Date(todayDate)
      // 15th two months prior
      minDate.setMonth(minDate.getMonth()-2)
      minDate.setDate(15)

      // Calculate the time 2 months advance

      return {
        value: '',
        min: minDate,
        max: null,
      }
    }
  }
</script>

<style scoped>

</style>