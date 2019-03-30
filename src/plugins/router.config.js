import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import AppHome from '@/components/AppHome'
import AppCart from '@/components/AppCart'
import AppClass from '@/components/AppClass'
import AppDetail from '@/components/AppDetail'
import AppFind from '@/components/AppFind'
import AppLogin from '@/components/AppLogin'
import AppReg from '@/components/AppReg'
import AppUser from '@/components/AppUser'

let routes=[
  {path:'/home',component:AppHome},
  {path:'/cart',component:AppCart},
  {path:'/class',component:AppClass},
  {path:'/detail/:id',component:AppDetail},
  {path:'/find',component:AppFind},
  {path:'/login',component:AppLogin},
  {path:'/reg',component:AppReg},
  {path:'/user',component:AppUser},
  {path:'/',redirect:'/home'},
];

const router = new VueRouter({routes,mode: 'history'});

export default router;