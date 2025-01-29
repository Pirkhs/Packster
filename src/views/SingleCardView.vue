<script setup>
import cards from '../data/cards'
import { useRoute } from 'vue-router'
import Card from '../components/Card.vue'
import { getCardById } from '../../axios'
import { ref } from 'vue'

const route = useRoute()

const errorMsg = ref(null)
const cardId = route.params.cardId
const card = ref(null)

getCardById(cardId)
.then(res => {card.value = res.data})
.catch(err => errorMsg.value = err.message)

</script>

<template>
    <main>
        <div v-if="card" class="container-single-card">
            <Card class="single-card" :card="card"/>
        </div>
        <div v-else-if="errorMsg"> {{ errorMsg }}</div>
        <div v-else> Loading Card...</div>
    </main>
</template>

<style scoped>
.container-single-card {
    display: flex;
    justify-content: center;
}

.single-card {
    width: 25rem;
    height: 35rem;
}
</style>