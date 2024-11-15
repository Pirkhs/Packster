<script setup>
    const featuredCards = [
        {
            id: 1,
            name: "Zephara, the Time Weaver",
            image: "https://i.postimg.cc/W3Nh4Z4s/image-x5njpn-RD-1731411315599-raw-1.jpg",
            flavourText: "The past is a puzzle, the future a mystery. But the present? It is mine to command.",
            type: "Light"
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
            flavourText: "Where Blazequake treads, the land shudders, the sky burns, and only the strongest survive.",
            type: "Fire"
        }
        /*
        {
            id: 4,
            name: "Sir Caelum, Oathbreaker",
            image: "https://images.piclumen.com/normal/20241115/1857107894601269249/5c98e328-8172-4bfa-bf6c-0ddd4b5584c8.webp",
            flavourText: "An oath once sworn can be a bond or a curse. I swore to both… and to none.",
            type: "Normal"
        }
        */
    ]
    import Card from './Card.vue'
</script>

<template>
    
    <section class="container-featured">
        <h1> Featured Cards </h1>

        <div class="container-cards" >
            <Card v-for="card in featuredCards" :card="card"/>
        </div>

    </section>
    <section class="container-packs">
        <RouterLink to="/packs">Open Packs</RouterLink>
    </section>
</template>

<style scoped>

.container-featured {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 4px 50px -50px black;
    background-color: lightgrey;
    padding: 1rem;
}

h1 {
    text-align: center;
}

.container-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;

}

.container-packs {
    border: 2px solid white;
}
</style>

