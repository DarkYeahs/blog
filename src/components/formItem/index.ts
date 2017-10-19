import {
  Vue,
  Component,
  Prop
} from 'vue-property-decorator'

import './formItem.scss'
import template from './formItem.vue'

const temp: string = template.toString()

@Component({
  name: 'yFormItem',
  template: temp
})
export default class Input extends Vue {

  @Prop()
  label: string
}
