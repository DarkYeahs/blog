<li>
   <div
     :class="{bold: isFolder}"
     @click="toggle">
     {{treeNode.label}}
   </div>
   <ul v-show="open" v-if="isFolder">
     <tree-node
       class="tree-node"
       v-for="model in treeNode.children"
       :tree-node="model">
     </tree-node>
   </ul>
 </li>
