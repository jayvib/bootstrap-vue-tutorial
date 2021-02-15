<template>
  <div class="mt-2">
    <h1 class="text-center">Badge</h1>
    <hr/>
    <b-button v-b-toggle.badge-basic variant="success" class="width-25 d-block">Basic</b-button>
    <b-collapse id="badge-basic" class="mt-2">
      <BadgeBasic/>
    </b-collapse>
    <b-button v-b-toggle.badge-in-button variant="info" class="width-25 d-block mt-1">Badge in Button</b-button>
    <b-collapse id="badge-in-button" class="mt-2">
      <BadgeInButton/>
    </b-collapse>
    <b-button v-b-toggle.badge-variation variant="dark" class="width-25 d-block mt-1">Badge Variation</b-button>
    <b-collapse id="badge-variation" class="mt-2">
      <BadgeVariation/>
    </b-collapse>
    <b-button v-b-toggle.badge-pill variant="danger" class="width-25 d-block mt-1">Badge Pill</b-button>
    <b-collapse id="badge-pill" class="mt-2">
      <BadgePill/>
    </b-collapse>
    <b-button
      v-b-toggle.badge-action
      variant="info"
      class="width-25 d-block mt-2">
      Badge Action
    </b-button>
    <b-collapse id="badge-action" class="mt-2">
      <BadgeAction/>
    </b-collapse>

  </div>
</template>

<script>
  import BadgeBasic from "./BadgeBasic";
  import BadgeInButton from "./BadgeInButton";
  import BadgeVariation from "./BadgeVariation";
  import BadgePill from "./BadgePill";
  import BadgeAction from "./BadgeAction";
  export default {
    name: "Badge",
    components: {BadgeAction, BadgePill, BadgeVariation, BadgeInButton, BadgeBasic}
  }
</script>

<style scoped>

</style>