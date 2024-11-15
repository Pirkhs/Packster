<template>
    <header >
    <h1> Packster </h1>
    <div class="container-profile-img">
      <img class="profile-img" alt="Your personal profile image" src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"> 
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
</style>