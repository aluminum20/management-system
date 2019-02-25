<template>
<div>
    <myHeader :title="headerTitle" leftIcon="back"></myHeader>
    <!-- 点击back要调用函数，弹框确认是否退出 -->
    <div class="container">
        <mt-field label="标题" placeholder="物品名*数量，如：奶茶*1杯" v-model="name"></mt-field>
        <mt-field label="积分" placeholder="200积分 - 20元" type="number" v-model="score"></mt-field>
        <mt-field label="详情" 
                  placeholder="如：1. 最高兑换金额请不要超过20元喔2. 兑换后微信发给「柿子」就可以等待实现啦" 
                  type="textarea" rows="3" v-model="detail"></mt-field>                       
        <mt-field label="封面" class="cover-field">
            <img :src="preview" width="100%">
            <input id="cover" type='file' accept="image/*" @change="uploadImg" />
        </mt-field>
        <mt-button type="primary" size="large" @click="submit">保存</mt-button>
    </div>
</div>
</template>

<script>
import { Field,Button,Toast } from 'mint-ui';
import myHeader from './myHeader'
import spacer from './spacer'
import { editAward } from '../api';
export default {
    components: {Field,Button,myHeader,spacer,Toast},
    data(){
        return{
            headerTitle:"编辑兑换券",
            name:'',
            score:'',
            detail:'',
            img:'',
            preview:'./src/assets/uploadImg.png',
        }
    },
    beforeMount:function(){
        var id=this.$route.params.id
        console.log(id)
        if(id=="new"){
            this.headerTitle="新增兑换券"
        }else{// 拿到要修改的兑换券的信息
        //先看store里头有没有
        //没有发请求到服务器
        var award=this.$store.getters.getAwardById(id)
        this.name=award.name
        this.score=award.score
        this.detail=award.detail
        this.img=award.img
        }
    },
    methods:{
        submit:function(){
            if(this.title==''){Toast({message:"兑换券标题不能为空",duration: 1500});return;}
            if(this.score==''){Toast({message:"兑换券所需积分不能为空",duration: 1500});return;}
            editAward({//搞一个新的接口
                'id':"xxxx",//从路由的路径拿到
                'title': this.title,
                'score': this.score,
                'detail':this.detail,
                'cover':this.cover,
            }).then((res) => {
                this.title=''
                this.score=''
                this.detail=''
                this.cover=''
                this.preview='./src/assets/uploadImg.png'
                document.getElementById('cover').value=''
                Toast({message:'新增成功',duration: 1500});                
            })
        },
        uploadImg:function(){
            let imgFile = document.getElementById('cover').files[0]
            this.preview=document.getElementById('cover').value
            console.log(imgFile)
            let formData=new FormData()
            formData.append('file',imgFile)
            this.cover=formData
        }
    }
}
</script>

<style scoped>
.container{
    text-align: left;
    margin-top: 55px;
}
#cover{
    position: absolute;
    width:calc(100vw - 110px);
    height:116px;
    top:0px;
    z-index:1;
    outline:none;
    opacity: 0;
}
</style>