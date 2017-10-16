// import Vue from 'vue'
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  Vue,
  Component
} from 'vue-property-decorator'
import template from  './login.vue'
import './login.scss'
const temp: string = template.toString()

@Component({
  template: temp
})
export default class Login extends Vue {

  data () {
    return {
      account: '',
      password: ''
    }
  }
  account: string = '';
  password: string = '';

  getAccount (val: string, oldVal: string) {
    console.log(val)
  }
  mounted () {
    console.log(this.account)
    console.log('mounted')
  }
  login () {
    console.log(this.account, this.password)
  }
}
