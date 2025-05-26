<script lang="ts" setup>
    import { computed, ref } from 'vue';
    import { useAddCart } from '../../../store/Store';
    import { useRouter } from 'vue-router';
    import { showToast } from 'vant';

    interface NumAndPrice{
        id:number,
        num:number,
        price:number,
    }

    const router=useRouter()

    const store=useAddCart()

    const isIndeterminate=ref(false)
    const checked=ref<number[]>([])
    const ischeckAll=ref(false)
    const totalprice=ref<number>(0)
    const Click=()=>{
        const checkedSet=new Set(checked.value)
        totalprice.value=store.totalItems
        .filter(item=>checkedSet.has(item.id))
        .reduce((sum,item)=>sum+item.price*item.num,0)
    }

    
    const handlecheckAll=(ischeck:boolean)=>{
        checked.value=ischeck?store.totalItems.map(item=>item.id):[]
        isIndeterminate.value=false
    }
    
    const checkedChange=(value:string[])=>{
        const checkedcount=value.length
        ischeckAll.value=(checkedcount==store.totalItems.length)
        isIndeterminate.value=checkedcount>0&&checkedcount<store.totalItems.length
        Click()//@change在@click后面触发导致页面渲染无法同步
    }

    

    const onSubmit=()=>{
        if(checked.value.length===0){
            showToast('请添加商品')
        }else{
            store.ids=checked.value
            router.push('/createorder')
        }
    }
</script>

<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="checkedChange" checked-color="#ffc400">
                <div v-for="item in store.totalItems" :key="item.id">
                    <div class="left">
                        <van-checkbox :name="item.id" @click="Click"></van-checkbox>
                        <img src="../../../assets/vue.svg" alt="图片" badge="11">
                        <div class="text">
                            <div class="title">
                                {{item.title}}
                                <div class="price">
                                    {{ "￥"+item.price }}
                                </div>
                            </div>
                            <van-stepper v-model="item.num" min="0" @click="Click"/>
                        </div>
                    </div>
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar class="submit-all" :price="totalprice*100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="ischeckAll" :indeterminate="isIndeterminate" @change="handlecheckAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<style lang="scss" scoped>
    .cartDetail{
        font-size: 14px;
        flex: 1;
        position: relative;
        overflow-y: auto;
        padding: 20px 20px 55px;
        .submit-all{
            position: fixed;
            bottom: 50px;
        }
        .buy{
            position: fixed;
            bottom: 48px;
            right: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: #fff;
            border-radius: 10px;
            height: 50px;
            align-items: center;
            padding: 0 16px;
            box-sizing: border-box;
            
            .delete{
                color: #fff;
                background-color: #ffc400;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                width: 110px;
                height: 40px;
                text-align: center;
                line-height: 40px;
            }
        }
        .content{
            padding: 10px;
            background-color: #fff;
            border-radius: 10px;
        }
    }
    .left{
                display: flex;
                align-items: center;
                width: 100%;
                margin: 10px 0px 10px 0px;
                img{
                    margin-left: 10px;
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                    border-radius: 10px;
                }
                .text{
                    display: flex;
                    flex-flow: row;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                    position: relative;
                    flex: 1;
                    
                    .title{
                        font-size: 16px;
                        width: 150px;
                        text-align: left;
                    }
                    .price{
                        font-size: 16px;

                    }
                }
            }
    :deep(.van-checkbox__label){
        display: flex;
        margin: 10px 10px 10px 10px; 
        
    }
</style>