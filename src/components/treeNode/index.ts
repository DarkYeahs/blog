import {
  Vue,
  Component,
  Prop
} from 'vue-property-decorator'

import template from './treeNode.vue'

const temp: string = template.toString()

import './treeNode.scss'

@Component({
  template: temp
})
export default class TreeNode extends Vue {
  @Prop()
  treeNode: any

  open: boolean = false

  get isFolder (): boolean {
      return this.treeNode.children && this.treeNode.children.length
  }

  created () {
    console.log(this.treeNode)
  }

  toggle () {
    if (this.isFolder) {
      this.open = !this.open
    }
  }
}
