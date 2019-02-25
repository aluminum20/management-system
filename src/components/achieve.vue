<template>
    <div>
        <myHeader title="成就"></myHeader>
        <p class="output">你一共为协会输出了</p>
        <div class="box">            
            <p class="num" @click="wordNum=1">{{wordNum}}</p>
            <p class="text">字</p>
        </div>
        <div class="box">            
            <p class="num">{{readNum}}</p>
            <p class="text">阅读</p>
        </div>
        <div class="box">            
            <p class="num">{{zanNum}}</p>
            <p class="text">赞</p>
        </div>
        <spacer marginTop="10"/>

        <mt-navbar v-model="selected">
            <mt-tab-item id="rumor">Rumor</mt-tab-item>
            <mt-tab-item id="chuangbian">创编</mt-tab-item>
            <mt-tab-item id="all">总榜</mt-tab-item>
        </mt-navbar>

        <spacer/>

        <mt-tab-container v-model="selected">
                <mt-tab-container-item id="rumor">
                    <articleArray v-bind:array="rumorArray" />
            </mt-tab-container-item>
                <mt-tab-container-item id="chuangbian">
                    <div class="noContent" v-if="chuangbianArray==null">暂无内容</div>
                    <articleArray v-bind:array="chuangbianArray" />
            </mt-tab-container-item>
            <mt-tab-container-item id="all">
                    <articleArray v-bind:array="allArray" />
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
import myHeader from './myHeader'
import spacer from './spacer'
import articleArray from './articleArray'
import { Navbar, TabItem,Lazyload,Indicator } from 'mint-ui';
// import { getHomeContent } from '../api';
export default {
    components: {articleArray,myHeader,spacer,Navbar, TabItem},
    data(){
        return {            
            selected:'rumor',
            wordNum:'',
            readNum:'',
            zanNum:'',
            rumorArray:[],
            chuangbianArray:[],
            allArray:[]
        }
    },  
    beforeMount:function(){
        console.log("achieve beforeMount")
        if(!this.$store.getters.ifAchieveInited){     
            console.log("achieve load data")   
            this.$store.dispatch('initHomeContent').then(() => {
                let temp=this.$store.getters.achieve
                this.wordNum=temp.wordNum
                this.readNum=temp.readNum
                this.zanNum=temp.zanNum
                this.rumorArray=temp.rumorArray 
            })
        }
        else{
            let temp=this.$store.getters.achieve
            this.wordNum=temp.wordNum
            this.readNum=temp.readNum
            this.zanNum=temp.zanNum
            this.rumorArray=temp.rumorArray
        }
    },
    watch: {
        selected:function(){
            if(this.selected==`chuangbian`){
                if(this.chuangbianArray.length!=0){return}
                if(!this.$store.getters.ifChuangbianArrayInited){//服务器上可能没有创编
                    Indicator.open({spinnerType: 'fading-circle'});
                    this.$store.dispatch('initChuangbianContent').then(() => {
                        Indicator.close();
                        this.chuangbianArray=this.$store.getters.getChuangbianArray
                })
                }else{
                    this.chuangbianArray=this.$store.getters.getChuangbianArray
                }
            }
            else if(this.selected=="all"){
                if(this.allArray.length!=0){return}
                if(!this.$store.getters.ifAllArrayInited){
                    Indicator.open({spinnerType: 'fading-circle'});
                    this.$store.dispatch('initAllArrayContent').then(() => {
                        Indicator.close();
                        this.allArray=this.$store.getters.getAllArray
                    })
                }else{
                    this.allArray=this.$store.getters.getAllArray
                }
                
            }
        },
    },
    methods:{
        openTab:function(item){
            item.ifOpen=!item.ifOpen
        },
        temp:function(){
            console.log(1)
        }
    }
}
</script>

<style scoped>
.output{
    font-size:18px;
    margin-top:70px;
}
.box .num{   
    font-size:18px;
}
.box .text{
    margin-top:-10px;
    color:#666;
    font-size:12px;
}
.box{
    display: inline-block;
    width:31vw;
}
.mint-tab-item{
    font-size:16px;
}
.mint-tab-item-label{
    font-size:16px;
}
.noContent{
    color:#666;
    margin-top:20px;
}
</style>

        