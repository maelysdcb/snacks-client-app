<script setup>
import axios from 'axios';

// const login = () => {
//     axios.post("http://localhost:8000/api/auth")
// }
</script>

<template>
    <main>
        <h1>Welcome</h1>
        <form action="/auth/api" method="POST">
            <div class="form-login">
                <div class="field">
                    <div class="field-item">
                        <img class="ion-icon" src="../assets/svg/mail-outline.svg" alt="email-icon">
                        <label for="email">Email :</label>
                    </div>
                    <input type="text" name="email" placeholder="example@gmail.com" required>
                </div>
                <div class="field">
                    <div class="field-item">
                        <img class="ion-icon" src="../assets/svg/key-outline.svg" alt="password-icon">
                        <label for="password">Password :</label>
                    </div>
                    <div class="field forgot-item">
                        <input type="password" name="password" placeholder="*************" required>
                        <a href="">Forgot passord ?</a>
                    </div>
                </div>
                <button>LOGIN</button>
                <span>Need an account ? <a href="#">Sign up now !</a></span>
            </div>
        </form>
    </main>
</template>

<style scoped>

main {
    margin: 5em 0;
}
.form-login {
    display: flex;
    flex-direction: column;
    padding-top: 2em;
}

.field {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
}

input {
    outline: none;
    padding: 1em;
    color: var(--font-color);
    background-color: var(--background-color);
    border: 1px solid rgba(250, 250, 250, 0.2);
    border-radius: 5px;
}

.field-item {
    padding: 1em 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
}

.forgot-item {
    display: flex;
    flex-direction: column;
    gap:0.5em;
}

.forgot-item > a {
    align-self: flex-end;
}

button {
    cursor: pointer;
    color: var(--font-color);
    font-weight: 600;
    font-size: 1em;
    background-color: var(--green-color);
    height: 45px;
    margin: 1.5em 0;
    border-radius: 5px;
    border: none;
    outline: none;
}

a {
    color: #3D63CC;
}
</style>