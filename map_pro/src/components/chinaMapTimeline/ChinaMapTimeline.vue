<template>
  <v-chart id="map" class="map_chart" autoresize :option="option" ref="map" />
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
import china from "@/assets/mapJson/china.json";
// 绘制地图
registerMap("china", china);
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
var colors = [
  ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
  [
    "#1DE9B6",
    "#F46E36",
    "#04B9FF",
    "#5DBD32",
    "#FFC809",
    "#FB95D5",
    "#BDA29A",
    "#6E7074",
    "#546570",
    "#C4CCD3",
  ],
  [
    "#37A2DA",
    "#67E0E3",
    "#32C5E9",
    "#9FE6B8",
    "#FFDB5C",
    "#FF9F7F",
    "#FB7293",
    "#E062AE",
    "#E690D1",
    "#E7BCF3",
    "#9D96F5",
    "#8378EA",
    "#8378EA",
  ],
  [
    "#DD6B66",
    "#759AA0",
    "#E69D87",
    "#8DC1A9",
    "#EA7E53",
    "#EEDD78",
    "#73A373",
    "#73B9BC",
    "#7289AB",
    "#91CA8C",
    "#F49F42",
  ],
];
export default {
  name: "ChinaMapTimeline",
  setup(props) {
    // 地图的 option 配置
    const option = ref({
      // baseOption:{},
      backgroundColor: "rgba(0,21,60,1)",
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      timeline: {
        axisType: "category",
        autoPlay: true,
        playInterval: 3000,
        data: ["2002-01-01", "2004-01-01"],
        label: {
          formatter: function (s) {
            return new Date(s).getFullYear();
          },
        },
        symbol:
          "path://M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z",
        symbolSize: [1, 15],
        symbolKeepAspect: true,
        controlStyle: {
          show: false,
        },
        progress: {
          lineStyle: {
            show: true,
            color: "#00b1ff",
            width: 1,
          },
          itemStyle: {
            color: "#00b1ff",
            width: 1,
            borderColor: "#00b1ff",
            borderWidth: 1,
          },
          label: {
            show: false,
          },
        },
        checkpointStyle: {
          //当前项的checkpoint的样式，包括circle,rect,roundRect,triangle,diamond,pin,arrow,none
          // symbol: "arrow",
          symbol:
            "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
          symbolRotate: "180",
          symbolSize: [11, 12],
          color: "#fff",
          borderColor: "#fff",
          borderWidth: 2,
        },
        emphasis: {
          itemStyle: {
            color: "#00b1ff",
            width: 1,
            borderColor: "#00b1ff",
            borderWidth: 1,
          },
        },
      },
      visualMap: {
        show: true,
        type: "piecewise",
        min: 0,
        max: 1000,
        realtime: false,
        calculable: false,
        inRange: {
          color: ["#f00", "#45A5F8"],
        },
        textStyle: {
          color: "#fff",
        },
      },
      geo: {
        show: true,
        map: "china",
        roam: true,
        zoom: 1,
        center: [113.83531246, 34.0267395887],
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
      tooltip: {
        trigger: "item",
        backgroundColor: "rgb(71,166,248,0.8)",
        borderWidth: 1,
        borderColor: "#a2b9e5",
        padding: 10,
        confine: true,
        textStyle: {
          color: "#fff",
          fontSize: 20,
          fontFamily: "Microsoft YaHei",
        },
        formatter: function (params) {
          return `${params.name}`;
        },
      },
      series: [
        { name: "2002全国宏观经济指标", type: "scatter", coordinateSystem: "geo" },
        { name: "2004全国宏观经济指标", type: "scatter", coordinateSystem: "geo" },
      ],
      options: [
        {
          title: { text: "2002全国宏观经济指标" },
          series: [
            {
              data: [
                {
                  name: "江苏",
                  value: [118.8062, 31.9208, 100.41],
                },
                {
                  name: "河南",
                  value: [113.4668, 34.6234, 157.17],
                },
              ],
            },
          ],
        },
        {
          title: { text: "2004全国宏观经济指标" },
          series: [
            {
              data: [
                {
                  name: "吉林",
                  value: [125.8154, 44.2584, 49.03],
                },
                {
                  name: "福建",
                  value: [119.4543, 25.9222, 9.55],
                },
              ],
            },
          ],
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
  margin: 20px auto;
  width: 800px;
  height: 800px;
  border: 1px solid #333;
}
</style>
