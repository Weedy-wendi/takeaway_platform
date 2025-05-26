<script lang="ts" setup>
    import { ref } from 'vue';
    import { useAddCart } from '../../../store/Store.ts';
    import { showToast } from 'vant';
    defineProps(['fooddataItems'])

    const isadd=ref(false)
    const show=ref(false)
    interface Item{
        pic:string,
        title:string,
        num:number,
        price:number,
        id:number,
        add:boolean,
    }

    const store=useAddCart()
    const isaddStore=(count:number,item:Item)=>{
        if(count<=0){
            show.value=true
            isadd.value=false
            showToast('请添加商品');
        }else{
            store.addCartUpdater(item)
            isadd.value=true
        }
    }


</script>

<template>
    <div class="content-item" v-for="(item,index) in fooddataItems.children" :key="index">
        <div class="left">
            <img src="../../../assets/vue.svg" alt="图片">
            <div class="text">
                <div class="title">
                    {{item.title}}
                </div>
                <van-stepper v-model="item.num" min="0" />
                <van-icon name="add-o" @click="isaddStore(item.num,item)"/>
            </div>
        </div>
        <div class="price"></div>
    </div>
</template>

<style lang="scss" scoped>
    .content-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .price{
            font-size: 16px;
            font-weight: 600;
        }
        .left{
            display: flex;
            align-items: center;
            flex: 1;
            img{
                margin-left: 10px;
                width: 60px;
                height: 60px;
                margin-right: 10px;
                border-radius: 10px;
            }
            .text{
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                height: 100%;
                position: relative;
                flex: 1;
                .title{
                    font-size: 16px;
                }
                .van-icon{
                    color: red;
                    font-size: 20px;
                    position: absolute;
                    right: 4px;
                    bottom: 4px;
                }
            }
        }
    }
        .alert{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            background-color: rgb(255, 255, 255);
        }
</style>