<script setup>
    import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/collection">Collection</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
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
}

nav a {
    padding: 1rem;
    width: 100%;
    height: 100%;
    font-weight: 800;
    text-decoration: none;
    color: white;
}

</style>