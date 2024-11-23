<script setup>
  import Header from './components/Header.vue'
  import Nav from './components/Nav.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <Header></Header>
  <div class="whitespace"></div>
  <div class="content" >
    <RouterView v-slot="{ Component }">
      <transition name="fade-and-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
  <div class="whitespace"></div>
  <Nav></Nav>

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

</style>

