<template>
  <v-container fluid>
    <v-row justify="start" align="start">
      <div class="dict-list">
        <h5 class="pl-2 navy">Categories</h5>
        <v-list>
          <v-list-item-group mandatory class="gold">
            <v-list-item v-for="(category, i) in categories" :key="i">
              <v-list-item-content>
                <v-list-item-title
                  @click="
                    selectedCategory = category;
                    onSelectCategory();
                  "
                >
                  <small>{{ category }}</small>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

      <div class="dict-table">
        <v-data-table
          :headers="headers"
          :items="filteredDictionary"
          :search="search"
          :items-per-page="-1"
          :fixed-header="true"
          height="400"
          class="elevation-1 pa-4 pt-1"
        >
          <template v-slot:top>
            <label color="primary"><h3>The Bible Dictionary</h3></label>

            <v-switch v-model="showExamples" label="Show Examples"></v-switch>

            <div flat>
              <v-row dense>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    hide-details
                    single-line
                    dense
                    clearable
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-select
                    v-model="selectedCategory"
                    :items="categories"
                    label="Filter by category"
                    dense
                    single-line
                    clearable
                    outlined
                    @input="onSelectCategory"
                  ></v-select>
                </v-col>
              </v-row>
            </div>
          </template>
          <template v-slot:[`item.english`]="{ item }">
            {{ item.english }}
            <v-btn
              style="float: left"
              small
              @click="pronounce(item.english)"
              icon
            >
              <v-icon small>mdi-volume-high</v-icon>
            </v-btn>
          </template>
          <template v-slot:[`item.example`]="{ item }">
            {{ item.example }}
            <v-btn small @click="pronounce(item.example)" icon>
              <v-icon small>mdi-volume-high</v-icon>
            </v-btn>
          </template>
          <template v-slot:[`item.translation`]="{ item }">
            <span dir="rtl">{{ item.translation }}</span>
          </template>
        </v-data-table>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { loadJsData } from "@/utilities/DataLoader";
import Speak from "speak-tts"; // es6
export default {
  data() {
    return {
      speech: null,
      search: "",
      showExamples: true,

      dictionary: [],
      filteredDictionary: [],
      categories: [],
      selectedCategory: "Generic",
    };
  },
  computed: {
    headers() {
      let mandHeader = [
        { text: "English", value: "english", width: "25%", align: "start" },
        {
          text: "Translation",
          value: "translation",
          width: "25%",
          align: "end",
        },
      ];
      if (this.showExamples) {
        mandHeader.push({ text: "Example", value: "example", width: "50%" });
      }
      return mandHeader;
    },
  },
  methods: {
    async pronounce(englishWord) {
      this.speech.speak({
        text: englishWord,
        queue: false,
      });
    },
    loadDictionaryData(lang) {
      this.dictionary = loadJsData("dictionary")[lang];
      this.filteredDictionary = loadJsData("dictionary")[lang];
      this.initializeCategories();
    },
    initializeCategories() {
      let allCategories = [];
      this.dictionary.forEach((item) => {
        allCategories = allCategories.concat(this.categories, item.categories);
      });

      // Use Set to remove duplicates
      const distinctCategoriesSet = new Set(allCategories);

      // Convert the Set back to an array
      const distinctCategories = Array.from(distinctCategoriesSet);

      this.categories = distinctCategories.sort();
    },
    onSelectCategory() {
      this.filteredDictionary = this.dictionary.filter((item) => {
        return item.categories.includes(this.selectedCategory);
      });
    },
  },
  created() {
    this.loadDictionaryData("ar");
    this.onSelectCategory();
    try {
      const speaker = new Speak();
      speaker.init().then(() => {
        this.speech = speaker;
      });
    } catch (e) {
      console.error("Failed to initialize text-to-speech:", e);
    }
  },
};
</script>
<style>
.dict-list {
  position: fixed;
  left: 0;
  top: 12%;
  width: 25%;
}
.dict-table {
  position: absolute;
  left: 25%;
  width: 70%;
}
@media (max-width: 576px) {
  .dict-list {
    display: none;
  }
  .dict-table {
    left: 0;
    width: 100%;
  }
  .sm-hide {
    display: none;
  }
}
</style>
