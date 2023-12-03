<template>
  <v-app id="app" class="app">
    <v-container fluid>
      <dt-loading />
      <dt-snackbar />
      <router-view />
    </v-container>
  </v-app>
</template>
<script>
import DtLoading from "@/components/common/DtLoading";
import DtSnackbar from "@/components/common/DtSnackbar";
export default {
  components: {
    DtLoading,
    DtSnackbar,
  },
};
</script>
<style lang="css">
.app {
  color: #f2f6fd;
}
.navy {
  color: #000080;
}
.maroon {
  color: #800000;
}
.gold {
  color: #b78727;
}
</style>
