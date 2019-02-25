<template>
<div class="outerbox">
    <myHeader title="通讯录" leftIcon="back"/>
    <div class="top">
        <mt-field placeholder="搜索" v-model="search"></mt-field>
        <mt-index-list>
            <mt-index-section v-for="(group,index1) in list" :index="group.name" :key="index1"> 
                <router-link v-for="(person,index2) in group.filter" :to="{path: `/personal/friends/${person.id}`}" :key="index2">
                <mt-cell :title="person.name" is-link >
                    <img  slot="icon" :src="person.img" width="30" height="30" >
                </mt-cell>
                </router-link>
            </mt-index-section>
        </mt-index-list>
    </div>
</div>
</template>

<script>
import myHeader from './myHeader'
import {Field,Cell,IndexList,IndexSection} from 'mint-ui'
export default {
    components: {Field,myHeader,Cell,IndexList,IndexSection},
    data(){
        return{
            search:'',
            list:[],
        }
    },
    beforeMount:function(){
        this.list=[
            {name:"微信组",member:[{name:"苏苏",id:1,img:"./src/assets/headshot.jpg"},{name:"77",img:"./src/assets/headshot.jpg"}],filter:[]},
            {name:"微博组",member:[{name:"仕达",img:"./src/assets/headshot.jpg"},{name:"江老师",img:"./src/assets/headshot.jpg"}],filter:[]},
            {name:"外联组",member:[{name:"秋琳",img:"./src/assets/headshot.jpg"},{name:"小紧",img:"./src/assets/headshot.jpg"}],filter:[]},
            {name:"设计组",member:[{name:"心颐",img:"./src/assets/headshot.jpg"},{name:"小麦",img:"./src/assets/headshot.jpg"}],filter:[]},
            {name:"视频组",member:[{name:"云卉",img:"./src/assets/headshot.jpg"},{name:"开书",img:"./src/assets/headshot.jpg"}],filter:[]},
            {name:"技术组",member:[{name:"文彬",img:"./src/assets/headshot.jpg"},{name:"聪哥",img:"./src/assets/headshot.jpg"}],filter:[]},
        ]
        for(var i in this.list){
            this.list[i].filter=this.list[i].member;
        }
    },
    watch:{
        search:function(){
            console.log("search watch")
            var filterfn= person => person.name.search(new RegExp(".*"+this.search+".*"))!=-1
            for(var index in this.list){
                this.list[index].filter=this.list[index].member.filter(filterfn);
            }
        }
    },
}
</script>

<style scoped>
img{
    border-radius: 15px;
}
.outerbox{
    text-align: left;
}
.outerbox /deep/ .mint-indexlist-indicator{
    width:90px;
}
</style>


