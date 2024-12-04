<template>
    <div class="container-signup"> 
        <h2> Sign Up </h2>
        <form class="form-flex">
            <label for="email"> Email </label>
            <input id="email" type="text">

            <br/>

            <label for="username"> Username </label>
            <input id="username" type="text">

            <br/>

            <label for="password"> Password </label>
            <input id="password" type="text">

            <br/>

            <input value="Sign Up" type="submit"> 
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