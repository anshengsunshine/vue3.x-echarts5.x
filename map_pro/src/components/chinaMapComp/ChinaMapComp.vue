<template>
  <v-chart id="map" class="map_chart" autoresize :option="option" ref="map" />
</template>

<script>
// 引入echarts 核心代码
import { init, use, registerMap } from "echarts/core";
// 默认是 canvas 格式，可以修改为 SVGRenderer
import { CanvasRenderer } from "echarts/renderers";
/**
 * 按需引入自己需要的配置项模块，以减少打包的体积
 * 本次是地图下钻，仅引入使用的模块
 * 此处用到了toolbox中的下载图片，即ToolboxComponent
 * */
import { ToolboxComponent } from "echarts/components";
/*
 * 引入需要的 模块API，这里只用到了地图，其他图表类型，如：LineChart/BarChart……
 * 可以理解为：图表的Type + "Chart"
 * 不确定是否存在，可以查看源码：node_modules/echarts/charts
 */
import { MapChart } from "echarts/charts";
// 引入Vue3.0的 API
import { ref } from "vue";
// 引入地图Json包
import china from "@/assets/mapJson/china.json";
// 绘制地图
registerMap("china", china);
// 将刚才引入的MapChart用起来
use([CanvasRenderer, ToolboxComponent, MapChart]);

export default {
  name: "ChinaMapComp",
  setup() {
    const option = ref({
      backgroundColor: "transparent",
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "地图",
          type: "map",
          map: "china",
          zlevel: 2,
          label: {
            show: true,
          },
        },
      ],
    });
    return {
      option,
    };
  },
};
</script>
<style scoped>
.map_chart {
  margin: 0 auto;
  width: 800px;
  height: 800px;
  border: 1px solid #333;
}
</style>
