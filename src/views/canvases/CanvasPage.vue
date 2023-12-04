<template>
  <canvas-one :items="items" :category="category" />
</template>
<script>
import CanvasOne from "@/components/canvases/CanvasOne.vue";
import { loadJsData } from "@/utilities/DataLoader";
export default {
  components: { CanvasOne },
  props: {
    canvasType: { required: true },
    dataSet: { type: String },
    category: { type: String },
  },
  data() {
    return { items: null };
  },
  created() {
    // this.items = loadJsonData(this.dataSet)["en"];

    this.items = loadJsData(this.dataSet)[this.$store.state.locale];
  },
};
</script>
