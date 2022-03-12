import Vue from 'vue'

import { initializeApp } from 'firebase/app'

import FirebaseConfig from '../../firebase.config'

const App = initializeApp(FirebaseConfig)

Vue.prototype.$firebase = App
