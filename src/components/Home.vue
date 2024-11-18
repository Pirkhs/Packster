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
        flavourText: "Where I tread, the land shudders, the sky burns, and only the strongest survive.",
        type: "Fire"
    },
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

const packedCards = [    
    {
        id: 4,
        name: "Sir Caelum, Oathbreaker",
        image: "https://images.piclumen.com/normal/20241115/1857107894601269249/5c98e328-8172-4bfa-bf6c-0ddd4b5584c8.webp",
        flavourText: "An oath once sworn can be a bond or a curse. I swore to both… and to none.",
        type: "Normal"
    }
]

const isPackOpen = ref(false)
const packQuantity = ref(5)
const isModalOpen = ref(true)
const isDropdownOpen = ref(false)

const handleOpenPack = () => {
    isPackOpen.value = true
}

</script>

<template>

    <transition name="fade">
        <div v-if="isModalOpen && packQuantity > 0" class="overlay"></div>
    </transition>

    <transition name="pop">
        <div v-if="isModalOpen && packQuantity > 0" class="modal">

            <Card 
            v-if="isPackOpen" 
            class="packed-card"
            :card="packedCards[0]"></Card>

            <div class="container-modal-flex">

                <transition name="slide-down">
                    <div v-if="!isPackOpen">
                        <div class="pack-ripline"></div>
                        <div class="pack"> 
                            <p> Packster </p>
                            <p> Contains 5 booster cards </p>
                        </div>
                    </div>
                </transition>

                <br/>

                <transition>
                    <button v-if="!isPackOpen" class="btn-open-pack" @click="handleOpenPack"> Open Pack </button>
                </transition>
              

                <p v-if="!isPackOpen"> Packs remaining: {{ packQuantity }} </p>
                <p> Click to show next card </p>

            </div>
        </div>
    </transition>


    <section class="container-featured">
        <h1> Featured Cards </h1>

        <div class="container-cards" >
            <Card v-for="card in featuredCards" :card="card"/>
        </div>
        
        <button class="open-btn" @click="isDropdownOpen = !isDropdownOpen"> Open Packs </button>
        <transition name="drop">
            <section v-if="isDropdownOpen" class="container-dropdown">
                <p> How many packs to open? </p>
                <div class="pack-sizes">
                    <button @click="isModalOpen=true; packQuantity = 1"> 1 </button>
                    <button @click="isModalOpen=true; packQuantity = 3"> 3 </button>
                    <button @click="isModalOpen=true; packQuantity = 5"> 5 </button>
                </div>
            </section>
        </transition>
    </section>
</template>

<style scoped>

.overlay {
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a0e13;
    opacity: 0.6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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

.open-btn {
    margin-top: 1rem;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 10px;
}

.container-dropdown {
    border: 1px solid black;
    position: absolute;
    left: 0; 
    right: 0; 
    margin-inline: auto; 
    width: fit-content;
    padding: 0.5rem;
    transform-origin: top;
    transition: transform .4s ease-in-out;
}

.drop-enter-from, .drop-leave-to{
  transform: scaleY(0);
}

.pack-sizes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.pack-sizes button {
    width: 100%;
}

.modal {
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    padding: 1rem;
    width: 70%;
    height: 70%;
    background-color: white;;
    z-index: 999;
    border: 1px solid black;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.container-modal-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}

.pack {
    width: clamp(5.5rem, 13rem, 15.5rem);
    height: clamp(15rem, 17.5rem, 25rem);
    border-width: clamp(4px, 6px, 8px);
    border: 1px solid black;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.pack-ripline {
    padding: 1rem;
    border-bottom: 2px dashed black;
    transform-origin: right;
    background-color: lightblue
}

.slide-down-enter-active , .slide-down-leave-active  {
    transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.slide-down-enter-from, .slide-down-leave-to  {
    opacity: 0;
    transform: translateY(15rem)
}

.slide-down-enter-active .pack-ripline , .slide-down-leave-active .pack-ripline  {
    transition: transform 0.7s ease-in;
}

.slide-down-enter-from .pack-ripline, .slide-down-leave-to .pack-ripline  {
    transform: scaleX(0)
}


.btn-open-pack {
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ;
    padding: 0.5rem;
}

.btn-open-pack:active {
    transform: scale(0.7);
}

.packed-card {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: -5
}

</style>

