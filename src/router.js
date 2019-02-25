/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login'
import score from './components/score'
import achieve from './components/achieve'
import project from './components/project'
import scoreRecord from './components/scoreRecord'
import rankRecord from './components/rankRecord'
import myAward from './components/myAward'
import addAward from './components/addAward'
import editAward from './components/editAward'
import editPro from './components/editPro'
import addmember from './components/addmember'
import personal from './components/personal'
import friends from './components/friends'
import friend from './components/friend'
import personalInfo from './components/personalInfo'
import editInfo from './components/editInfo'
import manaAward from './components/manaAward'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
      {
        path: '/',
        component: login
      },{
        path: '/login',
        component: login
      },{
        path: '/achieve',
        component: achieve
      },{
        path: '/score',
        component: score
      },{
        path: '/project',
        component: project
      },{
        path:'/score/scoreRecord',
        component:scoreRecord
      },{
        path:'/score/rankRecord',
        component:rankRecord
      },{
        path:'/score/myAward',
        component:myAward
      },{
        path:'/score/addAward',
        component:addAward
      },{
        path:'/project/editPro/:proId',
        name: 'editPro',
        component:editPro
      },{
        path:'/project/addmember/:proId',
        name:'addmember',
        component:addmember,
        meta:{
          topNavIndex:2
        }
      },{
        path:'/personal',
        component:personal
      },{
        path:'/personal/friends',
        component:friends
      },{
        path:'/personal/friends/:userId',
        name:'name',
        component:friend
      },{
        path:'/personal/info',
        component:personalInfo
      },{
        path:'/personal/editInfo/:info',
        name:"editInfo",
        component:editInfo,
      },{
        path:'/personal/manaAward',
        component:manaAward,
      },{
        path:'/personal/editAward/:id',
        name:"editAward",
        component:editAward,
      },
      
            
    ]
})

export default router

// router.beforeEach((to, from, next) => {
//   console.log(from)
//   console.log(to) 
// })

