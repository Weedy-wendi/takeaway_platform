<script lang="ts" setup>
    import { useRouter } from 'vue-router';
    defineProps(['title'])

    const router=useRouter()

    const toBack=()=>{
        router.back()
    }
</script>

<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack()"></van-icon>
        {{ title }}
    </div>
</template>

<style lang="scss" scoped>
    .header{
        background-color:#fff;
        height: 40px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #d7d7d7;
        .edit{
            font-size: 16px;
            position: absolute;
            right: 15px;
            font-weight: normal;
        }
        .icon{
            position: absolute;
            left: 10px;
        }
    }
</style>