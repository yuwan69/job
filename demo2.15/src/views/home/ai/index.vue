<script setup lang="ts" name="">
import iconTitle from "../../../components/title/index.vue";
import aiImg from "../../../assets/ai.png";
</script>

<template>
  <div class="aiContainer">
    <iconTitle :img="aiImg" :title="'AI匹配'" :describe="'智能生成匹配方案'" />
    <div class="content">
      <div class="contentTitle">
        <div class="left">
          <img
            style="width: 16px; height: 16px"
            src="../../../assets/yes.png"
            alt=""
          />
          <span>已使用ICF算法为23家门店生成人货匹配方案</span>
        </div>
        <div class="capsule1">
          <span>更换算法</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="12.869232177734375"
            height="12.86566162109375"
            viewBox="0 0 12.869232177734375 12.86566162109375"
            fill="none"
          >
            <path
              d="M1.06044 4.69266C0.713278 4.3454 0.713278 3.78239 1.06044 3.43514C1.40763 3.08788 1.9705 3.08788 2.31767 3.43514L6.43035 7.54836L10.543 3.43515C10.8586 3.11946 11.3525 3.09077 11.7006 3.34905L11.8003 3.43515C12.1474 3.7824 12.1474 4.34542 11.8003 4.69267L7.05897 9.43502C6.71179 9.78228 6.14891 9.78228 5.80173 9.43502L1.06044 4.69264L1.06044 4.69266Z"
              fill="#FC9749"
            ></path>
          </svg>
        </div>
      </div>
      <div class="contentTitle">
        <div class="left">
          <img
            style="width: 16px; height: 16px"
            src="../../../assets/yes.png"
            alt=""
          />
          <span>推荐38款商品（1,344件库存）</span>
        </div>
        <div class="rec"><span>推荐6,921人</span></div>
      </div>
      <div class="detail">
        <li class="item">
          <div class="tit"><span>畅销</span></div>
          <div class="line">
            <img
              style="width: 139px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span>12款</span></div>
        </li>
        <li class="item">
          <div class="tit"><span>重要价值</span></div>
          <div class="line">
            <img
              style="width: 169px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span></span></div>
        </li>
        <li class="item">
          <div class="tit"><span>滞销</span></div>
          <div class="line">
            <img
              style="width: 90px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span>5款</span></div>
        </li>
        <li class="item">
          <div class="tit"><span>重要挽留</span></div>
          <div class="line">
            <img
              style="width: 60px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span>1300人</span></div>
        </li>
        <li class="item">
          <div class="tit"><span>平销</span></div>
          <div class="line">
            <img
              style="width: 151px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span>15款</span></div>
        </li>
        <li class="item">
          <div class="tit"><span>一般价值</span></div>
          <div class="line">
            <img
              style="width: 105px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span>1800人-2000人</span></div>
        </li>
        <li class="item">
          <div class="tit"><span>一般挽留</span></div>
          <div class="line">
            <img
              style="width: 51px; height: 10px"
              src="../../../assets/tiao.png"
              alt=""
            />
          </div>
          <div class="people"><span>821人</span></div>
        </li>
      </div>
      <div class="capsule2">
        查看方案明细<svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="12.86566162109375"
          height="12.869234085083008"
          viewBox="0 0 12.86566162109375 12.869234085083008"
          fill="none"
        >
          <path
            d="M4.69269 11.8088C4.34543 12.156 3.78242 12.156 3.43517 11.8088C3.08791 11.4616 3.08791 10.8987 3.43517 10.5516L7.54839 6.43888L3.43518 2.32619C3.11949 2.01058 3.0908 1.51672 3.34908 1.16868L3.43518 1.06897C3.78243 0.721802 4.34545 0.721802 4.6927 1.06897L9.43505 5.81026C9.78231 6.15744 9.78231 6.72032 9.43505 7.0675L4.69267 11.8088L4.69269 11.8088Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div class="angle">按店推荐</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aiContainer {
  position: relative;
  width: 719px;
  height: 343px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);

  .content {
    margin-top: 30px;
    width: 100%;
    height: 250px;
    .contentTitle:last-child {
      margin-top: 20px;
    }
    .contentTitle {
      margin-left: 56px;
      height: 32px;
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .capsule1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 92px;
        height: 32px;
        opacity: 1;
        border-radius: 103px;
        background: rgba(255, 248, 242, 1);

        border: 1px solid rgba(252, 151, 73, 1);

        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 19.6px;
        color: rgba(252, 151, 73, 1);
      }
      .rec {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 22.4px;
        color: rgba(10, 31, 55, 0.6);
      }
    }
    .detail {
      margin-top: 19px;
      margin-left: 77px;
      display: grid;
      gap: 13px;
      grid-template-columns: repeat(2, 1fr);
      .item {
        display: flex;
        gap: 10px;

        align-items: center;
      }
    }
    .angle {
      top: 0;
      right: 0;
      position: absolute;
      width: 99px;
      height: 36px;
      opacity: 1;
      border-radius: 0px 4px 0px 16px;
      background: rgba(112, 135, 250, 1);

      font-size: 16px;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 36px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
    .capsule2 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      position: absolute;
      bottom: 15px;
      left: 292px;
      width: 127px;
      height: 36px;
      opacity: 1;
      border-radius: 103px;
      background: rgba(252, 151, 73, 1);

      border: 1px solid rgba(252, 151, 73, 1);

      font-size: 14px;
      font-weight: 400;

      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
