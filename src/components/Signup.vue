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
            <label for="email"> Email </label>
            <input id="email" type="text" v-model="emailInput">

            <br/>

            <label for="username"> Username </label>
            <input id="username" type="text" v-model="usernameInput">

            <br/>

            <label for="password"> Password </label>
            <input id="password" type="text" v-model="passwordInput">

            <br/>

            <input class="btn-submit" value="Sign Up" type="submit"> 
        </form>
        <p> Already Have an Account? <RouterLink to="/login"> Log In </RouterLink> </p>
    </div>
</template>

<style scoped>
.container-signup {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 70%;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid black;
    border-radius: 5px;
}

.form-flex {
    display: flex;
    flex-direction: column;
}

label {
    font-size: small;
}

input {
    border: 1px solid black;
    width: 100%;
}

.btn-submit {
    border-radius: 1rem;
    background-color: rgba(0,0,255, 0.5);
    color: white;
}
</style>