import Vue from 'vue'

import Moment from 'moment'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, query, get } from 'firebase/database'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

import FirebaseConfig from '../../firebase.config'

const App = initializeApp(FirebaseConfig)
const Database = getDatabase(App)
const Storage = getStorage(App)

Vue.prototype.$firebase = App
Vue.prototype.$database = Database
Vue.prototype.$DB_SAVE = (list, img) => {
  set(ref(Database, `todo/${Moment().format('YYYY-MM-DD hh:mm:ss')}`), {
    thumb: img,
    list
  })
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
Vue.prototype.$SAVE_STORAGE = async (img) => {
  const refs = storageRef(Storage, img.name)

  uploadBytes(refs, img).then((snapshot) => {
    console.log('Uploaded a blob or file!')
  })
}
Vue.prototype.$GET_STORAGE = async (img) => {
  const refs = storageRef(Storage, img)

  const url = await getDownloadURL(refs)

  return url
}
Vue.prototype.$moment = Moment
