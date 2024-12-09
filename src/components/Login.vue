<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const usernameInput = ref("")
const passwordInput = ref("")

const handleLogIn = () => {
   // Check details with database

   router.push({path: `/`})

}
</script>

<template>
    <div class="container-login"> 
        <h2> Log In </h2>
        <form @submit.prevent="handleLogIn" class="form-flex">
            <label for="username"> Username </label>
            <input id="username" v-model="usernameInput" type="text">

            <br/>

            <label for="password"> Password </label>
            <input id="password" v-model="passwordInput" type="text">
            <br/>

            <input value="Log In" type="submit"> 
        </form>
        <p> Don't Have an Account? <RouterLink to="/signup"> Sign Up </RouterLink> </p>
    </div>
</template>

<style scoped>


.container-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 70%;
    padding: 2%;
    background-color: white;
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
</style>