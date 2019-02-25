<template>
<div id="header">
    <mt-header :title="title" id="header">
        <mt-button slot="left" >
          {{leftText}}
          <img v-if="haveLeftImgIcon" @click="leftPathGo" v-bind:src="leftIconInData" height="20" width="20" slot="icon">
        </mt-button>
        <mt-button slot="right">
          {{rightText}}
          <img v-if="haveRightImgIcon" src="../assets/more.jpg" @click="rightbtclick" height="20" width="20" slot="icon">
        </mt-button>
        <mt-button>test</mt-button>
    </mt-header>

    <mt-popup  v-model="ifPopupVisible"
               position="top"
               id="righttopmenu">
               <div class="innerbt" @click="shareclicked">
                 <img class="img" src="../assets/share.png"><div class="innerbttext">分享</div></div>
               <div class="innerbt" @click="loginclicked">
                 <img class="img" src="../assets/login.png"><div class="innerbttext">{{loginText}}</div></div>
    </mt-popup>
</div>
</template>


<script>
import { Popup,Header,Button,Indicator,Toast } from 'mint-ui';
export default {
    data(){
      return{
        ifSharePopupVisible:false,
        ifPopupVisible:false,
        temp:false,
        leftIconInData:'',
        rightIconInData:'',
        url:window.location.href,//weex好像没有window
      }
    },
    components:{Toast,Popup,Header,Button,Indicator},
    props: {
      title: {
        type: String,
        default: ''
      },
      leftText: {
        type: String,
        default: ''
      },
      rightText: {
        type: String,
        default: ''
      },
      leftIcon: {
        type: String,
        default: ''
      },
      rightIcon: {
        type: String,
        default: ''
      },
      leftPath: {
        type: String,
        default: ''
      },
      rightfn:{
        type: Object,
      },
      haveRightImgIcon:{
        type:Boolean,
        default: false
      }
    },
    methods:{
      shareclicked(){
        this.ifPopupVisible=false
        this.ifSharePopupVisible=true
      },
      loginclicked(){
        this.$store.commit ('SET_COOKIE',{key:'currentUser_id',value:''})
        //退出登录时清空状态，不然会视为已经登录然后跳转到list
        this.$router.push({ path: '/login' })
        //跳转太快了体验别扭
      },
      leftPathGo(){
        this.$router.back()
      },
      rightbtclick(){
        this.ifPopupVisible=!this.ifPopupVisible
      }
    },
    beforeMount:function(){
      switch(this.leftIcon)
      {
      case 'share':
        this.leftIconInData="./src/assets/share.png"
        break;
      case 'back':
        this.leftIconInData="./src/assets/back.png"
        break;
      case 'more':
        this.leftIconInData="./src/assets/more.jpg"
        break;
      default:
      }
      switch(this.rightIcon)
      {
      case 'share':
        this.rightIconInData="./src/assets/share.png"
        break;
      case 'back':
        this.rightIconInData="./src/assets/back.jpg"
        break;
      case 'more':
        this.rightIconInData="./src/assets/more.jpg"
        break;
      default:
      }
    },
    computed:{
      haveLeftImgIcon(){
        if(this.leftIcon=="")
          return false
        return true
      },
      loginText(){
        return "退出登录"
        // if(this.$store.getters.isLogin){return "退出登录"}
        // else{return "登录"}
      }
    }
}
</script>

<style scoped>
#modal{
  background-color: rgba(255,0,0,1);
  width:100%;
  height:calc(100%-45px);
  position:fixed;
  left:0px;
  top:45px;
}
.innerbttext{
  margin-top:-18px;
  margin-left:26px;
}
.img{
display:block;
width:16px;
margin-right: 10px;
margin-top:5px;
}
.group{
    display:inline-block;
    margin:12px;
}
#sharepopup{
    text-align: center;
    width:100%;
    padding-bottom: 20px;
}
#tip{
 margin-top:20px;
 margin-left:23px;   
 margin-bottom: 25px;
}
.logo{
    width:30px;
     margin-bottom: 5px;
}
.text{
    font-size:12px;
    color:#666;
}
#header{
  height:45px;
    font-size:16px;
    z-index:1;
    position:fixed;
    left:0px;
    top:0px;
    width:100%;
    background-color: white;
    color:#333;
    box-shadow: 0px 2px 10px #aaa;
}
.innerbt{
    z-index:2;
    width:100%;
    border-width:0.5px;
    border-style: solid;
    border-color:white white #ebebeb white;
    height:40px;
    font-size:16px;
    padding-top: 12px;
    padding-left:15px;
    background-color: white;
}
#righttopmenu{
    z-index:1;
    /* 在list页被不知道什么挡住了 */
    margin-top:55px;
    /* 在详情页又错位了…… */
    margin-left:100px;
    background-color: white;
    width:140px;
    height:106px;
}
</style>
