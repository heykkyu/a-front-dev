import Vue from 'vue'
import VueRouter from 'vue-router'
import EngResume from '../views/Eng.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'eng-resume',
    component: EngResume
  },
  // {
  //   path: '/kor',
  //   name: 'kor-resume',
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
	}
})

export default router
