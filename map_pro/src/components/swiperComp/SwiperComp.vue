<template>
  <div class="home">
    <!-- swiper1 -->
    <div class="title">基本效果-小圆点和左右切换</div>
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.WfnKqxabp748krOp401MwwHaJ4?w=178&h=237&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.6I2MwPjNEoBqsO8_nUueDgHaLH?w=178&h=267&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.cFPOISDPisiGjtLYnBnJcAHaLH?w=178&h=267&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <div class="swiper-button-prev"></div>
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div>
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>

  <!-- swiper2 -->
  <!-- <div class="title">切换效果-effect</div>
  <div class="swiper-container swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="图片自己上" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="图片自己上" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="图片自己上" alt="" />
      </div>
    </div>
  </div> -->

  <!-- swiper3 -->
  <!-- <div class="title">切换效果-cube</div>
  <div class="swiper-container swiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="图片自己上" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="图片自己上" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="图片自己上" alt="" />
      </div>
    </div>
  </div> -->
</template>

<script>
import { defineComponent, onMounted } from "vue";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
} from "swiper";

// swiper-bundle.min.css 决定了小圆点和左右翻页标签，如果不需要可以不引用
import "swiper/swiper-bundle.min.css";

// swiper.less/sass/css 决定了基础的样式
import "swiper/swiper.less";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);

export default defineComponent({
  name: "SwiperComp",
  components: {},
  setup() {
    onMounted(() => {
      const ss = new Swiper(".swiper1", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        slidesPerView: 1.5,
        on: {
          navigationShow: function () {
            console.log("按钮显示了");
          },
        },
      });

      const ss1 = new Swiper(".swiper2", {
        // 循环
        loop: true,
        // 每张播放时长3秒，自动播放
        spaceBetween: 25,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.32,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      });

      const ss2 = new Swiper(".swiper3", {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
      });
    });
  },
});
</script>
