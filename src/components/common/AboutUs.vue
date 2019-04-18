<template>
    <div class="partner">
      <div class="header">
        <p class="titleCN">关于我们</p>
        <p class="titleEN">About us</p>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item ,index) in listdata" :key="index" :class="{['model'+index] : currentPageFlag}">
            <div class="left">
              <img class="leftImg" :src="item.imgSrc" alt="关于我们" title="关于我们">
            </div>
            <div class="right">
              <p>{{item.title}}</p>
              <span>{{item.text}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      listdata: [
        {
          imgSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/企业模式.png",
          title: "企业模式",
          text:
            "线上美食空间，线下场景交互，AR/VR全息技术，智能机器人无人化餐厅，打造自己的供应链，生态圈。"
        },
        {
          imgSrc:"https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/企业理念.png",
          title: "企业理念",
          text: "不是看得到希望才去坚持，而是坚持了才会看到希望。"
        },
        {
          imgSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/企业使命.png",
          title: "企业使命",
          text: "把客户放在第一位，一切从客户出发。"
        },
        {
          imgSrc: "https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/企业愿景.png",
          title: "企业愿景",
          text: "由互联网公司转型到科技类公司"
        }
      ],
      currentPageFlag: false
    };
  },
  watch: {
    "$route.fullPath"(newval, oldval) {
      if (newval === "/#AboutUs") {
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
<style scoped lang="scss">
.partner {
  height: 100%;
  background-image: url("https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/关于我们_bk.png");
  background-repeat: no-repeat;
  background-size: cover;
  .header {
    color: #ffffff;
    padding-top: 77px;
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
    margin-top: 20px;
    .model1,
    .model3 {
      animation: LiMoveRight 3s;
    }
    .model0,
    .model2 {
      animation: LiMoveLeft 3s;
    }

    li {
      display: block;
      width: 100%;
      position: relative;
      max-height: 23vh;
      margin-top: 10px;
      .left {
        width: 120px;
        display: inline-block;
        height: 120px;
        margin: 10px 10px;
        .leftImg {
          width: 100%;
        }
      }
      .right {
        padding-top: 10px;
        color: #fd764d;
        height: 140px;
        width: 60%;
        vertical-align: top;
        display: inline-block;
        p {
          font-size: 36px;
        }
        span {
          margin-top: 20px;
          float: left;
          display: inline-block;
          text-align: left;
          font-size: 24px;
        }
      }
    }
  }
}
@keyframes LiMoveRight {
  from {
    left: 300px;
  }
  to {
    left: 0px;
  }
}
@keyframes LiMoveLeft {
  from {
    left: -300px;
  }
  to {
    left: 0px;
  }
}
@media only screen and (min-width: 414px) and (max-width: 640px) and (-webkit-device-pixel-ratio: 2) {
  .partner {
    .content {
      li {
        .right {
          span {
            // font-size: 20px;
            display: none;
          }
        }
      }
    }
  }
}
</style>
