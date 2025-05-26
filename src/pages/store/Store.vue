<script lang="ts" setup>
    import { ref,isProxy, isReactive, isRef, reactive,toRefs, onMounted } from "vue";
    import Header from "../../components/Header.vue"
    import Foodlist from "./components/Foodlist.vue";
    import { useAddCart } from "../../store/Store.ts"
    import { storeToRefs } from "pinia";
    import axios from "axios";
    import { getApiStoredata } from "../../api/api.ts";

    let title="店铺"

    const store=storeToRefs(useAddCart())
    console.log(store.allTotalcount.value)
    

    const data=reactive({
        title:"鱼儿酸菜鱼",
        img:"",
        storeData:[]

    })
    const getStoredata=()=>{
        getApiStoredata().then((res)=>{
            data.storeData=res.storeData
        })
        /*axios.get('/home/getStoredata')
        .then((res)=>{
            console.log(res)
            if(res.data.code==200){
                data.storeData=res.data.data.storeData
            }
        })*/
    }
    onMounted(()=>{
        getStoredata()
    })
</script>

<template>
    <div class="storeDetails">
        <Header :title="title"></Header>
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="name">
                    {{ title }}
                    <img class="store-img" src="../../assets/vue.svg" alt="" >
                </div>
                <div>
                    <van-tabs color="#ffc400">
                        <van-tab v-for="(item,index) in data.storeData" :key="index" :title="item.name">
                            <Foodlist :index="index" :fooddata="item.data"></Foodlist>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-action-bar-icon icon="cart-o" to="/cart" text="购物车" :badge="store.allTotalcount.value" ></van-action-bar-icon>
            <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
        </van-action-bar>

    </div>
</template>

<style lang="scss" scoped>
    .storeDetails{
        height: 100%;
        display: flex;
        flex-flow: column;
        .content{
            flex: 1;
            overflow-y: auto;
            .img{
                background: url("../../assets/liii.png") no-repeat center/cover;
                width: 100%;
                height: 150px;
            }
            .foodSort{
                height: 500px;
                background-color: #fff;
                margin-top: -30px;
                border-radius: 20px 20px 0 0;
                .sort{
                    margin-top: 10px;
                }
                .name{
                    display: flex;
                    padding: 20px;
                    justify-content: space-between;
                    .store-img{
                        width: 80px;
                        height: 80px;
                        border-radius: 10px;
                        margin-top: -30px;
                    }
                }
            }
        }
    }
</style>