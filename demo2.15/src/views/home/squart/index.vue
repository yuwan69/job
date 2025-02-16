<script setup lang="ts" name="">
import iconTitle from "../../../components/title/index.vue";
import squartImg from "../../../assets/squat.png";
</script>

<template>
  <div class="squartContainer">
    <iconTitle
      :img="squartImg"
      :title="'场'"
      :describe="'营销活动配置'"
    ></iconTitle>
    <div class="box">
      <li class="active"><span>活动</span></li>
      <li><span>互动</span></li>
      <li><span>内容</span></li>
    </div>
    <div class="imageBox">
      <li>
        <img src="../../../assets/image10.png" alt="" />
        <span>权益</span>
      </li>
      <li>
        <img src="../../../assets/image2.png" alt="" />
        <span>优惠券</span>
      </li>
      <li>
        <img src="../../../assets/image3.png" alt="" />
        <span>促销</span>
      </li>
      <li>
        <img src="../../../assets/image4.png" alt="" />
        <span>常态化</span>
      </li>
      <li>
        <img src="../../../assets/image5.png" alt="" />
        <span>引流到店</span>
      </li>
    </div>
    <div class="angle">精准营销</div>
  </div>
</template>

<style scoped lang="scss">
.squartContainer {
  position: relative;
  top: 22px;
  left: 23px;
  width: 670.94px;
  height: 232px;
  opacity: 1;
  border-radius: 8px;
  background: rgba(252, 253, 255, 1);

  border: 1px solid rgba(189, 209, 255, 1);
  .box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;

    margin-top: 27px;
    margin-left: 144px;
    margin-bottom: 13px;
    width: 316px;
    height: 30px;

    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
    color: rgba(10, 31, 55, 0.3);
    border: 1px solid rgba(199, 208, 255, 1);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 30px;
    text-align: center;
    .active {
      background: rgba(112, 135, 250, 1);
      color: #fff;
    }
  }
  .imageBox {
    margin-left: 84px;
    display: flex;
    gap: 63px;
    li {
      display: flex;
      flex-direction: column;
      list-style: none;
      justify-content: center;
      align-items: center;
      gap: 15px;
      font-size: 14px;
      font-weight: 400;

      color: rgba(0, 0, 0, 0.3);
    }
    li img {
      width: 50px;
      height: 50px;
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
}
</style>
