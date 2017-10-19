import {
  Vue,
  Component
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
  testTree: any = [
    {
        label: '1',
        value: '1',
        children: [
            {
                label: '2',
                value: '2',
                children: [
                    {
                        label: '3',
                        value: '3'
                    }
                ]
            },
            {
                label: '4',
                value: '4'
            }
        ]
    },
    {
        label: '1',
        value: '1',
        children: [
            {
                label: '2',
                value: '2',
                children: [
                    {
                        label: '3',
                        value: '3'
                    },
                    {
                        label: '4',
                        value: '4'
                    }
                ]
            }
        ]
    }
  ]
}
