<template>
  <div class="breadcrumbs">
    <div class="wrapper ">
      <div class="items">
        <router-link class="link" to="/">Главная</router-link>
        <router-link class="link" v-for="link in links" :to="link.url" :key="link.name">
          {{link.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  links: Array
})

</script>

<style scoped>
.breadcrumbs{
  background-color: #0084FF;
  padding: 10px;
}
.items {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 30px;
}
@media (max-width: 600px) {
  .items{
    flex-direction: column;
    gap: 5px;
    align-items: start;
  }
}
.items .link {
  position: relative;
  color:white;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  text-align: left;
}
.items .link:after {
  position: absolute;
  right: -20px;
  margin-top: 1px;
  content: '>';
}
.items .link:last-child:after{
  display: none;
}
</style>
