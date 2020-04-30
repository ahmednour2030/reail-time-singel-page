import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Parallex from '../components/Parallex'
import Login from '../components/Login/Login'
import Signup from '../components/Login/signup'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import Logout from '../components/Login/Logout'
import CreateCategory from '../components/category/CreateCategory'

const routes = [
    { path: '/', component: Parallex },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/logout', component: Logout , name:'logout'},
    { path: '/category', component: CreateCategory , name:'category'},
    { path: '/forum', component: Forum , name:'forum'},
    { path: '/question/:slug', component: Read , name:'read'},
    { path: '/ask', component: Create},
  ]


const router = new VueRouter({
  routes, // short for `routes: routes`,
  hashbang: false,
  mode: 'history'
})

export default router

