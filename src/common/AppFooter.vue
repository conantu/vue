<template>
    <footer class="zyw-footer">
        <div class="zyw-container white-bgcolor clearfix">
            <div class="weui-tabbar">
                <router-link to="/home" class="weui-tabbar__item" active-class="weui-bar__item--on">
                    <div class="weui-tabbar__icon">
                        <img src="../assets/img/svg/foot-1.svg" alt="">
                    </div>
                    <p class="weui-tabbar__label">首页</p>
                </router-link>
                <router-link to="/class" class="weui-tabbar__item" active-class="weui-bar__item--on">
                    <div class="weui-tabbar__icon">
                        <img src="../assets/img/svg/foot-2.svg" alt="">
                    </div>
                    <p class="weui-tabbar__label">分类</p>
                </router-link>
                <router-link to="/find" class="weui-tabbar__item" active-class="weui-bar__item--on">
                    <div class="weui-tabbar__icon">
                        <img src="../assets/img/svg/foot-3.svg" alt="">
                    </div>
                    <p class="weui-tabbar__label">发现</p>
                </router-link>
                <router-link to="/cart" class="weui-tabbar__item" active-class="weui-bar__item--on">
                    <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>
                    <div class="weui-tabbar__icon">
                        <img src="../assets/img/svg/foot-4.svg" alt="">
                    </div>
                    <p class="weui-tabbar__label">购物车</p>
                </router-link>
                <router-link to="/user" class="weui-tabbar__item" active-class="weui-bar__item--on">
                    <div class="weui-tabbar__icon">
                        <img src="../assets/img/svg/foot-5.svg" alt="">
                    </div>
                    <p class="weui-tabbar__label">我的</p>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>
