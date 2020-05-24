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