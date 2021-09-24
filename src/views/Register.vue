<template>
    <div>
        <div class="bg-img">
            <div class="content">
                <header>Register form</header>
                <form @submit.prevent="registerButton" action="#">
                    <div class="field">
                        <span class="fa fa-user"></span>
                        <input
                            v-model="credentials.username"
                            type="text"
                            placeholder="username"
                        />
                    </div>
                    <div class="field space">
                        <span class="fa fa-envelope"></span>
                        <input
                            v-model="credentials.email"
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div class="field space">
                        <span class="fa fa-lock"></span>
                        <input
                            v-model="credentials.password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <div class="field space">
                        <input type="submit" value="REGISTER" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Register",
    data() {
        return {
            credentials: {
                username: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapActions(["registerHandler"]),
        async registerButton() {
            const payload = {
                username: this.credentials.username,
                email: this.credentials.email,
                password: this.credentials.password,
            };
            await this.registerHandler(payload);
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.bg-img {
    background: url("bg.png");
    height: 100vh;
    background-size: cover;
    background-position: center;
}

.bg-img:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 999;
    width: 370px;
    text-align: center;
    padding: 60px 32px;
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 1px 4px 28px 0px rgba(0, 0, 0, 0.75);
}

.content header {
    color: white;
    font-size: 33px;
    font-weight: 600;
    margin: 0 0 35px 0;
    font-family: "Montserrat", sans-serif;
}

.field {
    position: relative;
    height: 45px;
    width: 100%;
    display: flex;
    background: rgba(255, 255, 255, 0.94);
}

.field span {
    color: #222;
    width: 40px;
    line-height: 45px;
}

.field input {
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #222;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
}

.space {
    margin-top: 16px;
}

input[type="submit"] {
    background: #3498db;
    border: 1px solid #2691d9;
    color: white;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
}

input[type="submit"]:hover {
    background: #2691d9;
}

.login {
    color: white;
    margin: 20px 0;
    font-family: "Poppins", sans-serif;
}

.signup {
    color: white;
    font-size: 15px;
    margin-top: 20px;
    font-family: "Poppins", sans-serif;
}

.signup a {
    color: #fff;
    text-decoration: none;
}

.signup a:hover {
    text-decoration: underline;
}
</style>
