<template>
<div class="outerbox">
    <myHeader title="我的" />

    <router-link :to="{path:'./personal/info'}">
    <div class="box" id="top">
        <img src="../assets/headshot.jpg">
        <div class="name">刘雪莹</div>
        <div class="nick">请不要吃好吗</div>
    </div>
    </router-link>

    <div class="box2">
        <div><div class="value">11</div><div class="key">项目</div></div>
        <div><div class="value">211</div><div class="key">积分</div></div>
        <div><div class="value">占位</div><div class="key">成就</div></div>
    </div>
    <spacer />

    <router-link :to="{path:'/personal/friends',params:{ info:'phone'}}">
    <mt-cell title="通讯录" is-link>
        <img slot="icon" src="../assets/friends.png" width="24" height="24">
    </mt-cell>
    </router-link>

    <router-link :to="{path:'/score/scoreRecord',params:{ info:'phone'}}">
    <mt-cell title="积分记录" is-link>
        <img slot="icon" src="../assets/score.png" width="24" height="24">
    </mt-cell>
    </router-link>

    <mt-cell title="我的兑换券" to="../score/myAward" is-link>
        <img slot="icon" src="../assets/card.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="管理兑换券" to="../personal/manaAward" is-link>
        <img slot="icon" src="../assets/editcard.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="消息通知" to="../achieve" is-link>
        <img slot="icon" src="../assets/message.png" width="24" height="24">
    </mt-cell>
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
    margin-top:50px;
}
.outerbox{
    text-align: left;
}
.box{
    width:100%;
    height:130px;
    display: flex;
    align-items: center;
    flex-direction: column;    
    border-bottom:#d7d7d7 1px solid;
}
.box img{
    width:50px;
    border-radius: 25px;
    margin-top:20px;
    margin-bottom: 10px;
}
.box .name{
    font-size:16px;
}
.box .nick{
    font-size:12px;
    color:#666;
}
.box2{
    width:100%;
    height:85px;
    display: flex;
    align-items: center;   
    justify-content:space-around;
}
.box2 div{
    text-align: center;
}
.box2 .key{
    font-size:14px;
}
.box2 .value{
    font-size:20px;
    color:#F0B691;
}
</style>

