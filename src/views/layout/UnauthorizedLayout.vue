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
      <v-btn
        text
        x-small
        :color="languages[0].value == locale ? '#800000' : '#333'"
        @click="onSelectLanguage(languages[0].value)"
        >{{ languages[0].label }} </v-btn
      ><v-icon small>mdi mdi-web</v-icon>
      <v-btn
        x-small
        text
        :color="languages[1].value == locale ? '#800000' : '#333'"
        @click="onSelectLanguage(languages[1].value)"
        >{{ languages[1].label }}
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
            @click="goToPath(category.childrenPath)"
          >
            <v-list-item-title>{{ category.title }}</v-list-item-title>
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
import { DATA } from "@/assets/database/categories";
export default {
  data() {
    return {
      drawer: false,
      categories: [],
      locale: "en",
      languages: [
        { id: 1, label: "English", value: "en" },
        { id: 2, label: "العربية", value: "ar" },
      ],
    };
  },
  methods: {
    goTo(name) {
      this.drawer = false;
      if (this.$route.name == name) return;
      try {
        this.$router.push({ name });
      } catch (err) {
        return;
      }
    },
    goToPath(path) {
      this.drawer = false;
      try {
        this.$router.push(path);
      } catch (err) {
        return;
      }
    },
    onSelectLanguage(language) {
      this.locale = language;
      window.localStorage.setItem("bible_lens_locale", this.locale);
      window.location.reload();
    },
  },
  created() {
    const lang = window.localStorage.getItem("bible_lens_locale") || "en";
    this.locale = lang;
    this.$setLocale(lang);
    this.categories = DATA[this.$store.state.locale];
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
