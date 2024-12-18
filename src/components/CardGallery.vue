<script setup>
import { watch, ref } from 'vue'
import Card from './Card.vue'
const {cardGallery} = defineProps(["cardGallery"])

</script>

<template>
    <p> Click/Tap on a Card to View More </p>
    <div class="container-collection"> 
        <div class="container-collected-card" v-for="card in cardGallery">
            <Card
            class="collected-card"
            :card="card"></Card>
        </div>
    </div>
</template>

<style scoped>

.container-collection {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-auto-rows: 1fr;
    column-gap: 1%;
    row-gap: 5%;
}

@media screen and (max-width: 600px) {
    .container-collection { grid-template-columns: repeat(2, 1fr); }
}
@media screen and (min-width: 600px) {
    .container-collection { grid-template-columns: repeat(4, 1fr); }
}
@media screen and (min-width: 768px) {
    .container-collection { grid-template-columns: repeat(5, 1fr); }
}
@media screen and (min-width: 992px) {
    .container-collection { grid-template-columns: repeat(6, 1fr); }
}

.container-collected-card {
    align-self: stretch;
 }

.collected-card {
    height: 100%;
}
</style>