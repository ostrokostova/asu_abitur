<template>
  <div class="success-message">
    <h2>Спасибо</h2>
    <p>Ваше сообщение отправлено.</p>
    <button @click="redirect">
      Закрыть
    </button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const redirect = () => {
  router.push({path: '/'})
}
</script>

<style scoped>
.success-message {
  width: 350px;
  height: 200px;
  padding: 15px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.success-message button{
  color: #FFFFFF;
  background-color: #0084FF;
  height: 30px;
  width: 80px;
  border: none;
  outline: none;
}
</style>
