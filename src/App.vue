<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template >
  <header >
    <h1> Packster </h1>
    <div class="container-profile-img">
      <img class="profile-img" alt="Your personal profile image" src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"> 
      <p> [Username] </p>
    </div>
  </header>
  <div class="content-divider"></div>
  <div class="content">
    <RouterView />
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/collection">Collection</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </nav>

</template>

<style scoped>

@import './assets/base.css';

:global(body) {
  color: black;
  margin: 0;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  width: 100%;
  position: fixed;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  
}

.container-profile-img{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: 3px solid black;
}

.content-divider {
  padding: 3rem;
}

.content {
  margin: 8%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #260F26;
}

nav a {
  border-inline: 1px solid black;
  padding: 1rem;
  width: 100%;
  height: 100%;
  font-weight: 800;
  text-decoration: none;
  color: white;
}

</style>

