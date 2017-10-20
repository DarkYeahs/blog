import {
  Vue,
  Component,
  Prop
} from 'vue-property-decorator'

import Tree from '../../components/tree'

import template from './sidebar.vue'
import './sidebar.scss'
// require('!style!css!./sidebar.scss');

const temp: string = template.toString()

@Component({
  template: temp,
  components: {
    Tree
  }
})
export default class Home extends Vue {
  @Prop()
  user: any

  created () {
    console.log('sidevar created')
  }

  mounted () {
    console.log('sidevar mounted')
  }
}
