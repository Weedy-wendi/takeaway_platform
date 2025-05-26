<script lang="ts" setup>
    import { useAddCart } from '../store/Store';
    const store=useAddCart()
    const count=store.allTotalcount
</script>

<template>
    <div class="footer">
        <div class="item">
            <RouterLink to='/home' class="nav-item" active-class="nav-color">
                <van-icon name="home-o" size="30"/>
                首页
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to='/cart' class="nav-item" active-class="nav-color">
                <van-icon name="cart-o" size="30" />
                购物车
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to='/order' class="nav-item" active-class="nav-color">
                <van-icon name="coupon-o" size="30"/>
                订单
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to='/mine' class="nav-item" active-class="nav-color">
                <van-icon name="user-o" size="30"/>
                我的
            </RouterLink>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        width:100%;
        display:flex;
        background-color: #fff;
        border-top: 1px solid #eee;
        .item{
            flex:1;
            .nav-color{
                color:#ffc400;
            }
            .nav-item{
                display: flex;
                flex-flow: column;
                align-items: center;
                white-space: nowrap;
            }
        }
    }
</style>