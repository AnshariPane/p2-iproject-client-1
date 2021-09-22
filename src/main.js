import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.config.productionTip = false;
Vue.use(
    new VueSocketIO({
        debug: true,
        connection: SocketIO("http://localhost:8081/"),
        vuex: {
            store,
            actionPrefix: "SOCKET_",
            mutationPrefix: "SOCKET_",
        },
        extraHeaders: {
            "Access-Control-Allow-Credentials": true,
            "MY-CUSTOM-HEADERS": "abcd",
        }, //Optional options
        allowEIO3: true,
        withCredentials: true,
    })
);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
