<template>
  <div class="header">
    <MainLogo />
    <div class="navigation">
      <PageHeaderMenu />
    </div>
  </div>
</template>

<script setup>
import MainLogo from "@/components/MainLogo";
import PageHeaderMenu from "@/components/PageHeaderMenu";

</script>

<style scoped>
.header{
  padding-top: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1200px) {
  .header{
    display: none;
  }
}

</style>
