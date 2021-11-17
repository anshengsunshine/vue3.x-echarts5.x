import WorldDataComp from "@/components/worldDataComp/index";
import WorldMapComp from "@/components/worldMapComp/index";
import WorldMapTwoComp from "@/components/worldMapTwoComp/index";
import ChinaMapComp from "@/components/chinaMapComp/index";
import ChinaMapTimeline from "@/components/chinaMapTimeline/index";
import ChinaMapBarComp from "@/components/chinaMapBarComp/index";
import AfricaMapComp from "@/components/africaMapComp/index";
import AfricaMapBarComp from "@/components/africaMapBarComp/index";
import ZJMapComp from "@/components/zjMapComp/index";
import SwiperComp from "@/components/swiperComp/index";

export default function (Vue) {
    Vue.use(WorldDataComp)
    Vue.use(WorldMapComp)
    Vue.use(WorldMapTwoComp)
    Vue.use(ChinaMapComp)
    Vue.use(ChinaMapTimeline)
    Vue.use(ChinaMapBarComp)
    Vue.use(AfricaMapComp)
    Vue.use(AfricaMapBarComp)
    Vue.use(ZJMapComp)
    Vue.use(SwiperComp)
}