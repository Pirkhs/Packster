<script setup>
import ProfileImage from './ProfileImage.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
</script>

<template>
    <header >
    <h1> Packster </h1>
    <div v-if='route.path !== `/login` && route.path !== `/signup`' class="container-profile-img">
      <RouterLink to="/profile">
        <ProfileImage/>
      </RouterLink>
      <RouterLink to="/login">
        <button> Sign Out </button>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  padding-inline: 2rem;
  background-color: lightgrey;
  box-shadow: 0px 2px 50px black;
  z-index: 100;
}

.container-profile-img{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>