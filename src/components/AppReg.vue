<template>
    <div>
        <header class="zyw-header">
            <div class="zyw-container white-color">
                <div class="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="../assets/img/svg/head-return.svg" alt=""></a></div>
                <h1>注册</h1>
                <div class="head-r"><router-link to="/login">登录</router-link></div>
            </div>
        </header>
        <section class="zyw-container">
            <div class="weui-cell mt-2">
                <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model="username">
                </div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">验证码</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" placeholder="请输入验证码">
                </div>
                <div class="weui-cell__ft">
                    <button class="weui-vcode-btn theme-color">获取验证码</button>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="password" placeholder="输入密码" v-model="password">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="password" placeholder="确认密码" v-model="password">
                </div>
            </div>
            <label for="weuiAgree" class="weui-agree">
                <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
                <span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
            </label>
            <div class="login-btn"><a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor" @click='reg'>注册</a></div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        reg(){
            axios({
                url:"http://47.102.210.231/api/register",
                params:{
                    username:this.username,
                    password:this.password
                }
            }).then(res=>{
                console.log(res.data)
                if(res.data.error==0){
                    this.$router.push('/login')
                }else{
                    alert(res.data.msg)
                }
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.login-img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #dedede;
    padding: 2px;
    margin: 3rem auto;
}
.login-img img{
    width: 100%;
    border-radius: 50%;
}
.weui-cells {
    margin-top: 0;
}
.weui-cells:before {
    border-top: none;
    height: 0;
    color: #fff;
}
.login-btn{
    padding: 4rem 0.625rem;
}
</style>
