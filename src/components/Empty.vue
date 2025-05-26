<script lang="ts" setup>

</script>

<template>

        <div class="empty-content">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-empty"></use>       
            </svg>
            <div class="text">
                什么都没有哦
            </div>
        </div>

</template>

<style lang="scss" scoped>
    .empty-content{
        position:relative;
        flex:1;
        margin:20px;
        font-size:16px;
        overflow: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 10px;
        height:72vh;
        .icon{
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            width: 100%;
            padding-top: 150px;
        }
        .text{
            text-align: center;
        }
    }
</style>