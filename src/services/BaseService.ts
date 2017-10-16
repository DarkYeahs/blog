import {
  ajax
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

  ajax (opt: Object = {}) {
  }
}
