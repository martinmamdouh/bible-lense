<template>
  <v-container fluid>
    <v-row justify="start" align="start">
      <div class="dict-list">
        <h5 class="pl-2 navy">Categories</h5>
        <v-list>
          <v-list-item-group :value="selectedCategory" mandatory class="gold">
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

      <div style="position: absolute; left: 25%; width: 70%">
        <v-data-table
          :headers="headers"
          :items="filteredDictionary"
          :search="search"
          :items-per-page="-1"
          :fixed-header="true"
          height="400"
          class="elevation-1 pa-4 pr-4 mt-12"
        >
          <template v-slot:top>
            <h3>
              <label color="primary">The Bible Dictionary</label>
            </h3>
            <v-toolbar flat>
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    hide-details
                    dense
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="selectedCategory"
                    :items="categories"
                    label="Filter by category"
                    hide-details
                    dense
                    clearable
                    @input="onSelectCategory"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-toolbar>
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
      headers: [
        { text: "English", value: "english", width: "25%", align: "start" },
        {
          text: "Translation",
          value: "translation",
          width: "25%",
          align: "end",
        },
        { text: "Example", value: "example", width: "50%" },
      ],
      dictionary: [],
      filteredDictionary: [],
      categories: [],
      selectedCategory: "All",
    };
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
      let allCategories = ["All"];
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
      if (!this.selectedCategory || this.selectedCategory == "All") {
        this.selectedCategory = "All";
        this.filteredDictionary = this.dictionary;
        return;
      }
      this.filteredDictionary = this.dictionary.filter((item) => {
        return item.categories.includes(this.selectedCategory);
      });
    },
  },
  created() {
    this.loadDictionaryData("ar");
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
</style>
