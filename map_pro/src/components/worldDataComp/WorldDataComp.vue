<template>
  <v-chart id="map" class="map_chart" autoresize :option="option" ref="map" />
</template>

<script>
import { init, use, registerMap } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { ToolboxComponent, TooltipComponent } from "echarts/components";
import { MapChart, ScatterChart, EffectScatterChart } from "echarts/charts";
import { ref } from "vue";
import world from "@/assets/mapJson/world.json";
registerMap("world", world);
use([
  CanvasRenderer,
  ToolboxComponent,
  MapChart,
  ScatterChart,
  EffectScatterChart,
  TooltipComponent,
]);

export default {
  name: "WorldDataComp",
  setup() {
    const mapOptions = () => {
      let colorList = [
        "#4ab2e5",
        "#4fb6d2",
        "#52b9c7",
        "#5abead",
        "#f34e2b",
        "#f56321",
        "#f56f1c",
        "#f58414",
        "#f58f0e",
        "#f5a305",
        "#e7ab0b",
        "#dfae10",
        "#d5b314",
        "#c1bb1f",
        "#b9be23",
        "#a6c62c",
        "#96cc34",
      ];
      var BJData = [
        {
          name: "尼日利亚",
          value: [7.32, 9.05, 9100],
        },
        {
          name: "美国洛杉矶",
          value: [-118.24311, 34.052713, 2370],
        },
        {
          name: "香港邦泰",
          value: [114.195466, 22.282751, 3130],
        },
        {
          name: "美国芝加哥",
          value: [-87.801833, 41.870975, 2350],
        },
        {
          name: "加纳库马西",
          value: [-4.62829, 7.72415, 5120],
        },
        {
          name: "英国曼彻斯特",
          value: [-1.657222, 51.886863, 3110],
        },
        {
          name: "德国汉堡",
          value: [10.01959, 54.38474, 6280],
        },
        {
          name: "哈萨克斯坦阿拉木图",
          value: [45.326912, 41.101891, 7255],
        },
        {
          name: "墨西哥",
          value: [-99.094092, 19.365711, 3590],
        },
        {
          name: "加拿大温哥华",
          value: [-123.023921, 49.311753, 3590],
        },
      ];
      let option = {
        backgroundColor: "rgb(2,30,52)",
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return (
                params.data.fromName +
                " -> " +
                params.data.toName +
                "<br />" +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },
        grid: {
          right: "8%",
          // top:'5%'
        },
        geo: {
          map: "world",
          aspectScale: 0.75, //长宽比
          zoom: 1.05,
          tooltip: {
            show: !1,
          },
          // scaleLimit: {
          //     min: 1,
          //     max: 5,
          // },
          label: {
            show: !1,
          },
          // roam: false,
          itemStyle: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#09132c", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#274d68", // 100% 处的颜色
                },
              ],
              globalCoord: true, // 缺省为 false
            },
            // shadowColor: 'rgb(58,115,192)',
            // shadowOffsetX: 10,
            // shadowOffsetY: 11
          },
          emphasis: {
            itemStyle: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "#fff",
              label: {
                show: false,
              },
            },
          },
        },
        tooltip: {
          trigger: "item",
        },
        zlevel: 999,
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 15, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              show: false,
              position: "right", //显示位置
              offset: [5, 0], //偏移设置
              formatter: "{b}", //圆环显示文字
              color: "rgb(214,206,143)",
            },
            emphasis: {
              show: true,
              scale: !0,
              label: {
                show: true,
                backgroundColor: "#000",
                padding: 2,
                borderRadius: 2,
                color: "#fff",
              },
            },
            symbol: "circle",
            symbolSize: function (val) {
              return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
              show: false,
              color: function (item, index) {
                let color =
                  colorList[item.dataIndex] ||
                  "#" +
                    (
                      "00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)
                    ).slice(-6);
                return color;
              },
            },
            data: BJData,
          },
        ],
      };
      console.log(JSON.stringify(option));
      return option;
    };

    const option = mapOptions();

    return {
      option,
      mapOptions,
    };
  },
};
</script>
<style scoped>
.map_chart {
  margin: 0 auto;
  width: 800px;
  height: 500px;
  border: 1px solid #333;
}
</style>
