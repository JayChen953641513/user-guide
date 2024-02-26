

<template>
  <UserGuide
    v-if="guideIndex < guideConfig.length"
    :x="guideConfig[guideIndex].x"
    :y="guideConfig[guideIndex].y"
    :width="guideConfig[guideIndex].width"
    :height="guideConfig[guideIndex].height"
    :tips="guideConfig[guideIndex].tips"
    :prevTxt="guideConfig[guideIndex].prevTxt"
    :nextTxt="guideConfig[guideIndex].nextTxt"
    @prev="guidePrev"
    @next="guideNext"
  />
  
</template>
<script setup lang="ts">
import { ref } from "vue";
import UserGuide from "./components/UserGuide.vue";
const guideIndex = ref<number>(0);
const guidePrev = () => {
  if (guideIndex.value !== 0) {
    --guideIndex.value;
  }
};
const guideNext = () => {
  ++guideIndex.value;
};
const guideConfig = [
  {
    x: "0px",
    y: "30px",
    width: "0px",
    height: "0px",
    tips: "这是引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一引导用语一",
    prevTxt: "",
    nextTxt: "继续",
  },
  {
    x: "10px",
    y: "10px",
    width: "25vw",
    height: "16vw",
    tips: "引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2引导用语2",
    prevTxt: "上一步",
    nextTxt: "继续",
  },
  {
    x: "26vw",
    y: "10px",
    width: "25vw",
    height: "16vw",
    tips: "引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3引导语3",
    prevTxt: "上一步",
    nextTxt: "继续",
  },
  {
    x: "49vw",
    y: "10px",
    width: "25vw",
    height: "16vw",
    tips: "4444444444444444444444444444444444444444444444444444444444444444444444444444444444444",
    prevTxt: "上一步",
    nextTxt: "继续",
  },
  {
    x: "calc(75vw - 10px)",
    y: "10px",
    width: "25vw",
    height: "16vw",
    tips: "5555555555555555555555555555555555555555555555555555555555555555555555555",
    prevTxt: "上一步",
    nextTxt: "继续",
  },
  {
    x: "0px",
    y: "30px",
    width: "0px",
    height: "0px",
    tips: "666666666666666666666666666666666666666666666666666666666666666666666",
    prevTxt: "上一步",
    nextTxt: "我知道了",
  },
];
</script>
<style scoped>
</style>
