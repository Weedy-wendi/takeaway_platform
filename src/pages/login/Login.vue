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

    const onSubmit=(value:any)=>{
        if(!localStorage.userInfo){
            showToast("账号未注册")
        }else{
            let userInfo=JSON.parse(localStorage.userInfo)
            console.log(value.user)
            if(userInfo.user===value.user){
                if(userInfo['pass']===value['pass']){
                    showToast('登陆成功')
                    localStorage.setItem('isLogin','login')
                    router.push('/home')
                }else{
                    showToast("密码错误")
                }
            }else{
                showToast("账号不存在")
            }
        }
    }
    const toRegister=()=>{
        router.push('/register')
    }
</script>


<template>
    <div class="login">
        <Header title="登录"></Header>
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
                登录
            </van-button>
            <van-button round block  class="register" @click="toRegister">
                注册
            </van-button>
        </div>
        </van-form>
    </div>
</template>

<style lang="scss" scoped>
    .login{
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