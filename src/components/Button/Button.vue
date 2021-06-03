<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h1 class="text-center mt-1">Button</h1>
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
  import ButtonBasic from "./ButtonBasic";
  import ButtonSizing from "./ButtonSizing"
  import ButtonVariant from "./ButtonVariant"
  import ButtonBlock from "./ButtonBlock"
  import ButtonPill from "./ButtonPill"
  import ButtonSquared from "./ButtonSquared"
  import ButtonDisabled from "./ButtonDisabled"
  import ButtonPressed from "./ButtonPressed";

  export default {
    name: "Button",
    components: {ButtonCollapseItem},
    data() {
      return {
        components: [
          { name: 'Basic', component: ButtonBasic },
          { name: 'Sizing', component: ButtonSizing },
          { name: 'Variant', component: ButtonVariant },
          { name: 'Block', component: ButtonBlock },
          { name: 'Pill', component: ButtonPill},
          { name: 'Squared', component: ButtonSquared },
          { name: 'Disabled', component: ButtonDisabled },
          { name: 'Pressed', component: ButtonPressed },
        ]
      }
    }
  }
</script>

<style scoped>

</style>