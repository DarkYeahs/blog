/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/

import {
  ajax,
  extend
} from 'jquery'
const Config =  require('../config.json')

/**
 * [BaseService service基础类]
 */
export default class BaseService {
  defaultOpt: Object = {}
  baseUrl: string = ''

  constructor (opt: Object) {
    let defaultOpt = this.defaultOpt
    let _opt = {}

    for (let item in opt) {
      defaultOpt[item] = opt[item]
    }

    this.baseUrl = Config.baseUrl
    this.defaultOpt = defaultOpt
  }
  /**
   * [ajax 异步请求函数]
   * @param  {false}} opt [请求配置参数]
   * @return {[type]}     [description]
   */
  ajax (opt: any = {errorHandle: false}): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      let _opt: any = {
        dataType: 'json',
        timeout: 15 * 1000,
        success: data => {
          if (data.code === 0) resolve(data.data)
        },
        error: (respone, error) => {
          if (!opt.errorHandle) {}
          else reject(respone)
        }
      }
      extend(_opt, opt)
      _opt.url = this.baseUrl + _opt.url
      ajax(_opt)
    })
    return promise
  }
}
