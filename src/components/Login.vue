<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const usernameInput = ref("")
const passwordInput = ref("")

const handleLogIn = () => {
    // Check details with database

    localStorage.clear()

    // Fetch user id
    localStorage.setItem("userId", 1)

    router.push({path: `/`})

}
</script>

<template>
        <div class="container-login"> 
            <h2> Log In </h2>
            <form @submit.prevent="handleLogIn" class="form-flex">
                <div class="container-input">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <input id="username" v-model="usernameInput" type="text" placeholder="Username">
                </div>
                <br/>
                <div class="container-input">
                    <font-awesome-icon :icon="['fas', 'lock']" />
                    <input id="password" v-model="passwordInput" type="text" placeholder="Password">
                </div>
                <br/>
                
                <input class="btn-submit" value="Log In" type="submit"> 
            </form>
        <p class="no-account"> Don't Have an Account? <RouterLink class="link" to="/signup"> Sign Up </RouterLink> </p>
    </div>

</template>

<style scoped>

h2 {
    font-size: xx-large;
    font-weight: 800
}

.container-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.6);
    border: 2px solid lightgrey;
    border-radius: 1rem;
    width: 15rem;
}

.form-flex {
    display: flex;
    flex-direction: column;
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

.no-account {
    font-size: small;
}

.link {
    text-decoration: none;
    color: white;
    font-weight: bold;
}
</style>