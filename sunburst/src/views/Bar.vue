<template>
  <v-chart class="chart" autoresize :option="option" ref="map" />
</template>

<script>
import { reactive, toRefs } from "vue-demi";
import { use } from "echarts/core";
import { GridComponent, PolarComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
use([CanvasRenderer, BarChart, GridComponent, PolarComponent]);
export default {
  name: "Bar",
  setup() {
    const data = [
      [5000, 15000],
      [5000, 15000],
      [5000, 11500],
      [5000, 10600],
      [5000, 9000],
      [5000, 9000],
      [5000, 9000],
      [5000, 9000],
      [5000, 8500],
      [5000, 8000],
      [5000, 8000],
      [5000, 7700],
      [5000, 7800],
      [5000, 7300],
      [5000, 8500],
      [5000, 7600],
      [5000, 7417.54],
      [5000, 7000],
      [5000, 6800],
    ];
    const cities = [
      "北京",
      "上海",
      "深圳",
      "广州",
      "苏州",
      "杭州",
      "南京",
      "福州",
      "青岛",
      "济南",
      "长春",
      "大连",
      "温州",
      "郑州",
      "武汉",
      "成都",
      "东莞",
      "沈阳",
      "烟台",
    ];
    const barHeight = 50;
    const barData = reactive({
      option: {
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          show: false,
          top: 100,
        },
        angleAxis: {
          show: false,
          type: "category",
          data: cities,
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            const id = params.dataIndex;
            return (
              cities[id] + "<br>Lowest：" + data[id][0] + "<br>Highest：" + data[id][1]
            );
          },
        },
        radiusAxis: {
          // show: false,
        },
        polar: {},
        series: [
          {
            type: "bar",
            itemStyle: {
              color: "transparent",
            },
            data: data.map(function (d) {
              return d[0];
            }),
            coordinateSystem: "polar",
            stack: "Min Max",
            silent: true,
          },
          {
            type: "bar",
            data: data.map(function (d) {
              return d[1] - d[0];
            }),
            coordinateSystem: "polar",
            name: "Range",
            stack: "Min Max",
          },
          {
            type: "bar",
            itemStyle: {
              color: "transparent",
            },
            data: data.map(function (d) {
              return d[2] - barHeight;
            }),
            coordinateSystem: "polar",
            stack: "Average",
            silent: true,
            z: 10,
          },
        ],
      },
    });
    return {
      ...toRefs(barData),
    };
  },
};
</script>

<style scoped>
.chart {
  width: 800px;
  height: 800px;
}
</style>
