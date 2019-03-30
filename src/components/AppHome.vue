<template>
    <div>
        <app-header></app-header>
        <section class="zyw-container">
            <div class="swiper-container">
                <swipe class="my-swipe">
                    <swipe-item class="slide1" v-for="item of banner" :key="item.id">
                        <img :src="item.img" alt="">
                    </swipe-item>
                </swipe>
                <!-- 如果需要分页器 -->
                <!-- <div class="swiper-pagination"></div> -->
            </div>
            <div class="index-class white-bgcolor">
                <div class="weui-flex">
                    <div class="weui-flex__item">
                        <a href="javascript:;">
                            <div class="index-class-img">
                                <img src="../assets/img/yqyl.png" alt="">
                            </div>
                            <p class="index-class-text">邀请有礼</p>
                        </a>
                    </div>
                    <div class="weui-flex__item">
                        <a href="javascript:;">
                            <div class="index-class-img">
                                <img src="../assets/img/cjfl.png" alt="">
                            </div>
                            <p class="index-class-text">春节福利</p>
                        </a>
                    </div>
                    <div class="weui-flex__item">
                        <a href="javascript:;">
                            <div class="index-class-img">
                                <img src="../assets/img/kbsc.png" alt="">
                            </div>
                            <p class="index-class-text">酷币商城</p>
                        </a>
                    </div>
                    <div class="weui-flex__item">
                        <a href="javascript:;">
                            <div class="index-class-img">
                                <img src="../assets/img/sjtx.png" alt="">
                            </div>
                            <p class="index-class-text">手机通讯</p>
                        </a>
                    </div>
                    <div class="weui-flex__item">
                        <a href="javascript:;">
                            <div class="index-class-img">
                                <img src="../assets/img/sjpj.png" alt="">
                            </div>
                            <p class="index-class-text">手机配件</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="index-news">
                <div class="news-cont white-bgcolor">
                    <strong>最新<em>资讯</em>：</strong>
                    <div class="infoBox">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide"><a href="#"><span><i>热</i>酷购商城微信版上线啦！</span></a></li>
                            <li class="swiper-slide"><a href="#"><span>酷购商城微信版上线啦2！</span></a></li>
                            <li class="swiper-slide"><a href="#"><span>马上就要开学了，书包买买买！</span></a></li>
                        </ul>
                    </div>
                    <ul>
                        <li><a href=""></a></li>
                    </ul>
                    <a href="" class="news-more">更多</a>
                </div>
            </div>
            <div class="index-seckill white-bgcolor">
                <div class="seckill-hd">
                    <span class="seckill-hd-title red-color"><i class="fa fa-clock-o" aria-hidden="true"></i> 限时秒杀</span>
                    <strong>10点场</strong>
                    <div id="time"></div>
                    <div class="seckill-hd-r">秒抢好货 <i class="fa fa-angle-right theme-color" aria-hidden="true"></i></div>
                </div>
                <div class="seckill-bd">
                    <div class="seckill-wares">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide seckill-ware" v-for="item of list" :key="item.id">
                                <router-link to='/detail'>
                                    <img :src="item.imglist[0].img1" alt="">
                                    <p class="red-color"><strong>{{item.price}}</strong></p>
                                    <del>￥12000.00</del>
                                </router-link>
                            </div>
                            <!-- <div class="swiper-slide seckill-ware">
                                <a href="item.html">
                                    <img src="https://m.360buyimg.com/n1/jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg" alt="">
                                    <p class="red-color">￥<strong>3800.00</strong></p>
                                    <del>￥12000.00</del>
                                </a>
                            </div>
                            <div class="swiper-slide seckill-ware">
                                <a href="item.html">
                                    <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14287/16/2071526173/41836/766c1953/5a6935d3N17ca68e7.jpg!q70.jpg" alt="">
                                    <p class="red-color">￥<strong>89.90</strong></p>
                                    <del>￥128.89</del>
                                </a>
                            </div>
                            <div class="swiper-slide seckill-ware">
                                <a href="item.html">
                                    <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t15049/171/1967249015/25679/d554d9a9/5a61d929N027318e3.jpg!q70.jpg" alt="">
                                    <p class="red-color">￥<strong>1900.00</strong></p>
                                    <del>￥2200.00</del>
                                </a>
                            </div>
                            <div class="swiper-slide seckill-ware">
                                <a href="item.html">
                                    <img src="https://m.360buyimg.com//mobilecms/s276x276_jfs/t13030/75/2301251503/262030/ed6dc00d/5a3a09beN645f27a8.jpg!q70.jpg" alt="">
                                    <p class="red-color">￥<strong>35.00</strong></p>
                                    <del>￥38.00</del>
                                </a>
                            </div>
                            <div class="swiper-slide seckill-ware">
                                <a href="item.html">
                                    <img src="https://m.360buyimg.com//mobilecms/s276x276_jfs/t11401/34/504898878/183378/5a6a8a48/59f1c3a1N2174c8cc.jpg!q70.jpg" alt="">
                                    <p class="red-color">￥<strong>38.00</strong></p>
                                    <del>￥50.00</del>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="index-show clearfix">
                <div class="col-sm-12 col-xs-12">
                    <a class="sc-gPEVay jZmIRd" href=""><img src="https://s2.juancdn.com/jas/180125/a/0/5a6991598150a12f8a70b929_1080x292.gif" alt=""></a>
                </div>
                <div class="col-sm-6 col-xs-6">
                    <a class="sc-gPEVay jZmIRd" href=""><img src="https://goods8.juancdn.com/jas/180125/f/d/5a6991fda9fcf8ad18749379_540x280.png?imageMogr2/quality/85!/format/png" alt=""></a>
                </div>
                <div class="col-sm-6 col-xs-6">
                    <a class="sc-gPEVay jZmIRd" href=""><img src="https://goods8.juancdn.com/jas/180125/f/7/5a6995588150a12cfc124a62_540x280.png?imageMogr2/quality/85!/format/png" alt=""></a>
                </div>
                <div class="col-sm-4 col-xs-4">
                    <a class="sc-gPEVay jZmIRd" href=""><img src="https://goods7.juancdn.com/jas/180125/c/d/5a6998f98150a12e8a36d67c_360x304.png?iopcmd=convert&Q=85&dst=png" alt=""></a>
                </div>
                <div class="col-sm-4 col-xs-4">
                    <a class="sc-gPEVay jZmIRd" href=""><img src="https://goods8.juancdn.com/jas/180125/e/c/5a699928a9fcf805074b5461_360x304.png?imageMogr2/quality/85!/format/png" alt=""></a>
                </div>
                <div class="col-sm-4 col-xs-4">
                    <a class="sc-gPEVay jZmIRd" href=""><img src="https://goods1.juancdn.com/jas/180125/1/a/5a699957a9fcf80b4d353e8b_360x304.png?iopcmd=convert&Q=85&dst=png" alt=""></a>
                </div>
            </div>
            <div class="index-wares">
                <div class="wares-title"><img src="http://gw.alicdn.com/tfs/TB1Aw9JSVXXXXXQXXXXXXXXXXXX-1500-68.png" alt=""></div>
                <div class="wares-cont">
                    <ul class="clearfix">
                        <li class="col-sm-6 col-xs-6 ware-box" v-for="item of list" :key="item.id">
                            <router-link :to="'/detail/'+ item.id">
                                <div class="ware-img">
                                    <img :src="item.imglist[0].img1" alt="">
                                    <span class="ware-vip">vip专享</span>
                                </div>
                                <h3 class="ware-title">{{item.title}}</h3>
                                <p class="ware-des">全网通 64G 深空灰</p>
                                <span class="ware-prince red-color">{{item.price}}</span>
                            </router-link>
                        </li>
                        <!-- <li class="col-sm-6 col-xs-6 ware-box">
                            <a href="item.html">
                                <div class="ware-img">
                                    <img src="https://m.360buyimg.com/n1/jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg" alt="">
                                    <span class="ware-vip">vip专享</span>
                                </div>
                                <h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
                                <p class="ware-des">全网通 64G 深空灰</p>
                                <span class="ware-prince red-color">￥8088.00</span>
                            </a>
                        </li>
                        <li class="col-sm-6 col-xs-6 ware-box">
                            <a href="item.html">
                                <div class="ware-img">
                                    <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14125/285/900232321/14466/12dfc3a3/5a163dd1Ne09fad4b.jpg!q70.jpg" alt="">
                                    <span class="ware-vip">vip专享</span>
                                </div>
                                <h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
                                <p class="ware-des">全网通 64G 深空灰</p>
                                <span class="ware-prince red-color">￥8088.00</span>
                            </a>
                        </li>
                        <li class="col-sm-6 col-xs-6 ware-box">
                            <a href="item.html">
                                <div class="ware-img">
                                    <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t15811/137/1521616135/14255/a6150285/5a546fadN096d46b4.jpg!q70.jpg" alt="">
                                    <span class="ware-vip">vip专享</span>
                                </div>
                                <h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
                                <p class="ware-des">全网通 64G 深空灰</p>
                                <span class="ware-prince red-color">￥8088.00</span>
                            </a>
                        </li>
                        <li class="col-sm-6 col-xs-6 ware-box">
                            <a href="item.html">
                                <div class="ware-img">
                                    <img src="https://m.360buyimg.com//mobilecms/s276x276_jfs/t5848/205/6830434960/124593/19e83624/596c8b4eN3c8ba6a7.jpg!q70.jpg" alt="">
                                    <span class="ware-vip">vip专享</span>
                                </div>
                                <h3 class="ware-title">Apple 苹果 iPhoneX 全新发布</h3>
                                <p class="ware-des">全网通 64G 深空灰</p>
                                <span class="ware-prince red-color">￥8088.00</span>
                            </a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>  
    import AppHeader from '../common/AppHeader.vue'
    import * as types from '../store/types.js'
export default {
    data(){
        return {
            banner:[],
            list:[]
        }
    },
    components:{
        AppHeader
    },
    beforeMount(){

        
        
    },
    mounted(){
       axios.all([
            axios.get('/data/banner.json'),
            axios({
                url:'/data/goods.json'
            })
        ]).then(
            axios.spread((banner,list)=>{
                this.banner = banner.data,
                this.list = list.data
            })
        )
    }
}
</script>

<style scoped>
    .my-swipe {
        height: 160px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    

    .swiper-slide img{
        width: 100%;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
    }
    .index-class{
        padding: 1.5rem 0.625rem;
    }
    .index-class .weui-flex__item{
        text-align: center;
    }
    /* .index-class .index-class-img{} */
    .index-class .index-class-text{
        margin: 0;
        line-height: 2.5rem;
        color: #444;
    }
    .index-news{
        padding: 0.4rem 0.625rem;
    }
    .index-news .news-cont{
        position: relative;
        padding: 0 0.625rem;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        overflow: hidden;
    }
    .index-news .news-cont strong{
        position: absolute;
        top: 0;
        left: 0.625rem;
    }
    .index-news .news-cont strong em{
        font-style: normal;
        font-size: 0.8rem;
        color: #fff;
        padding: 1px 2px 0;
        margin-left: 2px;
        border-radius: 2px;
    }
    .index-news .infoBox{
        display: inline-block;
    }
    .index-news .news-cont ul{
        list-style-type: none;
        margin: 0;
    }
    .index-news .news-cont ul li{
        line-height: 30px;
    }
    .index-news .news-cont ul li span{
        padding-left: 72px;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
    }
    .index-news .news-cont ul li span i{
        font-style: normal;
        font-size: 0.8rem;
        border: 1px solid #fe7900;
        color: #fe7900;
        border-radius: 2px;
        padding: 0 1px;
        margin-right: 5px;
    }
    .index-news .news-cont .news-more{
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        background: #fff;
        padding: 0 0.625rem;
        border-left: 1px solid #f2f2f2;
    }
    /* .index-seckill{} */
    .index-seckill .seckill-hd{
        position: relative;
        height: 30px;
        padding: 0 0.625rem;
        margin-bottom: 0.5rem;
    }
    span.seckill-hd-title.theme-color {
        font-weight: bold;
        font-size: 1.25rem;
    }
    .index-seckill .seckill-hd strong{
        line-height: 30px; 
        font-size: 0.8rem;
    }
    .index-seckill .seckill-hd #time {
        position: absolute;
        top: 0;
        left: 42%;
        line-height: 30px;
    }
    .seckill-hd #time span{
        padding: 0 3px;
        border: 1px solid #dedede;
        border-radius: 4px;
        font-size: 0.8rem;
    }
    .index-seckill .seckill-hd-r{
        position: absolute;
        right: 0.625rem;
        top: 0;
        line-height: 30px;
        font-size: 0.8rem;
    }
    .index-seckill .seckill-bd{
        width: 100%;
        overflow: hidden;
    }
    /* .index-seckill .seckill-bd .seckill-wares{} */
    .index-seckill .seckill-bd .seckill-wares .seckill-ware{
        text-align: center;
        padding: 0.625rem;
    }
    .seckill-ware img{
        width: 100%;
    }
    .seckill-ware p{
        margin: 5px 0 0;
        font-size: 0.8rem;
        font-weight: bold;
    }
    .seckill-ware p strong{
        font-size: 1.25rem;
    }
    .seckill-ware del{
        font-size: 0.8rem;
        color: #999;
    }
    .index-show{
        width: 100%;
    }
    .index-show img{
        width: 100%;
    }
    .index-show .col-sm-12, .index-show .col-sm-4, .index-show .col-sm-6, .index-show .col-xs-12, .index-show .col-xs-4, .index-show .col-xs-6{
        padding: 0;
    }
    ul, ol, li{list-style-type: none;}
    .index-wares{
        width: 100%;
    }
    .index-wares .wares-title {
        line-height: 3rem;
        text-align: center;
        font-size: 1.3rem;
        margin-top: 0.625rem;
    }
    .index-wares .wares-title img{
        width: 100%;
    }
    .index-wares .wares-cont{
        margin: 0;
        padding: 0;
        background: #fff;
    }
    .index-wares .wares-cont .ware-box{
        width: 49.6%;
        float: left;
        padding-bottom: 5px;
        border-bottom: 1px solid #f4f4f4;
    }
    .index-wares .wares-cont .ware-box:nth-child(2n+1){
        border-right: 1px solid #f4f4f4;
    }
    .index-wares .wares-cont .ware-box .ware-img{
        position: relative;
        padding: 20px;
    }
    .index-wares .wares-cont .ware-box .ware-img img{
        width: 100%;
    }
    .index-wares .wares-cont .ware-box .ware-img .ware-vip{
        position: absolute;
        background: #ff6585;
        color: #fff;
        padding: 1px 7px;
        font-size: 0.8rem;
        bottom: 0;
        left: 0;
    }
    .index-wares .wares-cont .ware-box .ware-title{
        font-size: 1.2rem;
        line-height: 25px;
        margin: 0;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .index-wares .wares-cont .ware-box .ware-des{
        margin: 0;
        line-height: 20px;
        font-size: 1rem;
        color: #bbbbbb;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .index-wares .wares-cont .ware-box .ware-prince{
        font-size: 1.1rem;
    }


    /*优惠券页面*/
    .coupon-cont{
        padding: 1.5rem;
    }
    .coupon-cont img{width: 100%; margin-bottom: 1.5rem;}
    /*.coupon-box{*/
        /*width: 100%;*/
        /*height: 115px;*/
    /*}*/
    /*.coupon-n .coupon-box{background: url("../assets/img/coupon1.jpg") no-repeat;background-size: 100%;}*/
    /*.coupon-y .coupon-box{background: url("../assets/img/coupon2.jpg") no-repeat;background-size: 100%;}*/
    /*.coupon-ex .coupon-box{background: url("../assets/img/coupon3.jpg") no-repeat;background-size: 100%;}*/

</style>
