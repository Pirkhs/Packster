<script setup>
import Card from './Card.vue'
import { ref } from 'vue'
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
    
const isDropdownOpen = ref(false)

const toggleDropdownOpen = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

</script>

<template>
    
    <section class="container-featured">
        <h1> Featured Cards </h1>

        <div class="container-cards" >
            <Card v-for="card in featuredCards" :card="card"/>
        </div>
        
        <section class="container-open">
            <button @click="toggleDropdownOpen">Open Packs</button>
        </section>
        <transition name="slide">
            <section v-if="isDropdownOpen" class="container-pack-options">
                <p> How Many Packs to Open ? </p>
                <div class="pack-options">
                    <button> 1 </button>
                    <button> 3</button>
                    <button> 5</button>
                    
                </div>
            </section>
        </transition>

    </section>
    
</template>

<style scoped>

.container-featured {
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.5);
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

.container-open {
    margin-top: 1rem;
    text-align: center;
}

.container-open button {
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 10px;
}

.container-pack-options {
    border: 1px solid black;
    position: absolute;
    left: 0; 
    right: 0; 
    margin-inline: auto; 
    width: fit-content;
    transform-origin: top;
    transition: transform .4s ease-in-out;
}

.slide-enter-from, .slide-leave-to{
  transform: scaleY(0);
}

.pack-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
</style>

