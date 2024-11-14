<script setup>
    const featuredCards = [
        {
            id: 1,
            name: "Zephara, the Time Weaver",
            image: "https://i.postimg.cc/W3Nh4Z4s/image-x5njpn-RD-1731411315599-raw-1.jpg",
            flavourText: "The past is a puzzle, the future a mystery. But the present? It is mine to command.",
        }
    ]
    import Card from './Card.vue'
</script>

<template>
    
    <section class="container-featured">
        <h1> Featured Cards </h1>

        <div class="h1-divider"></div>

        <div class="container-cards" >
            <Card v-for="card in featuredCards" :card="card"/>
        </div>

    </section>
    <section class="container-packs">
        <p> Open Packs </p>
    </section>
</template>

<style scoped>

.container-featured {
    border: 1px solid black;
    border-radius: 10px;;
}

h1 {
    text-align: center;
}

.h1-divider {
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid black;
}

.container-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1em;
}

.container-packs {
    border: 2px solid white;
}
</style>