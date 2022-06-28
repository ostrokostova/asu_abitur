<template>
  <div class="thirty-section">
    <div class="wrapper">
      <div class="subtitle-2">
        СДЕЛАЙ ПРАВИЛЬНЫЙ ВЫБОР
      </div>
      <div class="title-section">
        ПОЧЕМУ именно МЫ
      </div>
      <div class="subtitle-2">
        Образование для вас!
      </div>
      <div class="quality">
        <div class="quality-images">
          <img src="@/assets/3sectionbg.svg" alt="">
        </div>
        <div class="quality-items">
          <div class="quality-item" v-for="(item, i) in qualityItems" :key="i">
            <img src="@/assets/checkmark.png" alt="">
            <h4>{{item}}</h4>
          </div>
        </div>
      </div>
      <div class="education-qualitys">
        <div class="education-quality" v-for="(educationItem, i) in educationQualityItems" :key="i">
          <div class="number">
              {{educationItem.number}}
          </div>
          <div class="title" v-html="educationItem.title">
          </div>
        </div>
      </div>

      <div class="youtube">
        <swiper
            :options="options"
            :modules="modules"
            :space-between="30"
            :slides-per-view="'auto'"
            :navigation="true"
        >
          <swiper-slide v-for="i in 7" :key="i" class="slide">
            <a target="_blank" :href="videos[i-1]['url']">
              <div class="image">
                <img :src="getUrl(i)" alt="">
              </div>
              <div class="info">
                <div>

                </div>
                <a target="_blank" :href="videos[i-1]['url']">
                  смотреть
                </a>
              </div>
              <div class="title">
                {{videos[i-1]['name']}}
              </div>
              <div class="description hidden">
                {{videos[i-1]['description']}}
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue'
// import swiper module styles
import 'swiper/css'
import 'swiper/css/navigation'
const getUrl = (url) => {
  return require(`@/assets/thirdsection/${url}.jpg`)
}
const modules = ref([Navigation])

const options = ref( {
  //loop: true,
  //loopedSlides: 5, // looped slides should be the same
  spaceBetween: 30,
  centeredSlides: true,
  slidesOffsetBefore: '100px',
  slidesOffsetAfter: '100px',
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
const  videos = ref([
  {
    name: 'Открыта приемная кампания 2022-2023 учебного года',
    description: 'Рубцовский институт (филиал) АлтГУ приглашает получить образование по самым востребованным направлениям',
    url: 'https://rutube.ru/video/a99e8c82d03054c7255765a1e909aef7/'
  },
  {
    name: 'Успешные люди АГУ',
    description: 'Рубцовский институт (филиал) АлтГУ приглашает получить образование по самым востребованным направлениям',
    url: 'https://www.youtube.com/watch?v=D7uVhFTaFME&ab_channel=%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%84%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D0%90%D0%93%D0%A3'
  },
  {
    name: 'Рубцовский институт',
    description: 'Все о направлениях подготовки высшего образования и среднего профессионального образования',
    url: 'https://www.youtube.com/watch?v=G2LxF71VKk0&ab_channel=%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%84%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D0%90%D0%93%D0%A3'
  },
  {
    name: 'Кафедра ГМУ и Права',
    description: 'Все о направлениях подготовки высшего образования ГМУ и Права, реклама и Связи с общественностью, Юриспруденция расскажет и.о. заместителя директора по научной работе\n' +
        'доцент, кандидат экономических наук Савченко Юлии Юрьевны',
    url: 'https://www.youtube.com/watch?v=ZhLizTaG2vc&ab_channel=%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%84%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D0%90%D0%93%D0%A3'
  },
  {
    name: 'Кафедра Психологии и Общественных дисциплин',
    description: 'Все о направлении подготовки высшего образования Психология, Педагогическое образование расскажет заведующая кафедрой, доцент Кандидат исторических наук Ионова Татьяна Владимировна',
    url: 'https://www.youtube.com/watch?v=ZK4V-W12MKI&ab_channel=%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%84%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D0%90%D0%93%D0%A3'
  },
  {
    name: 'Кафедра Математики и Прикладной информатики',
    description: 'Все о направлении подготовки высшего образования Прикладная информатика расскажет доцент, кандидат физико-математических наук., Анисимов Константин Геннадьевич',
    url: 'https://www.youtube.com/watch?v=DBcXwq9Zvkw&ab_channel=%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%84%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D0%90%D0%93%D0%A3'
  },
  {
    name: 'Кафедра Экономики',
    description: 'Все о направлении подготовки высшего образования Экономика расскажет заведующая. кафедрой – доцент, канд.экон.наук.,  Овсянникова Анастасия Васильевна',
    url: 'https://www.youtube.com/watch?v=WPvCs6ob_LE&ab_channel=%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D1%84%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D0%90%D0%93%D0%A3'
  },
])


const qualityItems = ref([
    'Качественное образование',
    'Востребованные специальности',
    'Достойная стипендия',
    'Востребованность на рынке труда'
])

const educationQualityItems = ref([
  {
    number: 12,
    title: 'Образовательных </br> программ'
  },
  {
    number: 52,
    title: 'Бюджетных </br> места'
  },
  {
    number: 40,
    title: 'Программ </br> доп. образования'
  },
])
</script>

<style lang="scss">

.thirty-section{
  padding: 30px 0;
  background-image: url("~@/assets/background.svg");
}
.quality{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.quality-images{
  display: flex;
  justify-content: center;
  align-items: center;
}

.quality-items{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 45px;
  justify-self: end;
}
.quality-item{
  display: flex;
  gap: 20px;
  align-items: center;
}
.quality-item h4 {
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #0084FF;
  text-align: left;
}

.education-qualitys{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}
.education-quality{
  width: 200px;
}
.education-quality .number{
  font-family: ABeeZee, sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 76px;
  text-align: center;
  color: #FF5652;
}
.education-quality .title {
  font-family: ABeeZee, sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #0084FF;
}

.youtube{
  margin-top: 40px;
}
.slide{
  width: 370px;
  color: #9A9EA1;
}
.slide a {
  color: #9A9EA1;
}
.slide .info{
  margin-top: 20px;
  display: flex;
  justify-content: end;
  font-size: 16px;
  padding-right: 35px;
}
.slide .title {
  margin-top: 20px;
  font-size: 22px;
  text-align: left;
}
.slide .description {
  margin-top: 15px;
  text-align: justify;
  font-size: 18px;
}
.swiper-button-prev{
  left: -50px;
  content: 'ghtd';
}
.swiper-button-next {

}
</style>
