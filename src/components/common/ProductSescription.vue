<template>
    <div class="phonebg">
        <div class="header">
            <p class="titleCN">产品展示</p>
            <p class="titleEN">Product display</p>
        </div>
        <div class="ball1"></div>
        <div class="ball2"></div>
        <div class="ball3"></div>
        <div class="leftPhone">
            <img class="phongImg" src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/iphone.png" alt="phone">
            <swiper class="swiper" ref="myPhoneSwiper" :options="swiperOption" >
                <swiper-slide v-for="(num ,index ) in phoneImgarrs" :key="index">
                    <img class="bgImg" :src="num.slideSrc">
                </swiper-slide>
            </swiper>
        </div>
        <div class="rightText">
            <p class="tiltleText">享七</p>
            <p class="firstRow">进入线上美味极致空间</p>
            <p class="secondRow">开启味蕾新生活</p>
        </div>
        <div class="footer" style="zIndex:10000;">
            <p class="salesVolume">享七，今日订单成交量已达到4896单</p>
        </div>
        <vue-particles class="footer" color="#dedede" style="backgroundColor:#fc5e2d;"></vue-particles>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { debug } from "util";
export default {
  data() {
    return {
      phoneImgarrs: [
        { slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/01.png"},
        { slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/02.png" },
        { slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/03.png" },
        { slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/04.png"},
        { slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/05.png"},
        { slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/06.png" }
      ],
      swiperOption: {
        autoplay: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.myPhoneSwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
.phonebg {
  box-sizing: border-box;
  padding-top: 77px;
  position: absolute;
  height: calc(100vh - 1px);
  width:100% ;
  .header {
    height: 70px;
    color: #ffffff;
    position: relative;
    z-index: 2000;
    .titleCN {
      height: 40px;
      line-height: 40px;
      font-size: 40px;
    }
    .titleEN {
      margin-top: 10px;
      line-height: 20px;
      height: 20px;
      font-size: 20px;
      word-spacing: 20px;
    }
  }
  .ball1 {
    position: absolute;
    width: 205px;
    height: 205px;
    background: linear-gradient(
      131deg,
      rgba(34, 32, 32, 1) 0%,
      rgba(115, 86, 78, 0.6) 100%
    );
    border-radius: 50%;
    animation: ballLT 10s linear alternate infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .ball2 {
    position: absolute;
    width: 121px;
    height: 121px;
    background: linear-gradient(
      -41deg,
      rgba(34, 32, 32, 1) 0%,
      rgba(128, 95, 85, 1) 100%
    );
    border-radius: 50%;
    animation: ballRT 10s alternate infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .ball3 {
    position: absolute;
    bottom: 130px;
    width: 252px;
    height: 126px;
    background: linear-gradient(
      -41deg,
      rgba(34, 32, 32, 1) 0%,
      rgba(128, 95, 85, 1) 100%
    );
    border-radius: 252px 252px 0 0;
    animation: ballRB 10s alternate infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .leftPhone {
    position: absolute;
    bottom: 130px;
    left: 200px;
    max-width: 320px;
    .phongImg {
      width: 100%;
      height: auto;
    }
    .swiper {
      position: absolute;
      top: 0px;
      left: 24px;
      width: calc(100% - 46px);
      padding: 80px 0px 50px 0px;
      box-sizing: border-box;
      .bgImg {
        width: 100%;
        height: auto;
      }
    }
  }
  .rightText {
    width: 30%;
    position: absolute;
    top: 292px;
    right: 300px;
    color: #ffffff;
    .tiltleText {
      float: right;
      font-size: 100px;
    }
    .firstRow {
      text-align: right;
      margin-top: 123px;
      font-size: 32px;
    }
    .secondRow {
      text-align: right;
      margin-top: 38px;
      font-size: 32px;
    }
  }
  .footer {
    width: 100%;
    height: 130px;
    position: absolute;
    bottom: 0px;
    .salesVolume {
      font-size: 40px;
      margin-top: 37px;
      color: #ffffff;
    }
  }
}
@keyframes ballLT {
  0% {
    left: 28px;
    top: 47px;
  }
  50% {
    left: 120px;
    top: 120px;
  }
  100% {
    left: 90px;
    top: 160px;
  }
}
@keyframes ballRT {
  0% {
    right: 8px;
    top: 66px;
  }
  50% {
    right: 40px;
    top: 89px;
  }
  100% {
    right: 20px;
    top: 120px;
  }
}
@keyframes ballRB {
  0% {
    right: 10px;
  }
  50% {
    right: 29px;
  }
  100% {
    right: 80px;
  }
}
@media only screen and(max-width:1024px) {
  .phonebg {
    .leftPhone {
      bottom: 130px;
      left: 15px;
      width: 300px;
      .phongImg {
        width: 300px;
        height: auto;
      }
      .swiper {
        position: absolute;
        top: 0px;
        left: 20px;
        width: calc(100% - 44px);
        padding: 73px 0px 0px 0px;
        box-sizing: border-box;
        .bgImg {
          width: 260px;
          height: auto;
        }
      }
    }
    .rightText {
      width: 30%;
      position: absolute;
      top: 292px;
      right: 60px;
      color: #ffffff;
      .tiltleText {
        float: right;
        font-size: 40px;
      }
      .firstRow {
        float: right;
        margin-top: 80px;
        font-size: 24px;
      }
      .secondRow {
        float: right;
        margin-top: 38px;
        font-size: 24px;
      }
    }
    .footer {
      width: 100%;
      height: 130px;
      position: absolute;
      bottom: 0px;
      .salesVolume {
        font-size: 30px;
        margin-top: 20px;
        color: #ffffff;
      }
    }
  }
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .phonebg {
    .leftPhone {
      bottom: 190px;
      left: 15px;
      width: 300px;
      .phongImg {
        width: 300px;
        height: auto;
      }
      .swiper {
        position: absolute;
        top: 0px;
        left: 20px;
        width: calc(100% - 44px);
        padding: 73px 0px 0px 0px;
        box-sizing: border-box;
        .bgImg {
          width: 260px;
          height: auto;
        }
      }
    }
    .rightText {
      width: 30%;
      position: absolute;
      top: 292px;
      right: 60px;
      color: #ffffff;
      .tiltleText {
        float: right;
        font-size: 40px;
      }
      .firstRow {
        float: right;
        margin-top: 80px;
        font-size: 24px;
      }
      .secondRow {
        float: right;
        margin-top: 38px;
        font-size: 24px;
      }
    }
    .footer {
      width: 100%;
      height: 190px;
      position: absolute;
      bottom: 0px;
      .salesVolume {
        font-size: 30px;
        margin-top: 37px;
        color: #ffffff;
      }
    }
  }
}
</style>