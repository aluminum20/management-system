<template>
    <div>
        <div class="title">{{title}}</div>
        <div class="tip">{{tip}}</div>
        <button>{{cancelButton}}</button>
        <button>{{confirmButton}}</button>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            default: "hello"
        },
        tip: {
            type: String,
            default: "this is a modal"
        },
        comfirmButton: {
            type: String,
            default: "确定"
        },
        cancelButton: {
            type: String,
            default: "取消"
        },
    }
}
</script>

<style scoped>
.outdiv{
    width:350px;
    height:200px;
    border-radius: 10px;
    text-align: center;
    margin: 20px auto;
    background-color: #fff;
    padding-top:35px;
}
.title{
    font-size:22px;
    color:#323232;
    margin-bottom: 40px;
}
.tip{
    font-size: 16px;
    color:#676767;
    margin-bottom: 40px;
}
button{
    color:#323232;
    width:49%;
    font-size:20px;
    display: inline;
    padding-top:20px;
    padding-bottom:20px;
    background-color: transparent;
    border:none;
    outline:none;    
}
.confirmButton{
    color:#4abd38;
}
</style>
