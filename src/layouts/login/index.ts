/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/

import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  Vue,
  Component,
  Watch
} from 'vue-property-decorator'
import {
  Getter,
  Action,
  namespace
} from 'vuex-class'

const accountGetter = namespace('account', Getter)
const accountAction = namespace('account', Action)

import LoginService from '../../services/LoginService'

import template from  './login.vue'
import './login.scss'

const temp: string = template.toString()
const loginService: LoginService = new LoginService()
console.log(temp)
@Component({
  template: temp
})
export default class Login extends Vue {

  account: string = '';
  password: string = '';
  service: LoginService = loginService;

  @accountGetter('getToken') token
  @accountAction('SET_TOKEN') setTokenAction

  @Watch('account')
  getAccount (val: string, oldVal: string) {
    console.log(val)
  }

  mounted () {
    this.setTokenAction('test2')
    console.log(this.token)
    console.log('mounted')
  }

  login () {
    this.service.login(this.account, this.password)
      .then(data => {
        console.log(data)
      })
  }
}
