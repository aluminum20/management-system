<template>
<div class="outerbox">
    <myHeader :title="title" rightText="保存" leftIcon="back" />
    <mt-field v-show="hasField" class="top" :type="type" v-model="val"></mt-field>
    <mt-index-list v-show="!hasField" class="top">
        <mt-index-section v-for="(colleges,i) in collegeList" :index="colleges.index" :key="i"> 
            <div v-for="(college,j) in colleges.list" :key="j" @click="selectCollege(college)">
                <mt-cell :title="college"></mt-cell>
            </div>
        </mt-index-section>
    </mt-index-list>
</div>    
</template>

<script>
import myHeader from './myHeader'
import { Field,IndexList,IndexSection } from 'mint-ui';
export default {
    components: {myHeader,Field,IndexList,IndexSection},
    data(){
        return{
            hasField:true,
            val:'',
            type:'',
            title:'',
            collegeList:[
                {index:"C",list:["材料科学与工程学院"]},
                {index:"D",list:["电力学院","电子与信息学院"]},
                {index:"F",list:["法学院"]},
                {index:"G",list:["公共管理学院","工商管理学院"]},
                {index:"H",list:["化学与化工学院","环境与能源学院"]},
                {index:"J",list:["计算机科学与工程学院","机械与汽车工程学院","建筑学院","经济与贸易学院"]},
                {index:"Q",list:["轻工科学与工程学院"]},
                {index:"R",list:["软件学院"]},
                {index:"S",list:["设计学院","生物科学与工程学院","食品科学与工程学院","数学学院"]},
                {index:"T",list:["体育学院","土木与交通学院"]},
                {index:"W",list:["外国语学院","物理与光电学院"]},
                {index:"X",list:["新闻与传播学院"]},
                {index:"Y",list:["艺术学院","医学院"]},
                {index:"Z",list:["自动化科学与工程学院"]},
            ]
        }
    },
    //复用时，生命周期钩子可能不会被调用
    beforeMount:function(){
        switch(this.$route.params.info){
            case 'headshot':
                this.title="头像"
                this.hasField=false
                break
            case 'nick':
                this.type="text"
                this.title="昵称"
                this.hasField=true
                break
            case 'phone':
                this.type="number"
                this.title="手机"
                this.hasField=true
                break
            case 'college':
                this.title="学院"
                this.hasField=false
                break
        }
    },
    methods:{
        selectCollege:function(college){
            this.$store.dispatch('updateInfo',{key:"college",value:college})
            console.log(this.$store.getters.getinfo)
            this.$router.back()
        }
    }

}
</script>

<style scoped>
.top{
    margin-top:50px;
}
.outerbox{
    text-align: left;
}
</style>
