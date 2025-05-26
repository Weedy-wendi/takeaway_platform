<script lang="ts" setup>
    import Header from '../../components/Header.vue';
    import { useRouter } from 'vue-router';
    import { reactive } from 'vue';
import { showToast } from 'vant';

    const router=useRouter()

    const data=reactive({
        username:"",
        password:""
    })

    const register=(value:any)=>{
        localStorage.setItem('userInfo',JSON.stringify(value))
        showToast("注册成功")
        router.push('/login')
    }
    const onSubmit=(value:any)=>{
        console.log("111111121231")
        if(localStorage.userInfo){
            console.log("2222222")
            let userInfo=JSON.parse(localStorage.getItem('userInfo')||'null')
            if(userInfo['user']===value['user']){
                console.log("33333333")
                showToast('该用户已存在')
                return
            }else{
                register(value)
            }
        }else{
            register(value)
        }
    }
    const toLogin=()=>{
        router.push('/login')
    }
</script>


<template>
    <div class="register">
        <Header title="注册"></Header>
        <div class="img">丑团</div>
        <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                v-model="data.username"
                name="user"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="data.password"
                type="password"
                name="pass"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                注册
            </van-button>
            <van-button round block  class="register" @click="toLogin">
                返回登录
            </van-button>
        </div>
        </van-form>
    </div>
</template>

<style lang="scss" scoped>
    .register{
        .img{
            width: 200px;
            height: 200px;
            background-color: #ffc400;
            font-size: 80px;
            line-height: 200px;
            text-align: center;
            border-radius: 40px;
            margin: 20px auto;
        }
        .register{
            margin-top: 20px;
        }
    }
</style>