<template>
    <div class="container-login"> 
        <h2> Log In </h2>
        <form class="form-flex">
            <label for="username"> Username </label>
            <input id="username" type="text">

            <br/>

            <label for="password"> Password </label>
            <input id="password" type="text">

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