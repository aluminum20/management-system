import axios from 'axios';

export const loginApi = params => {
  return axios.post('/login', params).then(res => res.data);
};

export const getHomeContent = params => {
  return axios.get('/getHomeContent', params).then(res => res.data);
};

export const getScoreContent = params => {
  return axios.get('/getScoreContent', params).then(res => res.data);
};

export const getScoreRecord = params => {
  return axios.get('/getScoreRecord', params).then(res => res.data);
};

export const getRankRecord = params => {
  return axios.get('/getRankRecord', params).then(res => res.data);
};

export const getMyAward = params => {
  return axios.get('/getMyAward', params).then(res => res.data);
};

export const getMyProjects = params => {
  return axios.get('/getMyProjects', params).then(res => res.data);
};

export const getAllProjects = params => {
  return axios.get('/getAllProjects', params).then(res => res.data);
};

export const getAwardArray = params => {
  console.log("here")
  return axios.get('/getAwardArray', params).then(res => res.data);
};