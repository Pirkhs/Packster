<script setup>
import ProfileImage from './ProfileImage.vue'
import Table from './Table.vue'
import CardGallery from './CardGallery.vue'

// Fetch card types
const cardTypes = ["Normal", "Fire", "Water", "Grass", "Earth", "Electric", "Dark", "Light"]

// Fetch statistics data
const headers = ["Packs Opened", "Unique Cards", ...cardTypes.map(type => `${type} Type Cards`), "Total Cards"]
const testData = Array(headers.length).fill("________")

// Fetch favourite cards 
const favouriteCards = [    
    {
        id: 2,
        name: "Sylph of the Midnight Veil",
        image: "https://images.piclumen.com/normal/20241115/1857107894601269249/d0923162-75b1-49c3-a168-e6f413878cc8.webp",
        flavourText: "You cannot defeat what you cannot see. But you will feel my presence in your soul long after I'm gone.",
        type: "Dark"
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
    <main>
        <div class="container-profile">
            <ProfileImage ref="profileimage" class="profile-img"/>
            <div class="container-username">
                <p> Username  </p>
                <font-awesome-icon :icon="['fas', 'pencil']" />
            </div>
        </div>

        <h2> Statistics </h2>
        <Table :headers="headers" :data="testData"></Table>

        <h2> Favourite Cards </h2>
        <CardGallery :cardCollection="favouriteCards"></CardGallery>
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