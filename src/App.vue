<script setup>
  import Header from './components/Header.vue'
  import Nav from './components/Nav.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <Header></Header>
  <div class="content-divider"></div>
  <div class="content">
    <RouterView />
  </div>
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

.content-divider {
  padding: 5rem;
}

.content {
  margin: 8%;
}

</style>

