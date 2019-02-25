<template>
    <div>
        <div class="item" v-for="(item,index) in array" :key="index">
            <img v-bind:src="item.cover" class="cover">
            <div class="temp">
                <div v-bind:class="{ title:!item.ifOpen,wholeTitle:item.ifOpen}" class="title">{{item.title}}</div>
                <div class="detail" v-if="!item.ifOpen">阅读 {{item.read}}   赞 {{item.zan}}   评论 {{item.comment}} </div>
            </div>
            <img src="../assets/down.png" v-if="!item.ifOpen" class="down" @click="openTab(item)">
            <img src="../assets/up.png" v-if="item.ifOpen" class="up" @click="openTab(item)">                    
            <table v-if="item.ifOpen">
                <tr class="tableHead"><td>项目</td><td>数据</td><td>周排名</td><td>月排名</td></tr>
                <tr><td>阅读</td><td>{{item.read}}</td><td>{{item.readWeekRank}}</td><td>{{item.readMonthRank}}</td></tr>
                <tr><td>赞</td><td>{{item.zan}}</td><td>{{item.zanWeekRank}}</td><td>{{item.zanMonthRank}}</td></tr>
                <tr><td>评论</td><td>{{item.comment}}</td><td>{{item.commentWeekRank}}</td><td>{{item.commentMonthRank}}</td></tr>
                <tr><td>转发</td><td>{{item.forward}}</td><td>{{item.forwardWeekRank}}</td><td>{{item.forwardMonthRank}}</td></tr>
            </table>
            <spacer marginTop="20"/>
        </div> 
    </div>
</template>

<script>
import { Navbar, TabItem,Lazyload} from 'mint-ui';
import spacer from './spacer'
export default {
    components: {spacer,Navbar, TabItem},
    props:{
        array: {
            type: Array,
            default: []
        }
    },
      methods:{
        openTab:function(item){
            item.ifOpen=!item.ifOpen
        },
    }
}
</script>

<style scoped>
.item{
    box-sizing:border-box;
    padding:20px 10px 0 10px;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    align-content:flex-start;
    flex-wrap:wrap;
    min-height: 110px;
}
.item .cover{
    display: block;
    width:70px;
    height:70px;
}
.item .temp{
    padding: 0;
    width:calc(100% - 110px);
    height:70px;
}
.item .title{
    text-align: left;
    font-size:16px;
    overflow: hidden; 
    text-overflow:ellipsis;
    word-break:keep-all;/* 不换行 */ 
    white-space:nowrap;/* 不换行 */ 
}
.item .wholeTitle{
    text-align: left;
    font-size:16px;
    word-break:normal;/* 换行 */ 
    white-space:normal;
}
.item .detail{
    width:200px;
    text-align: left;
    margin-top:30px; 
    font-size:14px;
    color:#666;
}
.item .down{
    display: block;
    width:25px;
}
.item .up{
    display: block;
    width:25px;
}
.item table{
    color:#666;
    font-size:14px;
    text-align: center;
    margin:10px auto -10px auto;
}
.item .tableHead{
    color:#999;
}
.item td{
  padding:5px 20px 5px 20px;
}
</style>
