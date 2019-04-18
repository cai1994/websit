<template>
    <div class="topNav" :style="{backgroundColor: navColorFlag ? '':'#2E2E2E'}">
        <a href="#HomePage"><img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/logo.png" alt="享7科技" title="享7科技"></a>
        <ul class="rightNav" >
            <li v-for="(item ,index) in navList" :key="index" @click="ToNav(item.name)"><p class="box2">{{item.text}}</p></li>
        </ul>
    </div>
</template>
<script>
import { debug, debuglog } from "util";
export default {
  data() {
    return {
      navList: [
        { text: "首页", name: "#HomePage" },
        { text: "产品服务", name: "#ProductService" },
        { text: "产品展示", name: "#ProductSescription" },
        { text: "砍价/拼团流程", name: "#Contact" },
        { text: "合作伙伴", name: "#Partner" },
        { text: "关于我们", name: "#AboutUs" },
        { text: "团队展示", name: "#OurTeam" }
      ],
      navColorFlag: true
    };
  },
  watch: {
    "$route.fullPath"(newval, oldval) {
      if (
        newval == "/#ProductService" ||
        this.$route.fullPath == "/#Partner"
      ) {
        this.navColorFlag = false; //第二屏导航变色
      } else {
        this.navColorFlag = true;
      }
    }
  },
  mounted() {
    if (
      this.$route.fullPath == "/#ProductService" ||
      this.$route.fullPath == "/#Partner"
    ) {
      this.navColorFlag = false;
    } else {
      this.navColorFlag = true;
    }
  },
  methods: {
    ToNav(idPath) {
      window.location.href = idPath;
    }
  }
};
</script>
<style scoped lang="scss">
.box2 {
  font-size: 20px;
  line-height: 100%;
  height: 35px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.box2:after,
.box2:before {
  content: "";
  display: block;
  position: absolute;
  border: 2px transparent solid;
  width: 0;
  height: 0;
  box-sizing: border-box;
}
.box2:after {
  right: 0;
  top: 0;
  transition: border-color 0s ease-in 0.8s, width 0.2s ease-in 0.6s,
    height 0.2s ease-in 0.4s;
}
.box2:before {
  left: 0;
  bottom: 0;
  transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.2s,
    height 0.2s ease-in 0s;
}
.box2:hover:after,
.box2:hover:before {
  height: 100%;
  width: 100%;
}
.box2:hover:before {
  border-bottom-color: #fc5e2d;
  transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s,
    height 0.2s ease-out 0.6s;
}
.box {
  width: 100px;
  height: 100px;
  transition: all 1s;
}
.box:hover {
  width: 50px;
  height: 50px;
}

.topNav {
  position: fixed;
  top: 0;
  width: 100%;
  margin-left: 50%;
  box-sizing: border-box;
  transition: all 0.8s;
  transform: translate(-50%, 0);
  z-index: 400;
  height: 64px;
  > a {
    display: block;
    position: absolute;
    top: 20px;
    left: 18.75%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .rightNav {
    padding: 30px 0 0;
    position: absolute;
    right: 12%;
    li {
      font-size: 18px;
      position: relative;
      float: left;
      margin: 0 10px;
      letter-spacing: 2px;
      cursor: pointer;
      color: #fff;
      &:hover {
        color: #fc5e2d;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .topNav {
    min-width: 750px;
    .rightNav {
      min-width: 700px;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .topNav {
    padding: 0;
    height: 77px;
    > a {
      left: 50%;
      top: 60%;
      height: 35px;
      transform: translate(-50%, -50%);
    }
    .rightNav {
      display: none;
    }
  }
}
@media only screen and (max-width: 768px) {
  .topNav {
    a {
      top: 24px;
    }
  }
}
@media (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .topNav {
    padding: 0;
    height: 77px;
    > a {
      left: 50%;
      top: 60%;
      height: 35px;
      transform: translate(-50%, -50%);
    }
    .rightNav {
      display: none;
    }
  }
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .topNav {
    padding: 0;
    height: 77px;
    > a {
      left: 50%;
      top: 60%;
      height: 35px;
      transform: translate(-50%, -50%);
      img{
        width: 150%;
      }
    }
    .rightNav {
      display: none;
    }
  }
}
</style>