import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ECharts from 'vue-echarts'
import { use } from "echarts/core";

// 手动引入 ECharts 各模块来减小打包体积
import {
    SVGRenderer
} from 'echarts/renderers'
import {
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
    GeoComponent,
} from 'echarts/components'

import "@/assets/styles/main.less"

use([
    SVGRenderer,
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
    GeoComponent,
])

const app = createApp(App)
app.use(store).use(router).mount("#app");

// 全局注册组件（也可以使用局部注册）
app.component('v-chart', ECharts)
