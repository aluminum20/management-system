<template>
<div class="box" > 
        <img :src="item.img">
        <div class="temp">
            <div class="name">{{item.name}}<span class="status">&nbsp;&nbsp;{{'('+getText(item.ifvalid)+'中)'}}</span></div>
            <div class="score">{{item.score}}积分&emsp;被兑换数量 4</div>
            <div class="detail">查看详情></div>
        </div>
    <mt-button class="editbt" type="primary" size="small">{{getText(!item.ifvalid)}}</mt-button>
    <router-link :to="{name:'editAward',params:{id:item.id}}">
        <mt-button class="editbt" type="primary" size="small">编辑</mt-button>
    </router-link>
</div>
</template>

<script>
export default {
    props:{
        item:{
        type: Object,
      },},
    methods:{
        getText:function(ifvalid){
            if(ifvalid==true){
                return "上架"
            }else{
                return "下架"
            }
        },
    }
}
</script>

<style scoped>
.box{
    height:100px;
    padding:22px 15px;
    display: flex;
}
.box img{
    width:100px;
    height:100px;
}
.box .temp{
    height:100px;
    margin-left:14px;
    text-align: left;
    min-width:calc(100% - 230px);
    max-width:calc(100% - 230px);
}
.box .name{
    font-size:16px;
    white-space:nowrap;
}
.box .status{
    font-size:12px;
    color:#666;    
}
.box .score{
    font-size:12px;
    color:#666;
    margin-top:8px;
    white-space:nowrap;
}
.box .detail{
    font-size:12px;
    color:#666;
    margin-top:40px;
    white-space:nowrap;
}
.box .editbt{
    margin-top:72px;    
    margin-left:5px;
}
</style>
