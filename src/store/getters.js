//计算属性，没有被调用就不会算
export default {
    token: state => {
        return state.cookie.token
    },
    token_date: state => {
        if (state.cookie.token_date){
            return new Date(decodeURIComponent(state.cookie.token_date))
        }
    },
    currentUser_name: state => {
        return state.cookie.currentUser_name
    },
    currentUser_id: state => {
        return state.cookie.currentUser_id
    },
    isLogin: (state, getters) => {
        // 任何一个丢失都重新登陆
        return !!(getters.token&&getters.token_date&&getters.currentUser_id&&getters.currentUser_name)
    },
    achieve:state => {
        return state.achieve
    },
    ifAchieveInited:state => {
        return (state.achieve.rumorArray.length!=0)
    },
    getChuangbianArray:state => {
        return state.achieve.chuangbianArray
    },
    ifChuangbianArrayInited:state => {
        return (state.achieve.chuangbianArray==null||state.achieve.chuangbianArray.length!=0)//服务器上没有数据，要写成null
    },
    getAllArray:state => {
        return state.achieve.allArray
    },
    ifAllArrayInited:state => {
        return (state.achieve.allArray.length!=0)//服务器上没有数据，要写成null
    },
    ifMyProjectsInited:state => {
        return (state.achieve.chuangbianArray==null||state.project.myProjects.length!=0)
    },
    ifAllProjectsInited:state => {
        return (state.achieve.chuangbianArray==null||state.project.allProjects.length!=0)
    },
    getMyProjects:state => {
        return state.project.myProjects
    },
    getAllProjects:state => {
        return state.project.allProjects
    },
    getinfo:state => {
        return state.info
    },
    getAwardById: (state) => (id) => {
        console.log("标记1")
        var award=state.awardArray.find(award => award.id == id)
        return state.awardArray.find(award => award.id == id)
    },
    awardArray: (state) => {
        return state.awardArray
    },
    //访问getters，getters判断是否为空，如果是，调用action进行初始化
}