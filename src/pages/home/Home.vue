<script lang="ts" setup>
    import { onMounted, reactive,ref,toRefs } from "vue";

    import Footer from "../../components/Footer.vue"
    import Navlist from "./components/Navlist.vue"
    import axios from "axios"
    import { getApiHomedata } from "../../api/api";
    const active=ref(0)
    let data=reactive({
        big_sort:[],
        small_sort:[],
        shop_list: [],
    })
    const getHomedata=()=>{
        getApiHomedata().then((res)=>{
            console.log(res.big_sort)
            data.big_sort=res.big_sort
            data.small_sort=res.small_sort
            data.shop_list=res.shop_list
        })
        /*axios.get('/home/getHomedata')
        .then((res)=>{
            console.log(res)
            if(res.data.code){
                data.big_sort=res.data.data.big_sort
                data.small_sort=res.data.data.small_sort
                data.shop_list=res.data.data.shop_list
            }
        })*/
    }
    onMounted(()=>{
        getHomedata()
    })
</script>
<template>
    <div class="home">
        <div class="content">
            <div class="header">
                <div class="text">
                    外卖
                </div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>
                        广东省广州市
                    </span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(item,index) in data.big_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <div v-for="(item,index) in data.small_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="van-tabs">
                    <van-tab v-for="(item,index) in data.shop_list" :title="item.tab">
                        <Navlist :navlist="item.shop"/>
                    </van-tab>
                </van-tabs>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .home{
        display: flex;
        flex-flow: column;
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        font-size: 12px;
        .content{
            flex:1;
            overflow-y:auto;
            background-image:linear-gradient(#fff,#f5f5f5) ;

            .header{
                background-image: linear-gradient(#ffc400,#fff);
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding:20px 20px 40px 20px;
                .text{
                    font-size: 20px;
                    font-weight: 600;

                }
                .location{
                    span{
                        margin:0 5px;

                    }
                    font-size: 14px;
                }
            };
            .main{
                margin-top: -30px;
                .main-bg{
                    padding: 10px 20px 0px 20px;
                    border-radius: 30px 30px 0 0;
                    .search{
                        position:relative;
                        input{
                            width:100%;
                            border:1px solid #ffc400;
                            border-radius: 20px;
                            height: 30px;
                            
                        }
                        .search-text{
                            position: absolute;
                            right:-6px;
                            top:1px;
                            background-color: #ffc400;
                            border-radius: 16px;
                            width: 50px;
                            height: 32px;
                            line-height: 32px;
                            font-size: 14px;
                            text-align: center;
                        }
                    };
                    .sort{
                        padding:20px 0;
                        .big-sort{
                            display:flex;
                            div{
                                flex:1;
                                display: flex;
                                justify-content: center;
                                flex-flow: column;
                                align-items: center;
                                .icon{
                                    width: 50px;
                                    height: 50px;
                                    margin-bottom: 5px;
                                    
                                }
                            }
                        }
                        .small-sort{
                            display: flex;
                            flex-wrap: wrap;
                            margin-top: 20px;
                            div{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-flow: column;
                                width: 20%;
                                .icon{
                                    width: 30px;
                                    height: 30px;
                                    margin: 10px;
                                }
                            }
                        }
                    }
                }
                .van-tabs{
                    padding: 0 20px 10px;
                    //margin-left:20px;
                    //margin-right: 20px;
                }
            }
        }
    }
    :deep(.van-tabs){
        border-radius: 10px;
        
    }
</style>