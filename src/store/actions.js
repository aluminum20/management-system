import {
    getHomeContent,
    getMyProjects,
    getAllProjects,
    getAwardArray
}from './api.js'

export default {
    async getMyProjects({ commit, state }){//因为所有里头包含我的项目，要存储两份，可以优化
        var res=await getMyProjects({
            'user_id': state.currentUser_id,
        })
        if(res.data.myProjects.length==0){
            commit ('SET_PROJECT',{key:'myProjects',value:null})
        }
        else{
            commit ('SET_PROJECT',{key:'myProjects',value:res.data.myProjects})
        }
    },

    async getAllProjects({ commit, state }){//因为所有里头包含我的项目，要存储两份，可以优化
        var res=await getAllProjects()
        commit ('SET_PROJECT',{key:'allProjects',value:res.data.allProjects})
        if(res.data.allProjects.length==0){
            commit ('SET_PROJECT',{key:'allProjects',value:null})
        }
        else{
            commit ('SET_PROJECT',{key:'allProjects',value:res.data.allProjects})
        }
    },

    async initHomeContent({ commit, state }){
        var res=await getHomeContent({
            'user_id': state.currentUser_id,
            'type': "init",
        })
        commit ('SET_ACHIEVE',{key:'wordNum',value:res.data.wordNum})
        commit ('SET_ACHIEVE',{key:'readNum',value:res.data.readNum})
        commit ('SET_ACHIEVE',{key:'zanNum',value:res.data.zanNum})
        if(res.data.rumorArray.length==0){
            commit ('SET_ACHIEVE',{key:'rumorArray',value:null})
        }
        else{
            commit ('SET_ACHIEVE',{key:'rumorArray',value:res.data.rumorArray})
        }
    },
    async initChuangbianContent({ commit, state }){
        var res=await getHomeContent({
            'user_id': state.currentUser_id,
            'type': "chuangbian",
        })
        if(res.data.chuangbianArray.length==0){
            commit ('SET_ACHIEVE',{key:'chuangbianArray',value:null})
        }
        else{
            commit ('SET_ACHIEVE',{key:'chuangbianArray',value:res.data.chuangbianArray})
        }
    },
    async initAllArrayContent({ commit, state }){
        var res=await getHomeContent({
            'type': "all",
        })
        commit ('SET_ACHIEVE',{key:'allArray',value:res.data.allArray})
    },

    async updateInfo({ commit, state },data){
        commit ('SET_INFO',{key:data.key,value:data.value})
    },

    async setAwardById({ commit, state },data){
        commit ('SET_AWARDBYID',{id:data.id,value:data.value})
    },
    
    async initAwardArray({ commit, state }){
        console.log("action")
        var res=await getAwardArray()//传一个身份标识让后端判断是否有权限
        console.log(res.data)
        commit ('SET_AWARD',{value:res.data.awardArray})
    }    
}