<script lang="ts" setup>
    import Footer from "../../components/Footer.vue"
    import Empty from "../../components/Empty.vue";
    import Header from "../../components/Header.vue";
    import CartDetail from "./components/CartDetail.vue";
    import { ref } from "vue";

    import { useAddCart } from "../../store/Store";
    const store=useAddCart()
</script>
<template>
    <div class="cart">
        <Header title="购物车"></Header>
        <CartDetail v-if="store.allTotalcount!=0"></CartDetail>
        <Empty v-if="store.allTotalcount==0"></Empty>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .cart{
        display: flex;
        flex-flow: column;
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        text-align: center;
        justify-content: center;
        .content{
            flex:1;
            overflow-y:auto;
        }
    }
</style>