<template>
  <div class="menu-item" :class="['open-dropdown'+id]">
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px" :class="['open-dropdown'+id]" @click="isOpen = !isOpen">
      <router-link class="main-link" to="#">
        {{ title }}
      </router-link>
      <svg viewBox="0 0 1030 638" width="10" :class="['open-dropdown'+id]" >
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#0084FF"></path>
      </svg>
    </div>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <router-link :to="item.link" class="link">{{ item.name }}</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import {ref, defineProps, onMounted} from "vue";
  onMounted(() => {
    window.addEventListener('click', function(e){
      if (! e.target.parentNode.classList.contains('open-dropdown'+props.id))
      {
        isOpen.value = false
      }
    }, false)
  })
  const props = defineProps({
    title: String,
    items: Array,
    id: String
  })
  const isOpen = ref(false)
</script>

<style>
nav .menu-item svg {
}
nav .menu-item .sub-menu {
  position: absolute;
  top: calc(100% + 18px);
  left: 0;
  width: 250px;
  text-decoration: none;
}
.menu-item .link {
  color: #0084FF;
  background-color: #fafafa;
  text-decoration: none;
  border: 1px solid #0084FF;
  width: 345px;
  height: 40px;
  line-height: 40px;
  margin-top: -5px;
  text-align: left;
  padding-left: 5px;
}
.menu-item .link:hover{
  color: #ffffff;
  background-color: #FF5652;
  text-decoration: none;
  border-bottom-color: #FF5652;
  border-top-color:#FF5652;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
