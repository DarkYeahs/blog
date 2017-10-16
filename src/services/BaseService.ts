import {
  ajax,
  extend
} from 'zepto'

export default class BaseService {
  defaultOpt: Object = {}

  constructor (opt: Object) {
    let defaultOpt = this.defaultOpt
    let _opt = {}
    for (let item in opt) {
      defaultOpt[item] = opt[item]
    }
    this.defaultOpt = defaultOpt
  }

  ajax (opt: any = {errorHandle: false}) {
    let promise = new Promise((resolve, reject) => {
      let _opt = {
        success: data => {
          resolve(data)
        },
        error: (respone, error) => {
          if (!opt.errorHandle) {}
          else reject(respone)
        }
      }
    })
  }
}
