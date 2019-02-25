<template>
<div>
    <myHeader title="积分"></myHeader>    
    <div class="line" style="margin-top:60px;margin-bottom:10px;">
        <div class="title"> </div>
        <div class="link">                
            <router-link :to="{path:'./score/scoreRecord'}">
                积分记录>
            </router-link>
        </div>
    </div>
    <div class="outbox">
    <div class="box">
        <div class="text">本月积分</div>
        <div class="score">211</div>
        <div class="rank">本月排名：3</div>
    </div>
    <div class="box">
        <div class="text">可用积分</div>
        <div class="score">{{score}}</div>
        <div class="rank">累计积分：423</div>
    </div>
    </div>
    <spacer marginTop="15"/>
    <div class="line">
        <div class="title">奖励兑换</div>
        <div class="link"><router-link :to="{path:'./score/myAward'}">我的兑换券></router-link></div>
    </div>
    <div class="rowscroll"> 
        <div class="awardCard" v-for="(award,index) in awardarray" v-if="award.show" :key="index">
            <div class="name">{{award.name}}</div>
            <div class="score">{{award.score}}<span>积分</span></div>
            <img v-bind:src="award.img">
            <mt-button type="primary" style={changable(award.score)} v-bind:disabled="score>=award.score?false:'disabled'" @click="exchange(award)">立刻兑换</mt-button>
            <div class="detail"><a href="">查看详情</a></div>
        </div>
    </div>
    <spacer marginTop="10"/>
    <div class="line">
        <div>
            <div class="title">本月排名</div>
            <div class="link">第3名</div>
        </div>
        <div class="link"><router-link :to="{path:'./score/rankRecord'}">排名记录></router-link></div>
    </div>
    <div class="ranklist-item" v-for="(item,index) in ranklist">
        <div class="rank">{{index+1}}</div>
        <img v-bind:src="item.headshot">
        <div class="nickname">{{item.nickname}}</div>
        <div class="score">{{item.score}}</div>
    </div>
</div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import myHeader from './myHeader'
import spacer from './spacer'
import { getScoreContent } from '../store/api';
export default {
    components: {spacer,myHeader,MessageBox},
    data(){
        return{
            ranklist:[],
            awardarray:[],
            score:0,
        }
    },
    beforeMount:function(){
        console.log("score beforeMount")
        getScoreContent({
                'user_id': this.$store.getters.currentUser_id,
            }).then((res) => {
                this.score=res.data.score
                this.ranklist=res.data.ranklist
                this.awardarray=res.data.awardarray
            })
    },
    methods:{
        exchange:function(award){
            MessageBox({
                title: '提示',
                message: '确定使用 '+award.score+' 积分兑换 '+award.name+' ?',
                showCancelButton: true
            }).then(action => {
                if(action=='confirm'){
                    this.score-=award.score
                    award.show=false
                }
                else{return}
            });
        }
    }
}
</script>

<style scoped>
@import "../assets/css/animate.css";
.outbox{
    display: flex;
    justify-content:space-around;
    width:100%;
}
.box{
    align-items: center;
    display: inline-flex;
    flex-direction:column;
    justify-content:space-around;
    width:26vw;
    height:100px;
}
.headshot{
    width:50px;
    border-radius: 25px;
}
.nickname{
    font-size:16px;
}
.box .text{
    font-size:14px;
}
.box .score{
    font-size:28px;
    color:#F0B691;
    font-weight:500;
}
.box .rank{
    font-size:14px;
}
.box button{
    font-size:14px;
    width:78px;
    height:24px;
}
.line{
    margin:10px;
    display: flex;
    justify-content:space-between;
    width:calc(100% - 20px);
}
.title{
    font-size:14px;
    display: inline-block;
}
.link,a{
    font-size:12px;
    color:#bababa;
    display: inline-block;
    text-decoration: none;
}
button a{
    color:#fff;
    text-decoration: none;
}
.rowscroll{
    width:100%;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    flex-wrap: nowrap;
}
.awardCard{
    display: inline-flex;
    padding:0 10px;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:180px;
    border:#bababa solid 1px;
    margin:10px;
}
.awardCard .name{
    font-size:14px;
    margin-left:10px;
    align-self:flex-start;
}
.awardCard .score{  
    font-size:18px;
    margin-left:10px;
    align-self:flex-start;
}
.awardCard .score span{
    font-size:14px;
}
.awardCard img{
    width:110px;
    height:50px;
}
.awardCard button{
    font-size: 14px;
    width:96px;
    height:26px;
}
.awardCard .detail{
    font-size:14px;
    color:#bababa;
}
.awardCard .detail :visited{
    color:#bababa;
}
.ranklist-item{
    width:100%;
    height:45px;
    display: flex;
    justify-content:flex-start;
    align-items:center;
}
.ranklist-item .rank{
    font-size:14px;
    margin:auto 20px;
}
.ranklist-item img{
    width:32px;
    height:32px;
    border-radius: 16px;
    margin:auto 20px auto 0;
}
.ranklist-item .nickname{
    font-size:14px;
}
.ranklist-item .score{
    font-size:14px;
    margin-left:calc(100% - 225px)
}
</style>
