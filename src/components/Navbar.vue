<template>
    <div>
        <header>
            <img class="logo" src="" alt="" />
            <nav>
                <ul class="nav_links">
                    <li><router-link to="/">Home</router-link></li>
                    <li v-if="isLoggedIn">
                        <router-link to="/groupchat">Group-chat</router-link>
                    </li>
                </ul>
            </nav>
            <a
                v-if="isLoggedIn"
                @click.prevent="logoutButton"
                href="#"
                class="cta"
                ><button>Logout</button></a
            >
        </header>
    </div>
</template>

<script>
import Vue from "vue";
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
import { LoaderPlugin } from "vue-google-login";
Vue.use(LoaderPlugin, {
    client_id:
        "299163885178-lboph42aq8spb33ckircvk2obrdqleu4.apps.googleusercontent.com",
});
export default {
    name: "Navbar",
    computed: {
        ...mapState(["isLoggedIn"]),
    },
    methods: {
        ...mapActions(["checkToken"]),
        logoutButton() {
            if (this.isLoggedIn) {
                localStorage.clear();
                Vue.GoogleAuth.then((auth2) => {
                    auth2.signOut().then(function() {
                        console.log(`User signed out.`);
                    });
                });
                this.checkToken();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.$router.push("/login");
            }
        },
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #24252a;
}

li,
a,
button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 3%;
}

.logo {
    cursor: pointer;
    margin-right: auto;
}

.nav_links {
    list-style: none;
}

.nav_links li {
    display: inline-block;
    padding: 0px 20px;
}

.nav_links li a {
    transition: all 0.3s ease 0s;
}

.nav_links li a:hover {
    color: #0088a9;
}

button {
    padding: 9px 25px;
    background-color: rgba(0, 136, 169, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

button:hover {
    background-color: rgba(0, 136, 169, 0.8);
}
</style>
