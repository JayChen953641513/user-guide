

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
interface Props {
  x: string | number;
  y: string | number;
  width: string | number;
  height: string;
  tips?: string;
  prevTxt?: string;
  nextTxt?: string;
}
const guideIndex = ref<number>(0);
const guidePrev = () => {
  if (guideIndex.value !== 0) {
    --guideIndex.value;
  }
};
const guideNext = () => {
  ++guideIndex.value;
};
const guideConfig: Props[] = [
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
    tips: "四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四",
    prevTxt: "上一步",
    nextTxt: "继续",
  },
  {
    x: "calc(75vw - 10px)",
    y: "10px",
    width: "25vw",
    height: "16vw",
    tips: "五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五",
    prevTxt: "上一步",
    nextTxt: "继续",
  },
  {
    x: "0px",
    y: "30px",
    width: "0px",
    height: "0px",
    tips: "六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六六",
    prevTxt: "上一步",
    nextTxt: "我知道了",
  },
];
</script>
<style scoped>
</style>
