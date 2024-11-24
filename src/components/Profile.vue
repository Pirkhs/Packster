<script setup>
import ProfileImage from './ProfileImage.vue'

const handleImageClick = () => {
    console.log("yo yo yo")
}

</script>

<template>
    <main>
        <div class="container-profile">
            <ProfileImage @click="handleImageClick" class="profile-img"/>
            <p id="username"> Username  </p>
            <font-awesome-icon :icon="['fas', 'pencil']" /> 
        </div>
    </main>
</template>

<style scoped>
.container-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
}

.profile-img {
    width: 7.5rem;
    height: 7.5rem;
}

.container-profile #username {
    border: 1px solid black;
    border-radius: 40px;
    background-color: aliceblue;
    padding-inline: 1rem;
}
</style>