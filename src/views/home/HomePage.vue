<template>
  <v-container>
    <v-row class="intro-text" align="center" dense>
      <v-col cols="12" sm="8" offset="4">
        <h5>
          &ldquo;{{
            $store.state.locale == "ar"
              ? `سِرَاجٌ لِرِجْلِي كَلاَمُكَ وَنُورٌ لِسَبِيلِي." (مز 119: 105).`
              : `Your word is a lamp for my feet, a light on my path. (Psalm 119:105)`
          }}&rdquo;
        </h5>
      </v-col>
      <!-- 

      <v-col cols="4" sm="2">
        <v-img
          height="80"
          width="180"
          class="elevation-8 rounded"
          :src="require('@/assets/images/bible_live.jpeg')"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <p :class="{ 'full-text': readmore, 'summary-text': !readmore }">
          {{
            $store.state.locale == "ar"
              ? `
مرحباً بكم في دليل قراءة الكتاب المقدس! نحن هنا لنجعل قراءة الكتاب المقدس أكثر سهولة. لكل سفر، نقدم ملخصًا ونشارك رؤى حول الكاتب والجمهور المستهدف والغرض من الكتابة. سواء كنت قارئًا متمرسًا أو مبتدئًا، هدفنا هو مساعدتك في فهم سياق ومعنى كل كتاب، مما يجعل تجربة قراءتك للكتاب المقدس أكثر فائدة وممتعة. ابدأ في استكشاف ثراء الكتاب المقدس مع ملخصاتنا المعلوماتية الخلفية المفيدة.`
              : `Welcome to our Bible Reading Guide! We're here to make reading the
          Bible more accessible. For each Scripture, we provide a summary and
          share insights about the writer, the intended audience, and the
          purpose behind the writing. Whether you're a seasoned reader or just
          starting, our goal is to help you understand the context and meaning
          of each book, making your Bible reading experience more insightful and
          enjoyable. Start exploring the richness of the Scriptures with our
          handy summaries and background information.`
          }}
        </p>
        <p :class="{ 'full-text': readmore, 'summary-text': !readmore }">
          {{
            $store.state.locale == "ar"
              ? `للبدء في استكشاف الكتاب المقدس، نشجعك على البدء 
           بأختيار بطاقة "العهد القديم" أو "العهد الجديد"
           القسم أدناه للوصول إلى الأسفار. قبل البدء في قراءة
           النص، خذ دقيقة من وقتك لقراءة مقدمة وملخص
           السفر للحصول على فهم سياقي حول الكاتب، والغرض،
           المتلقي للرساله والسياق و الاحداث المحيطين بالنص.`
              : `To embark on your biblical exploration, we encourage you to begin with
          selecting either 'The Old Testament' or 'The New Testament' card form
          the below section to access the individual books. Before diving into
          the text, take a moment to read the introduction and summary of each
          book to gain a contextual understanding about the author, the purpose,
          the audience, and the surrounding context of the text.`
          }}
        </p>
      </v-col>
       -->
    </v-row>
    <!-- 
    <v-row align="center" justify="center">
      <v-btn small color="#b78727" text @click="readmore = !readmore"
        >{{ readmore ? "Read Less" : "Read More" }}
        <v-icon small>{{
          readmore ? "mdi-arrow-up" : "mdi-arrow-down"
        }}</v-icon></v-btn
      >
    </v-row>
     -->
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
import { DATA } from "@/assets/database/categories";

export default {
  components: { CategoryCard },
  data() {
    return { categories: [], readmore: false };
  },
  created() {
    this.categories = DATA[this.$store.state.locale];
  },
};
</script>
<style scoped>
.full-text {
  display: inherit;
}
.intro-text {
  text-align: start;
  font-size: 16px;
}
.summary-text {
  display: none;
}
</style>
