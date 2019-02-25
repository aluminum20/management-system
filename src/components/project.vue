<template>
<div class="outerbox">
    <myHeader title="项目"></myHeader>    

    <mt-navbar id="top" v-model="navbar">
        <mt-tab-item id="joined">我参与的</mt-tab-item>
        <mt-tab-item id="all">所有项目</mt-tab-item>
        <mt-tab-item id="create">新建项目</mt-tab-item>
    </mt-navbar>

    <div class="bar" v-if="navbar!='create'">
        <button @click="order">排序</button>
        <button @click="filter">筛选</button>
    </div>

    <mt-popup
        class="menu"
        v-model="orderMenu"            
        position="top">
        <div @click="selectorder(item.title)" v-bind:class="{ selected: item.ifSelected }" v-for="item in orderOptions">
            <mt-cell :title="item.title" ></mt-cell>
        </div>
    </mt-popup>

    <mt-popup
        class="menu"
        v-model="filterMenu"            
        position="top">
        <div @click="selectfilter(item.title)" v-bind:class="{ selected: item.ifSelected }" v-for="item in filterOptions">
            <mt-cell :title="item.title" ></mt-cell>
        </div>
    </mt-popup>

    <mt-tab-container v-model="navbar">
        <mt-tab-container-item id="joined">
            <div v-for="item in filtermyProjects">
                <projectbox :item="item" />
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="all">
            <div v-for="item in filterallProjects">
                <projectbox :item="item" />
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="create">
            <spacer />
            <newproject />
        </mt-tab-container-item>

    </mt-tab-container>

</div>    
</template>

<script>
import myHeader from './myHeader'
import spacer from './spacer'
import projectbox from './projectbox'
import newproject from './newproject'
import { Checklist,Cell,Popup,Navbar, TabItem,Indicator} from 'mint-ui';
import {updateStarProjects}  from'../api'
export default {
    components: {projectbox,myHeader,spacer,Checklist,Popup,Navbar, TabItem,Indicator,newproject},
    data(){
        return{
            nowtime:0,
            navbar:"joined",
            orderMenu:false,
            filterMenu:false,
            myProjects:[],
            allProjects:[],
            filtermyProjects:[],
            filterallProjects:[],
            orderOptions:[{
                title:"DDL从近到远",
                ifSelected:true
            },{
                title:"DDL从远到近",
                ifSelected:false
            },{
                title:"创建时间从近到远",
                ifSelected:false
            },{
                title:"创建时间从远到近",
                ifSelected:false
            }],
            filterOptions:[{
                title:"查看所有",
                ifSelected:true
                },{
                title:"只看未完成项目",
                ifSelected:false
                },{
                title:"只看已完成项目",
                ifSelected:false
                }]
        }
    },
    beforeMount:function(){
        if(!this.$store.getters.ifMyProjectsInited){     
            console.log("project load data")   
            this.$store.dispatch('getMyProjects').then(() => {
                this.myProjects=this.$store.getters.getMyProjects
                this.filtermyProjects=this.myProjects
            })
        }
        else{
            this.myProjects=this.$store.getters.getMyProjects
            this.filtermyProjects=this.myProjects
        }

    },
    beforeDestroy:function(){
        console.log("project beforeDestroy")
        let starProjects=[]
        for(var index in this.allProjects){
            if(this.allProjects[index].ifStar==true){
                starProjects.push(this.allProjects[index].id)
            }
        }
        console.log(starProjects)
        updateStarProjects({
            'user_id': this.$store.getters.currentUser_id,
            'starProjects':starProjects
        })
    },
    watch:{
        navbar:function(){
            this.orderMenu=false
            this.filterMenu=false
            if(this.navbar=="all"){
                if(this.allProjects.length!=0){return}
                if(!this.$store.getters.ifAllProjectsInited){
                    Indicator.open({spinnerType: 'fading-circle'});
                    this.$store.dispatch('getAllProjects').then(() => {
                        Indicator.close();
                        this.allProjects=this.$store.getters.getAllProjects
                        this.filterallProjects=this.allProjects
                    })
                }else{
                    this.allProjects=this.$store.getters.getAllProjects
                    this.filterallProjects=this.allProjects
                }
            }
        }
    },
    methods:{
        order:function(){
            this.filterMenu=false
            this.orderMenu=true
        },
        filter:function(){
            this.orderMenu=false
            this.filterMenu=true
        },
        selectorder:function(option){            
            for(var index in this.orderOptions){
                if(this.orderOptions[index].title==option){
                    this.orderOptions[index].ifSelected=true                   
                }
                else{
                    this.orderOptions[index].ifSelected=false
                }
            }
            this.orderMenu=false
            var sortfn
            if(option=="DDL从近到远"){sortfn=function(a,b){return a.ddl-b.ddl}}
            else if(option=="DDL从远到近"){sortfn=function(a,b){return b.ddl-a.ddl}}
            else if(option=="创建时间从近到远"){sortfn=function(a,b){return a.create-b.create}}  
            else if(option=="创建时间从远到近"){sortfn=function(a,b){return b.create-a.create}}  
            if(this.navbar=="joined"){
                this.filtermyProjects.sort(sortfn)
            }
            else if(this.navbar=="all"){
                this.filterallProjects.sort(sortfn)
            }                     
        },
        selectfilter:function(title){           
            for(var index in this.filterOptions){
                if(this.filterOptions[index].title==title){
                    this.filterOptions[index].ifSelected=true
                }
                else{
                    this.filterOptions[index].ifSelected=false
                }
            }
            var filterfn
            if(title=="查看所有"){filterfn= item => true}
            else if(title=="只看未完成项目"){filterfn= item => item.status=="ing"}
            else if(title=="只看已完成项目"){filterfn= item => item.status=="fin"}
            this.filterMenu=false
            if(this.navbar=="joined"){
                this.filtermyProjects=this.myProjects.filter(filterfn)
            }
            else if(this.navbar=="all"){
                this.filterallProjects=this.allProjects.filter(filterfn)
            }     
        },
    }
}
</script>

<style scoped>
.outerbox{
    text-align: left;
}
#top{
    margin-top:50px;
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
    margin-top: 121px;
    width: 100%;
    text-align:left;
}
.outerbox /deep/ .mint-tab-item{
    font-size:16px;
}
.outerbox /deep/ .v-modal{
    top:121px;
}
.selected{
    color:#ff9966;
}

</style>
