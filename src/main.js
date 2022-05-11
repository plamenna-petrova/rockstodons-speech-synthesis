import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import vuetify from './plugins/vuetify'

library.add(fab)
library.add(faSearch)
library.add(faLock)
library.add(faLocationDot)
library.add(faShoppingCart)
library.add(faPhone)
library.add(faEnvelopeOpen)
library.add(faEllipsis)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const eventBus = new Vue()

Vue.mixin({
  methods: {
    speakText(event) {
      eventBus.$emit("speak-text", event.target.innerText);
    },
    speakHint(hint) {
      eventBus.$emit("speak-hint", hint);
    },
    stopSpeaking() {
      eventBus.$emit("stop-speaking");
    }
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export { eventBus };
