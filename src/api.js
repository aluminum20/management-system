import axios from 'axios';

export const addAward = params => {
    console.log("标记1")
    return axios.post('/addAward', {        
        params,
        headers: {'Content-Type': 'multipart/form-data'}
    }).then(res => res.data);
  };

export const updateStarProjects = params => {
  return axios.post('/updateStarProjects', {        
      params,
  }).then(res => res.data);
};

export const getNewId = params => {
  return axios.get('/getNewId', {        
      params,
  }).then(res => res.data);
};



 ` export const addAward = params => {
    return axios.post('/addAward', params).then(res => res.data);
  };`