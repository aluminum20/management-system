<template>
    <div>
        <myHeader title="录入积分"></myHeader>
        <div style="height:70px;"></div>
        <div class="box">
            <div class="score" @click="add">本月积分&nbsp;{{score}}</div>
            <transition leave-active-class="slideOutUp">
                <div class="animated add" v-if="animate">+10</div>
            </transition>
        </div>
    </div>
</template>

<script>
import myHeader from './myHeader'
import spacer from './spacer'
export default {
    components: {spacer,myHeader},
    data(){
        return {            
            animate:false,
            score:211
        }
    },  
    methods:{
        add:function(){        
            this.animate=true              
            let that=this       
            setTimeout(function(){
                that.animate=false
            }, 50)
            setTimeout(function(){
                that.score=that.score+10
            }, 1000)            
        },
    }
}
</script>

<style scoped>
@import "../assets/css/animate.css";
.box{
    display: flex;
    justify-content:flex-start;
    align-items: center;
}
.box .score{
    font-size:16px;
    margin-right:5px;
}
.box .add{
    font-size:10px;
    color:#ff9966;
}
</style>

