import {
  Vue,
  Component
} from 'vue-property-decorator'


import {
  Getter,
  Action,
  namespace
} from 'vuex-class'

import Sidebar from '../sidebar'

import template from './home.vue'
import './home.scss'

const temp: string = template.toString()

const accountGetter = namespace('account', Getter)

@Component({
  template: temp,
  components: {
    Sidebar
  }
})
export default class Home extends Vue {
  @accountGetter('getUserInfo') userInfo
  @accountGetter('getToken') token

  mounted () {
    console.log('=================')
    console.log(this.userInfo)
    console.log(this.token)
    console.log('=================')
  }
}
