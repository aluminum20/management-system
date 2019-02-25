<template>
<div class="outerbox">
    <mt-field label="项目名称" placeholder="请输入用户名" v-model="title"></mt-field>
    <mt-field label="截止日期" placeholder="请输入用户名" v-model="ddl" >
        <div v-if="pickerValue==''" class="toclick" @click="openPicker">请选择截止日期</div>
    </mt-field>
    <div class="joiner">
    <mt-field label="负责人" type="textarea" rows="3">
        <div class="group"><img src="../assets/headshot.jpg"><div class="name">雪莹</div></div>
        <div class="group"><img src="../assets/headshot.jpg"><div class="name">雪莹</div></div>
        <div class="group">
            <router-link :to="{name:'addmember',params:{ proId:id}}">
                <img src="../assets/add.png">
            </router-link>
            <div class="name">&nbsp;</div>
        </div>       
    </mt-field>
    </div>
    <div class="joiner">
    <mt-field label="参与成员" type="textarea" rows="3">
        <div class="group"><img src="../assets/headshot.jpg"><div class="name">雪莹</div></div>
        <div class="group"><img src="../assets/headshot.jpg"><div class="name">雪莹</div></div>
        <div class="group">
            <router-link :to="{name:'addmember',params:{ proId:id}}">
                <img src="../assets/add.png">
            </router-link>
            <div class="name">&nbsp;</div>
        </div>            
    </mt-field>
    </div>
    <mt-field label="备注" type="textarea" rows="4" v-model="more"></mt-field>
    <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="pickerValue"
        :startDate=now
        :endDate=end>
    </mt-datetime-picker>
    <mt-button type="primary">新建项目</mt-button>
    <mt-button type="default">保存草稿</mt-button>   
</div>
</template>

<script>
import { getNewId }  from'../api'
import { Field,Button,DatetimePicker } from 'mint-ui'
export default {
    components: {DatetimePicker},
    data(){
        return{
            id:0,
            now:0,
            end:0,
            title:'',
            pickerValue:'',
            more:''
        }
    },
    computed:{
        ddl:function(){
            if(this.pickerValue==''){return ''}
            else{
                return this.pickerValue.toLocaleDateString()
            }
        }
    },
    beforeMount:function(){
        this.now=new Date()
        this.end=new Date(this.now.valueOf()+30*86400000)//截止日期和今天只能差一个月  
        getNewId().then((res) => {
                this.id==res.data.id
        })
        console.log("id")
        console.log(this.id)
    },
    methods:{
        openPicker:function(){
            this.$refs.picker.open()
            console.log(1)
        }
    }
}
</script>

<style scoped>
.outerbox /deep/ .v-modal{
    top:0;
}
.outerbox .mint-cell-title{
    width:80px;
}
.toclick{
    color:#666;
    width:220px;
}
.outerbox img{
    width:30px;
    border-radius: 15px;
}
.joiner /deep/ .mint-field-other{
    width:220px;
    display: flex;
    align-items: center;
}
.joiner .group{
    text-align: center;
    margin-right: 10px;
}
.joiner .name{
    font-size: 12px;
    color:#666;
    margin-top: 5px;
}
.outerbox /deep/ .mint-button{
    width:49%;
}
</style>


