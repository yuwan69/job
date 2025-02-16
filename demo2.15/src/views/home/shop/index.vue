<script setup lang="ts" name="">
import iconTitle from "../../../components/title/index.vue";
import shopImg from "../../../assets/shop.png";
// const shopImg = ref("../../../assets/shop.png")
</script>

<template>
  <div class="shopContainer">
    <iconTitle
      :img="shopImg"
      :title="'店'"
      :describe="'选择门店，圈定人货范围，按店开展营销'"
    />
    <div class="map">
      <img src="../../../assets/map.png" alt="" />
      <span>主要区域：广州</span>
    </div>

    <ul class="shopGrid">
      <li>
        <span>已选门店</span>
        <span>23</span>
      </li>
      <li>
        <span>活跃会员数</span>
        <span>232,300</span>
      </li>
      <li>
        <span>平均月销售额</span>
        <span>￥222,423</span>
      </li>
      <li>
        <span>平均售磬率</span>
        <span>45%</span>
      </li>
      <li>
        <span>客单价</span>
        <span>￥34,544</span>
      </li>
    </ul>

    <div class="capsule">导入内容</div>
    <div class="logo">
      <span>圈选店人货</span
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="20"
        height="20"
        class="icon"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M11.5835 4.58334L11.5835 2.5L13.1668 4.16666L15.8335 6.75L14.8335 7.75L13.2502 6.16666L13.2502 17.5L11.6668 17.5L11.6668 4.58334L11.5835 4.58334ZM9.16682 15.5L9.16682 17.5L7.5835 15.8333L5.00016 13.25L6.00016 12.25L7.5835 13.8333L7.5835 2.5L9.16682 2.5L9.16682 15.5Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shopContainer {
  position: relative;
  margin-top: 16px;
  margin-left: 30px;
  width: 1082px;
  height: 193px;
  opacity: 1;
  border-radius: 8px;
  background: rgba(252, 253, 255, 1);

  border: 1px solid rgba(189, 209, 255, 1);
  .map {
    display: flex;
    position: absolute;
    align-items: center;
    top: 34px;
    left: 739px;
    /** 文本1 */
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22.4px;
    color: rgba(10, 31, 55, 1);
    text-align: left;
    vertical-align: top;

    img {
      width: 20px;
      height: 20px;
    }
  }
  .shopGrid {
    margin-left: 38px;
    margin-top: 40px;
    height: 75px;

    width: 1000px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    li span:nth-child(1) {
      /** 文本1 */
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 22.4px;
      color: rgba(10, 31, 55, 0.6);
      text-align: left;
      vertical-align: top;
    }
    li span:nth-child(2) {
      /** 文本1 */
      margin-top: 13px;
      font-size: 30px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.9);
      text-align: left;
      vertical-align: top;
    }
  }
  .capsule {
    position: absolute;
    right: 28px;
    top: 97px;
    width: 94px;
    height: 32px;
    line-height: 32px;
    text-align: center;

    border-radius: 87px;
    background: rgba(255, 248, 242, 1);

    border: 1px solid rgba(252, 151, 73, 1);

    /** 文本1 */
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;

    color: rgba(252, 151, 73, 1);
  }
  .logo {
    position: absolute;
    right: 0;
    top: 0;
    width: 134px;
    height: 36px;
    opacity: 1;
    border-radius: 0px 8px 0px 16px;
    background: rgba(112, 135, 250, 1);
    color: #fff;
    line-height: 36px;
    font-size: 16px;
    font-weight: 500;

    text-align: center;
    .icon {
      position: absolute;
      margin-top: 7px;
    }
  }
}
</style>
