<template>
  <div>
    <h2>Basic</h2>
    <b-row>
      <b-col md="auto">
        <b-calendar value-as-date v-model="value" @context="onContext" locale="en-PH"></b-calendar>
      </b-col>
      <b-col>
        <p>Value: <b>'{{ value }}</b></p>
        <p class="mb-0">Context:</p>
        <pre class="small">{{ context }}</pre>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "Basic",
    data() {
      return {
        value: '',
        context: null,
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
</script>

<style scoped>

</style>