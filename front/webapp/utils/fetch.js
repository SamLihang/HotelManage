import axios from 'axios'
import {getUser} from '@/utils/auth'
const host = "http://47.99.45.30/api/v1"
// const host = "http://192.168.1.4:8000/api/v1"
// 创建axios实例
const service = axios.create({
  baseURL: host, // api的base_url
  timeout: 30000, // 请求超时时间
})

service.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return error;
  }
);

const fetch = function(api, query, method = "get") {
  let uri = api;
  if (method === "get") {
    uri += "?";
    for (let i in query) {
      uri += `${i}=${query[i]}&`;
    }
  }
  return service({
    url: uri,
    method: method,
    headers: {
      Authorization: getUser()
    },
    data: method === "get" ? null : query
  });
};
export default fetch;

// export default {
//   login (query) {
//     return service({
//       url: '/user/login?username=boss&password=123456',
//       method: 'get',
//       // headers: { 'token':  getUser()},
//       // query: {username: "boss", password: "123456"}
//     })
//   }
// }