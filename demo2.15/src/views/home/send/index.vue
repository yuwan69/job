<script setup lang="ts" name="">
import iconTitle from "../../../components/title/index.vue";
import sendImg from "../../../assets/send.png";
</script>

<template>
  <div class="sendContainer">
    <iconTitle
      :img="sendImg"
      :title="'触达'"
      :describe="'多点触达提高转化率'"
    ></iconTitle>
    <div class="imageBox">
      <li class="active">
        <img src="../../../assets/image6.png" alt="" />
        <span>导购任务</span>
      </li>
      <li>
        <img src="../../../assets/image7.png" alt="" />
        <span>企微群发</span>
      </li>
      <li>
        <img src="../../../assets/image3.png" alt="" />
        <span>订阅消息</span>
      </li>
      <li>
        <img src="../../../assets/image9.png" alt="" />
        <span>短信</span>
      </li>
      <li>
        <img src="../../../assets/image5.png" alt="" />
        <span>智能触达</span>
      </li>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sendContainer {
  position: relative;
  top: 39px;
  left: 22px;
  width: 670.94px;
  height: 212px;
  opacity: 1;
  border-radius: 8px;
  background: rgba(252, 253, 255, 1);

  border: 1px solid rgba(189, 209, 255, 1);

  .imageBox {
    margin-left: 84px;
    margin-top: 42px;
    display: flex;
    gap: 53px;
    left: 1528.33px;

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
    .active {
      font-size: 14px;
      font-weight: 550;
      letter-spacing: 0px;
      line-height: 19.6px;
      color: rgba(10, 31, 55, 1);
      text-align: left;
      vertical-align: top;
    }
  }
}
</style>
