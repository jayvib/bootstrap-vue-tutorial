<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h1 class="text-center mt-1">Button Group</h1>
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
  import Sizing from "./Sizing";
  import Vertical from "./Vertical";
  import DropdownMenu from "./DropdownMenu";

  export default {
    name: "ButtonGroup",
    components: {ButtonCollapseItem},
    data() {
      return {
        components: [
          { name: 'Basic', component: Basic },
          { name: 'Sizing', component: Sizing },
          { name: 'Vertical', component: Vertical },
          { name: 'Dropdown Menu', component: DropdownMenu },
        ]
      }
    }
  }
</script>

<style scoped>

</style>