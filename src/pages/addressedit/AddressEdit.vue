<script lang="ts" setup>
    import { computed, onMounted, reactive, ref } from 'vue';
    import Header from '../../components/Header.vue';
    import { areaList } from '@vant/area-data';
    import { useAddCart } from '../../store/Store';
    import { useRoute } from 'vue-router';
    import { Toast } from 'vant';

    interface additem{
        name: string;
        tel: string;
        province: string;
        city: string;
        county: string;
        addressDetail: string;
        isDefault: boolean;
        areaCode: string;
    }

    const store=useAddCart()
    const route=useRoute()

    const addressinfo=ref<additem>()

    const address=computed(()=>{
        return route.query.type==="add"?"地址新增":"地址编辑"
    })

    const onSave=(content:any)=>{
        if(route.query.type=='add'){
            store.addAddress({id:1003,...content})
        }else{
            store.addAddress({content})
        }
        new Toast("保存成功")
    }
    const onDelete=()=>{

    }
    const onChangeDetail=()=>{

    }
    onMounted(()=>{
        const isaddress=store.userAddress.find((item)=>item.id===Number(route.query.id))
        if(isaddress){
            addressinfo.value=isaddress
        }
    })
</script>

<template>
    <div>
        <Header :title="address"></Header>
        <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            show-search-result
            :address-info="addressinfo"
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
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
</style>