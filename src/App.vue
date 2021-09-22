<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "App",
  methods : {
    ...mapActions(["checkToken"])
  },
  created() {
    this.checkToken()
  }
}
</script>

<style>

</style>
