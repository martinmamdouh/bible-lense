<template>
  <v-card height="300" width="600" class="pa-12 center-card">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" align="center">Page Not Found 404 </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-btn
          color="primary"
          width="100%"
          @click="$router.push({ name: 'homePage' })"
        >
          Home
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.center-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
