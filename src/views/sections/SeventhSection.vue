<template>
  <div class="seventh-wrapper">
    <div class="wrapper">
      <div class="title-section">
        СТУДЕНЧЕСКАЯ ЖИЗНЬ
      </div>
      <div class="subtitle-1">
        Молодые, творческие, спортивные – это все про студентов Рубцовского института (филиал) АлтГУ!
      </div>
      <div class="slider">
        <swiper
            :space-between="30"
            :slides-per-view="'auto'"
            :modules="modules"
            :navigation="true"
        >
          <swiper-slide v-for="i in 5" :key="i" class="slide">
            <div >
              <div class="image">
                <img :src="getUrl(6-i)" alt="">
              </div>
              <div class="title">
                {{info[5-i]['name']}}
              </div>
              <div class="description">
                {{info[5-i].description}}
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from "vue";
const getUrl = (url) => {
  return require(`@/assets/seventhsection/${url}.jpg`)
}
const info = ref([
  {
    name: 'Студенческие мероприятия',
    description: 'Выпуск ежемесячной газеты «Университет», Торжественная линейка «День знаний», Торжественное вручение дипломов'
  },
  {
    name: 'Спортивные секции',
    description: 'Волейбол (девушки, юноши)'
  },
  {
    name: 'Творческие коллективы',
    description: 'Вокальная студия «Приматон»'
  },
  {
    name: 'Клубные объединения',
    description: 'Движение КВН'
  },
  {
    name: 'Штаб трудовых дел',
    description: 'ССО «Эйдос», СПО  «Созвездие», ССО «Кристалл», ТОП «Восход» СЭО «Атлас»'
  },
])
const modules = ref([Pagination, Navigation, Autoplay])
</script>

<style scoped lang="scss">
.seventh-wrapper {
  padding: 45px 0;
  background-color: white;
}
.slide {
  width: 370px;
  height: 395px;
  padding: 15px 20px;
  border: 1px solid #0084FF;
}

.slide .title {
  margin-top: 20px;
  font-size: 16px;
  text-align: left;
  color: #0084FF;
}

.slide .description {
  margin-top: 10px;
  text-align: justify;
  font-size: 14px;
  color: #9A9EA1;
}
</style>
