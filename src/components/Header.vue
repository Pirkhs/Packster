<script setup>
import { watch, ref } from 'vue';
import { getUserByToken, logoutUser } from '../../axios';
import ProfileImage from './ProfileImage.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const user = ref({})
const route = useRoute()
const router = useRouter()

watch(
  () => router.currentRoute.value, currentRoute => {
        if (currentRoute.path === '/login' || currentRoute.path === '/signup' ) return
        getUserByToken()
        .then(res => user.value = res.data)
        .catch(err => {return})
  },
)

</script>

<template>
    <header >
    <h1> Packster </h1>
    <div v-if='route.path !== `/login` && route.path !== `/signup`' class="container-profile-img">
      <p v-if="user"> {{ user.username }} </p>
      <RouterLink to="/profile">
        <ProfileImage/>
      </RouterLink>
      <RouterLink to="/login">
        <button @click="logoutUser()"> Log Out </button>
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
  gap: 20px,
}

</style>