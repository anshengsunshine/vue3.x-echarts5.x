<template>
  <v-chart id="africa_map" class="map_chart" autoresize :option="option" ref="map" />
</template>

<script>
import { init, use, registerMap } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  ToolboxComponent,
  VisualMapComponent,
  TooltipComponent,
  TimelineComponent,
} from "echarts/components";
import { MapChart, ScatterChart } from "echarts/charts";
import { onMounted, reactive, ref, toRefs, onBeforeUnmount, watch } from "vue";
import africa from "@/assets/mapJson/africa.json";
// 绘制地图
registerMap("africa", africa);
// 将刚才引入的MapChart用起来
use([
  CanvasRenderer,
  ToolboxComponent,
  VisualMapComponent,
  TooltipComponent,
  TimelineComponent,
  MapChart,
  ScatterChart,
]);

export default {
  name: "AfricaMapComp",
  setup(props) {
    // 地图的 option 配置
    const option = ref({
      backgroundColor: "rgba(0,21,60,1)",
      geo: {
        show: true,
        map: "africa",
        roam: true,
        zoom: 1,
        // center: [113.83531246, 34.0267395887],
        emphasis: {
          label: {
            show: false,
          },
        },
        itemStyle: {
          borderColor: "rgba(147, 235, 248, 1)",
          borderWidth: 1,
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          shadowColor: "rgba(128, 217, 248, 1)",
          // shadowColor: 'rgba(255, 255, 255, 1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
        emphasis: {
          itemStyle: {
            areaColor: "#389BB7",
            borderWidth: 0,
          },
        },
      },
    });

    return {
      option,
    };
  },
};
</script>

<style>
.map_chart {
  margin: 20px auto;
  width: 800px;
  height: 800px;
  border: 1px solid #333;
}
</style>
