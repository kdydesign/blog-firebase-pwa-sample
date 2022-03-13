import Vue from 'vue'

import Moment from 'moment'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, query, get } from 'firebase/database'

import FirebaseConfig from '../../firebase.config'

const App = initializeApp(FirebaseConfig)
const Database = getDatabase(App)

Vue.prototype.$firebase = App
Vue.prototype.$database = Database
Vue.prototype.$DB_SAVE = (list) => {
  set(ref(Database, `todo/${Moment().format('YYYY-MM-DD hh:mm:ss')}`), list)
}
Vue.prototype.$DB_GET_LIST = async () => {
  const refs = ref(Database, 'todo')
  const list = await get(query(refs))

  return list.val()
}
Vue.prototype.$DB_GET = async (title) => {
  const refs = ref(Database, 'todo/' + title)
  const list = await get(query(refs))

  return list.val()
}
Vue.prototype.$moment = Moment
