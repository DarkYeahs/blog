/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/

import BaseService from './BaseService'
import url from './Urls'

export default class LoginService extends BaseService {
  constructor (opt: Object = {}) {
    super(opt)
  }
  /**
   * [login 登陆请求]
   * @param  {String}       account  [账号]
   * @param  {String}       password [密码]
   * @return {Promise<any>}          [返回promise，将结果交给上一层处理]
   */
  login (account: String, password: String): Promise<any> {
    console.log(account, password)
    let data = {
      account,
      password
    }
    return this.ajax({
      url: url.loginUrl,
      type: 'POST',
      data: data
    })
  }
  /**
   * [logout 退出登陆请求]
   * @return {Promise<any>} [返回promise，将结果交给上一层处理]
   */
  logout (): Promise<any> {
    return this.ajax({
      url: url.logoutUrl,
      type: 'POST'
    })
  }
  /**
   * [getVerificationCode 获取验证码请求]
   * @return {Promise<any>} [返回promise，将结果交给上一层处理]
   */
  getVerificationCode (): Promise<any> {
    return this.ajax({
      url: url.getVerificationCodeUrl
    })
  }
}
