<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
    disableSingleView: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const id = props.card._id
const { name, image, flavourText, type } = props.card
const { disableSingleView} = props

const typeToBg = {
    "Normal": "rgba(189, 195, 199)",
    "Fire": "rgba(255, 76, 48)",
    "Water": "rgba(3, 138, 240)",
    "Grass": "rgba(147, 250, 165)",
    "Earth": "rgba(227, 186, 143)",
    "Electric": "rgba(255, 255, 159)",
    "Dark": "rgba(105, 105, 105)",
    "Light": "rgba(250, 250, 250)",
}

const bgColor = ref(typeToBg[type])

const router = useRouter()

const handleCardClick = () => {
    if (disableSingleView) return;

    router.push({
        path: `/card/${id}`
    })
}

</script>

<template>
    <div class="card" @click="handleCardClick">
        <p class="card-name"> {{ name }} </p>
        <img class="card-img" :src="image" :alt="name" rel="preload"/>
        <p class="card-flavour-txt"> " {{ flavourText }} " </p>
        <p class="card-id"> Collector's ID: {{ id }} </p>
    </div>
</template>

<style scoped>

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(0.2rem, 2vw, 0.5rem);
    border-width: clamp(4px, 6px, 8px);
    border: solid lightgrey;
    border-radius: 12px;;
    background: v-bind(bgColor);
    color: black;
}

.card-name {
    font-size: clamp(0.7rem, 3vw, 1rem);
    font-weight: 900;
}

.card-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: clamp(90%, 95%, 100%);
    border-width: clamp(2px, 3px, 4px);
    border: solid white
}

.card-flavour-txt {
    display: -webkit-box;
    font-size: clamp(0.5rem, 2vw, 0.7rem);
    font-style: italic; 
}

.card-id {
    font-size: clamp(0.5rem, 2vw, 0.7rem);
    text-align: right; 
}

</style>