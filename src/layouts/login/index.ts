/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/

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

import VerificationCode from '../../components/VerificationCode/index'
import yFormItem from '../../components/formItem'
import yInput from '../../components/input'

import LoginService from '../../services/LoginService'

import template from  './login.vue'
import './login.scss'

const temp: string = template.toString()
const loginService: LoginService = new LoginService()

const accountGetter = namespace('account', Getter)
const accountAction = namespace('account', Action)
console.log(new yInput())
@Component({
  template: temp,
  components: {
    VerificationCode,
    yFormItem,
    yInput
  }
})
export default class Login extends Vue {

  account: string = '';
  password: string = '';
  testInput: string = ''
  service: LoginService = loginService;
  verification: boolean = false

  @accountGetter('getToken') token
  @accountAction('SET_TOKEN') setTokenAction
  @accountAction('SET_USER_INFO') setUserInfo

  @Watch('account')
  getAccount (val: string, oldVal: string) {
    console.log(val)
  }
  @Watch('verification')
  verificationChange (val: string) {
    console.log(val)
  }
  @Watch('testInput')
  testInputChange(val) {
    console.log(val)
  }

  mounted () {
    this.setTokenAction('test2')
  }

  login () {
    if (this.password === '' || this.account === '') {
      alert('账号密码不能为空')
      return
    }
    if (!this.verification) {
      alert('验证码错误，请重新输入')
      return
    }
    this.service.login(this.account, this.password)
      .then(data => {
        console.log(data)
        this.setUserInfo(data)
        this.$router.push('/')
      })
  }

  reset () {
    this.account = ''
    this.password = ''
  }

}
