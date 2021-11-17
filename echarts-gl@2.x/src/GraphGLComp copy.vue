<template>
  <v-chart id="main" class="chart" :option="options" />
</template>

<script>
import { use } from "echarts";
import { GraphGLChart } from "echarts-gl/charts";
import { Grid3DComponent } from "echarts-gl/components";
use([GraphGLChart, Grid3DComponent]);
import VChart from "vue-echarts";
var json = {
  nodes: [
    {
      category: 0,
      name: "知微数据",
      label: "知微\n（主要）",
      x: 30,
      y: 400,
      value: 7,
      symbolSize: 70,
    },
    {
      category: 1,
      name: "舆情发现",
      value: 6,
      x: -500,
      y: 400,
      symbolSize: 60,
    },
    {
      category: 1,
      name: "舆情挖掘",
      value: 6,
      x: 400,
      y: 550,
      symbolSize: 60,
    },
    {
      category: 1,
      name: "舆情智库",
      value: 6,
      x: 1000,
      y: 200,
      symbolSize: 60,
    },
    {
      category: 1,
      name: "其他",
      value: 6,
      x: 50,
      y: 900,
      symbolSize: 60,
    },
    {
      category: 2,
      name: "实时监测",
      value: 1,
      x: -1240,
      y: 40,
      symbolSize: 40,
    },
    {
      category: 2,
      name: "热点发现",
      value: 1,
      x: -1440,
      y: 200,
      symbolSize: 10,
    },
    {
      category: 2,
      name: "危机预警",
      value: 1,
      x: -1200,
      y: 850,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "敏感信息追根溯源",
      value: 1,
      x: -800,
      y: 700,
      symbolSize: 40,
    },
    {
      category: 2,
      name: "传播路径概览",
      value: 1,
      x: -1400,
      y: 400,
      symbolSize: 30,
    },
    {
      category: 4,
      name: "危机事件分析",
      value: 5,
      x: 720,
      y: 650,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "传播效果评估",
      value: 1,
      x: 1200,
      y: 1000,
      symbolSize: 20,
    },
    {
      category: 2,
      name: "企业高层声誉分析",
      value: 1,
      x: 650,
      y: 10,
      symbolSize: 20,
    },
    {
      category: 2,
      name: "品牌声誉分析",
      value: 1,
      x: -300,
      y: 90,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "产品口碑分析",
      value: 1,
      x: 900,
      y: 410,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "行业/竞品分析",
      value: 1,
      x: 500,
      y: 900,
      symbolSize: 40,
    },
    {
      category: 2,
      name: "品牌重大事件图谱",
      value: 1,
      x: 1200,
      y: 600,
      symbolSize: 10,
    },
    {
      category: 2,
      name: "事件影响力评价",
      value: 1,
      x: 1300,
      y: 30,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "危机公关案例",
      value: 1,
      x: 200,
      y: 20,
      symbolSize: 20,
    },
    {
      category: 2,
      name: "媒体渠道管理",
      value: 1,
      x: 1000,
      y: 700,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "水军识别与分析",
      value: 5,
      x: 1300,
      y: 270,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "人工智能技术",
      value: 1,
      x: -490,
      y: 950,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "自然语言处理",
      value: 1,
      x: -900,
      y: 450,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "决策树",
      value: 1,
      x: -620,
      y: 100,
      symbolSize: 30,
    },
    {
      category: 2,
      name: "数据可视化",
      value: 1,
      x: 400,
      y: 200,
      symbolSize: 30,
    },
  ],
  edges: [
    {
      source: "舆情发现",
      target: "知微数据",
      value: 1,
    },
    {
      source: "舆情挖掘",
      target: "知微数据",
      value: 1,
    },
    {
      source: "舆情智库",
      target: "知微数据",
      value: 1,
    },
    {
      source: "其他",
      target: "知微数据",
      value: 1,
    },
    {
      source: "实时监测",
      target: "舆情发现",
      value: 1,
    },
    {
      source: "热点发现",
      target: "舆情发现",
      value: 1,
    },
    {
      source: "危机预警",
      target: "舆情发现",
      value: 1,
    },
    {
      source: "敏感信息追根溯源",
      target: "舆情发现",
      value: 1,
    },
    {
      source: "传播路径概览",
      target: "舆情发现",
      value: 1,
    },
    {
      source: "危机事件分析",
      target: "舆情挖掘",
      value: 1,
    },
    {
      source: "传播效果评估",
      target: "舆情挖掘",
      value: 1,
    },
    {
      source: "企业高层声誉分析",
      target: "舆情挖掘",
      value: 1,
    },
    {
      source: "品牌声誉分析",
      target: "舆情挖掘",
      value: 1,
    },
    {
      source: "产品口碑分析",
      target: "舆情挖掘",
      value: 1,
    },
    {
      source: "行业/竞品分析",
      target: "舆情挖掘",
      value: 1,
    },
    {
      source: "品牌重大事件图谱",
      target: "舆情智库",
      value: 1,
    },
    {
      source: "事件影响力评价",
      target: "舆情智库",
      value: 1,
    },
    {
      source: "危机公关案例",
      target: "舆情智库",
      value: 1,
    },
    {
      source: "媒体渠道管理",
      target: "舆情智库",
      value: 1,
    },
    {
      source: "水军识别与分析",
      target: "舆情智库",
      value: 1,
    },
    {
      source: "人工智能技术",
      target: "其他",
      value: 1,
    },
    {
      source: "自然语言处理",
      target: "其他",
      value: 1,
    },
    {
      source: "决策树",
      target: "其他",
      value: 1,
    },
    {
      source: "数据可视化",
      target: "其他",
      value: 1,
    },
  ],
};
export default {
  name: "GraphGLComp",
  components: {
    VChart,
  },
  setup() {
    return {
      options: {
        backgroundColor: "#000",
        color: ["#01c1fe", "#01c1fe", "#01c1fe", "#01c1fe"],
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graphGL",
            layout: "none",
            nodeScaleRatio: 0,
            cursor: "default",
            // layout: 'force',
            data: json.nodes.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.name,
                symbol: node.symbol,
                cursor: ["舆情发现", "舆情挖掘", "舆情智库"].includes(node.name)
                  ? "pointer"
                  : "default",
                //    symbol:'path://M250 150 L150 350 L350 350 Z',//node.symbol
                //此处引用svg动图
                //  symbol: "image://img/car-lite_animated.svg",

                symbolSize: node.symbolSize,
                itemStyle: {
                  color: node.color,
                },
                label: {
                  fontSize: node.category < 2 ? 18 : 12,
                  color: node.category < 2 ? "#37f0fd" : "#8b95a0",
                },
              };
            }),
            edges: json.edges.map(function (edge) {
              return {
                source: edge.source,
                target: edge.target,
              };
            }),
            itemStyle: {
              //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
              color: function (params) {
                var colorList = ["#01c1fe", "#01c1fe", "#01c1fe", "#01c1fe", "#01c1fe"];
                return colorList[params.dataIndex];
              },
            },
            label: {
              //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
              position: "right",
              formatter: "{b}",
              show: true,
              textStyle: {
                color: "#8b95a0",
              },
            },
            emphasis: {
              // 高亮下
              label: {
                show: false,
                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
              },

              lineStyle: {
                width: 2,
                opacity: 1,
              },
            },
            roam: false,
            focusNodeAdjacency: true,
            force: {
              edgeLength: [200, 400], //线的长度，这个距离也会受 repulsion，支持设置成数组表达边长的范围
              repulsion: 200,
            },
            lineStyle: {
              show: true,
              color: "#01c1fe",
              //            opacity: 0,
              //					color: 'target', //决定边的颜色是与起点相同还是与终点相同
              curveness: 0.3, //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
              //        	注释掉可隐藏连线
              width: 0.5,
              opacity: 0.3,
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
