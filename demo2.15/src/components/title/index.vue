<script setup lang="ts" name="">
defineProps({
  //图片名称
  img: {
    type: String,
    default: "",
  },
  //字
  title: String,
  //描述
  describe: {
    type: String,
  },
});
</script>

<template>
  <div class="titleContainer">
    <div class="icon">
      <img :src="img" alt="" />
    </div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="detail">
      <span style="scale: 0.6; display: inline-block">— </span>
      <span>{{ describe }}</span>
      <div class="underline"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.titleContainer {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .icon {
    margin-top: 29px;
    margin-left: 38px;
    img {
      width: 34px;
      height: 34px;
    }
  }
  .title {
    margin-top: 25px;
    margin-left: 7px;

    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 39.2px;
    color: rgba(10, 31, 55, 1);
    text-align: left;
    vertical-align: top;
  }
  .detail {
    position: relative;
    margin-left: 7px;
    margin-top: 31px;

    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 25.2px;
    color: rgba(10, 31, 55, 1);
    text-align: left;
    vertical-align: top;

    .underline {
      position: absolute;
      bottom: 0;
      width: 103%;
      height: 14px;
      opacity: 1;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(186, 198, 255, 0) 20.18%,
        rgba(179, 191, 255, 1) 100%
      );
    }
  }
}
</style>
