import axios from 'axios';
import Vue from 'vue';
import qs from 'qs'

// return code 
const OK = 1000;

const TOKEN = '_token_';
const SUCCESS = 200;
const LOCAL_TOKEN = 'LOCAL_TOKEN';
let instance = axios.create();

// axios 配置
instance.defaults.timeout = 100000;
instance.defaults.baseURL = 'http://192.168.150.132:1111/api/v1/';
instance.defaults.responseType = 'json';
instance.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
instance.defaults.headers['Accept'] = 'application/json';

instance.defaults.withCredentials = true;
instance.defaults.credentials = true;
instance.defaults.paramsSerializer = function (params) {
  return qs.stringify(params);
};

//格式化提交参数
instance.defaults.transformRequest = [(params) => {
  if (!params) {
    return params;
  }
  return formatRequestParams(params);
}];

//http request 拦截器
instance.interceptors.request.use(config => {
  config.headers['currentUrl'] = `${window.location.href}`
  return config
}, err => {
  return Promise.reject(err)
});

// http response 拦截器
instance.interceptors.response.use(
  response => {
    console.log("request", response);
    if (document.getElementById('full-app-loading')) {
      setTimeout(() => {
        document.getElementById('full-app-loading').style.display = 'none';
      }, 300);
    }
    let data = response.data;
    let code = response.data.errcode;
    let config = response.config;
    var returnData = undefined;
    if (response.status == SUCCESS) {
      if(code === OK) {
        returnData = data;
      } else {
        console.log("error: ", code);
      }
    }
    if (process.env.NODE_ENV != 'production') {
      let params = config.data;
      if (config.method === 'get') {
        params = config.params;
      }

      let formatData = JSON.stringify(returnData);
      if (formatData && formatData.length > 1000) {
        formatData = formatData.substr(0, 1000) + '...';
      }
    }
    return returnData;
  }, error => { 
    console.log(error);
    return Promise.reject(error);
  });

/**
 * 格式化数据
 */
function formatRequestParams(params) {
  let strJson = JSON.stringify(params);
  return strJson;
}

export default instance
