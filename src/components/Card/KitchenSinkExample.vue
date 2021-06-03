<template>
  <div class="container">
    <b-card
      img-src="https://placekitten.com/380/200"
      img-alt="Cute kitten"
      style="max-width: 25rem;"
      header-tag="header"
    >
      <template #header>
        <h3 class="mb-0">Hello World</h3>
      </template>

      <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card content
        </b-card-text>
        <b-list-group flush>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "KitchenSinkExample"
  }
</script>

<style scoped>

</style>