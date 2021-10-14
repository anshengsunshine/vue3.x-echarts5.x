<template>
  <a class="to_Back" v-show="isShowBack" @click="onBack()">
    <span>返回上级</span>
  </a>
  <v-chart
    id="map"
    class="map_chart"
    autoresize
    :option="mapZJOption"
    ref="map"
    @click="onClick"
  />
</template>

<script>
import { init, use, registerMap } from "echarts/core";
import { MapChart, EffectScatterChart } from "echarts/charts";
import VChart from "vue-echarts";
import { onMounted, reactive, ref, toRefs, onBeforeUnmount, watch, emits } from "vue";
import cityMap from "@/assets/js/zhejiang-main-city-map.js";
import axios from "axios";
use([MapChart, EffectScatterChart]);

export default {
  name: "ZJMapComp",
  components: {
    VChart,
  },
  emits: ["getCityNameData"],
  setup(props, { emit }) {
    const mapData = reactive({
      isShowBack: false, //是否显示返回按钮
      ZJId: null, //城市ID
      ZJName: "浙江省",
      mapJson: null, //存放每一次省市变化的地图数据
      mapZJOption: {}, //浙江省地图的配置
    });

    // geoJSON 绘制 地图
    const mapChart = () => {
      let numId = Number(cityMap[mapData.ZJName]); // 在cityMap 中找到 该城市 对应的 地区ID
      if (numId.toString().slice(-2) == "00") {
        // 对 地区ID 做处理
        mapData.ZJId = 330000; // 浙江省 地图
      } else {
        mapData.ZJId = Number("33" + numId.toString().slice(2, 4) + "00"); // 浙江省 的 市级 地图
      }
      axios.get("/mapJson/" + mapData.ZJId + ".json").then((res) => {
        // axios get方法请求地图包数据
        mapData.mapJson = res.data;
        registerAndsetOption(mapData.ZJName, mapData.mapJson); // 传给registerAndsetOption ，进行 地图属性配置
      });
    };

    /**
     *
     * @param {*} name      省市县名称
     * @param {*} mapJson   地图Json数据
     */
    const registerAndsetOption = (name, mapJson) => {
      registerMap(name, mapJson); // 根据传来的地区名称和 地图包数据，重新注册 更新地图
      mapData.mapZJOption = {
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
        },
        //配置属性
        series: [
          {
            name: "浙江-地图",
            type: "map",
            map: name, // 动态赋值 地图名称
            zlevel: 2,
            roam: false,
            silent: false,
            selectedMode: "single",
            itemStyle: {
              // 地图无交互状态下 属性
              areaColor: "#0f89d9",
              borderColor: "rgba(255,255,255,0.2)",
              borderWidth: 1,
            },
            label: {
              // 地图文本
              show: true,
              fontSize: 20,
              color: "#fff",
            },
            emphasis: {
              // 地图 鼠标滑过 属性
              label: {
                show: true,
                fontSize: 20,
                color: "#fff",
              },
              itemStyle: {
                areaColor: "rgba(7, 103, 218)",
              },
            },
            select: {
              // 地图 鼠标点击选中 属性，
              label: {
                show: true,
                fontSize: 20,
                color: "#fff",
              },
              itemStyle: {
                areaColor: "#0f89d9",
              },
            },
          },
        ],
      };
    };

    const onClick = (event) => {
      // console.log(event);
      let cityId = cityMap[event.name];
      if (cityId) {
        mapData.isShowBack = true;
        //代表有下级地图
        mapData.ZJId = Number(cityId);
        mapData.ZJName = event.name;
        emit("getCityNameData", event);
        axios.get("/mapJson/" + mapData.ZJId + ".json").then((res) => {
          mapData.mapJson = res.data;
          registerAndsetOption(mapData.ZJName, mapData.mapJson);
        });
      } else {
        console.log("没有下一级");
      }
    };

    //点击返回按钮--》返回上层
    const onBack = () => {
      if (mapData.ZJId.toString().slice(-2) == "00") {
        mapData.isShowBack = false;
      } else {
        mapData.isShowBack = true;
      }
      if (mapData.ZJId.toString().slice(-2) == "00") {
        mapData.ZJId = 330000;
      } else {
        mapData.ZJId = Number("33" + mapData.ZJId.toString().slice(2, 4) + "00");
      }
      for (let key in cityMap) {
        if (cityMap[key] == mapData.ZJId) {
          mapData.ZJName = key;
        }
      }
      emit("getCityNameData", { name: mapData.ZJName });
      axios.get("/mapJson/" + mapData.ZJId + ".json").then((res) => {
        mapData.mapJson = res.data;
        registerAndsetOption(mapData.ZJName, mapData.mapJson);
      });
    };

    onMounted(() => {
      mapChart();
    });

    return {
      ...toRefs(mapData),
      mapChart,
      registerAndsetOption,
      onClick,
      onBack,
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
.to_Back {
  line-height: 1.5;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
.to_Back:hover {
  color: #0f89d9;
}
</style>
