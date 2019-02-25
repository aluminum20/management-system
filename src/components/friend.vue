<template>
<div class="outerbox">
    <myHeader title="刘雪莹" leftIcon="back"/>
    <div id="top" class="box">
        <img src="../assets/headshot.jpg">
        <div>
            <div class="name">刘雪莹</div>
            <div class="sub">锅王</div>
        </div>
        <div class="info">
            <div>微信组-经理</div>
            <div>微博组-干事</div>
            <div class="sub">2016-秋加入</div>
            <div class="sub">北校区-北区 电信学院</div>
        </div>        
    </div>
    <mt-cell title="手机"   value="1350273712"></mt-cell>
    <mt-cell title="微信号" value="aluminum_20"></mt-cell>    
    <mt-cell title="获得积分" value="211"></mt-cell>
    <mt-cell title="积分排名" value="3"></mt-cell>
    <mt-cell title="参与项目" to="//github.com" is-link value="23"></mt-cell>
    <mt-cell title="获得兑换券" to="//github.com" is-link value="2"></mt-cell>
    <mt-cell title="更改搬砖称谓" to="//github.com" is-link></mt-cell>
</div> 
</template>
<script>
import myHeader from './myHeader'
import spacer from './spacer'
import { Cell } from 'mint-ui';
export default {
    components: {myHeader,spacer,Cell},
 
}
</script>
<style scoped>
#top{
    margin-top:60px;    
}
.outerbox{
    text-align: left;
}
.box{
    width:100%;
    height:110px;
    display: flex;
}
.box img{
    width:54px;
    height:54px;
    border-radius: 27px;
    margin-left:14px;
    margin-right:14px;
}
.box .name{
    font-size:20px;
}
.box .sub{
    font-size:14px;
    color:#666;
}
.box .info{
    text-align: right;
    font-size:16px;
    margin-left:calc(100% - 291px);
}
</style>
