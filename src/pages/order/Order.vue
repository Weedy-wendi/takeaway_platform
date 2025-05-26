<script lang="ts" setup>
    import { reactive } from "vue";
    import Footer from "../../components/Footer.vue"
    import Header from "../../components/Header.vue";
    import Empty from "../../components/Empty.vue";
    import { useAddCart } from "../../store/Store";

    const store=useAddCart()
    

    const navData=['全部','交易完成','待付款','待收货']

</script>
<template>
    <div class="order">
        <Header title="订单"></Header>
        <div class="content">
            <van-tabs v-model:active="active" color="#ffc400">
                <van-tab v-for="(item1,index1) in navData" :key="index1" :title="item1">
                    <div v-for="(item2,index2) in store.OrderItems" 
                        :key="index2"
                        v-if="item1==='全部'&&store.OrderItems.length"
                        >
                        <van-card  
                            :num="item2.num"
                            :price="item2.price"
                            :title="item2.title"
                            desc="美味，好吃"
                            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
                        >
                        </van-card>
                    </div>
                    <Empty v-else></Empty>

                </van-tab>
            </van-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .order{
        display: flex;
        flex-flow: column;
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        .content{
            flex:1;
            overflow-y:auto;
        }
    }
    .empty{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>