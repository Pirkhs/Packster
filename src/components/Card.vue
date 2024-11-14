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

    const { id, name, image, flavourText } = props.card

</script>

<template>
    <div
    class="card">
        <p class="card-name"> {{ name }} </p>
        <img class="card-img" :src="image"/>
    </div>
</template>

<style scoped>
.card {
    border: 5px solid black;
    background: #F3F3F3;
}


/* Desktop card sizes */
@media all and (min-width: 1200px) {
    .card {
        width: 10em;
        height: 15em;
    }
}

/* Mobile card sizes */
@media all and (max-width: 767px) {
    .card {
        width: 5em;
        height: 10em;
    }
}

.card-name {
    font-weight: bold;
}

.card-img {
    width: 100%;
}

</style>