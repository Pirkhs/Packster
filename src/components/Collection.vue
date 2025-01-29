<script setup>
import cards from '../data/cards.js'
import { ref, watch } from 'vue'
import CardGallery from './CardGallery.vue' 
import { getAllCards } from '../../axios.js';

const cardCollection = ref([])

getAllCards()
.then(res => {
    cardCollection.value = res.data
}
)


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
</style>