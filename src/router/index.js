import Vue from 'vue';
import VueRouter from 'vue-router';
import Alert from '@/components/Alert/Alert';
import Home from '@/components/Home';
import Aspect from "@/components/Aspect/Aspect";
import Avatar from "@/components/Avatar/Avatar";
import Badge from "../components/Badge/Badge";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

Vue.use(VueRouter);

const routes = [
  {
    path: '/' ,
    component: Home,
  },
  {
    path: '/alerts',
    component: Alert,
  },
  {
    path: '/aspect',
    component: Aspect,
  },
  {
    path:'/avatar',
    component: Avatar,
  },
  {
    path: '/badge',
    component: Badge,
  },
  {
    path: '/breadcrumb',
    component: Breadcrumb,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;