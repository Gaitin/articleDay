import Mock from 'mockjs'
import loginAPI from './login'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/info\.*/, 'post', loginAPI.getUserInfo)
Mock.mock(/\/loginOut/, 'get', loginAPI.loginOut)

export default Mock
