<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { signupUser } from '../../axios'

const router = useRouter()
const emailInput = ref("")
const usernameInput = ref("")
const passwordInput = ref("")
const errorMsg = ref("")

const handleSignUp = () => {
    const userToPost = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value
    }

    signupUser(userToPost)
    .then((res) => {router.push({path: `/login`})    })
    .catch(err => {errorMsg.value = err.response.data.errors})
}

</script>

<template>
    <div class="container-signup"> 
        <h2> Sign Up </h2>
        <form @submit.prevent="handleSignUp" class="form-flex">
            
            <p class="error-msg" v-if="errorMsg.email"> {{errorMsg.email}}  </p>
            <div class="container-input">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <input id="email" type="text" v-model="emailInput" placeholder="Email">
            </div>
            <p class="caption"> Must be unique </p>

            <br/>

            <p class="error-msg" v-if="errorMsg.username"> {{errorMsg.username}}  </p>
            <div class="container-input">
                <font-awesome-icon :icon="['fas', 'user']" />
                <input id="username" type="text" v-model="usernameInput" placeholder="Username">
            </div>
            <p class="caption"> Max 16 characters </p>

            <br/>
            
            <p class="error-msg" v-if="errorMsg.password"> {{errorMsg.password}}  </p>
            <div class="container-input">
                <font-awesome-icon :icon="['fas', 'lock']" />
                <input id="password" type="password" v-model="passwordInput" placeholder="Password" autocomplete="password">
            </div>
            <p class="caption"> Keep secure </p>

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
    background-color: rgba(255,255,255,0.1);
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

.caption {
    font-style: italic;
    margin: 0;
    font-size: small;
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

.error-msg{
    font-weight: bold;
    font-size: small;
    color: red;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    margin: 0

}
</style>