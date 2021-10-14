<template>
  <!-- 3D 地图 -->
  <gL-earth-3D />
</template>

<script>
import GLEarth3D from "./echartsGLEarth3D";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    GLEarth3D,
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>

<style>
body {
  margin: 0;
}
</style>
