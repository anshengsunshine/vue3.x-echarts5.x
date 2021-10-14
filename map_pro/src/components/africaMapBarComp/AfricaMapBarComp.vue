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
} from "echarts/components";
import { MapChart, BarChart } from "echarts/charts";
import { ref } from "vue";
import africa from "@/assets/mapJson/africa.json";
// 绘制地图
registerMap("africa", africa);
// 将刚才引入的MapChart用起来
use([
  CanvasRenderer,
  ToolboxComponent,
  VisualMapComponent,
  TooltipComponent,
  MapChart,
  BarChart,
]);
var data = [
  { name: "Nigeria", value: 60 },
  { name: "South Africa", value: 22 },
  { name: "Mali", value: 18 },
  { name: "Angola", value: 8 },
  { name: "Kenya", value: 11 },
  { name: "Ethiopia", value: 21 },
  { name: "Congo", value: 2 },
  { name: "Chad", value: 4 },
  { name: "S. Sudan", value: 4 },
  { name: "Côte d'Ivoire", value: 4 },
  { name: "Tanzania", value: 4 },
  { name: "Guinea", value: 9 },
];

var yData = [];

data.sort(function (o1, o2) {
  if (isNaN(o1.value) || o1.value == null) return -1;
  if (isNaN(o2.value) || o2.value == null) return 1;
  return o1.value - o2.value;
});

for (var i = 0; i < data.length; i++) {
  yData.push(data[i].name);
}

export default {
  name: "AfricaMapBarComp",
  setup(props) {
    // 地图的 option 配置
    const option = ref({
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      tooltip: {
        show: true,
      },
      visualMap: {
        type: "continuous",
        text: ["", ""],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 60,
        inRange: {
          color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"],
        },
        textStyle: {
          color: "#000",
        },
        bottom: 30,
        left: "left",
      },
      grid: {
        right: 10,
        top: 80,
        bottom: 30,
        width: "20%",
      },
      xAxis: {
        type: "value",
        scale: true,
        position: "top",
        splitNumber: 1,
        boundaryGap: false,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 2,
          color: "#aaa",
        },
      },
      yAxis: {
        type: "category",
        nameGap: 16,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#ddd",
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: "#ddd",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#999",
        },
        data: yData,
      },
      geo: {
        roam: true,
        map: "africa",
        left: "left",
        right: "300",
        layoutSize: "80%",
        label: {
          show: true,
          color: "#ccc",
        },
        itemStyle: {
          areaColor: "#fff",
        },
      },
      series: [
        {
          name: "mapSer",
          type: "map",
          roam: false,
          geoIndex: 0,
          label: {
            show: false,
          },
          data: data,
        },
        {
          name: "barSer",
          type: "bar",
          roam: false,
          visualMap: false,
          zlevel: 2,
          barMaxWidth: 20,
          itemStyle: {
            color: "#40a9ed",
          },
          label: {
            show: false,
            position: "right",
            offset: [0, 10],
          },
          emphasis: {
            itemStyle: {
              color: "#3596c0",
            },
            label: {
              show: true,
              position: "right",
              offset: [10, 0],
            },
          },
          data: data,
        },
      ],
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
  width: 900px;
  height: 800px;
  border: 1px solid #333;
}
</style>
