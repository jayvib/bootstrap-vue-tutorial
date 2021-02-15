<template>
  <div class="mt-2">
    <h1 class="text-center">Alert</h1>
    <hr/>
    <b-button v-b-toggle.collapse-1 variant="primary" class="width-25">Basic</b-button><br/>
    <b-collapse id="collapse-1" class="mt-2">
      <div id="basic">
        <h3>Basic</h3>
        <b-alert show>Default Alert</b-alert>
        <b-alert variant="success" show>Success Alert</b-alert>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          Dismissible Alert!
        </b-alert>
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged">

          <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
          <b-progress
            variant="warning"
            :max="dismissSecs"
            :value="dismissCountDown"
            height="4px">
          </b-progress>
        </b-alert>

        <b-button @click="showAlert" variant="info" class="m-1">
          Show alert with count-down timer
        </b-button>
        <b-button
          @click="showDismissibleAlert=true"
          variant="info"
          class="m-1">
          Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
        </b-button>
      </div>
    </b-collapse>
    <b-button v-b-toggle.collapse-2 variant="secondary" class="mt-2 width-25">Contextual variants</b-button><br/>
    <b-collapse id="collapse-2" class="mt-2">
      <div id="alert-contextual-variant">
        <h3>Contextual variants</h3>
        <b-alert variant="primary" show>Primary Alert</b-alert>
        <b-alert variant="secondary" show>Secondary Alert</b-alert>
        <b-alert variant="success" show>Success Alert</b-alert>
        <b-alert variant="danger" show>Danger Alert</b-alert>
        <b-alert variant="warning" show>Warning Alert</b-alert>
        <b-alert variant="light" show>Light Alert</b-alert>
        <b-alert variant="dark" show>Dark Alert</b-alert>
      </div>
    </b-collapse>
    <b-button v-b-toggle.collapse-3 variant="success" class="mt-2 width-25">Alert with Additional Content</b-button><br/>
    <b-collapse id="collapse-3" class="mt-2">
      <div id="alert-with-additional-content">
        <h3>Alert with Additional Content Inside</h3>
        <b-alert show variant="success">
          <h4 class="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This example text is going to
            run a bit longer so that you can see how spacing within an alert works with this kind of
            content.
          </p>
          <hr/>
          <p class="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
          </p>
        </b-alert>
      </div>
    </b-collapse>
    <b-button v-b-toggle.collapse-4 variant="danger" class="mt-2 width-25">Color of links within alerts</b-button>
    <b-collapse id="collapse-4" class="mt-2">

    <div id="color-of-links-within-alerts">
      <b-alert show variant="primary">
        <a href="#" class="alert-link">Primary Alert</a>
      </b-alert>
      <b-alert show variant="secondary">
        <a href="#" class="alert-link">Secondary Alert</a>
      </b-alert>
      <b-alert show variant="success">
        <a href="#" class="alert-link">Success Alert</a>
      </b-alert>
      <b-alert show variant="danger">
        <a href="#" class="alert-link">Danger Alert</a>
      </b-alert>
      <b-alert show variant="warning">
        <a href="#" class="alert-link">Warning Alert</a>
      </b-alert>
      <b-alert show variant="info">
        <a href="#" class="alert-link">Info Alert</a>
      </b-alert>
      <b-alert show variant="light">
        <a href="#" class="alert-link">Light Alert</a>
      </b-alert>
      <b-alert show variant="dark">
        <a href="#" class="alert-link">Dark Alert</a>
      </b-alert>
    </div>
    </b-collapse>
    <b-button v-b-toggle.collapse-5 variant="warning" class="mt-2 width-25 d-block">
      Dismissible alerts
    </b-button>
    <b-collapse id="collapse-5" class="mt-2">
      <b-alert show dismissible>
        Dismissible Alert! Click the close button
      </b-alert>
    </b-collapse>
    <b-button v-b-toggle.collapse-6 variant="info" class="mt-2 width-25 d-block">
      Show Alert with countdown
    </b-button>
    <b-collapse id="collapse-6" class="mt-2">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        This alert will dismiss after {{ dismissCountDown }}  seconds...
      </b-alert>
      <b-button @click="showAlert" variant="dark" class="m-1">
        Show alert
      </b-button>
    </b-collapse>
    <b-button v-b-toggle.collapse-7 variant="light" class="mt-2 width-25 d-block">
      Fading Alerts
    </b-button>
    <b-collapse id="collapse-7" class="mt-2">
      <b-alert show dismissible fade>Dismissible Alert!</b-alert>
      <b-alert
        variant="danger"
        dismissible
        fade
        :show="showDismissibleAlert"
        @dismissed="showDismissibleAlert=false">
        Dismissible Alert!
      </b-alert>
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        This alert will dismiss after {{ dismissCountDown }} seconds...
      </b-alert>

      <b-button @click="showAlert" variant="info" class="m-1">
        Show alert with count-down-timer
      </b-button>

      <b-button @click="showDismissibleAlert=true" class="m-1" variant="info">
        Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden'}})
      </b-button>
    </b-collapse>
  </div>
</template>

<script>
  import { BAlert }  from 'bootstrap-vue';
  import { BButton } from 'bootstrap-vue';
  import { BCollapse } from 'bootstrap-vue';

  export default {
    name: "Alert",
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      }
    },
    components: {
      'b-alert': BAlert,
      'b-button': BButton,
      'b-collapse': BCollapse,
    }
  }
</script>

<style scoped>
</style>