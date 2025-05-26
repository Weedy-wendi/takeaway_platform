<script lang="ts" setup>
    import { computed, onMounted, reactive, ref } from 'vue';
import Header from '../../components/Header.vue';
    import { useAddCart } from '../../store/Store';
    import { useRouter } from 'vue-router';

    const router=useRouter()

    interface addressDetail{
        id:number,
        name:string,
        tel:string,
        address:string,
        isDefault:boolean
    }

    const store=useAddCart()
    const Address:addressDetail[]=reactive([])
    onMounted(()=>{
        store.userAddress.forEach((item)=>{
            Address.push({
                id:item.id,
                name:item.name,
                tel:item.tel,
                address:item.province+item.city+item.county+item.addressDetail,
                isDefault:item.isDefault
            })
        })
    })

    const chosenAddressId=ref(1001)
    const onAdd=()=>{
        router.push({
            path:'/addressedit',
            query:{
                type:'add'
            }
        })
    }
    const onEdit=(item:any)=>{
        console.log(item.id)
        router.push({
            path:'/addressedit',
            query:{
                id:item.id,
                type:'edit'
            }
        })
    }
        const list = [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ];
</script>

<template>
    <div>
        <Header title="地址管理"></Header>
        <van-address-list
            v-model="chosenAddressId"
            :list="Address"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
        />
    </div>
</template>

<style lang="scss" scoped>
    :deep(.van-button--danger){
        background-color: #ffc400;
        border-color: #ffc400;
    }
    :deep(.van-switch--on){
        background-color: #ffc400;
    }
    :deep(.van-radio__icon){
        display: none;
    }
</style>