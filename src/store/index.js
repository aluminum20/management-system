/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

let store= new Vuex.Store({
    // init data
    state: {
        cookie:{
            token:"",
            token_date:"",
            currentUser_name:"",
            currentUser_id:""
        },
        user:"20",
        info:{
            headshot:'./src/assets/headshot.jpg',
            nick:'锅王',
            phone:'13502723712',
            campus:["北校区","北区"],
            college:'电信学院',  
        },
        achieve:{
            achieveInited:false,
            wordNum:'',
            readNum:'',
            zanNum:'',
            rumorArray:[],
            chuangbianArray:[],
            allArray:[]
        },
        project:{
            myProjects:[],
            allProjects:[],
        },
        awardArray:[]

    },
    actions,
    mutations,
    getters
})
export default store
