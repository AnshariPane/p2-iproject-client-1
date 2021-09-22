import Vue from "vue";
import Vuex from "vuex";
import myAxios from "../apis/myServer";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        username: "Guest",
        UserId: 0,
        userEmail: "Guest"
    },
    mutations: {
        SET_ISLOGGEDIN(state, payload) {
            state.isLoggedIn = payload;
        },
        SET_USERID(state, payload) {
            state.UserId = payload;
        },
        SET_USERNAME(state, payload) {
            state.username = payload;
        },
        SET_USEREMAIL(state, payload) {
            state.username = payload;
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
                console.log(response.data, "<<<<");
                localStorage.setItem(
                    "access_token",
                    response.data.access_token
                );
                localStorage.setItem("userEmail", response.data.email);
                localStorage.setItem("username", response.data.username);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                commit("SET_ISLOGGEDIN", true);
            } catch (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.response.data.message}`,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        },
        checkToken(context) {
            if (localStorage.access_token) {
                context.commit("SET_ISLOGGEDIN", true);
            } else {
                context.commit("SET_ISLOGGEDIN", false);
            }
        },
        async googleSignIn(context, payload) {
            try {
                const response = await myAxios({
                    url: "/googleLogin",
                    method: "POST",
                    data: {
                        idToken: payload,
                    },
                });
                const { access_token, email, id } = response.data;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("userEmail", email);
                localStorage.setItem("UserId", id);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                context.commit("SET_ISLOGGEDIN", true);
            } catch (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.response.data.message}`,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        },
    },
    modules: {},
});
