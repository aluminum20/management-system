<!-- eslint-disable -->

<template>
<div id="spacer" v-bind:style="{marginTop:marginTopNum}"></div>
</template>

<script>
export default {
  props:{
    marginTop: {
      type: String,
      default: '0'
    }
  },
  computed:{
    marginTopNum:function(){
      return this.marginTop+"px"
    }
  }
}
</script>

<style scoped>
#spacer{
  width:100%;
  display: block;
  height:3px;
  background-color: #ebebeb;
}
</style>