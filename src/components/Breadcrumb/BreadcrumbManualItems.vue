<template>
  <div>
    <h2>Manual Items</h2>
    <b-breadcrumb>
      <b-breadcrumb-item to="/breadcrumb/home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Bar</b-breadcrumb-item>
      <b-breadcrumb-item active>Baz</b-breadcrumb-item>
    </b-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "BreadcrumbManualItems"
  }
</script>

<style scoped>

</style>