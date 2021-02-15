<template>
  <div>
    <h2>Basic</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "BreadcrumbBasic",
    data() {
      return {
        items: [
          { text: 'Admin', href: '#' },
          { text: 'Manage', href: '#'},
          { text: 'Library', href: '#', active: true},
        ]
      }
    }

  }
</script>

<style scoped>

</style>