<div class="tree">
  <ul class="tree-list" v-if="list.length !== 0">
  <!-- <ul class="tree-list"> -->
    <tree-node class="tree-node" :tree-node="item" v-for="item in list"></tree-node>
  </ul>
</div>
