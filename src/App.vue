<script setup>
import { RouterLink, RouterView } from 'vue-router'

const cl = (str) => console.log(str) 

</script>

<template >
  <header >
    <div class="container-profile-img">
      <img class="profile-img" src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"> 
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
/* Color Pallete
/*  #FD804A 
    #BF2A45 
    #8C0343 
    #260F26 
    #F2CFBB
*/

@import './assets/base.css';

:global(body) {
  background: linear-gradient(to bottom, #FD804A, #BF2A45, #8C0343  );
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  margin-top: 2rem;
}

.container-profile-img{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 5%;
  top: 5%;
}

.profile-img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 1px solid black;
}

.content-divider {
  padding: 2rem;
}

.content {
  margin: 10%;
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

