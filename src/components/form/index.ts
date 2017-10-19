import {
  Vue,
  Component,
  Prop
} from 'vue-property-decorator'

import './form.scss'
import template from './form.vue'

const temp: string = template.toString()

@Component({
  name: 'yForm',
  template: temp
})
export default class Form extends Vue {

  @Prop()
  label: string
}
