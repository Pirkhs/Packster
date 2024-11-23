<script setup>
import Card from './Card.vue'
import { ref, watch } from 'vue'

const cardCollection = [    
    {
        id: 4,
        name: "Sir Caelum, Oathbreaker",
        image: "https://images.piclumen.com/normal/20241115/1857107894601269249/5c98e328-8172-4bfa-bf6c-0ddd4b5584c8.webp",
        flavourText: "An oath once sworn can be a bond or a curse. I swore to both… and to none. ",
        type: "Normal"
    },
    {
        id: 2,
        name: "Sylph of the Midnight Veil",
        image: "https://images.piclumen.com/normal/20241115/1857107894601269249/d0923162-75b1-49c3-a168-e6f413878cc8.webp",
        flavourText: "You cannot defeat what you cannot see. But you will feel my presence in your soul long after I'm gone.",
        type: "Dark"
    },
    {
        id: 3,
        name: "Blazequake, Infernal Giant",
        image: "https://images.piclumen.com/normal/20241115/1857107894601269249/844914bf-fac2-4de7-bdfa-693b3fe12a9d.webp",
        flavourText: "Where I tread, the land shudders, the sky burns, and only the strongest survive.",
        type: "Fire"
    },
    {
        id: 1,
        name: "Zephara, the Time Weaver",
        image: "https://i.postimg.cc/W3Nh4Z4s/image-x5njpn-RD-1731411315599-raw-1.jpg",
        flavourText: "The past is a puzzle, the future a mystery. But the present? It is mine to command.",
        type: "Light"
    },
]

</script>


<template>
    <div class="container-h1">
        <h1> My Collection </h1>
    </div>

    <div class="container-collection"> 
        <div class="container-collected-card" v-for="card in cardCollection">
            <Card
            class="collected-card"
            :card="card"></Card>
        </div>
    </div>
</template>

<style scoped>

h1 {
    text-align: center;
    border: 1px solid black;
    box-shadow: 0px 0px 10px 1px;
}


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