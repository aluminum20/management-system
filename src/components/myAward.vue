<template>
<div>
    <myHeader title="我的兑换券" leftIcon="back"/>
    <mt-navbar v-model="selected" class="top">
        <mt-tab-item id="valid">待使用</mt-tab-item>
        <mt-tab-item id="used">已使用</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">

        <mt-tab-container-item id="valid">
            <div v-for="item in myAwardArray">
                <div class="box" > 
                    <img v-bind:src="item.img">
                    <div class="temp">
                        <div class="name">{{item.name}}</div>
                        <div class="score">{{item.score}}积分</div>
                        <div class="detail">查看详情></div>
                    </div>
                <mt-button>{{getText(item.status)}}</mt-button>       
                </div>
                <spacer/>
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="used">
            <div v-for="item in myAwardArray">
                <div class="box" > 
                    <img v-bind:src="item.img">
                    <div class="temp">
                        <div class="name">{{item.name}}</div>
                        <div class="score">{{item.score}}积分</div>
                        <div class="detail">查看详情></div>
                    </div>
                <mt-button>{{getText(item.status)}}</mt-button>       
                </div>
                <spacer/>
            </div>
        </mt-tab-container-item>
    </mt-tab-container>




</div>
</template>

<script>
import myHeader from './myHeader'
import spacer from './spacer'
import { getMyAward } from '../store/api';
import { Button,Navbar, TabItem,Lazyload,Indicator } from 'mint-ui';
export default {
    components: {Button,Navbar, TabItem,myHeader,spacer},
    data(){
        return{
            selected:'valid',
            myAwardArray:[],
        }
    },
    beforeMount:function(){
        getMyAward({
                'user_id': this.$store.getters.currentUser_id,
            }).then((res) => {
                this.myAwardArray=res.data.myAwardArray
            })
    },
    methods:{
        getText(status){
            if(status=="valid"){return "去使用>"}
            if(status=="wait"){return "等待实现中"}
            if(status=="uesd"){return "已使用"}
        }
    }
}
</script>

<style scoped>
.box{
    height:100px;
    padding:22px 15px;
    display: flex;
}
.box img{
    width:100px;
    height:100px;
}
.box .temp{
    height:100px;
    margin-left:14px;
    text-align: left;
    min-width:calc(100% - 230px);
    max-width:calc(100% - 230px);
}
.box .name{
    font-size:16px;
    white-space:nowrap;
}
.box .status{
    font-size:12px;
    color:#666;    
}
.box .score{
    font-size:12px;
    color:#666;
    margin-top:8px;
    white-space:nowrap;
}
.box .detail{
    font-size:12px;
    margin-top:40px;
    white-space:nowrap;
}
.box button{
    height:28px;
    font-size:14px;
    border-radius: 4px;
    background-color: #F0B691;
    color:#fff;
    outline:none;
    margin-top:72px;
}
.box .editbt{
    height:28px;
    font-size:14px;
    border-radius: 4px;
    background-color: #F0B691;
    color:#fff;
    outline:none;
    margin-top:72px;    
    margin-left:5px;
}
</style>
