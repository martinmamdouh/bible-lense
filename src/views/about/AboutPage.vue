<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="about-section">
          <h2 class="about-heading">About Us</h2>
          <p class="about-description">
            Welcome to [Your Bible Lens Site]—your guide to understanding the
            Bible's core messages. Here, we break down each scripture to answer
            the who, why, and for whom.
          </p>
          <p class="about-description">
            We pride ourselves on providing accurate information sourced
            directly from the Bible. no made-up stories, just thoughtful
            insights to help you navigate the scriptures.
          </p>
          <p class="about-description">
            Our goal is to make the Bible accessible. Whether you're a seasoned
            reader or just starting, we're here to help you connect the dots and
            find meaning in the scriptures.
          </p>
          <p class="about-description">
            We organize similar sections like parables, dreams, and more, making
            it easier for you to connect the dots and find what you're looking
            for effortlessly.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-btn
          color="black"
          dark
          width="100%"
          @click="$router.push({ name: 'homePage' })"
        >
          Let's Start
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
.about-section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.about-heading {
  font-size: 2em;
  color: #35424a;
  margin-bottom: 15px;
}

.about-description {
  font-size: 1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}
</style>
