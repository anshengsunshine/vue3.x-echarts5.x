<template>
  <div class="map_wrap">
    <span class="to_back" v-show="isShowBack" @click="onBack()"> 返回上级 </span>
    <v-chart
      id="map"
      class="map_chart"
      autoresize
      :option="mapZJOption"
      ref="map"
      @click="onClick"
    />
  </div>
</template>

<script>
import { init, use, registerMap } from "echarts/core";
import { MapChart, EffectScatterChart } from "echarts/charts";
import VChart from "vue-echarts";
import { onMounted, reactive, ref, toRefs, onBeforeUnmount, watch, emits } from "vue";
import cityMap from "@/assets/js/zhejiang-main-city-map.js";
import zj from "../../../public/mapJson/330000.json";
import axios from "axios";
registerMap("zj", zj);
use([MapChart, EffectScatterChart]);

export default {
  name: "zjMap",
  components: {
    VChart,
  },
  emits: ["getCityNameData"],
  props: {
    ZJMapData: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    watch(
      () => props.ZJMapData,
      (val) => {},
      {
        deep: true,
      }
    );
    const mapData = reactive({
      isShowBack: false, //是否显示返回按钮
      ZJId: null, //城市ID
      ZJName: "浙江省",
      mapJson: null, //存放每一次省市变化的地图数据
      mapZJOption: {}, //浙江省地图的配置
      count: 0,
      timeTicket: null,
      mapDom: null,
      // dataLength: 0,
    });

    // geoJSON绘制浙江省地图
    const mapChart = () => {
      let numId = Number(cityMap[mapData.ZJName]);
      if (numId.toString().slice(-2) == "00") {
        mapData.ZJId = 330000;
      } else {
        mapData.ZJId = Number("33" + numId.toString().slice(2, 4) + "00");
      }
      mapData.count = 0;
      stopActions();
      axios.get("/mapJson/" + mapData.ZJId + ".json").then((res) => {
        mapData.mapJson = res.data;
        registerAndsetOption(mapData.ZJId, mapData.ZJName, mapData.mapJson);
      });
    };

    /**
     *
     * @param {*} id        省市县Id
     * @param {*} name      省市县名称
     * @param {*} mapJson   地图Json数据
     */
    const registerAndsetOption = (id, name, mapJson) => {
      registerMap(name, mapJson);
      mapData.mapZJOption = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "item",
          backgroundColor: "rgb(71,166,248,0.8)",
          borderWidth: 1,
          borderColor: "#a2b9e5",
          padding: 10,
          confine: true,
          textStyle: {
            color: "#fff",
            fontSize: 16,
          },
          formatter: function (params) {
            if (params.data === undefined) {
              return `${params.name}`;
            } else {
              let str = "",
                str2 = "";
              for (let i = 0; i < params.data.industry.length; i++) {
                str += `<p style="text-indent: 2em;">${params.data.industry[i].name}：${params.data.industry[i].value}</p>`;
              }
              if (params.data.supervise) {
                str2 = `<p>数据</p><p style="text-indent: 2em;">：${params.data.supervise}</p><p style="text-indent: 2em;">数据：${params.data.unqualified}</p><p style="text-indent: 2em;">率：${params.data.unqualRate}</p>`;
              }
              return `<div style="text-align:left;"><h1>${params.data.name}</h1><p>数据</p>${str}${str2}</div>`;
            }
          },
        },
        //配置属性
        series: [
          {
            name: "浙江-地图",
            type: "map",
            map: name,
            zlevel: 2,
            roam: false,
            data: props.ZJMapData,
            silent: false,
            selectedMode: "single",
            itemStyle: {
              areaColor: "#0f89d9",
              borderColor: "rgba(255,255,255,0.2)",
              borderWidth: 1,
            },
            label: {
              fontSize: 20,
              color: "#fff",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                color: "#fff",
              },
              itemStyle: {
                areaColor: "rgba(7, 103, 218)",
              },
            },
          },
        ],
      };
      mapData.mapDom = init(document.getElementById("map"));
      // console.log(mapData.mapDom)
      // console.log(mapData.mapZJOption)
      mapData.dataLength = mapData.mapZJOption.series[0].data.length;
      startActions();
    };

    const onClick = (event) => {
      let cityId = cityMap[event.name];
      mapData.mapDom.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: event.dataIndex,
        color: "#0f89d9",
      });
      if (cityId) {
        mapData.isShowBack = true;
        //代表有下级地图
        mapData.ZJId = Number(cityId);
        mapData.ZJName = event.name;
        emit("getCityNameData", event);
        axios.get("/mapJson/" + mapData.ZJId + ".json").then((res) => {
          mapData.count = 0;
          stopActions();
          mapData.mapJson = res.data;
          registerAndsetOption(mapData.ZJId, mapData.ZJName, mapData.mapJson);
        });
      } else {
        alert("没有下一级");
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
        mapData.count = 0;
        stopActions();
        mapData.mapJson = res.data;
        registerAndsetOption(mapData.ZJId, mapData.ZJName, mapData.mapJson);
      });
    };

    // 开始轮播 - 定义定时器
    const startActions = () => {
      // mapData.mapDom = init(document.getElementById("map"));
      const dataLength = mapData.mapZJOption.series[0].data.length;
      mapData.timeTicket = null;
      mapData.timeTicket && clearInterval(mapData.timeTicket);
      mapData.timeTicket = setInterval(function () {
        // console.log("lunbo--定时器", mapData.count);
        setTimeData(mapData.mapDom, mapData.count % dataLength);
        mapData.count++;
      }, 3000);

      mapData.mapDom.on("click", { seriesIndex: 0 }, function (evnet) {
        event.target.style.fill = "#0f89d9";
        // mapDom.dispatchAction({
        //     type: 'downplay',
        //     seriesIndex: 0,
        //     dataIndex: evnet.dataIndex
        // });
      });

      // 鼠标悬浮
      mapData.mapDom.on("mouseover", { seriesIndex: 0 }, function (event) {
        // console.log("mouseover----",event)
        clearInterval(mapData.timeTicket);
        setTimeData(mapData.mapDom, event.dataIndex);
      });

      // 鼠标离开
      mapData.mapDom.on("mouseout", { seriesIndex: 0 }, function (params) {
        mapData.timeTicket && clearInterval(mapData.timeTicket);
        mapData.timeTicket = setInterval(function () {
          setTimeData(mapData.mapDom, mapData.count % dataLength);
          mapData.count++;
        }, 1000);
      });
    };

    // 停止轮播 - 清空定时器
    const stopActions = () => {
      clearInterval(mapData.timeTicket);
    };

    // 赋值定时器轮播
    const setTimeData = (domChart, dataIndex) => {
      domChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
      });
      domChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: dataIndex,
      });
      domChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: dataIndex,
      });
    };

    // 离开页面销毁定时器
    onBeforeUnmount(() => {
      stopActions();
    });

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

<style lang="less">
.map_wrap {
  position: relative;
  .map_chart {
    margin: 0 auto;
    width: 1200px;
    height: 1200px;
  }
  .to_back {
    position: absolute;
    top: 200;
    left: 50;
    padding: 3px 5px;
    text-align: left;
    z-index: 999;
    cursor: pointer;
    border: 1px solid #ccc;
  }
}
</style>
