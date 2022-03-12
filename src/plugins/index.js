import Vue from 'vue'

import Moment from 'moment'

import { initializeApp } from 'firebase/app'
import FirebaseConfig from '../../firebase.config'

const App = initializeApp(FirebaseConfig)

Vue.prototype.$firebase = App
Vue.prototype.$moment = Moment
