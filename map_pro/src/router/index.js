import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/china",
    name: "China",
    component: () =>
      import(/* webpackChunkName: "china" */ "../views/ChinaCompView.vue"),
  },
  {
    path: "/world_comp_view",
    name: "world_comp_view",
    component: () =>
      import(/* webpackChunkName: "world_comp_view" */ "../views/WorldCompView.vue"),
  },
  {
    path: "/africa_comp_view",
    name: "africa_comp_view",
    component: () =>
      import(/* webpackChunkName: "africa_comp_view" */ "../views/AfricaCompView.vue"),
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
