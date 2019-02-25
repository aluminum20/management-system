<template>
<div>
    <img src="../assets/head.png" id="head">
    <img src="../assets/logo.png" id="logo">
    <p id="title">小天使成就系统</p>
    <form ref="loginForm">
        <mt-field class="input"
        placeholder="微信号" 
        v-bind:state="fieldState.unstate"
        v-model="loginForm.wechat"></mt-field>
        
        <mt-field class="input"
        placeholder="密码" type="password" 
        v-bind:state="fieldState.pwstate"
        v-model="loginForm.password"></mt-field>

        <mt-button id="login-bt" @click="login()">登录</mt-button>
    </form>
</div>
</template>
<script>
import { Field,Button,Indicator,Toast } from 'mint-ui';
import { loginApi } from '../store/api';
var checkName = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('账号不能为空'));
    }
    setTimeout(() => {
        var uPattern = /^(\w){2,30}$/;
        if (!uPattern.test(value)) {
        callback(new Error('账号只能由30位以内的字母、数字、下划线组成'));
        } else {
            callback();
        }
    }, 500);
};
export default {
    components:{Field,Button},
    data() {
        return {
            fieldState:{
                unstate:'',
                pwstate:'',
            },
            loginForm: {
                wechat: '',
                password: ''
            },
        }
    },
    beforeMount() {
        if (this.$store.getters.isLogin) {
            this.$router.push({ path: '/' });
        }
    },
    methods:{
        login: function () {
            loginApi({
                'wechat': this.loginForm.wechat,
                'password': this.loginForm.password,
            }).then((res) => {
                Toast({message:'登录成功',duration: 1500});                
                // console.log(res);                
                let token_date = new Date();
                this.$store.commit ('SET_COOKIE',{key:'token_date',value:token_date})
                this.$store.commit ('SET_COOKIE',{key:'token',value:res.data.token})
                this.$store.commit ('SET_COOKIE',{key:'currentUser_id',value:res.data.user.id})
                this.$store.commit ('SET_COOKIE',{key:'currentUser_name',value:res.data.user.name})
                this.$router.push({ path: '/achieve' });                                
            }).catch((err) => {
                Toast({message:'账号与密码不符！',duration: 1500})
                // console.log(err);
            });
        },
    }
}
</script>
<style scoped>
#head{
    width:45vw;
    margin:5vh auto 15px auto;
    display:block;
}
#logo{
    width:45vw;
    margin: 0 auto 5px auto;
    display:block;
}
#title{
    font-size: 30px;
    text-align: center;
    margin-top:10px;
}
.input{
    width:70%;
    margin:0 auto 0 auto;
    border-bottom:1px solid #CCCCCC;
}
#login-bt{
    margin:2vh auto 0 auto;
    width:70%;
    color:white;
    background-color:#F0B691;
}
</style>