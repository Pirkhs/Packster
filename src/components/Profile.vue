<script setup>
import cards from '../data/cards'
import ProfileImage from './ProfileImage.vue'
import Table from './Table.vue'
import CardGallery from './CardGallery.vue'
import { getUserByToken } from '../../axios'
import { ref } from 'vue'

const currentUser = ref({})

getUserByToken()
.then(res => currentUser.value = res.data)

// Fetch card types
const cardTypes = ["Normal", "Fire", "Water", "Grass", "Earth", "Electric", "Dark", "Light"]

// Fetch statistics data
const headers = ["Packs Opened", "Unique Cards", ...cardTypes.map(type => `${type} Type Cards`), "Total Cards"]
const testData = Array(headers.length).fill("________")

// Fetch favourite cards 
const favouriteCards = cards.slice(1)

</script>

<template>
    <main>
        <div class="container-profile">
            <ProfileImage ref="profileimage" class="profile-img"/>
            <div class="container-username">
                <p> {{ currentUser.username }}  </p>
                <font-awesome-icon :icon="['fas', 'pencil']" />
            </div>
        </div>

        <h2> Statistics </h2>
        <Table :headers="headers" :data="testData"></Table>

        <h2> Favourite Cards </h2>
        <CardGallery :cardGallery="favouriteCards"></CardGallery>
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

.container-username {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

}

.container-username p {
    border: 1px solid black;
    border-radius: 40px;
    background-color: aliceblue;
    padding-inline: 1rem;
}

h2 {
    text-align: center;
    border-bottom: 1px solid black;
    width: 100%;
    box-shadow: 0 6px 7px -7px grey;
}

</style>