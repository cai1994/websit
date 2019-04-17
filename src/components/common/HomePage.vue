<template>
    <div class="homePage">
       <div class="homeTitle">
           <h1>享七科技</h1>
           <p class="topBorder"></p>
           <p class="rightBorder"></p>
           <p class="bottomBorder"></p>
           <p class="leftBorder"></p>
        </div>
        <textra  class="welcome" :data='words' :timer="1.1" :infinite='true' filter="bottom-top" />
         <div class="bottomButton">
           <a href="#ProductService">了解更多<span class="iconMore"></span></a>
         </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      words:["XIANG QI","WELCOME"]
    }
  }
};
</script>
<style lang="scss" scoped>
.homePage {
  box-sizing: border-box;
  height: 100%;
  padding-top: 38vh;
  position: relative;
  background-image: url("../../assets/image/images/bk.png");
  background-repeat: no-repeat;
  background-size: cover;
  > .homeTitle {
    position: relative;
    font-size: 106px;
    color: #fdfdfd;
    line-height: 200px;
    width: 32vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    > p {
      width: 1Px;
      height: 25vh;
      position: absolute;
      background-color: #fff;
    }
    .leftBorder {
      top: -50px;
      left: 0;
      animation: topMoveBorder 2s 1;
    }
    .topBorder {
      top: 0;
      left: -50px;
      height: 1Px;
      width: 38vw;
      animation: leftMoveBorder 2s 1;
    }
    .rightBorder {
      bottom: -50px;
      right: 0;
      animation: bottomMoveBorder 2s 1;
    }
    .bottomBorder {
      bottom: 0;
      right: -50px;
      height: 1Px;
      width: 30vw;
      animation: rightMoveBorder 2s 1;
    }
  }
  .welcome {
    margin-top: 1rem;
    height: 0.8rem;
    font-size: 40px;
    color: #fdfdfd;
    text-shadow: 5px 2px 6px #fc5e2d;
  }
}

.bottomButton {
  width: 241px;
  position: absolute;
  left: 50%;
  bottom: 102px;
  margin-left: -120px;
  font-size: 36px;
  &:hover {
    color: #2ddffc;
    > a {
      display: block;
      color: #2ddffc;
      border: 1px solid #2ddffc;
    }
    .iconMore {
      background-image: url("../../assets/image/images/hover-more.png");
      background-repeat: no-repeat;
    }
  }
  > a {
    height: 75px;
    line-height: 75px;
    display: block;
    color: #fdfdfd;
    border: 1px solid #fdfdfd;
    border-radius: 8px;
  }
  .iconMore {
    background-size: contain;
    display: inline-block;
    vertical-align: baseline;
    width: 20px;
    height: 26px;
    margin-left: 20px;
    background-image: url("../../assets/image/images/more.png");
    background-repeat: no-repeat;
  }
}

// @media only screen and (min-width: 1024px) and (max-width: 1920px) {
//   .homePage {
//     > .homeTitle {
//       margin: 0 34.3%;
//     }
//   }
// }
// /**ipad**/
@media only screen and(max-width:1400px) {
  .homePage {
    > .homeTitle {
      font-size: 50px;
      line-height: 90px;
      > p {
      width: 1px;
      height: 12vh;
      position: absolute;
      background-color: #fff;
    }
    }
  }
}
/**iphone**/
@media only screen and (max-width: 768px) {
  .homePage {
    > .homeTitle {
      width:50vw;
    }
  }
}
@keyframes leftMoveBorder {
  from {
    left: -150px;
  }
  to {
    left: -50px;
  }
}
@keyframes topMoveBorder {
  from {
    top: -150px;
  }
  to {
    top: -50px;
  }
}
@keyframes rightMoveBorder {
  from {
    right: -150px;
  }
  to {
    right: -50px;
  }
}
@keyframes bottomMoveBorder {
  from {
    bottom: -150px;
  }
  to {
    bottom: -50px;
  }
}
</style>