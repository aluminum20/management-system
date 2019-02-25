<template>
<div>
    <myHeader title="排名记录" leftIcon="back"></myHeader>
    <div style="margin-top:50px;">
        <div class="box" v-for="record in rankRecordArray">
            <div class="continer">
                <div class="year">{{getYear(record.time)}}年</div>
                <div class="month">{{getMonth(record.time)}}月</div>
            </div>
            <div class="score">当月获得积分 {{record.score}}</div>
            <div class="rank">第{{record.rank}}名</div>
        </div>        
    </div>
</div>
</template>

<script>
import myHeader from './myHeader'
import { getRankRecord } from '../store/api';
export default {
    components: {myHeader},
    data(){
        return{
            rankRecordArray:[]
            }
    },
    beforeMount:function(){
        getRankRecord({
                'user_id': this.$store.getters.currentUser_id,
            }).then((res) => {
                this.rankRecordArray=res.data.rankRecordArray
            })
    },
    methods:{
        getYear:function(a){
            var d = new Date(a)
            return d.getFullYear()
        },
        getMonth:function(a){
            var d = new Date(a)
            return d.getMonth()+1
        },
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
.continer{
    width:80px;
    text-align: center;
}
.box .year{
    font-size:12px;
    color:#666;
}
.box .month{
    font-size:16px;
    color:#666;
}
.box .score{
    width:220px;
    font-size:16px;
    text-align: left;
}
.box .rank{
    font-size:16px;
}
</style>
