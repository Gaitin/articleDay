const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    if (username != undefined && userMap[username] != undefined) {
      return {
        'code': '200',
        'data': userMap[username]
      }
    } else {
      return {'code': '0'}
    }
  },
  getUserInfo: config => {
    const {token} = JSON.parse(config.body)
    if (userMap[token]) {
      return {
        'code': '200',
        'data': userMap[token]
      }
    } else {
      return {'code': '0'}
    }
  },
  loginOut: config => {
    return {
      'code': '200'
    }
  }

}
