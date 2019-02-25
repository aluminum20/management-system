<template>
<div>
    <myHeader title="积分记录" leftIcon="back"></myHeader>
    <div style="margin-top:50px;">
        <div class="box" v-for="record in scoreRecordArray">
            <img v-bind:src="record.icon">
            <div class="continer">
                <div class="title">{{record.title}}</div>
                <div class="time">{{record.time}}</div>
            </div>
            <div class="cost" v-html="processcost(record.cost)"></div>
        </div>        
    </div>
</div>
</template>

<script>
import myHeader from './myHeader'
import { getScoreRecord } from '../store/api';
export default {
    components: {myHeader},
    data(){
        return{
            scoreRecordArray:[]
            }
    },
    beforeMount:function(){
        getScoreRecord({
                'user_id': this.$store.getters.currentUser_id,
            }).then((res) => {
                this.scoreRecordArray=res.data.scoreRecordArray
            })
    },
    methods:{
        processcost:function(cost){
            if(cost>0)
                return '<span style="color:#F0B691">+'+cost+'</span>'
            else
                return '<span style="color:#333">'+cost+'</span>'
        }
    }
}
</script>

<style scoped>
.box{
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:nowrap;
    padding:16px 0;
    height:38px;
    border-bottom:1px solid #C9C9C9;
}
.box img{
    border:1px solid #666;
    margin-left:20px;
    width:40px;
    border-radius: 20px;
    margin-right:16px;
}
.continer{
    text-align: left;
}
.box .title{
    font-size:16px;
    min-width:230px;
}
.box .time{
    font-size:12px;
    color:#666;
}
.box .cost{
    font-size:18px;
    padding-top:2px;
}
</style>
