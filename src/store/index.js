import Vue from "vue";
import Vuex from "vuex";
import myAxios from "../apis/myServer";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
    },
    mutations: {
        SET_ISLOGGEDIN(state, payload) {
            state.isLoggedIn = payload;
        },
    },
    actions: {
        async loginHandler({ commit }, payload) {
            try {
                const response = await myAxios({
                    method: "POST",
                    url: "/login",
                    data: payload,
                });
                localStorage.setItem(
                    "access_token",
                    response.data.access_token
                );
                commit("SET_ISLOGGEDIN", true);
            } catch (error) {
                console.log(error.response.data);
            }
        },
        checkToken(context) {
            if (localStorage.access_token) {
                context.commit("SET_ISLOGGEDIN", true)
            } else {
                context.commit("SET_ISLOGGEDIN", false)
            }
        }
    },
    modules: {},
});
