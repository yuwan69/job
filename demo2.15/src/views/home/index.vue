<script setup lang="ts" name="home">
import shop from "./shop/index.vue";
import goods from "./goods/index.vue";
import person from "./person/index.vue";
import ai from "./ai/index.vue";
import squart from "./squart/index.vue"
import send from "./send/index.vue"
import { ref } from "vue";
//左右切换flag
const swap =  ref(true)
const changeSwap = ()=>{
    swap.value = !swap.value
}

//自选或者AI flga
const btnFlag = ref(2);
const changeOpt = (index: number) => {
  btnFlag.value = index;
  console.log(btnFlag.value);
};

// 加载flag
let timer:any = null
const isLoading = ref(false) // 是否正在加载
const isLoaded = ref(false)  // 是否加载完成
const startLoading = ()=>{
    if (timer) return //存在就退出
     // 重置状态
  isLoading.value = false
  isLoaded.value = false

  // 延迟0.3s进入加载中状态
  timer = setTimeout(() => {
    isLoading.value = true

    // 再延迟0.3s进入加载完成状态
    setTimeout(() => {
      isLoading.value = false
      isLoaded.value = true
      timer = null
    }, 300)
  }, 300)
}


</script>

<template>
  <div class="container">
    <div class="leftInner">
      <shop></shop>
      <img src="../../assets/arrow.png" class="arrow"></img>
      
      <div class="goodsAndPeople" >
         
        <goods class="goods"  :style="{ transform: swap ? 'translateX(-100%)' : 'translateX(0)'}" />
        <person :btnFlag="btnFlag" class="person" :style="{ transform: swap ?  'translateX(100%)':'translateX(0)' }" />
  
        <div class="line" v-if="btnFlag===2"></div>
        <img src="../../assets/reverse.png" @click="changeSwap" class="reverse" alt="" />
        <div class="dash"></div>
      </div>
     
      <div
      class="aioptBtn"
      :class="{ active: btnFlag === 1 }"
      @click="changeOpt(1)"
    >
      <div class="dot">
        <div class="innerDot"></div>
      </div>
      <span>AI选</span>
    </div>
    <div
      class="selfoptBtn"
      :class="{ active: btnFlag === 2 }"
      @click="changeOpt(2)"
    >
      <div class="dot">
        <div class="innerDot"></div>
      </div>
      <span>自选</span>
    </div>
    </div>
    <div class="rightInner">
        <ai/>
        <img src="../../assets/arrow.png" class="arrow2"></img>
        <div class="squartAndSend">
            <squart style="margin-top: 22px;"/>
            <send/>
        </div>
    </div>
    <div class="toAi">
        <div v-if="isLoading ===false && isLoaded ===false" class="pipei" @click="startLoading">
            <span>匹配</span>
        </div>
        
    <transition name="fade">
        <div v-if="isLoading ===true && isLoaded ===false" class="loading">
            <img src="../../assets/ai.png" alt="">
        </div>
    </transition>
   
    <transition name="fade">
        <div v-if="isLoaded ===true && isLoading===false" class="success">
            <span>></span>

        </div>
    </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: rgba(232, 237, 255, 1);
  .leftInner {
    margin-left: 16px;
    margin-top: 12px;
    width: 1142px;
    height: 884px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);

    .goodsAndPeople {
        position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      overflow: hidden; 
      margin-left: 30px;
      margin-top: 16px;
      width: 1082px;
      height: 636px;
      border-radius: 8px;
      background: rgba(252, 253, 255, 1);
      border: 1px solid rgba(189, 209, 255, 1);
      
        .goods{
        
            position: absolute;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);transform: translateX(0); 
            left: 50%;
        }
        .person{
            position: absolute;transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);transform: translateX(100%);
          
           
            left: 0%;
        }
      .line {
        position: fixed;
        left: 0;
        top: 327px;
        width: 593px;
        height: 14px;
        opacity: 1;
        border-right: 1px solid rgba(145, 145, 145, 1);

        border-top: 1px solid rgba(145, 145, 145, 1);
      }
      .reverse {
        position: fixed;
        z-index: 999;
        top: 351px;
        left: 563px;

        width: 60px;
        height: 60px;
      }
      .dash {
        position: fixed;
        left: 593px;
        top: 418px;
        width: 0px;
        height: 369.5px;

        border: 1.5px dashed rgba(201, 201, 201, 1);
      }
    }
   
    .arrow{
        z-index: 999;
        position: absolute;
        width: 35px;
        top: 211px;
        left: 565px;
        height: 46px;
    }
    .aioptBtn {
    position: absolute;
    left: 1041px;
    top: 370px;
    display: flex;
    cursor: pointer;
  }
  .selfoptBtn {
    left: 1041px;
    top: 415px;
    position: absolute;
    display: flex;
    cursor: pointer;
  }
  .dot {
    transition: all 0.3s;
    width: 14px;
    height: 14px;
    margin-right: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid rgba(176, 176, 176, 1);
    .innerDot {
      width: 90%;
      height: 90%;

      border-radius: 50%;
    }
  }
  .active {
    .dot {
      transform: scale(0.8);
      /* scale: 0.9; */
      border: 1px solid rgba(37, 207, 130, 1);
    }

    .innerDot {
      background: rgba(37, 207, 130, 1);
      width: 90%;
      height: 90%;
    }
    span {
      text-decoration-line: underline;
      color: rgba(37, 207, 130, 1);
    }
  }
  }
  .rightInner {
    margin-top: 12px;
    margin-right: 16px;
    width: 719px;
    height: 884px;
    .arrow2{
        z-index: 999;
        position: fixed;
        width: 50px;
        top: 347px;
        right: 352px;
        height: 50px;
    }
   .squartAndSend{
    margin-top: 33px;
width: 719px;
height: 508px;

border-radius: 4px;
background: rgba(255, 255, 255, 1);

   }
  }
  .toAi{
    /* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    transform: translateY(30px);;
}
    position: absolute;
    top: 178px;
    right: 693px;

width: 94px;
height: 94px;

.pipei{
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    background: linear-gradient(208.59deg, rgba(253, 150, 74, 1) 0%, rgba(255, 231, 181, 1) 100%);
box-shadow: 0px 2px 4px 2px rgba(247, 161, 47, 0.38);

font-size: 30px;
font-weight: 500;

color: rgba(189, 84, 23, 1);


}
.loading{
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    border: 1px solid orange;
    background: linear-gradient(208.59deg, rgb(248, 208, 179) 0%, rgba(255, 231, 181, 1) 100%);
box-shadow: 0px 2px 4px 2px rgba(247, 161, 47, 0.38);
img{
    width: 70px;
}
}
.success{
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    background: linear-gradient(208.59deg, rgba(253, 150, 74, 1) 0%, rgba(255, 231, 181, 1) 100%);
box-shadow: 0px 2px 4px 2px rgba(247, 161, 47, 0.38);

font-size: 50px;
font-weight: 700;

color: rgba(189, 84, 23, 1);
}
  }
}
</style>
