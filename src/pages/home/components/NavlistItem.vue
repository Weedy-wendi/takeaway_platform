<script lang="ts" setup>
    defineProps(['itemContent'])
    import {useRouter} from 'vue-router'

    const router=useRouter()
    function toStore(){
        router.push('/store')
    }
</script>

<template>
    <div class="item" @click="toStore">
        <img :src="itemContent.pic_url" alt="图片">
        <div class="item-right">
            <div class="title">{{ itemContent.name }}</div>
            <div class="score">评分：{{ itemContent.wm_poi_score }}</div>
            <div class="sales">月售：{{ itemContent.month_sale_num }}</div>
            <div class="price">起步价：{{ itemContent.min_price }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .item{
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        padding: 10px;
        img{
            width: 120px;
            height: 120px;
            border-radius: 10px;
            margin-right: 20px;
            object-fit: cover;//裁剪
        }
        .item-right{
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            .title{
                font-size: 17px;
            }
        }
    }
</style>