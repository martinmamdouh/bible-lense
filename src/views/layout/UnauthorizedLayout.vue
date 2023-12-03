<template>
  <v-app app>
    <v-app-bar fixed flat color="white" height="70%" class="navbar" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        :src="require('@/assets/images/bible.jpeg')"
        alt="App Icon"
        class="pointer"
        width="60"
        height="60"
        @click="goTo('homePage')"
      />
      <v-toolbar-title class="nav-title pointer ml-4" @click="goTo('homePage')"
        ><span class="navy">Biblical</span>
        <span class="maroon">Lens</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      :width="$vuetify.breakpoint.smAndUp ? '30%' : '100%'"
      class="top-index"
    >
      <v-row class="mt-2">
        <v-col cols="2">
          <img
            :src="require('@/assets/images/bible.jpeg')"
            alt="App Icon"
            class="pointer"
            width="60"
            height="60"
            @click="drawer = false"
          />
        </v-col>
        <v-col cols="8">
          <span class="navy">Biblical</span>
          <span class="maroon">Lens</span>
        </v-col>
        <v-col cols="2">
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-close</v-icon></v-btn
          >
        </v-col>
      </v-row>

      <v-list nav dense>
        <v-list-item-group
          active-class=" text--accent-4"
          @click="drawer = !drawer"
        >
          <v-list-item>
            <v-list-item-title @click="goTo('homePage')">
              Home
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('aboutPage')">
              About
            </v-list-item-title>
          </v-list-item>
          <label class="maroon">Categories:</label>
          <v-list-item
            v-for="(category, n) in categories"
            :key="n"
            class="pl-8"
          >
            <v-list-item-title
              @click="
                $router.push({
                  name: 'canvasPage',
                  params: {
                    canvasType: category.childrenUrlPathParams.canvasType,
                    dataSet: category.childrenUrlPathParams.dataSet,
                  },
                })
              "
              >{{ category.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main app>
      <!-- If using vue-router -->
      <router-view />
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
<script>
import CATEGORIES from "@/assets/database/categories.json";
export default {
  data() {
    return { drawer: false, categories: [] };
  },
  methods: {
    goTo(name) {
      if (this.$route.name == name) return;
      this.$router.push({ name });
    },
  },
  created() {
    this.categories = CATEGORIES["en"];
  },
};
</script>
<style>
.navbar {
  z-index: 10000 !important;
}
.pointer {
  cursor: pointer;
}
.top-index {
  z-index: 1000000;
}
@media (max-width: 576px) {
  .nav-title {
    font-size: 13px;
  }
}
</style>
