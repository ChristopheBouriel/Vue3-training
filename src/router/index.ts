import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-this-repo",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      alias: "/purpose"
    },
    {
      path: "/about",
      redirect: { name: "about" }
    },
    // Cette route doit être en bas de la liste de routage
    {
      path: '/:catchAll(.*)',
      component: () => import("../views/NotFound.vue")
    }
  ],
});

export default router;
