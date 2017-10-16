import BaseService from './BaseService'

export default class LoginService extends BaseService {
  constructor (opt: Object = {}) {
    super(opt)
  }

  login (account: String, password: String) {
    console.log(account, password)
    return this.ajax()
  }
}
