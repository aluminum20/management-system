import Vue from 'vue'
import axios from 'axios'

export default {
    SET_COOKIE: (state, {key, value}) => {
        Vue.set(state.cookie, key,encodeURIComponent(value))
      },
    SET_ACHIEVE:(state, {key, value}) => {
        state.achieve.achieveInited=true
        Vue.set(state.achieve, key,value)
      },
    SET_PROJECT:(state, {key, value}) => {
        Vue.set(state.project, key,value)
      },
    SET_INFO:(state, {key, value}) => {
      Vue.set(state.info, key,value)
    },
    SET_AWARDBYID:(state, {id, value}) => {
      for(var index in state.awardArray){
        if(state.awardArray[index].id=id){
          state.awardArray[index]=value
          return
        }
      }
    },
    SET_AWARD:(state, {value}) => {
      state.awardArray=value
    },    
}