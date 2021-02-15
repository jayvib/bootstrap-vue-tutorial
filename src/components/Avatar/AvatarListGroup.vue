<template>
  <div>
    <b-list-group style="max-width: 300px">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">J. Circlehead</span>
        <b-badge>5</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3" text="BV" variant="primary"></b-avatar>
        <span class="mr-auto">BootstrapVue</span>
        <b-badge>3</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3" variant="info" src="https://placekitten.com/300/300"></b-avatar>
        <span class="mr-auto">Super Kitty</span>
        <b-badge>9</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="success" class="mr-3" icon="people-fill"></b-avatar>
        <span class="mr-auto">ACME group</span>
        <b-badge>7</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
  export default {
    name: "AvatarListGroup"
  }
</script>

<style scoped>

</style>