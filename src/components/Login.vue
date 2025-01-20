<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getUserByUsername } from '../../axios'

const router = useRouter()

const usernameInput = ref("")
const passwordInput = ref("")
const errorMsg = ref({})

const handleLogIn = () => {
    // Check details with database
    getUserByUsername(usernameInput.value)
    .then(res => {
        const user = res.data[0]
        if (user.password !== passwordInput.value) throw {path: "password", message: "Password is incorrect"}

        localStorage.clear()
        localStorage.setItem("userId", user._id )

        router.push({path: `/`})
    })
    .catch(err => {
        errorMsg.value[err.path] = err.message
    })
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
                <p class="error-msg" v-if="errorMsg.password"> {{errorMsg.password}}  </p>
                <div class="container-input">
                    <font-awesome-icon :icon="['fas', 'lock']" />
                    <input id="password" v-model="passwordInput" type="text" placeholder="Password">
                </div>
                <br/>
                
                <input class="btn-submit" value="Confirm" type="submit"> 
            </form>
        <p class="no-account"> Don't Have an Account? <RouterLink class="link" to="/signup"> Sign Up </RouterLink> </p>
    </div>

</template>

<style scoped>

h2 {
    font-size: xx-large;
    font-weight: 800;
    color: white;
}

.container-login {
    background-color: rgba(255,255,255,0.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2%;
    border: 2px solid black;
    border-radius: 1rem;
    width: 15rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

.error-msg{
    font-weight: bold;
    font-size: small;
    color: red;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    margin: 0

}

</style>