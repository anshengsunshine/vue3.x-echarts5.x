<template>
  <div class="home">
    <zj-map :ZJMapData="zjMap" @getCityNameData="getCityNameData" />
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";
import zjMap from "./child/zjMap";
import axios from "axios";
export default {
  name: "Home",
  components: {
    zjMap,
  },
  setup() {
    const aboutData = reactive({
      zjMap: [],
      zhejiangMap: [
        {
          father: "浙江省",
          name: "杭州市",
          industry: [
            {
              name: "A",
              value: 71,
            },
            {
              name: "B",
              value: 570,
            },
            {
              name: "C",
              value: 1266,
            },
            {
              name: "D",
              value: 1651,
            },
            {
              name: "E",
              value: 297,
            },
          ],
          supervise: 692,
          unqualified: 31,
          unqualRate: "4.48%",
        },
        {
          father: "浙江省",
          name: "宁波市",
          industry: [
            {
              name: "F",
              value: 928,
            },
            {
              name: "H",
              value: 881,
            },
            {
              name: "I",
              value: 38,
            },
            {
              name: "G",
              value: 92,
            },
          ],
          supervise: 692,
          unqualified: 31,
          unqualRate: "4.48%",
        },
        {
          father: "浙江省",
          name: "温州市",
          industry: [
            {
              name: "K",
              value: 1289,
            },
            {
              name: "O",
              value: 1193,
            },
            {
              name: "P",
              value: 49,
            },
            {
              name: "Q",
              value: 13,
            },
            {
              name: "W",
              value: 1206,
            },
            {
              name: "R",
              value: 1003,
            },
            {
              name: "T",
              value: 1075,
            },
            {
              name: "Y",
              value: 23,
            },
            {
              name: "U",
              value: 91,
            },
            {
              name: "V",
              value: 200,
            },
            {
              name: "S",
              value: 100,
            },
            {
              name: "J",
              value: 125,
            },
            {
              name: "k",
              value: 46,
            },
            {
              name: "l",
              value: 20,
            },
          ],
          supervise: 692,
          unqualified: 31,
          unqualRate: "4.48%",
        },
        {
          father: "浙江省",
          name: "湖州市",
          industry: [
            {
              name: "钢琴产业",
              value: 80,
            },
            {
              name: "椅业",
              value: 551,
            },
            {
              name: "木地板产业",
              value: 57,
            },
            {
              name: "蓄电池产业",
              value: 136,
            },
          ],
          supervise: 390,
          unqualified: 31,
          unqualRate: "7.95%",
        },
        {
          father: "浙江省",
          name: "嘉兴市",
          industry: [
            {
              name: "A",
              value: 792,
            },
            {
              name: "B",
              value: 218,
            },
            {
              name: "C",
              value: 166,
            },
            {
              name: "D",
              value: 3100,
            },
          ],
          supervise: 814,
          unqualified: 37,
          unqualRate: "4.55%",
        },
        {
          father: "浙江省",
          name: "绍兴市",
          industry: [
            {
              name: "F",
              value: 1337,
            },
            {
              name: "S",
              value: 306,
            },
            {
              name: "F",
              value: 198,
            },
          ],
          supervise: 1411,
          unqualified: 53,
          unqualRate: "3.76%",
        },
        {
          father: "浙江省",
          name: "金华市",
          industry: [
            {
              name: "T",
              value: 346,
            },
            {
              name: "G",
              value: 122,
            },
            {
              name: "J",
              value: 582,
            },
            {
              name: "M",
              value: 1306,
            },
          ],
          supervise: 1411,
          unqualified: 53,
          unqualRate: "3.76%",
        },
      ],
      hangzhouMap: [
        {
          father: "杭州市",
          name: "余杭区",
          industry: [
            {
              name: "B",
              value: 570,
            },
          ],
          supervise: 151,
          unqualified: 4,
          unqualRate: "2.65%",
        },
        {
          father: "杭州市",
          name: "桐庐县",
          industry: [
            {
              name: "C",
              value: 1266,
            },
          ],
          supervise: 51,
          unqualified: 0,
          unqualRate: "0.00%",
        },
        {
          father: "杭州市",
          name: "萧山区",
          industry: [
            {
              name: "D",
              value: 1651,
            },
          ],
          supervise: 156,
          unqualified: 9,
          unqualRate: "5.77%",
        },
        {
          father: "杭州市",
          name: "临安区",
          industry: [
            {
              name: "E",
              value: 297,
            },
          ],
          supervise: 102,
          unqualified: 8,
          unqualRate: "7.84%",
        },
      ],
      ningboMap: [
        {
          father: "宁波市",
          name: "慈溪市",
          industry: [
            {
              name: "H",
              value: 881,
            },
          ],
          supervise: 130,
          unqualified: 10,
          unqualRate: "7.69%",
        },
        {
          father: "宁波市",
          name: "鄞州区",
          industry: [
            {
              name: "I",
              value: 38,
            },
          ],
          supervise: 111,
          unqualified: 6,
          unqualRate: "5.41%",
        },
        {
          father: "宁波市",
          name: "宁海县",
          industry: [
            {
              name: "G",
              value: 92,
            },
          ],
          supervise: 21,
          unqualified: 2,
          unqualRate: "9.52%",
        },
      ],
      wenzhouMap: [
        {
          father: "温州市",
          name: "鹿城区",
          industry: [
            {
              name: "O",
              value: 1193,
            },
          ],
          supervise: 26,
          unqualified: 2,
          unqualRate: "7.69%",
        },
        {
          father: "温州市",
          name: "龙湾区",
          industry: [
            {
              name: "P",
              value: 49,
            },
          ],
          supervise: 55,
          unqualified: 2,
          unqualRate: "3.64%",
        },
        {
          father: "温州市",
          name: "瓯海区",
          industry: [
            {
              name: "Q",
              value: 13,
            },
          ],
          supervise: 42,
          unqualified: 7,
          unqualRate: "16.67%",
        },
        {
          father: "温州市",
          name: "乐清市",
          industry: [
            {
              name: "W",
              value: 1206,
            },
          ],
          supervise: 305,
          unqualified: 16,
          unqualRate: "5.25%",
        },
        {
          father: "温州市",
          name: "苍南县",
          industry: [
            {
              name: "R",
              value: 1003,
            },
            {
              name: "T",
              value: 1075,
            },
            {
              name: "Y",
              value: 23,
            },
            {
              name: "U",
              value: 91,
            },
            {
              name: "V",
              value: 200,
            },
            {
              name: "S",
              value: 100,
            },
            {
              name: "J",
              value: 125,
            },
            {
              name: "k",
              value: 46,
            },
            {
              name: "l",
              value: 20,
            },
          ],
          supervise: 38,
          unqualified: 2,
          unqualRate: "5.26%",
        },
      ],
      huzhouMap: [
        {
          father: "湖州市",
          name: "德清县",
          industry: [
            {
              name: "R",
              value: 80,
            },
          ],
          supervise: 65,
          unqualified: 6,
          unqualRate: "9.23%",
        },
        {
          father: "湖州市",
          name: "安吉县",
          industry: [
            {
              name: "A",
              value: 551,
            },
          ],
          supervise: 52,
          unqualified: 4,
          unqualRate: "7.69%",
        },
        {
          father: "湖州市",
          name: "南浔区",
          industry: [
            {
              name: "F",
              value: 57,
            },
          ],
          supervise: 86,
          unqualified: 1,
          unqualRate: "1.16%",
        },
        {
          father: "湖州市",
          name: "长兴县",
          industry: [
            {
              name: "H",
              value: 136,
            },
          ],
          supervise: 59,
          unqualified: 2,
          unqualRate: "3.39%",
        },
      ],
      jiaxingMap: [
        {
          father: "嘉兴市",
          name: "平湖市",
          industry: [
            {
              name: "U",
              value: 792,
            },
          ],
          supervise: 52,
          unqualified: 3,
          unqualRate: "5.77%",
        },
        {
          father: "嘉兴市",
          name: "嘉善县",
          industry: [
            {
              name: "D",
              value: 218,
            },
          ],
          supervise: 146,
          unqualified: 5,
          unqualRate: "3.42%",
        },
        {
          father: "嘉兴市",
          name: "秀洲区",
          industry: [
            {
              name: "V",
              value: 166,
            },
          ],
          supervise: 166,
          unqualified: 10,
          unqualRate: "6.02%",
        },
        {
          father: "嘉兴市",
          name: "桐乡市",
          industry: [
            {
              name: "B",
              value: 3100,
            },
          ],
          supervise: 116,
          unqualified: 2,
          unqualRate: "1.72%",
        },
      ],
      shaoxingMap: [
        {
          father: "绍兴市",
          name: "越城区",
          industry: [
            {
              name: "H",
              value: 1337,
            },
          ],
          supervise: 199,
          unqualified: 7,
          unqualRate: "3.52%",
        },
        {
          father: "绍兴市",
          name: "上虞区",
          industry: [
            {
              name: "D",
              value: 306,
            },
          ],
          supervise: 275,
          unqualified: 26,
          unqualRate: "9.45%",
        },
        {
          father: "绍兴市",
          name: "嵊州市",
          industry: [
            {
              name: "T",
              value: 198,
            },
          ],
          supervise: 217,
          unqualified: 10,
          unqualRate: "4.61%",
        },
      ],
      jinhuaMap: [
        {
          father: "绍兴市",
          name: "永康市",
          industry: [
            {
              name: "J",
              value: 346,
            },
          ],
          supervise: 83,
          unqualified: 18,
          unqualRate: "21.69%",
        },
        {
          father: "绍兴市",
          name: "金东区",
          industry: [
            {
              name: "K",
              value: 122,
            },
          ],
          supervise: 75,
          unqualified: 4,
          unqualRate: "5.33%",
        },
        {
          father: "绍兴市",
          name: "金东区",
          industry: [
            {
              name: "M",
              value: 582,
            },
          ],
          supervise: 62,
          unqualified: 2,
          unqualRate: "3.23%",
        },
        {
          father: "绍兴市",
          name: "义乌市",
          industry: [
            {
              name: "N",
              value: 1306,
            },
          ],
          supervise: 113,
          unqualified: 5,
          unqualRate: "4.42%",
        },
      ],
      cangnanMap: [
        {
          father: "苍南县",
          name: "宜山镇",
          industry: [
            {
              name: "R",
              value: 1003,
            },
            {
              name: "V",
              value: 200,
            },
          ],
        },
        {
          father: "苍南县",
          name: "钱库镇",
          industry: [
            {
              name: "T",
              value: 1075,
            },
            {
              name: "S",
              value: 100,
            },
            {
              name: "J",
              value: 125,
            },
          ],
        },
        {
          father: "苍南县",
          name: "金乡镇",
          industry: [
            {
              name: "Y",
              value: 23,
            },
          ],
        },
        {
          father: "苍南县",
          name: "灵溪镇",
          industry: [
            {
              name: "U",
              value: 91,
            },
            {
              name: "k",
              value: 46,
            },
            {
              name: "l",
              value: 20,
            },
          ],
        },
      ],
    });

    // 获取到点击的 - 城市对象
    const getCityNameData = (cityName) => {
      if (cityName.name === "浙江省") {
        aboutData.zjMap = aboutData.zhejiangMap;
      } else if (cityName.name === "杭州市") {
        aboutData.zjMap = aboutData.hangzhouMap;
      } else if (cityName.name === "宁波市") {
        aboutData.zjMap = aboutData.ningboMap;
      } else if (cityName.name === "温州市") {
        aboutData.zjMap = aboutData.wenzhouMap;
      } else if (cityName.name === "湖州市") {
        aboutData.zjMap = aboutData.huzhouMap;
      } else if (cityName.name === "嘉兴市") {
        aboutData.zjMap = aboutData.jiaxingMap;
      } else if (cityName.name === "绍兴市") {
        aboutData.zjMap = aboutData.shaoxingMap;
      } else if (cityName.name === "金华市") {
        aboutData.zjMap = aboutData.jinhuaMap;
      } else if (cityName.name === "苍南县") {
        aboutData.zjMap = aboutData.cangnanMap;
      }
    };

    onMounted(() => {
      getCityNameData({ name: "浙江省" });
    });

    return {
      ...toRefs(aboutData),
      getCityNameData,
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: #06114b;
  h1 {
    margin: 0;
    padding: 10px;
  }
  p{
    margin: 0;
    margin-bottom: 20px;
  }
}
</style>
