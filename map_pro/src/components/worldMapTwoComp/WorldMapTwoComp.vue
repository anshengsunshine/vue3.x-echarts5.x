<template>
  <button @click="handlerZH">中文</button>
  <button @click="handlerEN">英文</button>
  <v-chart
    id="world_map"
    class="map_chart"
    autoresize
    :option="option"
    ref="map"
    @click="handlerCountry"
  />
</template>

<script>
import axios from "axios";
import lodash from "lodash";
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
import world from "@/assets/mapJson/world.json";
// 绘制地图
registerMap("world", world);
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
  name: "WorldMapTwoComp",
  setup(props) {
    const world_map_reac = reactive({
      zhData: [],
      enData: [],
      geoNameMap: {},
    });
    // 地图的 option 配置
    const option = ref({
      geo: {
        show: true,
        map: "world",
        roam: true,
        zoom: 1,
        center: [113.83531246, 34.0267395887],
        label: {
          show: true,
        },
        nameMap: world_map_reac.geoNameMap,
        emphasis: {
          // label: {
          //   show: false,
          // },
          itemStyle: {
            areaColor: "#389BB7",
            borderWidth: 0,
          },
        },
      },
    });

    const getJson = () => {
      axios.get("world.json").then((res) => {
        console.log(res);
        let zhArr = [],
          enArr = [];
        res.data.features.map((item) => {
          zhArr.push(["name", item.properties.name]);
          enArr.push(["name", item.properties.name_en]);
        });
        world_map_reac.zhData = zhArr;
        world_map_reac.enData = enArr;
      });
    };

    // 中文
    const handlerZH = () => {
      world_map_reac.geoNameMap = [];
      world_map_reac.geoNameMap = lodash.fromPairs(world_map_reac.zhData);
      console.log(world_map_reac.geoNameMap);
    };

    // 英文
    const handlerEN = () => {
      world_map_reac.geoNameMap = [];
      world_map_reac.geoNameMap = lodash.fromPairs(world_map_reac.enData);
       console.log(world_map_reac.geoNameMap);
    };

    const handlerCountry = (event, instance, echarts) => {
      console.log(event, instance, echarts);
    };

    onMounted(() => {
      getJson();
    });

    return {
      ...toRefs(world_map_reac),
      option,
      handlerCountry,
      handlerZH,
      handlerEN,
      getJson,
    };
  },
};
</script>

<style>
.map_chart {
  margin: 0 auto;
  width: 800px;
  height: 800px;
  border: 1px solid #333;
}
</style>
