<template>
    <div class="ProductService">
        <div class="header">
            <p class="titleCN">产品服务</p>
            <p class="titleEN">Product service</p>
        </div>
        <div class="content" >
          <swiper ref="mySwiper" :options="swiperOption" >
            <swiper-slide v-for="(num ,index ) in imgarrs" :key="index">
              <div class="slideContent">
                <img class="bgImg" :src="num.slideSrc" alt="轮播图">
                <img class="iconImg" :src="num.IconSrc" alt="图标">
                <p class="iconName">{{num.name}}</p>
                <div class="textBox">
                  <span>{{num.txt}}
                  </span>
                </div>
              </div>
            </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-scrollbar"  slot="scrollbar"></div>
          </swiper>
        </div>
        <div class="footer">
          <span>以场景交互及活动植入为核心，致力于打造最大最优质的美食文化基地</span>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { debug } from "util";
export default {
  data() {
    return {
      imgarrs: [
        {
          slideSrc:"https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideimg-1.png",
          IconSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideIcon-1.png",
          txt:
            "用户可通过享7购小程序购买红包贺卡，并编辑红包祝福语，赠送给一个或多个好友。",
          name: "红包贺卡"
        },
        {
          slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideimg-2.png",
          IconSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideIcon-2.png",
          txt: "用户可在60分钟内邀请好友砍价并成功，可以最终价获得商品。",
          name: "邀请砍价"
        },
        {
          slideSrc:"https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideimg-3.png",
          IconSrc:"https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideIcon-3.png",
          txt:
            "选择拼团商品，付款参与拼团，分享给未注册“享7购”好友注册后，则参团成功，在有效期内达到拼团人数，则拼团成功。",
          name: "全民拼团"
        },
        {
          slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideimg-4.png",
          IconSrc:"https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideIcon-4.png",
          txt:
            "用户在享7购小程序购买享7券，到店支付即可当现金使用，优惠多多，最高立减100元",
          name: "享七券票"
        },
        {
          slideSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideimg-5.png",
          IconSrc:"https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/slideIcon-5.png",
          txt:
            "秒杀商品均限量发售，用户需在60分钟内邀请2个新用户注册，超时则需重新发起。",
          name: "限时秒杀"
        }
      ],
      swiperOption: {
        autoplay: true,
        breakpointsInverse: true,
        breakpoints: {
          //当宽度大于等于760
          0: {
            slidesPerView: 2
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          //当宽度大于等于1024
          1024: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1500: {
            slidesPerView: 5
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    IsPC() {
      //判读是否为移动端  主要是为设备像素比较高的手机和宽屏pc做区分
      var userAgentInfo = navigator.userAgent;
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ];
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          this.$set(this.swiperOption, "breakpoints", {
            //当宽度大于等于760
            0: {
              slidesPerView: 2
            },
            760: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            //当宽度大于等于1024
            1125: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          });
          break;
        }
      }
    }
  },
  created() {
    this.IsPC();
  }
};
</script>
<style lang="scss" acoped>
.ProductService {
  color: #000000;
  padding-top: 77px;
  height: 100%;
  .header {
    height: 70px;
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
  .content {
    margin-top: 40px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    background-color: #606060;
    .slideContent {
      &:hover {
        .iconImg {
          top: 10%;
        }
        .textBox {
          top: 0;
          span{
            line-height: 150%;
          }
        }
      }
    }
    img {
      height: auto;
      float: left;
    }
    .bgImg {
      width: 100%;
      height: auto;
      float: left;
    }
    .iconImg {
      width: 115px;
      height: 115px;
      position: absolute;
      top: 30%;
      left: 50%;
      margin-left: -57.5px;
      z-index: 500;
      transition: all 1s;
    }
    .iconName {
      position: absolute;
      top: 60%;
      color: #ffffff;
      font-size: 28px;
      width: 100%;
      text-align: center;
    }
    .textBox {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      white-space: normal;
      position: absolute;
      background-color: #fc5e2d;
      top: 100%;
      left: 0px;
      font-size: 25px;
      transition: all 1s;
      span {
        color: #ffffff;
        padding: 20px 20px 0;
        width: 100%;
        height: 100%;
        padding-top: 200px;
        position: absolute;
        top: 0px;
        left: 0px;
        box-sizing: border-box;
        letter-spacing: 3px;
      }
    }
  } 
  .footer {
    padding-top: 26px;
    span {
      font-size: 26px;
      color: #555555;
    }
  }
}

// 超小屏幕（手机，小于 768px）
@media (max-width: 768px) {
  .content {
    .bgImg {
      background-size: cover;
      width: 100%;
      height: 450px !important;
    }
  }
  .footer {
    padding-top: 10px;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  .content {
    .bgImg {
      background-size: cover;
      width: 100%;
      max-height: 650px !important;
    }
  }
}
</style>