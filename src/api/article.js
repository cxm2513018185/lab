/**
 * 接口封装
 */
import request from '@/utils/request'

export function login(data) {  //登录
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function labList(data) {  //实验室管理-查询
  return request({
    url: '/lab/list',
    method: 'get',
    params: data
  })
}