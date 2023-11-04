import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  /*{
    path: "/circuit",
    name: "Circuit",
    component: () => import("../views/Circuit.vue")
  },*/
  {
    path: "/myhome",
    name: "Myhome",
    component: () => import("../views/Myhome.vue")
  },
  {
    path: "/kairo1",
    name: "Kairo1",
    component: () => import("@/components/Kairo1.vue")
  },
  {
    path: "/kairo2",
    name: "Kairo2",
    component: () => import("@/components/Kairo2.vue")
  },
  {
    path: "/ans",
    name: "Ans",
    component: () => import("@/components/Ans.vue")
  },
  {
    path: "/gas",
    name: "Gas",
    component: () => import("../views/sample.vue")
  },
  {
    path: "/gasTest",
    component: () => import("../views/gasTest.vue")
  },
  {
    path: "/userLogin",
    component: () => import("../views/User.vue")
  },
  {
    path: "/indivPage",
    component: () => import("@/components/indivPage.vue")
  },
  {
    path: "/questionPage",
    component: () => import("../views/questionPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
