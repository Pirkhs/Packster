<script setup>
    import { ref, computed } from 'vue'
    import { useMouseInElement } from '@vueuse/core'
    const targetCard = ref(null)
    
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(targetCard)

    const cardTransform = computed(() => {
        const MAX_ROTATION = 6
        
        const rX = (
            MAX_ROTATION / 2 -
            (elementY.value / elementHeight.value) * MAX_ROTATION
        ).toFixed(2)
        
        const rY = (
            (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
        ).toFixed(2)

        return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rx}deg) rotateY(${rY}deg)` 
    })

    const props = defineProps({
        card: Object
    })

    const { id, name, image, flavourText, type } = props.card

    const typeToBg = {
        "Earth": "rgba(227, 186, 143, 0.5)",
        "Dark": "rgba(0, 0, 0, 0.5)",
        "Normal": "rgba(189, 195, 199, 0.5)",
        "Fire": "rgba(255, 76, 48, 0.5)",
        "Light": "rgba(250, 250, 250, 0.5)",
        "Water": "rgba(3, 138, 255, 0.5)",
        "Grass": "rgba(147, 250, 165, 0.5)",
        "Electric": "rgba(255, 255, 159, 0.5)",
    }

    const bgColor = ref(typeToBg[type])

</script>

<template>
    <div
    class="card">
        <p class="card-name"> {{ name }} </p>
        <img class="card-img" :src="image" :alt="name"/>
        <p class="card-flavour-txt"> " {{ flavourText }} " </p>
        <p class="card-id"> Collector's ID: {{ id }} </p>
    </div>
</template>

<style scoped>

.card {
    width: clamp(5rem, 12.5rem, 15rem);
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