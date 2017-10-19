import {
  Vue,
  Component,
  Watch,
  Prop
} from 'vue-property-decorator'

import './input.scss'
import template from './input.vue'

const temp: string = template.toString()

@Component({
  name: 'yInput',
  template: temp
})
export default class Input extends Vue {
  input: string = ''

  @Prop()
  value: string

  @Watch('input')
  getInput (val) {
    console.log(val)
    this.$emit('input', val)
  }

  created () {
    this.input = this.value
  }
}
