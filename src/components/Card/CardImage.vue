<template>
  <div class="container">
    <div>
      <h3>Top and Bottom</h3>
      <b-card-group deck>
        <b-card
          img-src="https://placekitten.com/1000/300"
          img-alt="Card Image"
          img-top
          title="Top"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card content
          </b-card-text>
        </b-card>
        <b-card
          title="Bottom"
          img-src="https://placekitten.com/1000/300"
          img-alt="Card Image"
          img-bottom
        >
          Some quick example text to build on the card title and make up the
          bulk of the card content
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-4">
      <h3>Left and Right</h3>
      <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card content
        </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/300/300" img-alt="Card Image" img-right class="mb-3">
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card content
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardImage"
  }
</script>

<style scoped>

</style>