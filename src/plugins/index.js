import Vue from 'vue'

import Firebase from 'firebase/app'

import 'firebase/firebase-database'
import 'firebase/firebase-storage'

import FirebaseConfig from '../../firebase.config'

Firebase.initializeApp(FirebaseConfig)

Vue.prototype.$firebase = Firebase

export {
  Firebase
}
