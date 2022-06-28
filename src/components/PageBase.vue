<template>
  <div class="page">
    <div class="wrapper" >
      <PageHeader />
    </div>
    <div class="breadcrumbs-wrapper">
      <Breadcrumbs :links="links"/>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="title">
          <div>
            <div class="quat">

            </div>
          </div>
          <div style="height: 100%; display: flex; align-items: center">
            {{title}}
          </div>
        </div>
        <div class="page-main-content">
          <slot name="content">

          </slot>
        </div>
      </div>
    </div>
    <div style="margin-top: 50px">
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import Breadcrumbs from "@/components/PageBreadcrumbs";
import PageHeader from "@/components/PageHeader";
import FooterSection from "@/views/sections/FooterSection";

defineProps({
  links: Array,
  title: String
})

</script>

<style scoped>
.page{
  background-image: url("~@/assets/background.svg");
  background-size: contain;
}
.breadcrumbs-wrapper {
  margin-top: 50px;
}
.title{
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 24px;
  line-height: 32px;
  color: #0084FF;
  text-align: left;
  font-weight: 700;
  min-height: 60px;
}
.quat{
  position: absolute;
  left: 0;
  top: 0;
  width: 22px;
  height: 100%;
  background-color: #0084FF;
}
p{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  text-align: left;
}
.page-main-content{
  margin-top: 20px;
}
</style>
