<script setup lang="ts" name="">
import iconTitle from "../../../components/title/index.vue";
import goodsImg from "../../../assets/goods.png";
</script>

<template>
  <div class="goodsContainer">
    <iconTitle :img="goodsImg" :title="'货'" :describe="'限定卖货范围'" />
    <div class="describeContainer">
      <div class="top">
        <span class="option">选择商品分组</span>
        <div class="detailBox">
          <span>2023年春夏款库存充足</span
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
          <span>款数</span>
          <span>834</span>
        </li>
        <li>
          <span>库存</span>
          <span>29,234</span>
        </li>
        <li>
          <span>库龄</span>
          <span>3年</span>
        </li>
        <li>
          <span>售罄率</span>
          <span>60%</span>
        </li>
        <li>
          <span>主要商品</span>
          <span id="word">T恤</span>
        </li>
        <li>
          <span>价格带</span>
          <!-- <span
            style="font-size: 24px; top: 655px; left: 180px; position: absolute"
            >1,000-3,000</span> -->
          <span style="font-size: 20px; scale: 1.4; letter-spacing: -3.3px"
            >￥1,000-3,000</span
          >
        </li>
        <li>
          <span>折扣率</span>
          <span>56%</span>
        </li>
        <li>
          <span>销售状态</span>
          <span id="word">畅销</span>
        </li>
      </ul>
      <div class="capsule"><span>商品明细</span></div>
    </div>
  </div>
</template>

<style scoped>
.goodsContainer {
  height: 100%;
  border-radius: 8px 0 0 8px;
  .describeContainer {
    height: 540px;
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
      margin-left: 42px;
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
    .capsule {
      left: 187px;
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
  }
}
</style>
