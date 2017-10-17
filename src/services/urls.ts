/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/

/**
 * [Url url管理模块]
 * [统一管理所有service的url]
 */
class Url {

  //  login模块

  loginUrl: string = '/loginController/login'     //  登陆Url
  logoutUrl: string = '/loginController/logout'    //  退出登陆Url
  getVerificationCodeUrl: string = '/loginController/getVerificationCode'    // 获取验证码Url
}

export default new Url()
