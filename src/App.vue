<template>
  <div id="app">
    <Navbar v-if="isLoggedIn"/>
    <router-view/>
    <div>
    <HFooter />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
import HFooter from 'vue-hacktiv8-footer'
import Navbar from "./components/Navbar.vue"
export default {
  name: "App",
  components : {
    Navbar,
    HFooter
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

<style scoped>

</style>
