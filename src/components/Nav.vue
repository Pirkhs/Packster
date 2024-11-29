<script setup>
    import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/collection">Collection</RouterLink>
        <RouterLink active-class="active" to="/profile">Profile</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: black;
    box-shadow: 0px -2px 50px white;
    z-index: 100;
}

nav a {
    padding: 1rem;
    width: 100%;
    height: 100%;
    font-weight: 800;
    text-decoration: none;
    color: grey;
}

.active {
    color: white
}
</style>