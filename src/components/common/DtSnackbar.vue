<template>
  <section>
    <v-snackbar
      v-for="(snackbar, i) in $store.state.snackbars"
      :key="i"
      v-model="snackbar.showSnackbar"
      :timeout="snackbar.timeout"
      :color="snackbar.snackbarColor"
      class="pa-2"
      fixed
      top
    >
      <div>{{ snackbar.snackbarMsg }}</div>

      <v-btn
        text
        @click="
          snackbar.showSnackbar = false;
          $hideSnackbar();
        "
        >Close</v-btn
      >
    </v-snackbar>
  </section>
</template>
<script>
export default {};
</script>
