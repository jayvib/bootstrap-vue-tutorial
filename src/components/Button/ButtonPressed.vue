<template>
  <div>
    <h2>Pressed and un-pressed state</h2>
    <b-button :pressed="true" variant="success" class="mr-1">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>

    <h2 class="mt-3">Toggleable Button</h2>
    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
    <p>Pressed State: <strong>{{ myToggle }}</strong></p>

    <h2 class="mt-3">In Button Group</h2>
    <b-button-group size="sm">
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="danger">
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>Pressed States: {{ btnStates }}</p>
  </div>
</template>

<script>
  export default {
    name: "ButtonPressed",
    data() {
      return {
        myToggle: false,
        buttons: [
          { caption: 'Toggle 1', state: true },
          { caption: 'Toggle 2', state: false },
          { caption: 'Toggle 3', state: true },
          { caption: 'Toggle 4', state: false }
        ]
      }
    },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    }
  }
</script>

<style scoped>

</style>