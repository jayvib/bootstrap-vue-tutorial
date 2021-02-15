<template>
  <div>
    <BAvatar src="https://placekitten.com/300/300"/>
    <BAvatar src="https://placekitten.com/300/300" size="6rem"/>
  </div>
</template>

<script>
  import { BAvatar }  from 'bootstrap-vue';

  export default {
    name: "AvatarImageContent",
    components: {
      BAvatar,
    }
  }
</script>

<style scoped>

</style>