<template>
<div class="outerbox">
    <myHeader title="个人信息" leftIcon="back" />
    <mt-cell id="top" title="头像"     is-link>
        <img :src="headshot">
    </mt-cell>

    
    <div @click="go">
        <mt-cell title="昵称" is-link :value="nick"></mt-cell>
    </div>
       

    <router-link :to="{path:'/personal/info/editInfo/phone'}">
        <mt-cell title="手机"     is-link :value="phone"></mt-cell>
    </router-link>  

    <div @click="openCampus">
        <mt-cell title="校区" is-link :value="campusStr"></mt-cell>
    </div>

    <router-link :to="{name:'editInfo',params:{ info:'college'}}">
        <mt-cell title="学院" is-link :value="college"></mt-cell>
    </router-link> 
    <mt-cell title="搬砖状态" is-link value="搬砖中"></mt-cell>
    <mt-popup
        v-model="campusPicker"
        position="bottom">
        <div class="popupbt">
            <div class="cancel" @click="closeCampus('cancel')">取消</div>
            <div class="confirm" @click="closeCampus('confirm')">确定</div>
        </div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>

    
</div>    
</template>

<script>
import myHeader from './myHeader'
import { Popup,Picker,Cell } from 'mint-ui';
export default {
    components: {myHeader,Picker,Cell},
    data() {
        return {
            headshot:'',
            nick:'',
            phone:'',
            campus:[],
            college:'',            
            campusTemp:[],
            campusPicker:false,
            campusStr:'',
            slots: [{
                flex: 1,
                values: ['北校区', '南校区'],
                className: 'slot1',
                textAlign: 'right',
                }, {
                divider: true,
                content: '-',
                className: 'slot2'
                }, {
                flex: 1,
                values: ['北区', '东区', '西区'],
                className: 'slot3',
                textAlign: 'left'
                }
            ]
        };
    },
    beforeMount:function(){
        var info=this.$store.getters.getinfo
        this.headshot=info.headshot
        this.nick=info.nick
        this.phone=info.phone
        this.campus=info.campus
        this.headshot=info.headshot          
        this.college=info.college
        if(this.campus[1]==""){this.campusStr=this.campus[0]}
        else {this.campusStr=this.campus[0]+'-'+this.campus[1]}
    },
    methods: {
        go(){
            var info="nick"
            this.$router.push({ name: 'editInfo',params:{ info:'nick'}})
        },
        onValuesChange(picker, values) {  
            if(values[0]=="北校区")
                {picker.setSlotValues(1, ['北区', '东区', '西区'])}
            else if(values[0]=="南校区")
                {picker.setSlotValues(1, [])}
            this.campus[0]=values[0]
            if(values[0]=="南校区"){this.campus[1]=''}
            else{this.campus[1]=values[1]}
        },
        openCampus(){
            this.campusTemp=this.campus
            this.campusPicker=true
        },
        closeCampus(value){

            var a=[1,2,3,4]
            delete a[1]//[1,empty,3,4]
            var b=[1,2,3,4]
            this.$delete(b,1)//[1,3,4]           

            if(value=='cancel'){
                this.campus=this.campusTemp
            }else if(value=='confirm'){
                if(this.campus[1]==""){this.campusStr=this.campus[0]}
                else {this.campusStr=this.campus[0]+'-'+this.campus[1]}
                this.$store.dispatch('updateInfo',{key:"campus",value:this.campus})
            }
            this.campusPicker=false
        }
  },

};


</script>

<style scoped>
#top{
    margin-top:50px;
}
.outerbox{
    text-align: left;
}
img{
    width:50px;
    border-radius: 25px;
    margin-top:20px;
    margin-bottom: 10px;
}
.outerbox /deep/ .mint-popup{
    width:100%;
}
.popupbt{
    display: flex;
    justify-content: space-between;
    margin-left:10%;
    width:80%;
    font-size:16px;
    margin-top:20px;
}
.popupbt .cancel{
    color:#666;
}
.popupbt .confirm{
    color:#F0B691;
}
</style>
