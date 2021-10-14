<template>
  <div class="home">
    <v-chart class="chart" autoresize :option="option" ref="map" />
  </div>
</template>
<script>
import { reactive, toRefs } from "vue-demi";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { SunburstChart } from "echarts/charts";
use([CanvasRenderer, SunburstChart]);

export default {
  name: "Home",
  setup() {
    var data = [
      {
        name: "1月",
        itemStyle: {
          color: "#da0d68",
        },
        children: [
          {
            name: "Black Tea",
            value: 1,
            itemStyle: {
              color: "#975e6d",
            },
          },
          {
            name: "Floral",
            value: 1,
            itemStyle: {
              color: "#e0719c",
            },
          },
        ],
      },
      {
        name: "2月",
        itemStyle: {
          color: "#da1d23",
        },
        children: [
          {
            name: "Berry",
            value: 1,
            itemStyle: {
              color: "#dd4c51",
            },
          },
          {
            name: "Dried Fruit",
            value: 1,
            itemStyle: {
              color: "#c94a44",
            },
          },
          {
            name: "Other Fruit",
            value: 1,
            itemStyle: {
              color: "#dd4c51",
            },
          },
          {
            name: "Citrus Fruit",
            value: 1,
            itemStyle: {
              color: "#f7a128",
            },
          },
          {
            name: "Citrus Fruit",
            value: 1,
            itemStyle: {
              color: "#f7a128",
            },
          },
          {
            name: "Citrus Fruit",
            value: 1,
            itemStyle: {
              color: "#f7a128",
            },
          },
          {
            name: "Citrus Fruit",
            value: 1,
            itemStyle: {
              color: "#f7a128",
            },
          },
          {
            name: "Citrus Fruit",
            value: 1,
            itemStyle: {
              color: "#f7a128",
            },
          },
          {
            name: "Citrus Fruit",
            value: 1,
            itemStyle: {
              color: "#f7a128",
            },
          },
        ],
      },
      {
        name: "3月",
        itemStyle: {
          color: "#ebb40f",
        },
        children: [
          {
            name: "Sour",
            value: 1,
            itemStyle: {
              color: "#e1c315",
            },
          },
          {
            name: "Alcohol/\nFremented",
            value: 1,
            itemStyle: {
              color: "#b09733",
            },
          },
        ],
      },
      {
        name: "4月",
        itemStyle: {
          color: "#187a2f",
        },
        children: [
          {
            name: "Olive Oil",
            value: 1,
            itemStyle: {
              color: "#a2b029",
            },
          },
          {
            name: "Raw",
            value: 1,
            itemStyle: {
              color: "#718933",
            },
          },
          {
            name: "Green/\nVegetative",
            value: 1,
            itemStyle: {
              color: "#3aa255",
            },
          },
          {
            name: "Beany",
            value: 1,
            itemStyle: {
              color: "#5e9a80",
            },
          },
        ],
      },
      {
        name: "5月",
        itemStyle: {
          color: "#0aa3b5",
        },
        children: [
          {
            name: "Papery/Musty",
            value: 1,
            itemStyle: {
              color: "#9db2b7",
            },
          },
          {
            name: "Chemical",
            value: 1,
            itemStyle: {
              color: "#76c0cb",
            },
          },
        ],
      },
      {
        name: "6月",
        itemStyle: {
          color: "#c94930",
        },
        children: [
          {
            name: "Pipe Tobacco",
            value: 1,
            itemStyle: {
              color: "#caa465",
            },
          },
          {
            name: "Tobacco",
            value: 1,
            itemStyle: {
              color: "#dfbd7e",
            },
          },
          {
            name: "Burnt",
            value: 1,
            itemStyle: {
              color: "#be8663",
            },
          },
          {
            name: "Cereal",
            value: 1,
            itemStyle: {
              color: "#ddaf61",
            },
          },
        ],
      },
      {
        name: "7月",
        itemStyle: {
          color: "#ad213e",
        },
        children: [
          {
            name: "Pungent",
            value: 1,
            itemStyle: {
              color: "#794752",
            },
          },
          {
            name: "Pepper",
            value: 1,
            itemStyle: {
              color: "#cc3d41",
            },
          },
          {
            name: "Brown Spice",
            value: 1,
            itemStyle: {
              color: "#b14d57",
            },
          },
        ],
      },
      {
        name: "8月",
        itemStyle: {
          color: "#a87b64",
        },
        children: [
          {
            name: "Nutty",
            value: 1,
            itemStyle: {
              color: "#c78869",
            },
          },
          {
            name: "Cocoa",
            value: 1,
            itemStyle: {
              color: "#bb764c",
            },
          },
        ],
      },
      {
        name: "9月",
        itemStyle: {
          color: "#e65832",
        },
        children: [
          {
            name: "Brown Sugar",
            value: 1,
            itemStyle: {
              color: "#d45a59",
            },
          },
          {
            name: "Vanilla",
            value: 1,
            itemStyle: {
              color: "#f89a80",
            },
          },
          {
            name: "Vanillin",
            value: 1,
            itemStyle: {
              color: "#f37674",
            },
          },
          {
            name: "Overall Sweet",
            value: 1,
            itemStyle: {
              color: "#e75b68",
            },
          },
          {
            name: "Sweet Aromatics",
            value: 1,
            itemStyle: {
              color: "#d0545f",
            },
          },
        ],
      },
    ];
    const homeData = reactive({
      option: {
        backgroundColor:"rgba(255,255,255,0)",
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        series: {
          type: "sunburst",
          data: data,
          radius: [0, "95%"],
          sort: undefined,
          emphasis: {
            focus: "ancestor",
          },
          levels: [
            {},
            {
              r0: "15%",
              r: "35%",
              itemStyle: {
                borderWidth: 2,
              },
              label: {
                rotate: "tangential",
              },
            },
            {
              r0: "35%",
              r: "70%",
              label: {
                align: "right",
              },
            },
            {
              r0: "70%",
              r: "72%",
              label: {
                position: "outside",
                padding: 3,
                silent: false,
              },
              itemStyle: {
                borderWidth: 3,
              },
            },
          ],
        },
      },
    });

    return {
      ...toRefs(homeData),
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
