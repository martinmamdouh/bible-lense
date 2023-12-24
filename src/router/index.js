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
        path: "canvas/:canvasType/:dataSet/:category",
        name: "canvasPage",
        component: () => import("@/views/canvases/CanvasPage.vue"),
        props: true,
      },
      {
        path: "bible-story",
        name: "bibleStoryRouter",
        component: () => import("@/views/bible-story/BibleStoryRouter.vue"),
        children: [
          {
            path: "bible-story-characters",
            name: "bibleStoryCharacters",
            component: () =>
              import("@/views/bible-story/BibleStoryCharacters.vue"),
          },
          {
            path: "bible-story-events",
            name: "bibleStoryEvents",
            component: () => import("@/views/bible-story/BibleStoryEvents.vue"),
          },
        ],
      },
      {
        path: "404",
        name: "notFound",
        component: () => import("@/views/errors/NotFound.vue"),
      },
    ],
  },

  { path: "*", redirect: { name: "notFound" } },
];

const router = new VueRouter({
  routes,
  // mode: 'history',
  base: "/",
});
export default router;
