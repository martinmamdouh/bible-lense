<template>
  <v-dialog v-model="$store.state.loading" persistent width="500">
    <v-card color="#485a78" dark>
      <v-card-text>
        Please wait..
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
        {{ $store.state.loadingMsg }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
