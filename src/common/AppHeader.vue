<template>
    <header class="zyw-header">
        <div class="zyw-container white-color">
            <div class="head-l"><i class="head-l-svg" aria-hidden="true"></i></div>
            <div class="head-search">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="输入您当前要搜索的商品" class="white-color">
            </div>
            <div class="head-r">
                <router-link to="/cart">
                    <i class="head-r-svg" aria-hidden="true"></i>
                    <i class="head-length">8</i>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    .head-l-svg{
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url("../assets/img/svg/head-l.svg");
        margin-top: 10px;
    }
    .head-r-svg{
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url("../assets/img/svg/head-r.svg");
        margin-top: 10px;
    }
    .head-length {
        font-style: normal;
        font-size: 0.1rem;
        position: absolute;
        top: 5px;
        right: -6px;
        background: #f23030;
        color: #fff;
        line-height: initial;
        padding: 0px 4px;
        border-radius: 50px;
    }
</style>
