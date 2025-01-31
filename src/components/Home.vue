<script setup>
import { getAllCards, getRandomCards } from '../../axios'
import cards from '../data/cards'
import Card from './Card.vue'
import Overlay from './Overlay.vue'
import { ref } from 'vue'

const currCardIndex = ref(0)
const canOpenPack = ref(true)
const isPackOpen = ref(false)
const packQuantity = ref(0)
const isModalOpen = ref(false)
const isDropdownOpen = ref(false)
const featuredCards = ref(null)
const packError = ref(null)

const CARDS_IN_PACK = 5
const packedCards = ref([])

getAllCards()
.then(res => {featuredCards.value = res.data.slice(0,3)})
.catch(err => console.log(err))

const generatePackedCards = () => {
    getRandomCards(CARDS_IN_PACK)
    .then(res => packedCards.value = res.data)
    .catch(err => packError.value = {
        _id: "N/A",
        name: "Unexpected Error",
        image: "https://st3.depositphotos.com/1184748/14024/i/450/depositphotos_140244292-stock-photo-black-and-white-background-realistic.jpg",
        flavourText: "There was an error whilst generating pack contents. Please try again",
        type: "Dark"

    })
}

const handleOpenModal = (quantity) => {
    packQuantity.value = quantity
    isModalOpen.value = true
    canOpenPack.value = true
    currCardIndex.value = 0
}

const handleOpenPack = () => {
    canOpenPack.value = false
    isPackOpen.value = true
    packedCards.value = generatePackedCards()
}

const handleNextCard = () => {
    currCardIndex.value += 1;
    if (currCardIndex.value === packedCards.value.length) {
        packQuantity.value -= 1
        handleNextPack()
        return;
    }
}

const handleNextPack = () => {
    isPackOpen.value = false
}

const afterPackReturned = () => {
    canOpenPack.value = true
    currCardIndex.value = 0
}

</script>

<template>

    <transition name="fade">
        <Overlay v-if="isModalOpen && packQuantity > 0"></Overlay>
    </transition>

    <transition name="pop">
        <div v-if="isModalOpen && packQuantity > 0" class="modal">
            <div v-for="card, index in packedCards">
                <!-- No card animation for first card in the pack-->
                    <Card 
                    v-if="currCardIndex === index && currCardIndex === 0"
                    @click="handleNextCard"
                    class="packed-card"
                    :key = "currCardIndex"
                    :card="card"
                    :disableSingleView="true"></Card>
                <transition name="bounce-in">
                    <Card 
                    v-if="currCardIndex === index && currCardIndex !== 0"
                    @click="handleNextCard"
                    class="packed-card"
                    :key = "currCardIndex"
                    :card="card"
                    :disableSingleView="true"></Card>
                </transition>
                
            </div>
            
            <Card class="packed-card" :disableSingleView="true" :card="packError" v-if="packError"></Card>


            <div class="container-modal-flex">

                <transition @after-enter="afterPackReturned" name="slide-down">
                    <div v-if="!isPackOpen" class="container-pack">
                        <div class="pack-ripline"></div>
                        <div class="pack"> 
                            <p id="name"> Packster </p>
                            <transition name="fade">
                                <button v-if="canOpenPack" class="btn-open-pack" @click="handleOpenPack"> Open Pack </button>
                            </transition>
                            <p id="info"> Contains {{ CARDS_IN_PACK }} booster cards </p>
                        </div>
                    </div>
                </transition>

                <br/>
                <transition name="fade">
                    <p v-if="!isPackOpen"> Packs remaining: {{ packQuantity }} </p>
                </transition>
            
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
                    <button v-for="quantity in [1,3,5]" @click="handleOpenModal(quantity)"> {{ quantity }} </button>
                </div>
            </section>
        </transition>
    </section>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
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

.container-cards div{
    flex-basis: 20%
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
    justify-content: center;
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

.container-pack {
    z-index: 10;
}

.pack {
    width: clamp(5.5rem, 13rem, 15.5rem);
    height: clamp(15rem, 18rem, 25rem);
    border-width: clamp(4px, 6px, 8px);
    border: 1px solid black;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.pack #name {
    font-weight: bold;
    font-size: x-large;

}

.pack #info {
    font-style: italic;
    font-size: small;
}

.pack-ripline {
    padding: 1rem;
    border-bottom: 2px dashed black;
    transform-origin: right;
    background-color: lightblue
}

.slide-down-enter-active {
    transition: opacity 2.5s ease-in-out;
}

.slide-down-leave-active  {
    transition: opacity 2.5s ease-in-out, transform 1.5s ease-in-out;
}

.slide-down-enter-from, .slide-down-leave-to  {
    opacity: 0;
    transform: translateY(20rem)
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
    width: clamp(5rem, 10.5rem, 13rem);
    height: clamp(15rem, 18.5rem, 25rem);
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.bounce-in-enter-active {
    animation: slide-right 0.5s
}

.bounce-in-leave-active {
    animation: slide-right 0.5s reverse;
}

@keyframes slide-right {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>

