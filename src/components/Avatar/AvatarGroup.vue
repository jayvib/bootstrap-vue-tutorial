<template>
  <div>
    <h3>Avatar Group Basic</h3>
    <b-avatar-group size="60px">
      <b-avatar></b-avatar>
      <b-avatar text="BV" variant="primary"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="OK" variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar icon="music-note" variant="success"></b-avatar>
    </b-avatar-group>

    <h3>Avatar Group Sizing</h3>
    <b-avatar-group size="6rem">
      <b-avatar></b-avatar>
      <b-avatar text="BV" variant="primary"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="OK" variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar icon="music-note" variant="success"></b-avatar>
    </b-avatar-group>

    <h3>Group Variant</h3>
    <b-avatar-group variant="dark" size="4rem">
      <b-avatar></b-avatar>
      <b-avatar variant="info"></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>

    <h3>Rounding</h3>
    <b-avatar-group variant="danger" rounded="lg" size="lg">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>

    <h3>Group Overlap</h3>
    <b-avatar-group variant="warning" overlap="0.3">
      <b-avatar button aria-label="user" text="US"></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </div>
</template>

<script>
  export default {
    name: "AvatarGroup"
  }
</script>

<style scoped>

</style>