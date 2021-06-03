import Vue from 'vue';
import VueRouter from 'vue-router';
import Alert from '@/components/Alert/Alert';
import Home from '@/components/Home';
import Aspect from "@/components/Aspect/Aspect";
import Avatar from "@/components/Avatar/Avatar";
import Badge from "../components/Badge/Badge";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Button from "../components/Button/Button";
import BreadcrumbHome from "../components/Breadcrumb/BreadcrumbHome";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import ButtonToolbar from "../components/ButtonToolbar/ButtonToolbar";
import Calendar from "../components/Calendar/Calendar";
import Card from "../components/Card/Card"

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
  },
  {
    path: '/button',
    component: Button,
  },
  {
    path: '/buttongroup',
    component: ButtonGroup,
  },
  {
    path: '/buttontoolbar',
    component: ButtonToolbar,
  },
  {
    path: '/breadcrumb/home',
    component: BreadcrumbHome,
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/card',
    component: Card,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;