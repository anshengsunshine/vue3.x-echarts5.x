<template>
  <div id="c-slider">
    <div id="test1">
      <div class="slider">
        <div class="ruler" id="ruler" ref="refName_ruler">
          <div
            ref="refName_bar"
            class="bar startbar"
            @mousedown="startTouchstart"
            @mousemove="startTouchmove"
            @mouseup="startTouchup"
          ></div>
          <div
            ref="refName_endbar"
            class="bar endbar"
            @mousedown="endTouchstart"
            @mousemove="endTouchmove"
            @mouseup="endTouchup"
          ></div>
        </div>
        <div class="date clearfix">
          <div class="fl">{{ startStep }}</div>
          <div class="fr">{{ endStep }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { getCurrentInstance, nextTick, onMounted } from "@vue/runtime-core";
export default {
  name: "Slider_3.0",
  setup(props, context) {
    // console.log(context)
    const data = reactive({
      index: 0,
      endindex: 0,
      ruler: "", // 滑竿
      bar: "", // 左侧滑块
      endbar: "", // 右侧滑块
      startX: "", // 左侧滑块位置
      endX: "", // 右侧滑块位置
      step: "", // 滑竿在限定范围内可以分多少步
      intervalStart: 0,
      intervalEnd: 24,
      startStep: 0,
      endStep: 24,
      amountW: "", //  滑竿多长距离
    });
    let ruler, bar, endbar;
    let refName_ruler = "refName_ruler";
    let refName_bar = "refName_bar";
    let refName_endbar = "refName_endbar";

    onMounted(() => {
      console.log(getCurrentInstance());
      // ruler = getCurrentInstance().refs[refName_ruler];
      // endbar = getCurrentInstance().refs[refName_endbar];
      // bar = getCurrentInstance().refs[refName_bar];
      // nextTick(() => {
      initSlider();
      // });
    });

    const initSlider = () => {
      ruler = getCurrentInstance().refs[refName_ruler];
      endbar = getCurrentInstance().refs[refName_endbar];
      bar = getCurrentInstance().refs[refName_bar];
      data.amountW = ruler.clientWidth - bar.clientWidth;
      data.step = data.amountW / (data.intervalEnd - data.intervalStart);
    };

    const startTouchstart = (e) => {
      console.log("鼠标按下--", e);
      data.index = 1;
      data.startX = e.clientX; // 开始滑动时滑块的位置
    };

    const startTouchmove = (e) => {
      console.log("鼠标移动 ---", e);
      console.log("ruler.offsetLeft---startTouchmove---", ruler.offsetLeft);
      if (data.index === 1) {
        let slidedis = e.clientX - ruler.offsetLeft; // 滑动距离=当前滑块x距离-最开始滑块距离

        if (slidedis < 0 || slidedis > data.amountW) {
          return;
        }
        let ste = Math.round(slidedis / data.step);
        if (ste + data.intervalStart >= data.endStep) {
          return;
        }
        data.startStep = ste + data.intervalStart;
        bar.style.left = ste * data.step + "px";
      }
    };

    const startTouchup = (e) => {
      console.log("鼠标松开---", e);
      data.index = 0;
    };

    const endTouchstart = (e) => {
      data.endindex = 1;
      data.endX = e.clientX; //开始滑动时滑块的位置
    };

    const endTouchmove = (e) => {
      console.log("ruler.offsetLeft---endTouchmove----", ruler.offsetLeft);
      if (data.endindex === 1) {
        let slidedis = e.clientX - ruler.offsetLeft; //滑动距离=当前滑块x距离-最开始滑块距离

        if (slidedis < 0 || slidedis > data.amountW) {
          return;
        }
        let ste = Math.round(slidedis / data.step);

        // if (data.startStep >= ste + data.intervalStart) {
        //   return;
        // }
        data.endStep = ste + data.intervalStart;

        if (data.endStep == 24) {
          endbar.style.left = "";
          endbar.style.right = "0px";
        } else {
          endbar.style.left = ste * data.step + "px";
        }
      }
    };

    const endTouchup = (e) => {
      data.endindex = 0;
    };

    return {
      refName_ruler,
      refName_bar,
      refName_endbar,
      ...toRefs(data),
      initSlider,
      startTouchstart,
      startTouchmove,
      startTouchup,
      endTouchstart,
      endTouchmove,
      endTouchup,
    };
  },
};
</script>
<style lang="less">
#c-slider {
  .clearfix {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .slider {
    margin: auto;
    width: 80%;
    .date {
      color: #333;
      font-size: 0.7rem;
      margin-top: 1rem;
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
    }
    .ruler {
      background: #879bae;
      height: 1px;
      position: relative;
      margin-top: 75px;
      .bar {
        position: absolute;
        top: -0.5rem;
        height: 1rem;
        width: 1rem;
        border-radius: 100%;
        background: #d8d8d8;
        font-size: 0.3rem;
        line-height: 0.65rem;
        text-align: center;
        cursor: pointer;
      }
      .startbar {
        left: 0;
      }
      .endbar {
        right: 0;
        background: #879bae;
      }
    }
  }
}
</style>
