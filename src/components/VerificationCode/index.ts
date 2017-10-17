import {
  Vue,
  Component,
  Prop,
  Watch
} from 'vue-property-decorator'

import template from './verificationCode.vue'
import LoginService from '../../services/LoginService'
import './verificationCode.scss'

const temp: string = template.toString()

@Component({
  template: temp
})
export default class VerificationCode extends Vue {

  verificationCode: string = ''
  verificationImage: string = ''
  inputCode: string = ''
  service: LoginService = new LoginService()

  @Prop()
  label: string

  @Prop()
  value: boolean

  @Watch('inputCode')
  inputCodeChange(val: string, oldVal: string) {
    let res: boolean = false
    if (val === this.verificationCode) res = true
    this.$emit('input', res)
  }

  created () {
    this.getVerificationCode()
  }

  getVerificationCode () {
    this.service.getVerificationCode()
      .then(data => {
        this.verificationImage = data.url
        this.verificationCode = data.code
        console.log(this.verificationCode)
        this.$emit('input', false)
      })
      .catch(() => {
        alert('获取验证码失败')
      })
  }

}
