<template>
  <div class="world_comp">
    <world-data-comp />
    <world-map-comp />
    <world-map-two-comp />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "WorldCompView",
});
</script>
<style>
.world_comp {
  padding-bottom: 50px;
  width: 800px;
  margin: 20px auto;
  margin-top: 50px;
}
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}

.dot_wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  height: 20px;
  background-color: #ccc;
}
.dot {
  height: 8px;
  border-radius: 50%;
  color: #333;
  cursor: pointer;
  z-index: 1;
}
.dot:hover {
  color: #f00;
}
</style>
