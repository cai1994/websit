<template>
    <div class="Team">
        <div class="header">
            <p class="titleCN">我们团队</p>
            <p class="titleEN">Our Team</p>
            <div class="content">
                <div class="Chairman">
                    <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/董事长.png" alt="董事长">
                    <p>周明海 | 董事长</p>
                    <span>享七科技天使轮投资方，享七科技董事长</span>
                  <div class="textBox">
                    <span>周明海先生在风险投资、资本运作及企业管理领域有丰富的领导管理经验；
                    他在资源、基础设施、消费零售和高科技等行业担任公司最高管理层岗位长达
                    16 年，现任海德资本董事⻓、脸脸⽹络董事⻓、乍嘉苏高速公路公司董事⻓、
                    享七科技创始投资人&董事长。他曾是银泰百货集团 Co-founder 及 CEO，领
                    导其从2004年到2008年由一家单店成长为在香港上市的连锁百货公司（市值
                    超过20亿美元），价值增⻓超过20倍。 他曾领导中国通讯设备行业的多家领
                    军企业，曾任东方通信（中国上海证交所上市公司）总裁&CEO，首信集团董事
                    长&CEO（首信集团 2003 年收入超 40 亿美元。作为 NOKIA 在华最重要的战
                    略合作伙伴，周明海先生曾成功主导首信集团与NOKIA在中国的战略重组，在
                    中国建立销售收入超过100亿美元的合资企业 Nokia Capitel ltd.），宁波电子
                    信息产业集团公司董事长（旗下波导公司时为中国本土最大⼿手机制造商）。他
                    拥有中国复旦大学的管理学博士学位。
                  </span>
                </div>
                </div>
                <div class="CEO">
                     <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/CEO.png" alt="CEO">
                    <p>李睿 | CEO</p>
                    <span>武汉市宁波商会常务副会长，享7科技创始人</span>
                </div>
                <div class="team">
                     <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/团队.png" alt="团队">
                    <p>90后 | 团队</p>
                    <span>要不就和公司一起成为牛人，要不就走人</span>
                    <div class="textBox">
                    <span>平均年龄28岁，沟通共振率强，家一般友爱的团队氛围，无上下管理等级，
                      用心感受每一个键盘背后的温度。我们拥有强烈的创业梦想和共同愿望，一直在努力
                      、奋斗、拼搏不息！拥有一个充满朝气、高素质、年轻化、专业化的研发团队，为公
                      司蓬勃发展提供源源不断的活力与动力。年轻专业技术人才的成长需要其所在组织提供
                      平台保障。将年轻专业技术人才吸收到相应工作团队,用团队文化和团队分工来培育
                      年轻专业技术人才专业思维、专业精神、专业能力与专业技能,为年轻专业技术人才
                      发展奠定良好职业基础,对于专业技术人才的健康发展至关重要。同时,对年轻专业技
                      术人才进行有组织的培养,则为组织持续、富有竞争力的发展提供人才保障。
                  </span>
                </div>
              </div>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <p><img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/logo.png" alt="享七logo"><span>027-5972-8176</span></p>
                <p>电子邮箱：xiangqi2018boss@163.com</p>
                <p>公司地址: 武汉市洪山区光谷总部国际Ⅱ期时代</p>
            </div>
            <div class="right">
                <img src="https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/小程序二维码.png" alt="小程序二维码">
            </div>
            <div class="copyright"><p>版权所有：湖北享七网络科技有限公司 鄂ICP备18004677号</p></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showDesc: false
    };
  }
};
</script>
<style lang="scss" scoped>
.Team {
  width: 100%;
  color: #ffffff;
  max-height: 100vh;
  .header {
    min-height: 60vh;
    background-image: url("https://xq-1256079679.cos.ap-shanghai.myqcloud.com/official/团队_bk.png");
    background-repeat: no-repeat;
    background-size: Cover;
    padding-top: 60px;
    padding-bottom: 60px;
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
    .content {
      margin-top: 10px;
      position: relative;
      .CEO {
        vertical-align: top;
        .textBox {
          left: 0;
        }
      }
      .team {
        .textBox {
          right: 0;
        }
      }
      .Chairman {
        .textBox {
          left: 0;
        }
      }
      > div {
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
        vertical-align: top;
        cursor: pointer;
        padding-top: 56px;
        padding-bottom: 42px;
        margin: 20px 80px 0;
        &:hover {
          overflow: visible;
          .textBox {
            top: 0px;
          }
        }
        img {
          margin-bottom: 44px;
        }
        display: inline-block;
        background-color: #ffffff;
        p {
          color: #000000;
          font-size: 30px;
          margin-bottom: 33px;
        }
        span {
          display: inline-block;
          width: 300px;
          color: #666666;
          font-size: 24px;
          line-height: 40px;
        }
        .textBox {
          box-sizing: border-box;
          width: 100%;
          white-space: normal;
          position: absolute;
          background-color: #fc5e2d;
          top: 100%;
          transition: all 3s;
          z-index: 1000;
          span {
            color: #ffffff;
            font-size: 18px;
            padding: 20px 20px 0;
            width: 100%;
            line-height: 120%;
            // position: absolute;
            // top: 0px;
            // left: 0px;
            box-sizing: border-box;
            letter-spacing: 1px;
            text-align: left;
            text-indent: 48px;
          }
        }
      }
      .Chairman {
        .icon {
          position: absolute;
          top: 100px;
          left: 100px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .footer {
    position: relative;
    .left {
      position: absolute;
      left: 18.75%;
      top: 50px;
      img {
        margin-right: 20px;
        vertical-align: top;
      }
      p {
        text-align: left;
        margin-bottom: 24px;
        font-size: 24px;
        span {
          font-size: 50px;
        }
      }
    }
    .right {
      position: absolute;
      right: 18.75%;
      top: 50px;
    }
    .copyright{
      width: 100%;
      position: fixed;
      bottom: 0px;
      text-align: center;
      p{
        white-space: nowrap;
        margin: 10px 0;
      }
    }
  }
}
@media only screen and(max-width:1400px) {
  .Team {
    .content {
      & > div {
        width: 25vw;
        padding-top: 10px !important;
        margin: 10px 5px 0 !important;
        padding-bottom: 0px !important;
        img {
          width: 20vw;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 5px !important;
          font-size: 24px !important;
        }
        span {
          width: 25vw !important;
          padding: 10px !important;
          line-height: 120%;
          box-sizing: border-box;
        }
      }
      // .textBox {
      //   width: 90vw !important;
      //   z-index: 10000;
      //   span {
      //     width: 100% !important;
      //   }
      // }
    }
    .footer {
      .left {
        left: 10px !important;
        right: 60px !important;
        top: 10px !important;
        p {
          margin-bottom: 5px !important;
        }
      }
      .right {
        right: 10px !important;
        img {
          width: 100px !important;
        }
      }
    }
  }
}
@media only screen and(min-width:1200px) and(-webkit-device-pixel-ratio: 3) {
  .Team {
    .content {
       & > div {
        width: 30vw;
        padding-top: 10px !important;
        margin: 10px 5px 0 !important;
        padding-bottom: 0px !important;
        img {
          width: 20vw;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 5px !important;
          font-size: 18px !important;
        }
        span {
          width: 30vw !important;
          padding: 10px !important;
          box-sizing: border-box;
        }
      }
      .textBox {
        width: 90vw !important;
        z-index: 10000;
        span {
          width: 100% !important;
        }
      }
    }
    .footer {
      .left {
        top: 20px;
        left: 10px;
        right: 120px;
        p {
          margin-bottom: 5px;
          span {
            font-size: 40px;
          }
        }
        img {
          width: 90px;
        }
      }
      .right {
        right: 10px;
        top: 20px;
        img {
          width: 100px;
        }
      }
    }
  }
}
</style>