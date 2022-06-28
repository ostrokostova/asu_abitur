<template>
  <div class="accordion">
    <div class="header" @click="swapToggleContent">
      <div class="title">
        {{title}}
      </div>
      <div class="actions">
        <div class="btn-wrapper">
          <div class="btn" :class="{'open' : !toggleContent}" alt=""></div>
          <div  class="btn" :class="{'hide' : !toggleContent}" alt=""></div>
        </div>
      </div>
    </div>
    <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
    >
        <div class="content" v-show="toggleContent">
          <slot name="content">

          </slot>
        </div>
    </transition>
  </div>
</template>

<script setup>
import {defineProps, ref} from "vue";

defineProps({
    title: String
})

const toggleContent = ref(false)

const swapToggleContent = () => {
  toggleContent.value = !toggleContent.value
}

const start = (el) => {
  el.style.height = el.scrollHeight + "px";
}
const end = (el) => {
  el.style.height = "";
}
</script>

<style scoped>
.accordion {
  position: relative;
  margin-top: 20px;
}
.header {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0084FF;
  cursor: pointer;
}
.title{
  font-size: 16px;
  line-height: 20px !important;
  color: #ffffff;
  padding: 0 20px;
}
.content {
  background-color: #F2F4F5;
  color: #000000;
  font-size: 16px;
  text-align: left;
  padding: 10px;
  text-indent: 20px;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0;
  opacity: 0;
}
.actions {
  min-width: 50px;
}
.btn-wrapper {
  position: relative;
}
.btn {
  position: absolute;
  left: 0;
  transition: transform .5s ease-in-out;
  width: 30px;
  height: 8px;
  border-radius: 5px;
  background-color: #ffffff ;
}
.btn.hide {
  transform: rotate(90deg);
}
.btn.open {
  transform: rotate(-180deg);
}
</style>
