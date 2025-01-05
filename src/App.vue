<script setup>
  import Header from './components/Header.vue'
  import Nav from './components/Nav.vue'
  import { RouterView, useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter()

  const userId = localStorage.getItem("userId")
  if (!userId) {
      router.push({path: '/login'})
  }

</script>

<template>
  <Header></Header>
  <div :class="{'login-signup-bg': route.path === '/login' || route.path === '/signup'}">
    <div class="whitespace"></div>
    <div class="content" >
      <RouterView v-slot="{ Component }">
        <transition name="fade-and-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <div class="whitespace"></div>
  </div>
  <Nav v-if='route.path !== `/login` && route.path !== `/signup`'></Nav>

</template>

<style scoped>

@import './assets/base.css';

:global(body) {
  color: black;
  margin: 0;
  background-color: #f4f5fa
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;

}

.fade-and-slide-enter-from, .fade-and-slide-leave-to {
  opacity: 0;
  transform: translateY(60px);
}

.fade-and-slide-enter-active, .fade-and-slide-leave-active {
  transition: opacity 0.5s ease-in-out, transform 600ms ease-in-out;
}

.whitespace {
  padding: 4.5rem;
}

.content {
  margin: 8%;
}

.login-signup-bg {
  background-image: url('https://static.vecteezy.com/system/resources/thumbnails/006/852/804/small_2x/abstract-blue-background-simple-design-for-your-website-free-vector.jpg');
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }

</style>

