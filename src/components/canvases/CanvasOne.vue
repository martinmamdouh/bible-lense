<template>
  <v-row v-if="items" dense>
    <!-- Side navigatin column -->
    <v-col
      v-if="$vuetify.breakpoint.smAndUp && !fullscreen"
      cols="12"
      :sm="fullscreen ? 1 : 3"
    >
      <v-card height="100%" flat class="fixed-nav px-2">
        <v-card-title v-if="!fullscreen" primary-title class="capitalize navy">
          {{ category }}
        </v-card-title>
        <v-card-text v-if="!fullscreen" class="scroll">
          <v-list flat>
            <v-list-item-group :value="activeListItem" mandatory class="maroon">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="list-itemss"
              >
                <v-list-item-content>
                  <v-list-item-title
                    @click="
                      selectedItem = item;
                      onSelectItem();
                    "
                  >
                    <small>{{ item.title }}</small>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-text v-else class="scroll capitalize">
          <v-btn icon @click="fullscreen = false">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
      <!-- Main Screen 'Content' -->
    </v-col>
    <!-- Content column -->
    <v-col cols="11" :sm="fullscreen ? 11 : 6">
      <v-card width="100%" flat>
        <div
          class="capitalize px-4"
          :class="{
            'fixed-title-full': fullscreen,
            'fixed-title': !fullscreen,
          }"
        >
          <div>
            <v-btn
              text
              color="#b78727"
              @click="$router.push({ name: 'homePage' })"
              >Home</v-btn
            >
            /
            <v-btn text color="grey" disabled>{{ category }}</v-btn>
          </div>
          <v-row dense class="pb-2" align="center">
            <v-col sm="10" cols="12">
              <v-select
                v-model="selectedItem"
                :items="items"
                item-text="title"
                label="select"
                return-object
                dense
                solo
                flat
                fill
                full-width
                hide-details
                color="white"
                class="sm-font bold"
                @input="onSelectItem"
              ></v-select>
            </v-col>

            <v-col v-if="$vuetify.breakpoint.smAndUp" cols="12" sm="2">
              <v-btn
                icon
                x-small
                class="mr-2"
                color="#b78727"
                @click="fullscreen = !fullscreen"
              >
                <v-icon>
                  {{ fullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen" }}
                </v-icon>
              </v-btn>
              <v-btn color="#b78727" x-small icon class="pr-2">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
        <v-card-text class="card-text">
          <!-- <v-img
            src="@/assets/images/dreams.jpg"
            height="auto"
            width="auto"
            class="mb-4 main-img"
          ></v-img> -->
          <section v-if="Object.keys(selectedItem.properties).length > 0">
            <div
              v-for="(key, z) in Object.keys(selectedItem.properties)"
              :key="z"
            >
              <label class="navy capitalize">{{ key }}:</label>
              {{ selectedItem.properties[key] }}
            </div>
            <v-divider class="my-2" />
          </section>
          <section v-if="selectedItem.isMarkDown">
            <div
              v-html="parseMarkDown(selectedItem.markDown)"
              class="markdown"
            ></div>
          </section>
          <section v-else>
            <h3 class="maroon"></h3>
            <div>{{ selectedItem.interpretation }}</div>
          </section>
          <section v-if="selectedItem.bibleVerses" class="mt-4">
            <h3 class="maroon mb-4">
              {{
                $store.state.locale == "ar"
                  ? "آيات ذات صلة من الكتاب المقدس"
                  : "Related Verses from The Bible"
              }}
            </h3>
            <v-card
              v-for="(verse, v) in selectedItem.bibleVerses"
              :key="v"
              class="elevation-6 mb-4 verse-card"
            >
              <v-card-text> &ldquo;{{ verse }}&rdquo; </v-card-text>
            </v-card>
          </section>
          <section v-if="selectedItem.references.length">
            <h3 class="maroon mb-4">
              {{ $store.state.locale == "ar" ? "مصادر" : "References" }}
            </h3>

            <v-responsive
              v-for="(reference, w) in selectedItem.references"
              :key="w"
              aspect-ratio="16/9"
            >
              <iframe
                width="300"
                height="200"
                :src="`https://www.youtube.com/embed/${reference}`"
                frameborder="0"
                allowfullscreen
                class="main-img"
              ></iframe>
            </v-responsive>
          </section>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Image column -->
    <v-col v-if="!fullscreen" cols="12" class="fixed-img">
      <!-- <div>
        <v-img
          src="@/assets/images/dreams.jpg"
          height="50%"
          width="auto"
        ></v-img>
      </div> -->
      <div class="mt-4">
        <h4 class="maroon">
          {{ $store.state.locale == "ar" ? "مصادر" : "Resources" }}
        </h4>
        <v-responsive aspect-ratio="16/9" class="mb-4">
          <iframe
            width="200"
            height="150"
            src="https://www.youtube.com/embed/C3qL54EnW20"
            frameborder="2"
            allowfullscreen
          ></iframe>
        </v-responsive>
        <v-responsive aspect-ratio="16/9">
          <iframe
            width="200"
            height="150"
            src="https://www.youtube.com/embed/7bIUIFMZY6c"
            frameborder="2"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { marked } from "marked";
export default {
  props: {
    items: { type: Array, required: true },
    category: { type: String, required: true },
  },
  data() {
    return {
      selectedItem: {},
      activeListItem: {},
      fullscreen: false,
      ulr: null,
      currentCategory: null,
      breadcrumbs: [
        {
          text: "Home",
          disabled: false,
          href: "homePage",
        },
      ],
    };
  },
  created() {
    const itemId = this.$route.query.itemId;
    this.selectedItem = itemId ? this.items[itemId - 1] : this.items[0];
    this.activeListItem = itemId - 1;
    this.url = this.$route.path;
    this.breadcrumbs.push({
      text: this.category,
      disabled: true,
      href: "",
    });
  },
  methods: {
    onSelectItem() {
      this.$router.push({ query: { itemId: this.selectedItem.id } });
    },
    parseMarkDown(content) {
      return marked.parse(content);
    },
  },
};
</script>
<style scoped>
.scroll {
  overflow-y: scroll;
  height: 600px;
}
.capitalize {
  text-transform: capitalize;
}
.list-item {
  text-transform: capitalize;
  font-size: 8px !important;
}

h3 {
  margin-bottom: 2px;
  margin-top: 2px;
}
.fixed-title {
  position: fixed !important;
  top: 70px;
  left: 25%;
  width: 50%;
  background-color: white;
  z-index: 1000;
  /* height: 100px;
  overflow: hidden; */
  font-size: 14px;
}
.fixed-title-full {
  position: fixed !important;
  top: 70px;
  width: 100%;
  background-color: white;
  z-index: 1000;
  /* height: 100px;
  overflow: hidden; */
  font-size: 14px;
}
.fixed-breadcrumbs {
  position: fixed;
  top: 60px;
  left: 0%;
  width: 100%;
  background-color: white;
  z-index: 1000;
}

.fixed-nav {
  position: fixed;
  top: 70px;
  width: 25%;
  left: 0%;
}
.fixed-img {
  position: fixed;
  top: 13%;
  width: 24%;
  right: 0%;
}
.card-text {
  margin-top: 80px;
}
.main-img {
  display: none;
}
.sm-font {
  font-size: 14px !important;
}
.bold {
  font-weight: bold;
}
::v-deep .markdown h1 {
  color: #800000 !important;
  margin-bottom: 10px !important;
}
::v-deep .markdown h2 {
  color: #800000 !important;
  margin-bottom: 10px !important;
}
::v-deep .markdown h3 {
  color: #800000 !important;
  margin-bottom: 10px !important;
}
::v-deep .markdown h4 {
  color: #800000 !important;
  margin-bottom: 10px !important;
}
header {
  color: #800000;
  margin-bottom: 10px;
}
.verse-card {
  border-left: 4px solid #800000 !important;
}
@media (max-width: 576px) {
  .main-img {
    display: block;
  }
  .breadcrumbs {
    height: 20px;
    width: 100%;
    background-color: white;
    z-index: 1000;
  }
  .fixed-title,
  .fixed-title-full {
    position: sticky !important;
    top: 15px;
    left: 0%;
    width: 100%;
    background-color: white;
    z-index: 10;
    font-size: 10px;
    line-height: 20px;
  }
  .fixed-nav {
    display: none;
  }
  .fixed-img {
    display: none;
  }

  .card-text {
    margin-top: 0px;
  }
  .sm-font {
    font-size: 9px !important;
  }
}
</style>
