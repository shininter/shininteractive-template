import Vue from 'vue'

import TipDialog from './tip-dialog/index.vue'

function $using(components) {
  const obj = {}
  components.forEach(c => {
    obj[c.name] = Vue.component(c.name, c)
  })
  return obj
}

export default $using([
  TipDialog
])
