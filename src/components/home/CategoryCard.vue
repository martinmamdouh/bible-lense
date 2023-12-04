<template>
  <v-card class="mx-auto category-card" height="400">
    <v-img
      v-if="category.imgSrc"
      class="white--text align-end"
      height="200px"
      :src="require(`@/assets/images/${category.imgSrc}`)"
    >
      <v-card-title class="card-title">{{ category.title }}</v-card-title>
    </v-img>
    <v-img
      v-else
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="card-title"> {{ category.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="card-subtitle pb-0">
      {{ category.subtitle }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text class="text--primary card-text">
      <div>{{ category.description }}</div>
    </v-card-text>

    <v-card-actions class="card-action">
      <v-btn color="#b78727 " text @click="goTo(category.childrenPath)">
        {{ $store.state.locale == "ar" ? "اقرأ المزيد" : "read more" }}
        <v-icon small class="mx-2">mdi-book-open-variant</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="#b78727 " icon> <v-icon>mdi-share-variant</v-icon> </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: { category: { type: Object, required: true } },
  methods: {
    // path is a vueRouter path object {name,params,query}
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
.category-card {
  white-space: wrap;
}
@media (max-width: 576px) {
  .category-card {
    width: 100%;
    font-size: 8px !important;
    margin-right: 10px;
  }
}
.card-title {
  background-color: rgba(23, 11, 14, 0.579) !important;
  white-space: nowrap;
}
.card-text {
  height: 100px;
  overflow-y: scroll;
}
.card-subtitle {
  height: 40px;
  overflow: hidden;
}
.card-actions {
  position: absolute;
  bottom: 0%;
}
</style>
