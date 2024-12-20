<script setup>
import cards from '../data/cards'
import { useRoute } from 'vue-router'
import Card from '../components/Card.vue'
const route = useRoute()
const cardId = +route.params.cardId

// Fetch card data using cardId
// ...

// Construct card object to be passed into Card component
// ..

const card = cards.filter(card => card.id === cardId)[0]

</script>

<template>
    <main>
        <div class="container-single-card">
            <Card class="single-card" :card="card"/>
        </div>
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