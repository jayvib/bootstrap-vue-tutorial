<template>
  <div>
    <h2>Button Groups and Keyboard Navigation</h2>
    <b-button-toolbar key-nav aria-label="Toolbar with button group">
      <b-button-group class="mx-1">
        <b-button>&laquo;</b-button>
        <b-button>&lsaquo;</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
        <b-button>Redo</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>&rsaquo;</b-button>
        <b-button>&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
    <br/>
    <h2>Mixture of Small Button Group and Small Input Group</h2>
    <b-button-toolbar aria-label="Toolbar with button groups and input groups">
      <b-button-group size="sm" class="mr-1">
        <b-button @click="save">Save</b-button>
        <b-button>Cancel</b-button>
      </b-button-group>
      <b-input-group size="sm" prepend="$" append=".00">
        <b-form-input class="text-right" v-model="dollarValue"></b-form-input>
      </b-input-group>
    </b-button-toolbar>
    <br>
    <h2>Button Groups and Dropdown Menu</h2>
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <b-button-group class="mx-1">
        <b-button>New</b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
      </b-button-group>
      <b-dropdown class="mx-1" right text="menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-button-group class="mx-1">
        <b-button>Save</b-button>
        <b-button>Cancel</b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<script>
  export default {
    name: "Basic",
    data() {
      return {
        dollarValue: 100,
        finalValue: 0,
      }
    },
    methods: {
      save() {
        this.finalValue = this.dollarValue
      }
    }
  }
</script>

<style scoped>

</style>