const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "us-map", component: () => import("pages/USMap.vue") },
      {
        path: "random-useless-facts",
        component: () => import("pages/RandomUselessFacts.vue"),
      },
    ],
  },

  // Always leave this as last one, but you can also remove it.
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
