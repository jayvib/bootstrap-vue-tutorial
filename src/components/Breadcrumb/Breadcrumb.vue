<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h1 class="text-center mt-2">Breadcrumb</h1>
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
  import BreadcrumbBasic from "./BreadcrumbBasic";
  import BreadcrumbManualItems from "./BreadcrumbManualItems";
  export default {
    name: "Breadcrumb",
    components: {
      ButtonCollapseItem,
    },
    data() {
      return {
        components: [
          { name: 'Basic', component: BreadcrumbBasic },
          { name: 'Manual Items', component: BreadcrumbManualItems }
        ]
      }
    }
  }
</script>

<style scoped>

</style>