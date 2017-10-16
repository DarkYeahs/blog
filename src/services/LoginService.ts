import BaseService from './BaseService'

export default class LoginService extends BaseService {
  constructor (opt: Object = {}) {
    super(opt)
  }

  login (account: string, password: string) {
    console.log(account, password)
  }
}
