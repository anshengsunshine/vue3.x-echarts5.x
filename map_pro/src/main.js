import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataComponent from "./components";
import "ant-design-vue/dist/antd.css";
import { Slider } from 'ant-design-vue';


import ECharts from 'vue-echarts'

const app = createApp(App)
app.use(store).use(router).use(dataComponent).use(Slider).mount("#app");

// 全局注册组件（也可以使用局部注册）
app.component('v-chart', ECharts)

