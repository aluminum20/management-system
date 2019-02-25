<template>
<div>
    <div class="box">
        <div class="left">
            <img :src="leftIconStr">
        </div>
        <div class="title">{{title}}</div>
        <div class="right">
            <mt-button type="primary">保存</mt-button>
        </div>
    </div>    
</div>
</template>

<script>
export default {
    data(){
        return{
             leftIconStr:''
        }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      leftIcon: {
        type: String,
        default: ''
      },
    },
    beforeMount:function(){
        console.log("header")
        console.log(this.leftIcon)
        if(this.leftIcon=="back"){
            this.leftIconStr="./src/assets/back.png"
        }
    }
}
</script>

<style scoped>
.left{
    min-width: 70px;
}
.right{
    min-width: 70px;
}
img{
    height:20px;
    width:20px;
    margin-left:10px;
}
button{
    height:30px;
    width:60px;
    font-size: 16px;
}
.title{
    width:calc(100% - 140px);
    text-align: center;
}
.box{
    width:100%;
    height:45px;
    background-color: #fff;
    font-size:16px;
    z-index:1;
    position:fixed;
    left:0px;
    top:0px;
    color:#333;
    box-shadow: 0px 2px 10px #aaa;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
