<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h1 class="text-center mt-1">Calendar</h1>
    <hr/>
    <ButtonCollapseItem
      v-for="component in components"
      :idx="component.name.toLocaleLowerCase()"
      :key="component.name.toLowerCase()"
      :component="component.component">
      <template v-slot:header>{{ component.name }}</template>
    </ButtonCollapseItem>
  </div>
</template>

<script>
  import ButtonCollapseItem from '../ButtonCollapseItem'
  import Basic from "./Basic";
  import States from "./States";
  import DateConstraints from "./DateConstraints";
  import DisablingDates from "./DisablingDates";
  import Styling from "./Styling";
  import DateStringFormat from "./DateStringFormat";

  export default {
    name: "Calendar",
    components: {ButtonCollapseItem},
    data() {
      return {
        components: [
          { name: 'Basic', component: Basic },
          { name: 'States', component: States },
          { name: 'Date Constraints', component: DateConstraints },
          { name: 'Disabling Dates', component: DisablingDates },
          { name: 'Styling', component: Styling },
          { name: 'Date String Format', component: DateStringFormat },
        ]
      }
    }
  }
</script>

<style scoped>

</style>