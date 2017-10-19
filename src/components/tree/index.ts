import {
  Vue,
  Component,
  Prop,
  Watch
} from 'vue-property-decorator'

import TreeNode from '../treeNode/index'

import template from './tree.vue'

import './tree.scss'

const temp: string = template.toString()

interface TreeChild {
  id: number;
  parentId?: number;
  label: string;
  value: string;
  hasChild: boolean;
  child?: Array<TreeChild>;
  expand?: boolean;
  level?: number;
}

@Component({
  name: 'Tree',
  template: temp,
  components: {
    TreeNode
  }
})
export default class Tree extends Vue {

  level: Array<any> = []
  treeNode: any

  @Prop()
  treeList: Array<any>;

  get list (): any {
    return this.treeList || []
  }

  @Watch('list')
  getList (val: object): void {
    console.log(val)
  }

  toggleExpand (e: Event, treeNode: TreeChild) {
    if (!treeNode.hasChild) return
    let el = e.target
    let level = treeNode.level || 0
    let list = this.level[level + 1]
    let childNode: Array<TreeChild> = []
    let len = list.length
    let id = treeNode.id
    for (let i = 0; i < len; i++) {
      let item = list[i]
      if (item.parentId === id) childNode.push(item)
    }
    treeNode.expand = !treeNode.expand

  }

  handleTreeData () {
    let list: Array<TreeChild> = []
    let treeData = this.treeList
    let len = treeData.length
    let id = 1
    for (let i = 0; i < len; i++) {
      let item: TreeChild = treeData[i]
      item.level = 0
      item.id = id++
      list.push(item)
    }
    let start = 0
    while (list.length > 0) {
      let item = list[start]
      if (item.child) {
        item.hasChild = true
        let treeChild = item.child
        let clen = treeChild.length
        let clevel = (item.level || 0) + 1
        let parentId = item.id
        for (let i = 0; i < clen; i++) {
          let citem = treeChild[i]
          citem.level = clevel
          citem.id = id++
          citem.parentId = parentId
          list.push(treeChild[i])
        }
      }
      let level = item.level || 0
      if (!this.level[level]) this.level[level] = []
      delete item.child
      this.level[level].push(item)
      list.shift()
    }
  }
}
