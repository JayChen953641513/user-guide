<!--用户引导组件-->
<template>
  <div class="userGuideContent">
    <div
      class="mask"
      :style="{ height: y, width: '100%', left: 0, top: 0 }"
    ></div>
    <div class="mask" :style="{ height, width: x, left: 0, top: y }"></div>
    <div
      class="mask"
      :style="{
        height,
        width: `calc(100% - ${x} - ${width})`,
        left: `calc(${x} + ${width})`,
        top: y,
      }"
    ></div>
    <div
      class="mask"
      :style="{
        height: `calc(100% - ${height} - ${y})`,
        width: '100%',
        left: 0,
        top: `calc(${y} + ${height})`,
      }"
    ></div>
    <div
      class="guideTxt"
      :style="{
        top: `calc(${y} + ${height})`,
      }"
    >
      {{ tips }}
    </div>
    <div class="toolsBox">
      <div
        @click="prev"
        :style="{
          visibility: prevTxt === '' ? 'hidden' : undefined,
        }"
      >
        {{ prevTxt }}
      </div>
      <div
        @click="next"
        :style="{
          visibility: nextTxt === '' ? 'hidden' : undefined,
        }"
      >
        {{ nextTxt }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(["prev", "next"]);
defineProps({
  x: { type: String, require: true },
  y: { type: String, require: true },
  width: { type: String, require: true },
  height: { type: String, require: true },
  tips: { type: String, default: "" },
  prevTxt: { type: String, default: "上一步" },
  nextTxt: { type: String, default: "下一步" },
});
const prev = () => {
  emit("prev");
};
const next = () => {
  emit("next");
};
</script>
<style scoped>
.userGuideContent {
  position: fixed;
  inset: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
}
.userGuideContent .mask {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
}
.userGuideContent .guideTxt {
  position: absolute;
  width: 100%;
  color: skyblue;
  padding: 10px;
  box-sizing: border-box;
}
.userGuideContent .toolsBox {
  position: absolute;
  bottom: 5%;
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.userGuideContent .toolsBox div {
  border: 1px solid skyblue;
  color: skyblue;
  border-radius: 20px;
  width: 40%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>