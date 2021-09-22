<template>
  <div id="app">
    <Navbar v-if="isLoggedIn"/>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
import Navbar from "./components/Navbar.vue"
export default {
  name: "App",
  components : {
    Navbar
  },
  computed : {
    ...mapState(["isLoggedIn"])
  },
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
