import Vue from 'vue'
import {
  mapGetters,
  mapActions
} from 'vuex'
import Component from 'vue-class-component'
import login from  './login.vue'

@Component({
  computed: mapGetters([])
})
export default class Login extends Vue {
  render (h) {
    return h(login)
  }
}
