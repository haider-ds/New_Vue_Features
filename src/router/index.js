import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DirectComposition.vue"),
  },
  {
    path: "/new",
    name: "newfeature",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewFeature.vue"),
  },
  {
    path: "/data",
    name: "dataModule",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
