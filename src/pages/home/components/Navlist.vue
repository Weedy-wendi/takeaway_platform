<script lang="ts" setup>
    import NavlistItem from "./NavlistItem.vue"

    let props=defineProps(['navlist'])

</script>

<template>
    <div v-for="item in navlist">
        <NavlistItem :itemContent="item"></NavlistItem>
    </div>
</template>

<style>

</style>