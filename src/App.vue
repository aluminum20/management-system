<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="csrf-token" :content="csrftext" />
    <mt-tabbar v-model="selected" v-bind:fixed=true v-if="show">
        <mt-tab-item id="project">
            <img slot="icon" src="./assets/temp.png">
            项目
        </mt-tab-item>
        <mt-tab-item id="score">
            <img slot="icon" src="./assets/temp.png">
            积分
        </mt-tab-item>
        <mt-tab-item id="achieve">
            <img slot="icon" src="./assets/temp.png">
            成就
        </mt-tab-item>
        <mt-tab-item id="personal">
            <img slot="icon" src="./assets/temp.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>  
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected:'',
      show:true,
      csrftext:"{{ csrf_token() }}",
    }
  },
  beforeMount:function(){
    console.log("App beforeMount")
    this.refresh()
    },
  beforeUpdate:function(){
    this.refresh()
  },
  watch:{
    selected:function(){
        window.scrollTo(0,0)
        this.$router.push({ path: '/'+this.selected });
    },
  },
  methods:{
    refresh:function(){
      // 初始化和更新时都调用这个
      // 目标是更新selected和show
      // const path=this.$route.path
      // var res
      // console.log(this.$route)
      // if(this.selected!=''&&path=='/'+this.selected){return}
      // if(path.indexOf('/')==path.lastIndexOf('/')){//只有一斜杠
      //     res=path.slice(path.indexOf('/')+1)
      // }else{
      //     var gang1=path.indexOf('/')
      //     var gang2=path.indexOf('/',gang1)
      //     res=path.slice(gang1+1,gang2)
      // }
      // if(this.selected!=''&&res==this.selected){return}
      // if(res=='login'||res==''){this.show=false}
      // else{this.show=true}      
      // this.selected=res//用户直接输入链接也可以判断是哪个Tab
      // console.log("this.$route.path",this.$route.path)
      // console.log("path:",path)
      // console.log("res:",res)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
.top{
  margin-top:55px;
}
a{
  text-decoration: none;
  color:#333;
}
.noContent{
    color:#666;
    margin-top:20px;
    text-align: center;
}
#app /deep/ .mint-tab-item-label{
  font-size: 14px;
}

</style>
