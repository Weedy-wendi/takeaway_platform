<script lang="ts" setup>
    import { reactive,ref,toRefs } from 'vue';
    import FoodlistItem from './FoodlistItem.vue';
    const {index,fooddata}=defineProps(['index','fooddata'])


    const itemIndex=ref(0)

    const onClickNav=(i:number)=>{
        itemIndex.value=i
        
    }
</script>

<template>
    <div class="foodlist">
        <van-tree-select
            :items="fooddata.items"
            height="88vw"
            main-active-index="{{ mainActiveIndex }}"
            :active-id="fooddata.items"
            @click-nav="onClickNav"
            bind:click-item="onClickItem"
            v-if="index===0"
        >
            <template #content slot="content">
                <FoodlistItem :fooddataItems="fooddata.items[itemIndex]"></FoodlistItem>
            </template>
        </van-tree-select>
        <div v-else>
            {{ fooddata.content }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .food-list{
        margin-top: 20px;
        .item-bg{
            padding: 10px;
        }
    }
    :deep(.van-tree-select__item--active){
        color:#ffc400;
    }
    :deep(.van-sidebar-item--select::before){
        background-color: #ffc400;
    }
</style>