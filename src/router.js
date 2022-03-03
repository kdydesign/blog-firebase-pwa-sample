import Vue from 'vue'
import VueRouter from 'vue-router'

// 각 페이지를 불러온다.
import views from './views/index.js'

Vue.use(VueRouter)
/**
 * 각 페이지를 삽입하여 로드한다.
 * 각 페이지를 로드하면 return 되는 값은 component: TodoComponent 와 동일한 형태가 된다.
 *
 * @param view
 * @returns {function(): Promise<*>}
 */
function loadPageComponent (view) {
	return () => import(`./views/${ view }.vue`)
}

/**
 * router를 동적으로 생성한다.
 *
 * @param path
 * @returns {{path: string, component: (function(): Promise<*>)}}
 */
function generateRoute (path) {
	const name = path.slice(0, path.length - 4)
	
	return {
		name: name.toLowerCase(),
		path: `/${ name }`,
		component: () => import(`./views/${ path }`)
	}
}

// root 페이지를 지정
// 동적으로 생성되는 라우터는 이 routes에 추가된다.
const routes = [
	{ name: 'Todo', path: '/', component: loadPageComponent('todo') }
]

views.forEach(view => routes.push(generateRoute(view)))

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
