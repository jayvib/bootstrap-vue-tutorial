<template>
  <div class="container">
    <b-card-group deck>
      <b-card
        title="Title"
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
      >
        <b-card-text>
          Header and footers using props.
        </b-card-text>
        <b-button variant="primary">Go somewhere</b-button>
      </b-card>

      <!--using slot-->
      <b-card title="Title" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Header Slot</h6>
        </template>
        <b-card-text>
          Header and footers using slots.
        </b-card-text>
        <b-button variant="danger">Go somewhere</b-button>
        <template #footer>
          <em>Footer slot</em>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: "CardHeaderFooter"
  }
</script>

<style scoped>

</style>