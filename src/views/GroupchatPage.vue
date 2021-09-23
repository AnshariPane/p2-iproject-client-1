<template>
  <div class="socket">
    <ul id="messages" v-for="(log, index) in logs" :key="index">
      <li>{{ log.message }}</li>
    </ul>
    <form class="custom-margin" @submit.prevent="clickButton" id="form" action="">
      <input v-model="messages" id="input" autocomplete="off" /><button type="submit">
        Send
      </button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import store from "../store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://my-vtuberlist.herokuapp.com/"),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    },
    extraHeaders: {
      "Access-Control-Allow-Credentials": true,
      "MY-CUSTOM-HEADERS": "abcd"
    }, //Optional options
    allowEIO3: true,
    withCredentials: true
  })
);
export default {
  name: "GroupchatPage",
  data() {
    return {
      messages: "",
      firstChat: true,
      logs: []
    };
  },
  sockets: {
    connect() {
      console.log("connect");
    }
  },
  methods: {
    clickButton: function(data) {
      console.log(data);
      this.$socket.emit("groupChat", this.messages);
      this.messages = "";
    }
  },
  created() {
    this.sockets.subscribe("groupChat", function(data) {
      if (this.firstChat) {
        this.logs = data.reverse();
        this.firstChat = false;
      } else {
        this.logs = data;
      }
    });
  },
};
</script>

<style scoped>
.socket {
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}
#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}
#input:focus {
  outline: none;
}
#form > button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
}
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages > li {
  padding: 0.5rem 1rem;
}
#messages > li:nth-child(odd) {
  background: #efefef;
}

.custom-margin {
  margin: 0;
  padding: 0
}
</style>
