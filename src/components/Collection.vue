<script setup>
import { ref } from 'vue'
import CardGallery from './CardGallery.vue' 
import { getCardById, getUserByToken, getUserCards } from '../../axios.js';
import Card from './Card.vue';

const cardCollection = ref({})
const currentUser = ref({})
const cardError = ref(null)

getUserByToken()
.then(res => currentUser.value = res.data)
.then(() => {
    return getUserCards(currentUser.value._id)
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
})
.catch((err) => cardError.value = {
        _id: "N/A",
        name: "Unexpected Error",
        image: "https://st3.depositphotos.com/1184748/14024/i/450/depositphotos_140244292-stock-photo-black-and-white-background-realistic.jpg",
        flavourText: "Error whilst getting your card collection. Please try again",
        type: "Dark"
    })


/* TBF: Faulty Search Feature !!

const searchResults = ref(cardCollection)
const search = ref("")

watch(search, () => {
    searchResults.value = cardCollection.filter(card => card.name.toLowerCase().includes(search.value.toLowerCase()))
})

*/

</script>

<template>
    <div class="container-h1">
        <h1> My Collection </h1>
    </div>
    <input type="text" placeholder="Search..."/>  
    <CardGallery v-if="cardCollection.length" :cardGallery="cardCollection"></CardGallery>
    <Card v-else-if="cardError" class="packed-card" :disableSingleView="true" :card="cardError" ></Card>
    <p v-else-if="cardCollection.length === 0"> No cards to show. Start opening packs to expand your collection! </p>


</template>

<style scoped>
h1 {
    text-align: center;
    border: 1px solid black;
    box-shadow: 0px 0px 10px 1px;
}

input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5;
    margin-bottom: 1rem;
}

.packed-card {
    width: clamp(5rem, 10.5rem, 13rem);
    height: clamp(15rem, 18.5rem, 25rem);
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
</style>