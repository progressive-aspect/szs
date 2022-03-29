import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:"2-1",
    children:[
      {path:"1",component:()=>import("../components/MyHome.vue")},
      {path:"2-1",component:()=>import("../components/MyWenzhang.vue")},
      {path:"2-2",component:()=>import("../components/MyRouter.vue")}
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Mylogin.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach(function (to, form, next) {
  console.log(to, form)
  if (to.path == '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    if(!token) return next({name:"login"})
    if(token) return next()
  }

})

export default router