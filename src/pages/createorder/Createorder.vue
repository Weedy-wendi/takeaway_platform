<script lang="ts" setup>
    import Header from '../../components/Header.vue';
    import { useAddCart } from '../../store/Store';
    import { onMounted, ref } from 'vue';
    import { showConfirmDialog,showToast } from 'vant';
    import { useRouter } from 'vue-router';

    const router=useRouter()

    const store=useAddCart()
    const sum=ref(0)
    const idSet=new Set(store.ids)
    const matchedObject=store.totalItems.filter(item=>idSet.has(item.id))
    matchedObject.forEach(item=>{
        sum.value+=item.totalprice
    })

    const defaultAddress=store.defaultAddress

    const onEdit=()=>{
        router.push("/address")
    }
    const onSubmit=()=>{
        if(matchedObject.length>0){
            showConfirmDialog({
                title: '提交订单',
                message:
                    '确认提交订单吗？',
                })
                .then(() => {
                    //添加订单到后台并且前端跳转到支付页面
                    matchedObject.forEach(item=>{
                        store.OrderItems.push(item)
                    })
                    router.push('/order')
                })
                .catch(() => {
                    // on cancel
            });
        }else{
            showToast('请添加商品');
        }
    }
</script>

<template>
    <div class="create-order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="defaultAddress?.tel" :name="defaultAddress?.name" @click="onEdit" />
        <div class="content">
            <div v-for="(item,index) in matchedObject">
                <van-card
                    :num="item.num"
                    :price="item.price"
                    desc="美味，好吃"
                    :title="item.title"
                    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
                />
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>总价</span>
                <span>￥{{ sum }}</span>
            </div>
            <van-button type="primary" class="pay-btn" block color="#ffc400" @click="onSubmit">结算</van-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .create-order{
        display: flex;
        flex-flow: column;
        height: 100%;
        .content{
            flex: 1;
            overflow-y: auto;
        }
        .pay-wrap{
            padding: 10px 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #e9e9e9;
            > div{
                display: flex;
                justify-content: space-between;
                padding: 0 5%;
                margin: 10px 0;
                font-size: 14px;
                span:nth-child(2){
                    color: red;
                    font-size: 18px;
                }
            }
            .pay-btn{
                width: 90%;
                margin: 0 auto;
            }
        }
    }
</style>