<script lang="ts" setup>
    import { reactive } from 'vue';
    import Header from '../../components/Header.vue';
    import { showToast } from 'vant';
    import { useRouter } from 'vue-router';
    const router=useRouter()

    const data=reactive({
        name:'',
        sign:'战胜自己是命运的强者',
        pass:''
    })
    const save=()=>{
        if(data.name&&data.pass){
            let userInfo=JSON.parse(localStorage.userInfo)
            let newUserInfo={
                user:data.name||userInfo.name,
                pass:data.pass||userInfo.pass,
            }
            localStorage.setItem('userInfo',JSON.stringify(newUserInfo))
            showToast("已保存")
            router.push('/mine')
        }else{
            showToast("请输入内容")
        }
    }
    const logout=()=>{
        localStorage.removeItem('isLogin')
        showToast("退出成功")
        router.push('/login')
    }
</script>

<template>
    <div>
        <Header title="账号管理"></Header>
        <div>
            <van-cell-group inset>
                <van-field v-model="data.name" label="昵称" placeholder="请输入昵称" />
                <van-field v-model="data.sign" label="个性签名" placeholder="请输入个性签名" disabled/>
                <van-field v-model="data.pass" label="密码" placeholder="请输入密码" />
            </van-cell-group>

        </div>
        <van-button class="save-btn" type="primary" round block @click="save">保存</van-button>
        <van-button class="save-btn" type="danger" round block @click="logout">退出登录</van-button>
    </div>
</template>

<style lang="scss" scoped>
    :deep(.van-button--danger){
        background-color: #ffc400;
        border-color: #ffc400;
    }
    .save-btn{
        display: flex;
        width: 92%;
        margin: 20px auto;
        text-align: center;
        justify-content: center;
    }
</style>