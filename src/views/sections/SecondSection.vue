<template>
  <div class="navigation-abiturient">
    <div class="wrapper">
      <h5 class="subtitle">Рубцовский  институт (филиал) АлтГУ</h5>
      <h3 class="title">Навигация для абитуриента</h3>
      <div class="items">
        <router-link :to="links[i - 1]" class="item" v-for="i in 6" :key="i">
          <div class="icon-wrapper">
            <div class="ellipse">
              <div class="icon">
                <img :src="getUrl(i)" alt="">
              </div>
            </div>
          </div>
          <h4 class="item-title" v-html="items[i-1]"></h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const items = ref([
    'Личный кабинет <br> абитуриента',
    'Калькулятор <br> ЕГЭ',
    'Опросник для <br> абитуриента',
    'Платное <br> образование',
    'Стипендия и <br> материальная <br> поддержка',
    'Целевое <br> обучение'
])

const links = ref([
  'https://lk.abiturient.asu.ru/sandbox/index',
  '/calc',
  '/questions',
  '/paidedu',
  '/grants',
  '/target',
])
const getUrl = (url) => {
  return require(`@/assets/navigationabitur/${url}.png`)
}
</script>

<style scoped>
.navigation-abiturient{
  background-color: rgba(0,132,255,0.07);
  padding-top: 25px;
  padding-bottom: 100px;
}
.subtitle{
  font-size: 1rem;
  color: #929292;
}
.title{
  font-size: 40px;
  color: #FF5652;
}
.items{
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 100px;
  justify-content: center;
}
.item{
  width: 370px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 50px;
  gap: 15px;
  text-decoration: none;
}
@media (max-width: 800px) {
  .items{
    row-gap: 50px;
  }
}
.icon-wrapper{
  width: 150px;
}
.ellipse {
  position: relative;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background-color: rgba(0, 132, 255, .95);
}
.icon img {
  position: absolute;
  top: 12px;
  left: 54px;
  width: 84px;
  height: 84px;
  z-index: 10;
}

.item-title{
  font-size: 16px;
  font-weight: 400;
  color: #0084FF;
}

</style>
