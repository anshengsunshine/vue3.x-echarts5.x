<template>
  <v-chart class="map_chart" autoresize :option="option" ref="map" />
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
import { MapChart, ScatterChart, BarChart } from "echarts/charts";
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
  BarChart,
]);
var data = [
  {
    name: "北京市",
    value: 5.3,
  },
  {
    name: "天津市",
    value: 3.8,
  },
  {
    name: "上海市",
    value: 4.6,
  },
  {
    name: "重庆市",
    value: 3.6,
  },
  {
    name: "河北省",
    value: 3.4,
  },
  {
    name: "河南省",
    value: 3.2,
  },
  {
    name: "云南省",
    value: 1.6,
  },
  {
    name: "辽宁省",
    value: 4.3,
  },
  {
    name: "黑龙江省",
    value: 4.1,
  },
  {
    name: "湖南省",
    value: 2.4,
  },
  {
    name: "安徽省",
    value: 3.3,
  },
  {
    name: "山东省",
    value: 3.0,
  },
  {
    name: "新疆维吾尔自治区",
    value: 1,
  },
  {
    name: "江苏省",
    value: 3.9,
  },
  {
    name: "浙江省",
    value: 3.5,
  },
  {
    name: "江西省",
    value: 2.0,
  },
  {
    name: "湖北省",
    value: 2.1,
  },
  {
    name: "广西壮族自治区",
    value: 3.0,
  },
  {
    name: "甘肃省",
    value: 1.2,
  },
  {
    name: "山西省",
    value: 3.2,
  },
  {
    name: "内蒙古自治区",
    value: 3.5,
  },
  {
    name: "陕西省",
    value: 2.5,
  },
  {
    name: "吉林省",
    value: 4.5,
  },
  {
    name: "福建省",
    value: 2.8,
  },
  {
    name: "贵州省",
    value: 1.8,
  },
  {
    name: "广东省",
    value: 3.7,
  },
  {
    name: "青海省",
    value: 0.6,
  },
  {
    name: "西藏自治区",
    value: 0.4,
  },
  {
    name: "四川省",
    value: 3.3,
  },
  {
    name: "宁夏回族自治区",
    value: 0.8,
  },
  {
    name: "海南省",
    value: 1.9,
  },
  {
    name: "台湾省",
    value: 0.1,
  },
  {
    name: "香港特别行政区",
    value: 0.1,
  },
  {
    name: "澳门特别行政区",
    value: 0.1,
  },
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
  name: "ChinaMapBarComp",
  setup(props) {
    // 地图的 option 配置
    const option = ref({
      visualMap: {
        type: "continuous",
        text: ["", ""],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 7,
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
        map: "china",
        left: "left",
        right: "300",
        layoutSize: "80%",
        emphasis: {
          itemStyle: {
            areaColor: "#fff464",
          },
          label: {
            show: false,
          },
        },
        regions: [
          {
            name: "南海诸岛",
            value: 0,
            itemStyle: {
              opacity: 0,
              label: {
                show: false,
              },
            },
          },
        ],
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
  width: 800px;
  height: 800px;
  border: 1px solid #333;
}
</style>
