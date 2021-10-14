import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bar from "../views/Bar.vue";
import Add from "../views/Add.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bar",
    name: "Bar",
    component: Bar,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
