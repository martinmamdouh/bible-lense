<template>
  <v-container>
    <v-row
      class="intro-text"
      :class="{ 'full-text': readmore, 'summary-text': !readmore }"
      dense
    >
      <v-col cols="12">
        <h1 class="navy">Introduction</h1>
      </v-col>
      <v-col cols="10">
        <p>
          Embark on a journey of spiritual enlightenment and delve into the
          depths of the Holy Scriptures with our comprehensive guide to reading
          and understanding the Bible. Whether you're a seasoned follower of
          faith or a curious newcomer, This guide will equip you with the tools
          and insights necessary to navigate the expansive landscape of biblical
          knowledge, ensuring a meaningful and enriching experience.
        </p>
        <p>
          To embark on your biblical exploration, we encourage you to begin with
          selecting either 'The Old Testament' or 'The New Testament' card to
          access the individual books. Before diving into the text, take a
          moment to read the introduction and summary of each book to gain a
          contextual understanding about the author, the purpose, the audience,
          and the surrounding context of the text.
        </p>
      </v-col>
      <v-col cols="2">
        <v-img
          height="180"
          width="180"
          class="elevation-8 rounded"
          :src="require('@/assets/images/bible_live.jpeg')"
        ></v-img>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn small color="blue" text @click="readmore = !readmore"
        >{{ readmore ? "Read Less" : "Read More" }}
        <v-icon small>{{
          readmore ? "mdi-arrow-up" : "mdi-arrow-down"
        }}</v-icon></v-btn
      >
    </v-row>
    <v-row>
      <v-col
        v-for="(category, i) in categories"
        :key="i"
        cols="10"
        offset="1"
        offset-sm="0"
        sm="6"
        md="3"
      >
        <category-card :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CategoryCard from "@/components/home/CategoryCard";
import CATEGORIES from "@/assets/database/categories.json";

export default {
  components: { CategoryCard },
  data() {
    return { categories: null, readmore: false };
  },
  created() {
    this.categories = CATEGORIES["en"];
  },
};
</script>
<style>
.full-text {
  height: 280px;
  overflow: hidden;
}
.intro-text {
  text-align: start;
  font-size: 16px;
}
.summary-text {
  height: 150px;
  overflow: hidden;
}
</style>
