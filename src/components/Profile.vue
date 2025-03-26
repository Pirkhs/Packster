<script setup>
import cards from '../data/cards'
import ProfileImage from './ProfileImage.vue'
import Table from './Table.vue'
import CardGallery from './CardGallery.vue'
import { getCardById, getCardTypes, getUserByToken, getUserCards } from '../../axios'
import { ref } from 'vue'
import Loading from './Loading.vue'

const currentUser = ref({})
const loadingUser = ref(null)
const loadingTypes = ref(null)
const cardTypes = ref(null)
const headers = ref(null)
const cardCollection = ref(null)
const tableData = ref([])
const packsOpened = ref(null)

loadingUser.value = "Loading Profile Data"
getUserByToken()
.then(res => {
    currentUser.value = res.data
    packsOpened.value = res.data.packsOpened
    return res.data._id
})
.then(userId => {
    return getUserCards(userId)
})
.then(res => {
    const cardIds = res.data
    return cardIds.map((cardId) => {
        return getCardById(cardId)
    })
})
.then((cards) => {
    return Promise.all(cards)
})
.then(cards => {
    const userCollection = cards.map(card => card.data)
    cardCollection.value = userCollection

    // Number of cards collection for each type
    cardTypes.value.forEach(type => {
        tableData.value.push(
            cardCollection.value.filter(card => card.type === type).length
        )
    })

    // Total cards
    tableData.value.push(userCollection.length)

    // Packs opened
    tableData.value.push(packsOpened.value)
    loadingUser.value = null
})
.catch(err => loadingUser.value = err.message)

// Fetch card types
loadingTypes.value = "Loading Card Types"
getCardTypes()
.then(res => {
    cardTypes.value = res.data.map(type => type.type)
    headers.value = [...cardTypes.value.map(type => `${type} Type Cards`), "Total Cards", "Packs Opened"]
    loadingTypes.value = false
})
.catch(err => loadingTypes.value = err.message)

// Fetch favourite cards 
const favouriteCards = cards.slice(1)

</script>

<template>
    <Loading v-if="loadingUser" :msg="loadingUser"/>
    <main v-else>
        <div class="container-profile">
            <ProfileImage ref="profileimage" class="profile-img"/>
            <div class="container-username">
                <p> {{ currentUser.username }}  </p>
                <font-awesome-icon :icon="['fas', 'pencil']" />
            </div>
        </div>

        <h2> Statistics </h2>
        <Loading v-if="loadingTypes" :msg="loadingTypes"/>
        <Table v-else :headers="headers" :data="tableData"></Table>

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