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
        userEmail: "Guest",
        characters: [],
        charaDetail: {},
        youtubeVideo: [],
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
        SET_CHARACTERSDATA(state, payload) {
            state.characters = payload;
        },
        SET_CHARADETAIL(state, payload) {
            state.charaDetail = payload;
        },
        SET_YOUTUBEVIDEO(state, payload) {
            state.youtubeVideo = payload;
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
                const { access_token, email } = response.data;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("userEmail", email);
                localStorage.setItem("UserId", response.data.id);
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
        async registerHandler(context, payload) {
            try {
                await myAxios({
                    url: "/register",
                    method: "POST",
                    data: payload,
                });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register success",
                    showConfirmButton: false,
                    timer: 1500,
                });
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
        async fetchCharacters(context) {
            try {
                const response = await myAxios({
                    url: "/characters",
                    method: "GET",
                });
                context.commit("SET_CHARACTERSDATA", response.data);
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
        async fetchCharaDetail(context, payload) {
            try {
                const response = await myAxios({
                    url: `/characters/${payload}`,
                    method: "GET",
                });
                context.commit("SET_CHARADETAIL", response.data);
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
        async fetchYoutubeVideo({ commit }, query ) {
            try {
                const response = await myAxios({
                    url: `/characters/youtubeVideo?name=${query}`,
                    method: "GET",
                });
                commit("SET_YOUTUBEVIDEO", response.data);
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
