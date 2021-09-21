<template>
        <div class="form-container">
            <h1>Login form</h1>
            <form action="">
                <div class="control">
                    <label for="username">Username</label>
                    <input type="email" name="username" id="username" />
                </div>
                <div class="control">
                    <label for="password" id="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div class="control">
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
</template>

<script>
import abcd from "../assets/1234.jpg";
export default {
    name: "LoginPage",
    data() {
        return {
            image: abcd,
        };
    },
};
</script>

<style scoped>


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Open Sans";
    color: #fff;
}

section {
    position: relative;
    height: 100vh;
    width: 100vh;
    background: url(../assets/1234.jpg);
    background-size: cover;
    background-position: center center;
}

.form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    width: 380px;
    padding: 50px 30px;
    border-radius: 10px;
    box-shadow: 7px 7px 60px #000;
}

h1 {
    text-transform: uppercase;
    font-size: 2em;
    text-align: center;
    margin-bottom: 2em;
}

.control input {
    width: 100%;
    display: block;
    padding: 10px;
    color: #222;
    border: none;
    outline: none;
    margin: 1em 0;
}

.control input[type="submit"] {
    background: turquoise;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2em;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.control input [type="submit"]:hover {
    opacity: 1;
}

.link {
    text-align: center;
}
.link a {
    text-decoration: none;
    color: #fff;
    transition: opacity 0.3s ease;
    opacity: 0.6;
}

.link a:hover {
    opacity: 1;
}
</style>
