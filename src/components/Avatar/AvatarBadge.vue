<template>
  <div>
    <h3>Basic</h3>
    <b-avatar class="mr-1" badge=""></b-avatar>
    <b-avatar class="mr-1" badge="" badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar class="mr-1" badge="" badge-variant="warning" icon="people-fill"></b-avatar>
    <b-avatar class="mr-1" badge="" badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar class="mr-1" badge="" badge-variant="dark" text="BV"></b-avatar>
    <b-avatar class="mr-1" square badge="" badge-variant="dark" text="BV"></b-avatar>
    <br/>
    <h3 class="mt-3">Badge Content</h3>
    <b-avatar badge="BV"></b-avatar>
    <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
    <b-avatar badge-variant="info" :src="kittenUrl">
      <template #badge><b-icon icon="star-fill"></b-icon></template>
    </b-avatar>
    <h3 class="mt-3">Badge Positioning</h3>
    <b-avatar badge=""></b-avatar>
    <b-avatar badge="" badge-left></b-avatar>
    <b-avatar badge="" badge-top></b-avatar>
    <b-avatar badge="" badge-left badge-top></b-avatar>
    <h3 class="mt-3">Badge Positioning Offset</h3>
    <b-avatar badge=""></b-avatar>
    <b-avatar badge="" badge-offset="-0.5em"></b-avatar>
    <b-avatar badge="" badge-offset="-2px"></b-avatar>
    <b-avatar badge="" badge-offset="2px"></b-avatar>
    <b-avatar badge="" badge-top></b-avatar>
  </div>
</template>

<script>
  export default {
    name: "AvatarBadge",
    data() {
      return {
        kittenUrl: "https://placekitten.com/300/300"
      }
    }
  }
</script>

<style scoped>

</style>