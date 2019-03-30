<template>
    <div>
        <header class="zyw-header">
            <div class="zyw-container white-color">
                <div class="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="../assets/img/svg/head-return.svg" alt=""></a></div>
                <h1>购物车</h1>
                <div class="head-r"><a href="">编辑</a></div>
            </div>
        </header>
        <section class="zyw-container">
            <!--list-->
            <div class="commodity_list_box">
                <div class="cart_top">
                    <span>商品清单</span>
                    <p id="weights">总重量约25kg</p>
                    <div class="clear"></div>
                </div>
                <!--商品列表-->
                <div class="commodity_box">
                    <div class="commodity_list">
                        <!--店名信息-->
                        <div class="tite_tim select">
                            <em aem="1" cart_id="84"></em>
                            <span>Apple产品专营店</span>
                            <div class="clear"></div>
                        </div>
                        <!--商品-->
                        <ul class="commodity_list_term">
                            <li class="select">
                                <em aem="0" cart_id="84"></em>
                                <img src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                                <div class="div_center">
                                    <h4>新疆苹果</h4>
                                    <span>50斤</span>
                                    <p class="now_value">
                                        <i>￥</i>
                                        <b class="qu_su">123.00</b>
                                    </p>
                                </div>
                                <div class="div_right">
                                    <i onclick="reducew(this)">-</i>
                                    <span class="zi">1</span>
                                    <input type="hidden" value="84">
                                    <i onclick="plusw(this)">+</i>
                                </div>
                            </li>
                            <li class="select">
                                <em aem="0" cart_id="84"></em>
                                <img src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                                <div class="div_center">
                                    <h4>新疆苹果</h4>
                                    <span>50斤</span>
                                    <p class="now_value">
                                        <i>￥</i>
                                        <b class="qu_su">25.00</b>
                                    </p>
                                </div>
                                <div class="div_right">
                                    <i onclick="reducew(this)">-</i>
                                    <span class="zi">1</span>
                                    <input type="hidden" value="84">
                                    <i onclick="plusw(this)">+</i>
                                </div>
                            </li>
                        </ul>
                        <!--优惠信息-->
                        <div class="shop_ul_bottom account_info_box">
                            <ul class="account_info">
                                <li class="i_text">
                                    <span class="info_name xi_cu">包邮</span>
                                    <span class="info_name">商家包邮</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="commodity_box">
                    <div class="commodity_list">
                        <!--店名信息-->
                        <div class="tite_tim select">
                            <em aem="1" cart_id="84"></em>
                            <span>Apple产品专营店</span>
                            <div class="clear"></div>
                        </div>
                        <!--商品-->
                        <ul class="commodity_list_term">
                            <li class="select">
                                <em aem="0" cart_id="84"></em>
                                <img src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                                <div class="div_center">
                                    <h4>新疆苹果</h4>
                                    <span>50斤</span>
                                    <p class="now_value">
                                        <i>￥</i>
                                        <b class="qu_su">210.00</b>
                                    </p>
                                </div>
                                <div class="div_right">
                                    <i onclick="reducew(this)">-</i>
                                    <span class="zi">1</span>
                                    <input type="hidden" value="84">
                                    <i onclick="plusw(this)">+</i>
                                </div>
                            </li>
                            <li class="select">
                                <em aem="0" cart_id="84"></em>
                                <img src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                                <div class="div_center">
                                    <h4>新疆苹果</h4>
                                    <span>50斤</span>
                                    <p class="now_value">
                                        <i>￥</i>
                                        <b class="qu_su">412.00</b>
                                    </p>
                                </div>
                                <div class="div_right">
                                    <i onclick="reducew(this)">-</i>
                                    <span class="zi">1</span>
                                    <input type="hidden" value="84">
                                    <i onclick="plusw(this)">+</i>
                                </div>
                            </li>
                        </ul>
                        <!--优惠信息-->
                        <div class="shop_ul_bottom account_info_box">
                            <ul class="account_info">
                                <li class="i_text">
                                    <span class="info_name xi_cu">包邮</span>
                                    <span class="info_name">商家包邮</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 商品列表 end -->
            </div>
            <!-- end -->
        </section>
        <footer class="zyw-footer">
            <div class="zyw-container white-bgcolor">
                <div class="settle_box">
                    <dl class="all_check select">
                        <dt>
                            <span id="all_pitch_on"></span>
                            <em>全选</em>
                        </dt>
                    </dl>
                    <dl class="total_amount">
                        <dt>
                            合计：
                            <p id="total_price">
                                ¥<b>0</b>
                            </p>
                        </dt>
                        <dd>不含运费</dd>
                    </dl>
                    <input type="hidden" name="gcs" id="gcs"/>
                    <a class="settle_btn" href="javascript:void(0);" id="confirm_cart">去结算</a>
                    <a class="settle_btn" href="javascript:void(0);" id="confirm_cart1" onclick="big_cart_remove()">删除</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            foot:false
        }
    },
    methods:{
        
    },
    mounted(){
        //定义全局变量
        var i=0;

        //金额总和
        var money=0;

        //计算合计价格
        var cart_money=new Object();

        //全部商品ID
        var cart_id=new Object();
        //备份商品ID，用于全选后去掉全选又再次全选
        var cart_id_copy=new Object();
        var noX = 0;
        /* 没选中时点击加减计算数量  */
        var allThis = $(".commodity_box .select em");
        /*底部全选*/
        var totalH;
        /* 减  */
        function reduceMod(e, totalH, mod, noX) {
            var tn = e.siblings().find(".qu_su").text();
            /* 当前选中商品  */
            var tn1 = e.siblings().find(".zi").text();
            /* 商品数量  */
            if (mod != 2) {
                var Total = parseFloat(totalH) - (tn * tn1);
                /* 总价格减该商品总数价格  */
                $("#total_price b").text(Total.toFixed(2));
            } else {
                /* 合计加单价-1 */
                var Total = parseFloat(totalH) - parseFloat(tn);
                /* 总价格减该商品总数价格  */
                $("#total_price b").text(Total.toFixed(2));
            }

        }
        ;/* 加  */
        function plusMod(e, totalH, mod) {
            var tn = e.siblings().find(".qu_su").text();
            /* 当前选中商品  */
            var tn1 = e.siblings().find(".zi").text();
            /* 商品数量  */
            if (mod != 2) {
                var Total = parseFloat(totalH) + (tn * tn1);
                /* 总价格加上该商品总数价格  */
                $("#total_price b").text(Total.toFixed(2));
            } else {
                /* 合计加单价+1 */
                var Total = parseFloat(totalH) + (parseFloat(tn) + (noX - 1));
                /* 总价格加上该商品总数价格  */
                $("#total_price b").text(Total.toFixed(2));
            }

        }
        ;/*全选该店商品价格 加*/
        function commodityPlusMod(e, totalH) {
            var qu = e.parents(".commodity_list").find(".pitch_on").parent().find(".qu_su");
            var quj = e.parents(".commodity_list").find(".pitch_on").parent().find(".zi");
            var Total = 0;
            var erTotal = true;
            /* 该商品全部金额  */
            for (var i = 0; i < qu.length; i++) {
                var n = qu.eq(i).text();
                var n1 = quj.eq(i).text();
                /*合计价格*/
                if (erTotal) {
                    Total = parseFloat(totalH) + (parseFloat(n) * parseFloat(n1));
                    if (Total < 0)
                        Total = 0;
                    erTotal = false;
                } else {
                    Total = parseFloat(Total) + (parseFloat(n) * parseFloat(n1));

                }
            }
            $("#total_price b").text(Total.toFixed(2));
            /* 合计金额  */
        }
        ;var plus;
        /*全选该店商品价格 减*/
        function commodityReduceMod(e, totalH) {
            var qu = e.parents(".commodity_list").find(".pitch_on").parent().find(".qu_su");
            var quj = e.parents(".commodity_list").find(".pitch_on").parent().find(".zi");
            var Total = 0;
            plus = totalH;

            var erTotal = true;
            /* 该商品全部金额  */
            for (var i = 0; i < qu.length; i++) {
                var n = qu.eq(i).text();
                var n1 = quj.eq(i).text();
                /*合计价格*/
                if (erTotal) {
                    Total = parseFloat(totalH) - (parseFloat(n) * parseFloat(n1));
                    plus = Total;
                    if (Total < 0)
                        Total = 0;
                    erTotal = false;
                } else {
                    Total = parseFloat(Total) - (parseFloat(n) * parseFloat(n1));
                    plus = Total;

                }

                $("#total_price b").text(Total.toFixed(2));
                /* 合计金额  */
                plus;
            }
        }
        ;/*全部商品价格*/
        function commodityWhole() {
            /* 合计金额  */
            var je = $(".commodity_box .select .qu_su");
            /* 全部商品单价  */
            var je1 = $(".commodity_box .select .zi");
            /* 全部商品数量  */
            var TotalJe = 0;
            for (var i = 0; i < je.length; i++) {
                var n = je.eq(i).text();
                var n1 = je1.eq(i).text();
                TotalJe = TotalJe + (parseFloat(n) * parseFloat(n1));

            }
            $("#total_price b").text(TotalJe.toFixed(2));
            /* 合计金额  */
        }
        ;
        //选择结算商品

        $(".select em").click(function() {
            var su = $(this).attr("aem");
            var carts_id = $(this).attr("cart_id");
            totalH = $("#total_price b").text();
            /* 合计金额  */
            if (su == 0) {
                /* 单选商品  */
                if ($(this).hasClass("pitch_on")) {
                    /*去该店全选*/
                    $(this).parents("ul").siblings(".select").find("em").removeClass("pitch_on");
                    /*去底部全选*/
                    $("#all_pitch_on").removeClass("pitch_on");
                    $(this).removeClass("pitch_on");
                    reduceMod($(this), totalH);
                    cart_id[carts_id] = "";
                    delete cart_id[carts_id];
                } else {
                    $(this).addClass("pitch_on");
                    var n = $(this).parents("ul").children().find(".pitch_on");
                    var n1 = $(this).parents("ul").children();
                    plusMod($(this), totalH, 0, noX);
                    cart_id[carts_id] = "";
                    /*该店商品全选中时*/
                    if (n.length == n1.length) {
                        $(this).parents("ul").siblings(".select").find("em").addClass("pitch_on");
                    }
                    /*商品全部选中时*/
                    var fot = $(".commodity_list_box .tite_tim .pitch_on");
                    var fot1 = $(".commodity_list_box .tite_tim em");
                    if (fot.length == fot1.length)
                        $("#all_pitch_on").addClass("pitch_on");
                }
            } else {
                /* 全选该店铺  */
                if ($(this).hasClass("pitch_on")) {
                    /*去底部全选*/
                    $("#all_pitch_on").removeClass("pitch_on");
                    $(this).removeClass("pitch_on");

                    commodityReduceMod($(this), totalH);
                    $(this).parent().siblings("ul").find("em").removeClass("pitch_on");
                    delete cart_id[carts_id];
                } else {
                    commodityReduceMod($(this), totalH);

                    $(this).addClass("pitch_on");

                    $(this).parent().siblings("ul").find("em").addClass("pitch_on");

                    /*if(plus != NaN && plus != undefined && plus > 0){
                    totalH = parseFloat(totalH)-parseFloat(plus);
                    if(totalH < 0)
                    totalH = 0;
                    }*/
                    if (plus == undefined || plus == NaN) {
                        plus = 0
                    }

                    commodityPlusMod($(this), plus);
                    cart_id[carts_id] = "";
                    /*商品全部选中时*/
                    var fot = $(".commodity_list_box .tite_tim .pitch_on");
                    var fot1 = $(".commodity_list_box .tite_tim em");
                    if (fot.length == fot1.length) {
                        $("#all_pitch_on").addClass("pitch_on");
                    }

                }
            }

            //计算选择数值
            //number();

        });
        /* 底部全选  */

        var bot = 0;
        $("#all_pitch_on").click(function() {
            if (bot == 0) {
                $(this).addClass("pitch_on");
                allThis.removeClass("pitch_on");
                allThis.addClass("pitch_on");
                /*总价格*/
                commodityWhole();
                bot = 1;
                //重新加入属性对象
                for (var key in cart_id_copy) {
                    cart_id[key] = "";
                }
            } else {
                $(this).removeClass("pitch_on");
                allThis.removeClass("pitch_on");
                $("#total_price b").text("0");
                bot = 0;
                //移除全部对象
                for (var key in cart_id) {
                    delete cart_id[key];
                }
            }
            //计算选择数值
            //number();
        });

        function number() {
            var num = 0;
            for (var key in cart_id) {
                num++;
            }
            //将选择的放入到计算里面
            //$("#confirm_cart").html("结算("+num+")");
        }

        /* 编辑商品  */
        var topb = 0;
        $("#rem_s").click(function() {
            if (topb == 0) {
                $(this).text("完成");
                $(".total_amount").hide();
                /* 合计  */
                $("#confirm_cart").hide();
                /* 结算  */
                $("#confirm_cart1").show();
                /* 删除 */
                topb = 1;
            } else {
                topb = 0;
                $(this).text("编辑");
                $(".total_amount").show();
                /* 合计  */
                $("#confirm_cart").show();
                /* 结算  */
                $("#confirm_cart1").hide();
                /* 删除 */
                allThis.removeClass("pitch_on");
                /* 取消所有选择  */
                $("#all_pitch_on").removeClass("pitch_on");
                /* 取消所有选择  */
                $("#total_price b").text("0");
                /*合计价格清零*/

            }

        });
        /* 加减  */

        function reducew(obj) {
            //减
            var $this = $(obj);
            var totalH = $("#total_price b").text();
            /* 合计金额  */
            var ise = $this.siblings("span").text();
            var gc_id = $this.siblings("input").val();
            if (noX <= 0) {
                noX = 0;
            } else {
                noX--;
            }
            ;
            if (parseInt(ise) <= 1) {
                $this.siblings("span").text("1");
            } else {
                var n = parseInt(ise) - 1;
                $this.siblings("span").text(n);
                if ($this.parent().parent().children("em").hasClass("pitch_on")) {
                    var mo = $this.parent().parent().children("em");
                    reduceMod(mo, totalH, 2, noX);
                    noX = 0;
                }

            }

            //goods_count_adjust(gc_id,n,null);
        }
        
        function plusw(obj) {
            //加
            var $this = $(obj);
            var totalH = $("#total_price b").text();
            /* 合计金额  */
            var ise = $this.siblings("span").text();
            var gc_id = $this.siblings("input").val();
            var n = parseInt(ise) + 1;
            noX++;

            $this.siblings("span").text(n);
            if ($this.parent().parent().children("em").hasClass("pitch_on")) {
                var mo = $this.parent().parent().children("em");
                plusMod(mo, totalH, 2, noX);
                noX = 0;
            }

            //goods_count_adjust(gc_id,n,null);
        }

        //删除
        function big_cart_remove() {
            $(".commodity_list_term .pitch_on").parent().remove();
            $(".commodity_list .tite_tim > em.pitch_on").parents(".commodity_box").remove();
        }
    },
    // beforeRouteEnter(to,from,next){
    //     next('/login')
    // }
}
</script>

<style scoped>
/* 购物车 */
div#shopping_cart { position: fixed; bottom: 7px; right: 2%; background: #aacc36; width: 50px; height: 50px; border-radius: 50%; z-index: 9998; }
#shopping_cart a { position: relative; display: block; text-align: center; }
#shopping_cart a img { width: 52%; margin-top: 13px; }
#shopping_cart a em { position: absolute; width: 18px; height: 18px; background: #ff900d; border-radius: 50%; right: 12px; top: 4px; line-height: 18px; color: #fff; display: none; }
#newly_added { color: #ff900d; position: fixed; z-index: 9999; }
.footer_h { height:100px; text-align: center; color: #999; line-height: 60px; }
.ion-ios-arrow-left:before {content: "";/* color: #aacc36; */}
/*购物车*/
.cart_top p { float: right; margin: 0; font-size: 0.8rem}
.cart_top { padding: 6px 4%; background: #fff; font-size: 1.2rem; color: #999; line-height: 24px; border-bottom: solid 1px #e6e6e6; }
.commodity_list { background: #fff; margin-bottom: 10px; }
.shop_ul_bottom.account_info_box:nth-last-child(1) { border-bottom: none; }
.commodity_list .tite_tim { width: 90%; margin: 0 auto; padding: 8px 0; color: #333; font-size: 1.2rem; background-size: 6px; }
.commodity_list .tite_tim em { float: left; width: 20px; height: 20px; border: solid 1px #e6e6e6; border-radius: 50%; margin-right: 10px; }
.commodity_list .commodity_list_term {margin-left: 20px; margin-bottom: 0;}
.commodity_list .commodity_list_term li { position: relative; overflow: hidden; padding: 12px 0; }
.commodity_list .commodity_list_term li em { position: absolute; width: 20px; height: 20px; border: solid 1px #e6e6e6; border-radius: 50%; left: 0; top: 40px; }
.commodity_list .commodity_list_term li img { width: 80px; height: 80px; max-width: 80px; max-height: 80px; float: left; margin-left: 28px; border: 1px solid #dedede;padding: 2px;}
.commodity_list .commodity_list_term li .div_center { width: 50%; float: left; position: relative; margin-top: 7px; margin-left: 2%; }
.commodity_list .commodity_list_term li .div_center h4 { overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; color: #333; margin: 0; font-size: 1.2rem; margin-bottom: 2px; }
.commodity_list .commodity_list_term li .div_center span { color: #666; font-size: 1rem; }
.commodity_list .commodity_list_term li .div_center p { margin: 0; font-size: 1.25rem; color: #f34347; margin-top: 6px; font-family: "-apple-system","Helvetica Neue",Roboto,"Segoe UI",sans-serif; }
.commodity_list .commodity_list_term li .div_right { position: absolute; bottom: 10px; right: 4%; border: solid 1px #e6e6e6; border-radius: 4px; width: 82px; overflow: hidden; text-align: center; line-height: 30px; }
.commodity_list .commodity_list_term li .div_right i { float: left; width: 33%; color: #333; font-style: normal;}
.commodity_list .commodity_list_term li .div_right span { float: left; width: 33%; border-left: solid 1px #e6e6e6; border-right: solid 1px #e6e6e6; color: #333; }
.shop_ul_bottom.account_info_box { margin-top: 0; border-top: solid 1px #e6e6e6; border-bottom: solid 1px #e6e6e6; }
.shop_ul_bottom.account_info_box .xi_cu { height: 24px; line-height: 24px; font-size:12px; padding: 0 6px; border-radius: 4px; background: #f34347; color: #fff; margin-top: 11px; margin-right: 2%; }
.settle_box .all_check em {
    font-weight: initial;
    font-size: 0.8rem;
    color: #666;
    margin-left: 10%;
    font-style: normal;
}
.commodity_list .commodity_list_term li .div_center p i { font-size: 0.6rem; font-style: normal; }
.commodity_list .commodity_list_term li .div_center p b { font-weight: initial; }
.settle_box .total_amount b { font-weight: initial; }
.finish_box { text-align: center; line-height: 24px; }
.finish_box img { width: 35%; margin-top: 50px; margin-bottom: 15px; }
.finish_box h1 { font-size: 0.9rem; color: #333; }
.finish_box p { color: #999; font-size: 1.2rem; }
.finish_box a { color: #aacc36; font-size: 1.2rem; }


.commodity_list .commodity_list_term li:before{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid rgba(207, 207, 207, 0.95);
    color: rgba(207, 207, 207, 0.95);
    transform-origin: 0 100%;
    transform: scaleY(0.501);
}

@media screen and (max-width: 1920px){
    #cart_form{ width: 414px; margin: 0 auto; }
}
@media screen and (max-width: 800px){
    #cart_form{ width: 100%; margin: 0 auto; }
}
.header_box {
    height: 44px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999999;
}

.bar-header {
    border-bottom: solid 1px #e6e6e6;
    background: #fff;
    height:44px;
}

.bar-header .title {
    color: #fff ;
    border-bottom: none;
    font-size: 19px;
}



.star_x p i {
    color: #b3b3b3;
}

.star_x p .icon_color {
    color: #ffa127;
}


.input_a1 input {
    border-radius: 5px;
    background-color: #f2f2f2;
    width: 100%;
    text-indent: 5px;
    color: #999;
    height: 30px;
    line-height: normal;
    padding-left: 5px;
    margin-top: 1px;
}

a.input_a,.input_a1 {
    width: 74%;
    height: 34px;
    position: absolute;
    right: 0;
    left: 10%;
    overflow: hidden;
}

a.rig_shai {
    line-height: 35px;
    color: #fff;
    position: absolute;
    top: 5px;
    right: 2%;
}

.rig_shai i {
    padding: 4px 10px;
    background-size: 15px;
}

/*-----------------------------返回顶部----------------------------------------------*/
#totop {
    position: fixed;
    z-index: 99999;
    bottom: 62px;
    right: 2%;
    cursor: pointer;
    display: none;
    background: #fff;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
    border: solid 1px #e1e1e1;
}

#totop a {
    display: block;
    background-size: 100%;
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.bar.bar-dark .title {
    color: #fff
}

.bar.bar-dark.bar-footer {
    background-image: linear-gradient(180deg,#111,#111 50%,transparent 50%)
}

.bar .title {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    margin: 0 10px;
    min-width: 30px;
    height: 43px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    font-weight: 500;
    line-height: 44px
}

.bar .title.title-left {
    text-align: left
}

.bar .title.title-right {
    text-align: right
}

.bar .title a {
    color: inherit
}

.bar .button,.bar button {
    z-index: 1;
    padding: 0 8px;
    min-width: initial;
    min-height: 31px;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px
}

</style>
