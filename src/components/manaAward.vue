<template>
<div class="outerbox">
    <myHeader title="管理兑换券" leftIcon="back"/>

    <router-link :to="{name:'editAward',params:{id:'new'}}">
        <mt-cell title="新增兑换券" class="top">
            <img src="../assets/add.png" class="addbt">
        </mt-cell>
    </router-link>

    <div class="bar">
        <button @click="filterMenu=true">筛选</button>
    </div>

    <mt-popup
        class="menu"
        v-model="filterMenu"            
        position="top">
        <div v-for="(item,index) in filterOptions" @click="selectfilter(item.title)" v-bind:class="{ selected: item.ifSelected }" :key="index" >
            <mt-cell :title="item.title" ></mt-cell>
        </div>
    </mt-popup>

    <div v-for="(item,index) in allAwardArray.filter(this.filterfn)" :key="index">
        <awardBox :item="item"/>
        <spacer/>
    </div>
    <div class="noContent" v-if="allAwardArray.filter(this.filterfn).length==0">暂无内容</div>

</div>
</template>

<script>
import myHeader from './myHeader'
import spacer from './spacer'
import awardBox from './awardBox'
import { Cell } from 'mint-ui';
export default {
    components: {awardBox,spacer,myHeader,Cell},
    data(){
        return{
            filterMenu:false,
            filterOptions:[{
                title:"查看所有",
                ifSelected:true
                },{
                title:"只看已上架",
                ifSelected:false
                },{
                title:"只看未上架",
                ifSelected:false
                }],
            allAwardArray:[],
            filterfn:item => true,
        }
    },
    beforeMount:function(){
        this.$store.dispatch('initAwardArray').then(() => {
            this.allAwardArray=this.$store.getters.awardArray
        })
    },
    methods:{
        selectfilter:function(title){           
            for(var index in this.filterOptions){
                if(this.filterOptions[index].title==title){
                    this.filterOptions[index].ifSelected=true
                }
                else{
                    this.filterOptions[index].ifSelected=false
                }
            }
            if(title=="查看所有"){this.filterfn= item => true}
            else if(title=="只看已上架"){this.filterfn= item => item.ifvalid==true}
            else if(title=="只看未上架"){this.filterfn= item => item.ifvalid==false}
            this.filterMenu=false  
        },
    }
}
</script>

<style scoped>
.outerbox{
    text-align:left;
}
.addbt{
    width:20px;
}
.bar{
    background-color: #e4e4e4;
    width:100%;
    height:25px;
    text-align: right;
}
.bar button{
    background-color: rgba(0,0,0,0);
    border:none;
    color:#a1a1a1;
    font-size:16px;
    outline:none;
}
.menu{
    margin-top: 128px;
    width: 100%;
    text-align:left;
}
.outerbox /deep/ .mint-tab-item{
    font-size:16px;
}
.outerbox /deep/ .v-modal{
    top:128px;
}
.selected{
    color:#ff9966;
}
</style>
