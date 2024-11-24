<script setup>
import ProfileImage from './ProfileImage.vue'
</script>

<template>
    <header >
    <h1> Packster </h1>
    <div class="container-profile-img">
      <ProfileImage/>
      <p> [Username] </p>
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
    padding: 1rem;
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