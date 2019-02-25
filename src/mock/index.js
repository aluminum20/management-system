import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import {
  rumorArray,
  chuangbianArray,
  allArray
} from './data/contentArray';
import {
  awardArray,
  ranklist,
  scoreRecordArray,
  rankRecordArray,
  myAwardArray
} from './data/score';
import {
  myProjects,
  allProjects
} from './data/project';

export default {
  start() { // 初始化函数
    let mock = new MockAdapter(axios); // 创建 MockAdapter 实例

    mock.onPost('/login').reply(config => {
      let {wechat, password} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        setTimeout(() => {    
          resolve([200, { data:{token:"123",user:{id:"20",name:"柿子"} }}]);
        }, 1000);
      });
    });

    mock.onGet('/getHomeContent').reply(config => {
      let user_id=config.user_id
      let type=config.type
      if(type=="init"){
        return new Promise((resolve, reject) => {
          setTimeout(() => {  
            resolve([200, { data:{
              wordNum:'10.5w',
              readNum:'10.5w',
              zanNum:'10.5w',
              rumorArray:rumorArray
            }}]);
          }, 1000);
        });
      }
      else if(type=="chuangbian"){
        return new Promise((resolve, reject) => {
          setTimeout(() => {  
            resolve([200, { data:{
              chuangbianArray:chuangbianArray
            }}]);
          }, 1000);
        });
      }
      else if(type=="all"){
        return new Promise((resolve, reject) => {
          setTimeout(() => {  
            resolve([200, { data:{
              allArray:allArray
            }}]);
          }, 1000);
        });
      }
    });

    mock.onGet('/getScoreContent').reply(config => {  
      let user_id=config.user_id
      return new Promise((resolve, reject) => {
        setTimeout(() => {  
          resolve([200, { data:{
            ranklist:ranklist,
            awardarray:awardArray,
            score:200
          }}]);
        }, 1000);
      });
  });

  mock.onGet('/getScoreRecord').reply(config => {  
    let user_id=config.user_id
    return new Promise((resolve, reject) => {
      setTimeout(() => {  
        resolve([200, { 
          data:{
            scoreRecordArray:scoreRecordArray
        }}]);
      }, 1000);
    });
});

mock.onGet('/getRankRecord').reply(config => {  
  let user_id=config.user_id
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
      resolve([200, { 
        data:{
          rankRecordArray:rankRecordArray
      }}]);
    }, 1000);
  });
});

mock.onGet('/getMyAward').reply(config => {  
  let user_id=config.user_id
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
      resolve([200, { 
        data:{
          myAwardArray:myAwardArray
      }}]);
    }, 1000);
  });
});

mock.onPost('/addAward').reply(config => {
  console.log("标记2")
  let {title, score,detail,cover} = JSON.parse(config.data);
  console.log("标记3")
  return new Promise((resolve, reject) => {
    setTimeout(() => {    
      resolve([200]);
    }, 1000);
  });
});

mock.onGet('/getMyProjects').reply(config => {
  let user_id=config.user_id
  return new Promise((resolve, reject) => {
    setTimeout(() => {    
      resolve([200, { 
        data:{
          myProjects:myProjects
      }}]);
    }, 1000);
  });
});

mock.onGet('/getAllProjects').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {    
      resolve([200, { 
        data:{
          allProjects:allProjects
      }}]);
    }, 1000);
  });
});

mock.onGet('/getAllProjects').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {    
      resolve([200, { 
        data:{
          allProjects:allProjects
      }}]);
    }, 1000);
  });
});

mock.onPost('/updateStarProjects').reply(config => {
  return new Promise((resolve, reject) => {   
      setTimeout(() => {    
        resolve([200]);
      }, 1000);
  });
});

mock.onGet('/getNewId').reply(config => {
  return new Promise((resolve, reject) => {   
      setTimeout(() => {    
        resolve([200, { 
          data:{
            id:Mock.Random.id()
        }}]);
      }, 1000);
  });
});

mock.onGet('/getAwardArray').reply(config => {
  console.log("here")
  console.log(awardArray)
  return new Promise((resolve, reject) => {   
      setTimeout(() => {    
        resolve([200, { 
          data:{
            awardArray:awardArray
        }}]);
      }, 1000);
  });
});

  }
}