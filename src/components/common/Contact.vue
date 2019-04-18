<template>
    <div class="Process">
       <div class="upDiv">
            <div class="header">
                <p class="titleCN">砍价流程</p>
                <p class="titleEN">Bargain Service</p>
            </div>
            <div class="content">
              <div class="imgText">
                <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/选菜品.png" class="processImg processImg1" title="选菜品" alt="选菜品">
                <span>选择所需菜品</span>
              </div>
              <div class="arrow">
                <img class="arrowImg1" src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/箭头2.png" alt="箭头图">
                <img class="arrowImg2" src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/箭头1.png" alt="箭头图">
              </div>
              <div class="imgText">
                <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/邀砍价.png" class="processImg processImg2" title="邀砍价" alt="邀砍价">
                <span>邀请好友帮忙砍价</span>
              </div>
              <div class="arrow">
                <img class="arrowImg1" src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/箭头2.png" alt="箭头图">
                <img class="arrowImg2" src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/箭头1.png" alt="箭头图">
              </div>
              <div class="imgText">
                <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/二维码.png" class="processImg processImg3"  title="二维码" alt="二维码">
                <span>到店出示二维码</span>
              </div>
            </div>
       </div>
       <div class="downDiv">
            <div class="header">
                <p class="titleCN">拼团流程</p>
                <p class="titleEN">Sroup Service</p>
            </div>
            <div :class="['content',{ animationCss : currentPageFlag}]">
                <div class="imgText">
                  <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/付款参团.png" class="processImg processImg1" title="付款参团" alt="付款参团">
                  <span>付款参团</span>
                </div>
                <div class="arrow"></div>
                <div class="imgText downImgText">
                  <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/邀请参团.png" class="processImg processImg2" title="邀请参团" alt="邀请参团">
                  <span>邀请参团</span>
                </div>
                <div class="arrow"></div>
                <div class="imgText">
                  <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/拼团成功.png" class="processImg processImg3" title="拼团成功" alt="拼团成功">
                  <span>拼团成功</span>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentPageFlag: false
    };
  },
  watch: {
    "$route.fullPath"(newval, oldval) {
      if (newval === "/#Contact") {
        this.currentPageFlag = true; //页面至当前组件赋予动画样式
      } else {
        this.currentPageFlag = false;
      }
    }
  },
  mounted() {
    this.currentPageFlag = true; //页面至当前组件赋予动画样
  }
};
</script>
<style lang="scss" scoped>
.Process {
  width: 100%;
  transform: translateZ(0);
  color: #ffffff;
  height: 100%;
  .header {
    padding-top: 60px;
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
  .upDiv {
    width: 100%;
    min-height: 48vh;
    max-height: 50vh;
    background-image: url("https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/砍价_bk.png");
    background-repeat: no-repeat;
    background-size: cover;
    .content {
      width: 100%;
      .imgText {
        width: 10.24%;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        span {
          font-size: 30px;
          top: 230px;
          word-wrap: break-word;
        }
      }
      .processImg {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 10.24vw;
        border-radius: 50%;
      }

      .arrow {
        display: inline-block;
        width: 14.84%;
        height: 2.6vw;
        position: relative;
        top: 0%;
        left: 0px;
        animation: arrowMove 1s alternate infinite;
        .arrowImg1 {
          width: auto;
          height: 4vw;
        }
        .arrowImg2 {
          width: auto;
          height: 4vw;
        }
      }
    }
  }
  .downDiv {
    width: 100%;
    height: 50vh;
    position: relative;
    background-color: #2e2e2e;
    .animationCss {
      animation: contentMove 3s;
    }
    .content {
      width: 100%;
      height: calc(100% - 140px);
      background-image: url("https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/线条.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: relative;
      left: 0px;
      .imgText {
        width: 10.24%;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        span {
          font-size: 30px;
          top: 230px;
          word-wrap: break-word;
        }
      }
      .downImgText {
        top: 50px;
        span {
          bottom: -80px;
        }
      }
      .processImg {
        width: 100%;
        height: 10.24vw;
        border-radius: 50%;
      }
      .processImg1 {
        position: relative;
        top: -50px;
      }
      .processImg2 {
        position: relative;
      }
      .processImg3 {
        position: relative;
        top: -50px;
      }
      .arrow {
        display: inline-block;
        width: 285px;
      }
    }
  }
}
@keyframes arrowMove {
  from {
    left: 0px;
  }
  to {
    left: 30px;
  }
}
@keyframes contentMove {
  from {
    left: 500px;
  }
  to {
    left: 0px;
  }
}
@media only screen and(max-width:1200px) {
  .content {
    .imgText {
      width: 20vw !important;
      span {
        white-space: nowrap;
        font-size: 14px !important;
      }
      .processImg {
        width: 20vw !important;
        height: 20vw !important;
      }
    }
    .arrow {
      width: 10vw !important;
      .arrowImg1 {
        width: auto;
        height: 4vw;
      }
      .arrowImg2 {
        width: auto;
        height: 4vw;
      }
    }
  }
  .downDiv {
    .content {
      background-position: 0px 80px;
    }
    .arrow {
      width: 10vw !important;
    }
  }
}
@media only screen and(-webkit-device-pixel-ratio: 3) {
  .upDiv{
     .imgText{
      width: 20vw !important;
    }
    .processImg {
      width: 20vw !important;
      height: 20vw !important;
      top: -40px !important;
    }
  }
  .downDiv {
    .imgText{
      width: 20vw !important;
    }
    .processImg {
      width: 20vw !important;
      height: 20vw !important;
      top: 0px !important;
    }
    .arrow {
      width: 20vw !important;
    }
  }
}
</style>