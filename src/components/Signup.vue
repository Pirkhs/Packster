<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const emailInput = ref("")
const usernameInput = ref("")
const passwordInput = ref("")

const handleSignUp = () => {
   // Check inputs and create new account

   router.push({path: `/login`})

}

</script>

<template>
    <div class="container-signup"> 
        <h2> Sign Up </h2>
        <form @submit.prevent="handleSignUp" class="form-flex">
            <div class="container-input">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <input id="email" type="text" v-model="emailInput" placeholder="Email">
            </div>
            <br/>
            <div class="container-input">
                <font-awesome-icon :icon="['fas', 'user']" />
                <input id="username" type="text" v-model="usernameInput" placeholder="Username">
            </div>
            <br/>
            <div class="container-input">
                <font-awesome-icon :icon="['fas', 'lock']" />
                <input id="password" type="text" v-model="passwordInput" placeholder="Password">
            </div>
            <br/>

            <input class="btn-submit" value="Confirm" type="submit"> 
        </form>
        <p style="font-size: small"> Already Have an Account? <RouterLink to="/login" class="link"> Log In </RouterLink> </p>
    </div>
</template>

<style scoped>

h2 {
    font-size: xx-large;
    font-weight: 800;
    color: white;
}

.container-signup {
    background-image: url('https://i.ibb.co/yYLk269/packster-blrry-bg.png');
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 70%;
    padding: 2%;
    border: 2px solid black;
    border-radius: 1rem;
    width: 15rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.container-input {
    display: flex;
    flex-direction: row;
    gap: 5px;
    border: 1px solid black;
    background-color: white;
    padding: 0.5rem;
    border-radius: 10px;
}

.form-flex {
    display: flex;
    flex-direction: column;
}

label {
    font-size: small;
}

input {
    background-color: transparent;
    border: none;
}

input:focus {
    outline: none;
}

.btn-submit {
    border-radius: 1rem;
    background-color: rgba(0,0,255, 0.5);
    color: white;
    padding: 0.5rem;
    font-weight: bold;
}

.link {
    text-decoration: none;
    color: white;
    font-weight: bold;
}
</style>