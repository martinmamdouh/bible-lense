<template>
  <canvas-one :items="items" />
</template>
<script>
import CanvasOne from "@/components/canvases/CanvasOne.vue";
import { loadJsonData } from "@/utilities/DataLoader";
export default {
  components: { CanvasOne },
  props: {
    canvasType: { required: true },
    dataSet: { type: String },
  },
  data() {
    return { items: null };
  },
  created() {
    this.items = loadJsonData(this.dataSet)["en"];
  },
};
</script>
