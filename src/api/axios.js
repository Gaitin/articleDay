import Axios from 'axios'
import QS from 'querystring'
import Call from 'api/call'

// TODO baseURL
Axios.defaults.baseURL = 'https://interface.meiriyiwen.com'

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// Axios.defaults.headers.post['Accept'] = '*/*'

// TODO 设置超时时间
Axios.defaults.timeout = 2000

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
  return status
}

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
  return QS.stringify(params)
}

// TODO 设置POST等请求 body 序列化
// Axios.defaults.transformRequest = [function (body) {
//   let data = body || {}
//   if (data instanceof window.FormData) {
//     return data
//   }
//   return QS.stringify(data)
// }]

// request拦截器
Axios.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// TODO 设置统一请求拦截
Axios.interceptors.response.use(res => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  }
  return Promise.reject(res.data)
}, error => {
  return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get (url, params) {
  return new Call((resolve, reject) => {
    Axios.get(url, {params: params})
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post (url, body) {
  return new Call((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function direct (url) {
  return url
}
export default {
  get, post, direct
}
