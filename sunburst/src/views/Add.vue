<template>
  <div class="home">
    <v-chart
      class="chart"
      autoresize
      :ref="refName"
      @mouseover="handlerMouseover"
      @mouseout="handlerMounseout"
      @click="handlerClick"
    />
  </div>
</template>
<script>
import { getCurrentInstance, onMounted, reactive, toRefs, watch } from "vue-demi";
import { sameDataArr22 } from "@/util/v.js";
import lodash from "lodash";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent, PolarComponent, ToolboxComponent } from "echarts/components";
import { SunburstChart, BarChart } from "echarts/charts";
use([
  CanvasRenderer,
  SunburstChart,
  BarChart,
  GridComponent,
  PolarComponent,
  ToolboxComponent,
]);

export default {
  name: "Add",
  setup() {
    let new_data = [
      {
        date: "2021-01-01",
        type: "1月",
        name: "事件__A",
        start: 25,
        end: 45,
        value: 20,
        itemStyle: {
          color: "#da0d68",
        },
      },
      {
        date: "2021-02-01",
        type: "2月",
        name: "事件__D",
        start: 25,
        end: 78,
        value: 53,
        itemStyle: {
          color: "#da1d23",
        },
      },
      {
        date: "2021-02-02",
        type: "2月",
        name: "事件__E",
        start: 25,
        end: 89,
        value: 64,
        itemStyle: {
          color: "#da1d23",
        },
      },
      {
        date: "2021-03-01",
        type: "3月",
        name: "事件__F",
        start: 25,
        end: 43,
        value: 18,
        itemStyle: {
          color: "#ebb40f",
        },
      },
      {
        date: "2021-03-2",
        type: "3月",
        name: "事件__G",
        start: 25,
        end: 84,
        value: 59,
        itemStyle: {
          color: "#ebb40f",
        },
      },
      {
        date: "2021-03-03",
        type: "3月",
        name: "事件__H",
        start: 25,
        end: 78,
        value: 53,
        itemStyle: {
          color: "#ebb40f",
        },
      },
      {
        date: "2021-04-01",
        type: "4月",
        name: "事件__I",
        start: 25,
        end: 61,
        value: 36,
        itemStyle: {
          color: "#187a2f",
        },
      },
      {
        date: "2021-04-02",
        type: "4月",
        name: "事件__J",
        start: 25,
        end: 74,
        value: 49,
        itemStyle: {
          color: "#187a2f",
        },
      },
      {
        date: "2021-04-03",
        type: "4月",
        name: "事件__K",
        start: 25,
        end: 52,
        value: 27,
        itemStyle: {
          color: "#187a2f",
        },
      },
      {
        date: "2021-04-04",
        type: "4月",
        name: "事件__L",
        start: 25,
        end: 96,
        value: 71,
        itemStyle: {
          color: "#187a2f",
        },
      },
      {
        date: "2021-05-01",
        type: "5月",
        name: "事件__O",
        start: 25,
        end: 58,
        value: 33,
        itemStyle: {
          color: "#0aa3b5",
        },
      },
      {
        date: "2021-05-02",
        type: "5月",
        name: "事件__P",
        start: 25,
        end: 68,
        value: 43,
        itemStyle: {
          color: "#0aa3b5",
        },
      },
      {
        date: "2021-05-03",
        type: "5月",
        name: "事件__Q",
        start: 25,
        end: 47,
        value: 22,
        itemStyle: {
          color: "#0aa3b5",
        },
      },
      {
        date: "2021-05-04",
        type: "5月",
        name: "事件__R",
        start: 25,
        end: 91,
        value: 66,
        itemStyle: {
          color: "#0aa3b5",
        },
      },
      {
        date: "2021-05-05",
        type: "5月",
        name: "事件__S",
        start: 25,
        end: 85,
        value: 60,
        itemStyle: {
          color: "#0aa3b5",
        },
      },
      {
        date: "2021-06-01",
        type: "6月",
        name: "事件__T",
        start: 25,
        end: 59,
        value: 34,
        itemStyle: {
          color: "#c94930",
        },
      },
      {
        date: "2021-06-02",
        type: "6月",
        name: "事件__U",
        start: 25,
        end: 62,
        value: 37,
        itemStyle: {
          color: "#c94930",
        },
      },
      {
        date: "2021-06-03",
        type: "6月",
        name: "事件__W",
        start: 25,
        end: 86,
        value: 61,
        itemStyle: {
          color: "#c94930",
        },
      },
      {
        date: "2021-06-04",
        type: "6月",
        name: "事件__Y",
        start: 25,
        end: 72,
        value: 47,
        itemStyle: {
          color: "#c94930",
        },
      },
    ];
    let refName = "add_chart";
    let dom;
    let sunburst_arr = [],
      sunburst_data = [];

    const dispose_data = function () {
      lodash.map(new_data, function (o) {
        sunburst_arr.push({
          type: o.type,
          itemStyle: o.itemStyle,
        });
      });

      lodash.map(sameDataArr22(sunburst_arr), function (i) {
        i.value = i.types.length;
        sunburst_data.push(i);
      });
      dom.setOption(addData.option, true);
    };

    const addData = reactive({
      option: {
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          top: 100,
        },
        angleAxis: {
          show: false,
          type: "category",
          data: lodash.uniq(lodash.map(new_data, "name")),
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            const id = params.dataIndex;
            return `${params.name}：${new_data[id].value}`;
          },
        },
        radiusAxis: {
          show: false,
        },
        polar: {},
        series: [
          {
            type: "sunburst",
            data: sunburst_data,
            radius: [0, "95%"],
            sort: undefined,
            nodeClick: false,
            emphasis: {
              focus: "ancestor",
            },
            levels: [
              {},
              {
                r0: "10%",
                r: "20%",
                itemStyle: {
                  borderWidth: 2,
                },
                label: {
                  rotate: "tangential",
                },
              },
            ],
          },
          {
            type: "bar",
            itemStyle: {
              color: "transparent",
            },
            data: lodash.map(new_data, "start"),
            coordinateSystem: "polar",
            stack: "Min Max",
            silent: true,
          },
          {
            type: "bar",
            data: new_data,
            coordinateSystem: "polar",
            name: "Range",
            stack: "Min Max",
          },
        ],
      },
    });

    const handlerMouseover = (e) => {
      if (e.seriesType === "sunburst") {
        handlerMounseout();
        lodash.map(
          lodash.filter(new_data, function (o) {
            return o.type !== e.name;
          }),
          function (d) {
            d.itemStyle.opacity = 0.5;
          }
        );
        dom.setOption(addData.option, true);
      }
    };

    const handlerMounseout = (e) => {
      lodash.map(new_data, function (a) {
        a.itemStyle.opacity = 1;
      });
      dom.setOption(addData.option, true);
    };

    const handlerClick = (e) => {
      // console.log(e);
    };

    onMounted(() => {
      dom = getCurrentInstance().refs[refName];
      dispose_data();
    });

    return {
      refName,
      ...toRefs(addData),
      handlerMouseover,
      handlerMounseout,
      handlerClick,
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
