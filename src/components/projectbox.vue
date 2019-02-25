<template>
<div>
    <mt-cell :title="item.title" :label="getStatusstr(item.status)" v-if="!item.ifOpen">
        <img @click="item.ifOpen=true" src="../assets/down.png">
        <!-- 最好是点击整个cell都可以展开吧 -->
    </mt-cell>
    <div class="pbox" v-if="item.ifOpen">
    <div class="line" >
        <div class="title">{{item.title}}<span>{{getStatusstr(item.status)}}</span></div>
        <div class="icons">
            <img src="../assets/nostar.png" v-if="!item.ifStar" @click="item.ifStar=true">
            <img src="../assets/star.png"   v-if="item.ifStar"  @click="item.ifStar=false">
            <img @click="item.ifOpen=false" src="../assets/up.png">
        </div>
    </div>
    <div>{{item.group}}</div>
    <div>{{getDDLstr(item.ddl)}}</div>
    <hr/>
    <div class="line">
        <div>负责人：{{item.master}}</div>
        <div>{{item.class}}</div>
    </div>
    <div class="joiner">参与人：<span v-for="joiner in item.joiner">{{joiner}}</span></div>
    <div>查看成果</div>
    <div class="line" >
        <div>备注：无</div>
        <div class="icons">
            <img src="../assets/wechat.png">
            <router-link :to="{name:'editPro',params:{ proId:item.id}}">
                <img src="../assets/edit.png">
            </router-link>
            <img v-if="item.status!='del'" src="../assets/delete.png" @click="del">
        </div>
    </div>
    <div class="line" >
        <div>总结：无</div>
        <mt-button>下回带上我！</mt-button>
    </div>
    </div>
</div>
</template>

<script>
import spacer from './spacer'
import { MessageBox } from 'mint-ui'
export default {    
    components: {spacer,MessageBox},
    props:['item'],
    methods:{
        getDDLstr:function(time){
            var d = new Date(time)
            var nowtime=new Date()
            var rest=Math.ceil((time-nowtime)/86400000)
            if(rest<0){rest=0}
            return d.toLocaleDateString()+" 截止 (还剩"+rest+"天)"//有风险，取决于本地显示
        },
        getStatusstr:function(status){
            if(status=="ing"){return "(进行中)"}
            else if(status=="fin"){return "(已完成)"}
            else if(status=="del"){return "(已关闭)"}
        },
        del:function(){
            MessageBox.prompt('请输入删除理由：','确认删除该项目？')
            .then(({ value, action }) => {
                console.log("del")
                this.item.status="del"
            })
        },
        //样式不对
        //是单行，不是多行文本框
        //输入为空照样可以关弹窗
    }
}
</script>

<style scoped>
.pbox{
    font-size:14px;
    margin:10px auto;
    display: flex;
    flex-direction:column;
    width:94%;
}
.pbox .line{
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
}
.pbox .title{
    font-size:16px;
}
.pbox .title span{
    font-size:14px;
    color:#666;
}
img{
    width:25px;
    margin-left:10px;
}
hr{
    border:0.5px solid #e4e4e4;
    width:100%
}
.pbox .joiner{
    max-width:calc(100vw - 140px);
    text-indent: -48px;
    margin-left: 48px;
    white-space:wrap;
}
.pbox span{
    margin-right: 5px;
}
.pbox div{
    margin-bottom:5px;
}
button{
    height:28px;
    font-size:14px;
}
</style>
