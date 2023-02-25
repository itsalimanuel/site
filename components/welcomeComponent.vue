<script setup>
import gsap from 'gsap'
</script>

<template>
    <div id="intro">
        <div class="-item" v-for="i in 800"></div>
    </div>
</template>

<style lang="sass" scoped>
#intro
    position: relative
    height: 100vh
    background-color: #27272a
    width: 100%
    display: grid
    grid-template-columns: repeat(40,1fr)
    grid-template-rows: repeat(20,1fr)
    .-item
        width:100%
        height: 100%
        border: 1px solid #fff
        background: linear-gradient(90deg,#0c0c0d,#0c0c0d),linear-gradient(to bottom right,#00dc82,#36e4da,#16a79e)
        background-clip: padding-box,border-box
        background-origin: padding-box,border-box


</style>