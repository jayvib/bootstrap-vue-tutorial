<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h1 class="text-center mt-1">Card</h1>
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
  import CardBasic from "./CardBasic";
  import CardTitle from "./CardTitle";
  import CardImage from "./CardImage";
  import CardImageOverlay from "./CardImageOverlay";
  import CardHeaderFooter from "./CardHeaderFooter";
  import KitchenSinkExample from "./KitchenSinkExample";

  export default {
    name: "Calendar",
    components: {ButtonCollapseItem},
    data() {
      return {
        components: [
          { name: 'Basic', component: CardBasic },
          { name: 'Title', component: CardTitle },
          { name: 'Image', component: CardImage },
          { name: 'Image Overlay', component: CardImageOverlay },
          { name: 'Header and Footer', component: CardHeaderFooter },
          { name: 'Kitchen Sink Example', component: KitchenSinkExample },
        ]
      }
    }
  }
</script>

<style scoped>

</style>