<script lang="ts" setup>
    import { reactive } from "vue";
import Footer from "../../components/Footer.vue"
    import Header from "../../components/Header.vue";
    import { useRouter } from "vue-router";

    const router=useRouter()
    const data=reactive({
        name:"weedy",
        describe:"666"
    })
    const go=(path:string)=>{
        router.push(path)
    }
</script>
<template>
    <div class="mine">
        <Header></Header>
        <div class="content">
            <div class="user-info">
                <div class="info">
                    <img src="../../assets/vue.svg" alt="">
                    <div class="user-desc">
                        <span>昵称：{{ data.name }}</span>
                        <span class="name">个性签名：{{ data.describe }}</span>
                    </div>
                </div>
            </div>
            <ul class="user-list">
                <li class="van-hairline--bottom" @click="go('./order')">
                    <span>我的订单</span>
                    <van-icon name="arrow"></van-icon>
                </li>
                <li class="van-hairline--bottom" @click="go('./address')">
                    <span>地址管理</span>
                    <van-icon name="arrow"></van-icon>
                </li>
                <li class="van-hairline--bottom" @click="go('./userinfoedit')">
                    <span>账号管理</span>
                    <van-icon name="arrow"></van-icon>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .mine{
        height: 100%;
        display: flex;
        flex-flow: column;
        .content{
            flex: 1;
            overflow-y: auto;
            .user-info{
                width: 94%;
                margin: 10px;
                height: 115px;
                background: linear-gradient(90deg,#ffc400,#c7c351);
                box-shadow: 0 2px 5px #ffc400;
                border-radius: 6px;
                .info{
                    position: relative;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    padding: 25px 20px;
                    box-sizing: border-box;
                }
                img{
                    border-radius: 50%;
                    margin-top: 4px;
                }
                .user-desc{
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    line-height: 20px;
                    font-size: 14px;
                    color: #fff;
                    justify-content: space-between;
                    .van-icon-setting-o{
                        font-size: 16px;
                        vertical-align: -3px;
                        margin-right: 4px;
                    }
                }
            }
        }
        .user-list{
            padding: 0 20px;
            margin-top: 20px;
            background-color: #fff;
            li{
                height: 40px;
                line-height: 40px;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                .van-icon-arrow{
                    margin-top: 13px;
                }
            }
        }
    }
</style>