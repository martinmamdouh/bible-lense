import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("@/views/layout/UnauthorizedLayout.vue"),
    children: [
      {
        path: "",
        name: "homePage",
        component: () => import("@/views/home/HomePage.vue"),

      },
      {
        path: "about",
        name: "aboutPage",
        component: () => import("@/views/about/AboutPage.vue"),

      },
      {
        path: "dictionary",
        name: "dictionaryPage",
        component: () => import("@/views/dictionary/DictionaryPage.vue"),

      },
      {
        path: "canvas/:canvasType/:dataSet",
        name: "canvasPage",
        component: () => import("@/views/canvases/CanvasPage.vue"),
        props: true
      },
      {
        path: "404",
        name: "notFound",
        component: () => import("@/views/errors/NotFound.vue"),
      },

    ]
  },

  { path: "*", redirect: { name: "notFound" } },
];


const router = new VueRouter({
  routes,
  // mode: 'history',
  base: "/",
});
export default router;
