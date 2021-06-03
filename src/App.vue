<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/')">Home</b-nav-item>
          <b-nav-item @click="$router.push('/alerts')" >Alerts</b-nav-item>
          <b-nav-item @click="$router.push('/aspect')">Aspect</b-nav-item>
          <b-nav-item @click="$router.push('/avatar')">Avatar</b-nav-item>
          <b-nav-item @click="$router.push('/badge')">Badge</b-nav-item>
          <b-nav-item @click="$router.push('/breadcrumb')">Breadcrumb</b-nav-item>
          <b-nav-item @click="$router.push('/button')">Button</b-nav-item>
          <b-nav-item @click="$router.push('/buttongroup')">Button Group</b-nav-item>
          <b-nav-item @click="$router.push('/buttontoolbar')">Button Toolbar</b-nav-item>
          <b-nav-item @click="$router.push('/calendar')">Calendar</b-nav-item>
          <b-nav-item @click="$router.push('/card')">Card</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .width-25 {
    width: 25%;
  }
</style>
