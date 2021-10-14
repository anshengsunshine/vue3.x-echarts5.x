<template>
  <div class="china_copm_view">
    <china-map-comp />
    <china-Map-Timeline />
    <china-map-bar-comp />
    <z-j-map-comp @getCityNameData="getCityNameData" />
  </div>
</template>
<script>
export default {
  name: "ChinaCompView",
  setup() {
    // 获取到点击的 - 城市对象 - zj-map-comp
    const getCityNameData = (cityName) => {
      console.log(cityName);
    };

    return {
      getCityNameData,
    };
  },
};
</script>
