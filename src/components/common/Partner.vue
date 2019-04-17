<template>
    <div class="partner">
        <div class="header">
            <p class="titleCN">合作伙伴</p>
            <p class="titleEN">Cooperative partner</p>
        </div>
        <div class="content">
            <div class="imgBox">
                <img src="../../assets/image/images/地图.png" alt="地图">
                <div class='circle wuhan'>
                    <div class='circle1'>&nbsp;</div>
                    <div class='circle2'>&nbsp;</div>
                    <div class='circle3'>&nbsp;</div>
                    <div class='center'>
                        <span class="wuhanText">武汉万达</span>
                    </div>
                </div>
                <div class='circle huanggang'>
                    <div class='circle1'>&nbsp;</div>
                    <div class='circle2'>&nbsp;</div>
                    <div class='circle3'>&nbsp;</div>
                    <div class='center'>
                        <span class="huanggangText">黄冈万达</span>
                    </div>
                </div>
                <div class='circle shiyan'>
                    <div class='circle1'>&nbsp;</div>
                    <div class='circle2'>&nbsp;</div>
                    <div class='circle3'>&nbsp;</div>
                    <div class='center'>
                        <span class="shiyanText">十堰万达</span>
                    </div>
                </div>
                <div class='circle xiangyang'>
                    <div class='circle1'>&nbsp;</div>
                    <div class='circle2'>&nbsp;</div>
                    <div class='circle3'>&nbsp;</div>
                    <div class='center'>
                        <span class="xiangyangText">襄阳万达</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.partner {
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
    position: relative;
    .imgBox {
      width: 50%;
      height: auto;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100%;
        height: auto;
      }
      .wuhan {
        position: absolute;
        top: 47%;
        left: 62%;
        .wuhanText {
          top: -28px;
          left: -40px;
        }
      }
      .huanggang {
        position: absolute;
        top: 53%;
        left: 54%;
        .huanggangText {
          left: -60px;
        }
      }
      .shiyan {
        position: absolute;
        top: 58%;
        left: 70%;
        .shiyanText {
          right: -80px;
        }
      }
      .xiangyang {
        position: absolute;
        top: 73%;
        left: 67%;
        .xiangyangText {
          right: -80px;
        }
      }
    }
  }
}
.circle {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
}
.circle1,
.circle2,
.circle3,
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -30px 0 0 -30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #fc5e2d;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -17.5px 0 0 -17.5px;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background: #fc5e2d;
  text-align: center;
  line-height: 35px;
  color: #000000;
  font-size: 16px;
  span {
    word-break: keep-all;
    position: absolute;
  }
}

.circle1 {
  -webkit-animation: circle 3s linear infinite;
  animation: circle 3s linear infinite;
}

.circle2 {
  -webkit-animation: circle 3s linear 0.8s infinite;
  animation: circle 3s linear 0.8s infinite;
}
.circle3 {
  -webkit-animation: circle 3s linear 1.6s infinite; /* Safari and Chrome */
  animation: circle 3s linear 1.6s infinite;
}
@keyframes circle {
  from {
    opacity: 1;
    -webkit-transform: scale(0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(2);
  }
}
@media only screen and(max-width:1024px) {
  .partner {
    .content {
      .imgBox {
        width: 90%;
      }
    }
  }
}
@media only screen and(-webkit-device-pixel-ratio: 3) {
  .partner {
    .content {
      .imgBox {
        width: 90%;
      }
    }
  }
}
</style>
