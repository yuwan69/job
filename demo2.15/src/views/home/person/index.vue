<script setup lang="ts" name="">
import iconTitle from "../../../components/title/index.vue";
import personImg from "../../../assets/person.png";
defineProps(["btnFlag"]);
</script>

<template>
  <div class="personContainer">
    <iconTitle :img="personImg" :title="'人'" :describe="'明确营销对象'" />
    <div v-if="btnFlag === 1" class="mask">
      <img src="../../../assets/nil.png" alt="" />
      <span>点击右方匹配按钮，立即生成方案~</span>
    </div>
    <div v-else class="describeContainer">
      <div class="top">
        <span class="option">选择会员分组</span>
        <div class="detailBox">
          <span>2月正价核心会员群</span
          ><img src="../../../assets/right.png" alt="" />
        </div>
        <img
          style="position: absolute; top: 246px; left: 238px"
          src="../../../assets/down.png"
          alt=""
        />
      </div>
      <ul class="content">
        <li>
          <span>分组会员</span>
          <span>9,213</span>
        </li>
        <li>
          <span>开卡率</span>
          <span>34%</span>
        </li>
        <li>
          <span>主类型</span>
          <span id="word">老会员</span>
        </li>
        <li>
          <span>年龄段</span>
          <span>30-50</span>
        </li>
        <li>
          <span>复购率</span>
          <span id="word">12%</span>
        </li>
        <li style="position: relative">
          <span>RFM</span>
          <span
            id="word"
            style="
              position: absolute;
              left: -5px;
              top: 45px;
              font-size: 21px;
              font-weight: 600;
            "
            >重要发展</span
          >
        </li>
        <li>
          <span>平均折扣</span>
          <span>87%</span>
        </li>
        <li>
          <span>客单价</span>
          <span style="font-size: 24px; letter-spacing: -3.3px">￥1213.9</span>
        </li>
      </ul>
      <div class="capsule1"><span>会员分析</span></div>
      <div class="capsule2"><span>指标洞察</span></div>
    </div>
  </div>
</template>

<style scoped>
.personContainer {
  width: 541px;
  height: 100%;

  border-radius: 0px 8px 8px 0px;
  position: relative;
  .describeContainer {
    height: 540px;
    margin-left: 15px;
    margin-top: 37px;

    .top {
      width: 100%;
      gap: 25px;
      flex-direction: column;
      height: 173px;
      display: flex;
      .option {
        position: absolute;
        top: 119px;
        left: 195px;
        font-size: 18px;
        font-weight: 600;

        color: rgba(10, 31, 55, 1);
      }
      .detailBox {
        position: absolute;
        left: 139px;
        top: 168px;
        width: 222px;
        height: 40px;

        border-radius: 4px;
        background: rgba(255, 255, 255, 1);
        line-height: 40px;
        border: 1px solid rgba(204, 204, 204, 1);

        text-align: center;
        /** 文本1 */
        font-size: 16px;
        font-weight: 400;

        color: rgba(10, 31, 55, 1);
        img {
          width: 13px;
          height: 13px;
          margin-left: 4px;
        }
      }
      img {
        width: 34px;
        height: 34px;
      }
    }
    .content {
      margin-top: 37px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      height: 200px;
      gap: 50px;
      margin-left: 27px;
      li {
        display: flex;
        flex-direction: column;
        gap: 25px;
        span:nth-child(1) {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 22.4px;
          color: rgba(10, 31, 55, 0.6);
          text-align: left;
          vertical-align: top;
        }
        span:nth-child(2) {
          font-size: 28px;
          font-weight: 550;
          letter-spacing: 1px;
          line-height: 0px;
          color: rgba(0, 0, 0, 0.9);
        }
        #word {
          /** 文本1 */
          font-size: 24px;
          font-weight: 500;

          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
    .capsule1 {
      right: 156px;
      bottom: 46px;
      position: absolute;
      width: 102px;
      height: 33px;
      opacity: 1;
      border-radius: 168px;
      background: rgba(252, 151, 73, 1);
      text-align: center;
      line-height: 33px;

      /** 文本1 */
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    .capsule2 {
      right: 279px;
      bottom: 46px;
      position: absolute;
      width: 102px;
      height: 33px;
      opacity: 1;
      border-radius: 168px;
      background: rgba(37, 207, 130, 1);
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 33px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .mask {
    position: absolute;
    height: 400px;
    width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 187px;
      height: 187px;
    }
    span {
      font-size: 16px;
      font-weight: 400;

      color: rgba(10, 31, 55, 1);
    }
  }
}
</style>
