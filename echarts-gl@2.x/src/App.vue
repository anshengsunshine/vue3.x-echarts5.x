<template>
  <!-- 3d 地球飞线图 -->
  <fight-earth />
  <!-- 3d 散点图 -->
  <!-- <gL-bar-3D /> -->
  <!-- 3D 地图 -->
  <!-- <gL-earth-3D /> -->
</template>

<script>
// import GLEarth3D from "./echartsGLEarth3D";
// import GLBar3D from "./echartsGLBar3D";
import FightEarth from "./FightEarth.vue"
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    // GLEarth3D,
    // GLBar3D,
    FightEarth,
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
