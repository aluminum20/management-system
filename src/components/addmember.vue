<template>
    <div class="outerbox">
        <myHeader title="添加负责人" leftIcon="back" :rightText="'确定('+choseNum+')'"></myHeader>  
        <div id="top" class="headshots">
            <div class="imgs">
                <img v-for="(item,index) in headArray" :src="item" :key="index">
            </div>
            <mt-field placeholder="搜索" v-model="search"></mt-field>
        </div>
        <mt-index-list>
            <mt-index-section v-for="(group,index) in list" :index="group.name" :key="index"> 
                <mt-checklist
                    align="right"
                    v-model="group.chosen"
                    :options="group.nameFilter">
                </mt-checklist>
            </mt-index-section>
        </mt-index-list>
    </div>    
</template>

<script>
import myHeader from './myHeader'
import {Field,Cell,Checklist,IndexList,IndexSection} from 'mint-ui'
export default {
    components: {Field,myHeader,Cell,Checklist,IndexList,IndexSection},
    data(){
        return{
            headArray:[],
            search:'',
            choseNum:0,
            list:[],
            chosenTemp:[[],[],[],[],[],[]],
            filterkey:false
        }
    },
    beforeMount:function(){
        this.list=[
            {name:"微信组",member:[{name:"苏苏",img:"./src/assets/headshot.jpg"},{name:"77",img:"./src/assets/headshot.jpg"}],nameFilter:[],chosen:[]},
            {name:"微博组",member:[{name:"仕达",img:"./src/assets/headshot.jpg"},{name:"江老师",img:"./src/assets/headshot.jpg"}],nameFilter:[],chosen:[]},
            {name:"外联组",member:[{name:"秋琳",img:"./src/assets/headshot.jpg"},{name:"小紧",img:"./src/assets/headshot.jpg"}],nameFilter:[],chosen:[]},
            {name:"设计组",member:[{name:"心颐",img:"./src/assets/headshot.jpg"},{name:"小麦",img:"./src/assets/headshot.jpg"}],nameFilter:[],chosen:[]},
            {name:"视频组",member:[{name:"云卉",img:"./src/assets/headshot.jpg"},{name:"开书",img:"./src/assets/headshot.jpg"}],nameFilter:[],chosen:[]},
            {name:"技术组",member:[{name:"文彬",img:"./src/assets/headshot.jpg"},{name:"聪哥",img:"./src/assets/headshot.jpg"}],nameFilter:[],chosen:[]},
        ]
        for(var i in this.list){
            this.list[i].nameFilter=this.list[i].member.map(person =>person.name);
        }
    },
    watch:{
        list: {
            handler:function(val,oldVal){   
                //还没有测试头像对的准不准                           
                if(oldVal.length==0){
                    return
                }//在beforeMount被初始化
                if(this.filterkey==true){
                    this.filterkey=false
                    return
                }//是nameFilter变化触发的
                for(var index in this.list){
                    var newlen=this.list[index].chosen.length                    
                    var oldlen=this.chosenTemp[index].length
                    if(newlen!=oldlen){
                        if(newlen>oldlen){
                            var name=this.list[index].chosen[oldlen]
                            var img
                            for(var j in this.list[index].member){
                                if(name==this.list[index].member[j].name){
                                    img=this.list[index].member[j].img
                                    break
                                }                                
                            }
                            this.headArray.push(img)
                            this.choseNum+=1
                        }
                        else if(newlen<oldlen){
                            var name
                            var img
                            for(var j in this.list[index].chosen){
                                if(this.list[index].chosen[j]!=this.chosenTemp[index][j]){
                                    name=this.chosenTemp[index][j]
                                    break
                                }                             
                            }
                            for(var k in this.list[index].member){
                                if(name==this.list[index].member[k].name){
                                    img=this.list[index].member[k].img
                                    break
                                }                                
                            } 
                            var imgindex
                            for(var l in this.headArray){
                                if(img==this.headArray[l]){
                                    imgindex=l
                                    break
                                }
                            }
                            this.headArray.splice(imgindex,1)
                            this.choseNum-=1                           
                            }
                        this.chosenTemp[index]=this.list[index].chosen
                        return
                    }                   
                }
            },
            deep: true
        },
        search:function(){
            console.log("search watch")
            var filterfn= person => person.name.search(new RegExp(".*"+this.search+".*"))!=-1
            for(var index in this.list){
                this.list[index].nameFilter=this.list[index].member.filter(filterfn).map(person =>person.name);
            }
            this.filterkey=true
        }
    },
}
</script>

<style scoped>
#top{
    margin-top:50px;
}
.headshots{
    height:54px;
    padding-left:10px;
    width:100%;
    display: flex;
}
.headshots img{
    width:30px;
    border-radius: 15px;
    margin-right:10px;
}
.outerbox{
    text-align: left;
}
.outerbox .mint-cell-title{
    width:auto;
}
.outerbox /deep/ .mint-indexlist-indicator{
    font-size:16px;
    width:65px;
    height:50px;
}
.imgs{
    margin-top: 12px;
    max-width:400px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height:54px;
}
</style>


