<template>
  <div class="own-choice-bachelor">
    <div class="wrapper">
      <div class="subtitle-1">
        НАПРАВЛЕНИЯ ПОДГОТОВКИ ВЫСШЕГО ОБРАЗОВАНИЯ
      </div>
      <div class="title-section">
        СДЕЛАЙ СВОЙ ВЫБОР
      </div>
      <div class="subtitle-2">
        Рубцовский институт - ВУЗ больших возможностей!
      </div>
      <div class="specialities-items">
        <router-link
            class="speciality-item"
            v-for="(item, i) in bachelor"
            :to="item.link"
            :key="i"
        >
          <div class="ellipse">
            <img class="icon" :src="getImgUrl(item.iconLink)" alt="">
          </div>
          <h5 v-html="item.title"></h5>
        </router-link>
      </div>
    </div>
  </div>
  <div class="own-choice-spo">
    <div class="wrapper">
      <div class="subtitle-1">
        СПЕЦИАЛЬНОСТИ СРЕДНЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ
      </div>
      <div class="title-section">
        СДЕЛАЙ СВОЙ ВЫБОР
      </div>
      <div class="subtitle-2">
        Рубцовский институт - ВУЗ больших возможностей!
      </div>
      <div class="specialities-items">
        <router-link class="speciality-item" style="width: 300px" v-for="(item, i) in spo" :to="item.link" :key="i">
          <div class="ellipse">
            <img class="icon" :src="getImgUrl(item.iconLink)" alt="">
          </div>
          <h5 v-html="item.title"></h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const getImgUrl  = function (url) {
  return require(`@/assets/${url}`)
}
const  bachelor = ref([
  {
    iconLink: 'fortysection/1.png',
    title: 'Государственное и муниципальное управление',
    link: '/educationprogram/bachelor/gmu'
  },
  {
    iconLink: 'fortysection/2.png',
    title: 'Прикладная </br> информатика',
    link: '/educationprogram/bachelor/pi'
  },
  {
    iconLink: 'fortysection/3.png',
    title: 'Педагогическое </br> образование',
    link: '/educationprogram/bachelor/ped'
  },
  {
    iconLink: 'fortysection/4.png',
    title: 'Реклама и связи с общественностью',
    link: '/educationprogram/bachelor/reklama'
  },
  {
    iconLink: 'fortysection/5.png',
    title: 'Психология',
    link: '/educationprogram/bachelor/psich'
  },
  // {
  //   iconLink: 'fortysection/6.png',
  //   title: 'Менеджмент',
  //   link: ''
  // },
  {
    iconLink: 'fortysection/7.png',
    title: 'Экономика',
    link: '/educationprogram/bachelor/econom'
  },
  {
    iconLink: 'fortysection/8.png',
    title: 'Юриспруденция',
    link: '/educationprogram/bachelor/yris'
  },
])

const spo = ref([
  {
    iconLink: 'fivesection/1.png',
    title: 'Земельно-имущественные отношения',
    link: '/educationprogram/spo/zi'
  },
  {
    iconLink: 'fivesection/2.png',
    title: 'Информационные системы и программирование',
    link: '/educationprogram/spo/is'
  },
  {
    iconLink: 'fivesection/4.png',
    title: 'Правоохранительная деятельность',
    link: '/educationprogram/spo/pd'
  },
  {
    iconLink: 'fivesection/3.png',
    title: 'Экономика и бухгалтерский учет (по отраслям) (в промышленности, бюджетных отраслях)',
    link: '/educationprogram/spo/e'
  },
  {
    iconLink: 'fivesection/5.png',
    title: '</br> Финансы </br> </br></br>',
    link: '/educationprogram/spo/f'
  },
])
</script>

<style scoped>
.own-choice-bachelor{
  padding-top: 40px;
  padding-bottom: 32px;
  background: rgba(0, 132, 255, 0.07);
  text-align: center;
}
.own-choice-spo{
  padding-top: 40px;
  padding-bottom: 32px;
  background-image: url("~@/assets/background.svg");
  background-size: contain;
  text-align: center;
}
.specialities-items{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  row-gap: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.speciality-item{
  position: relative;
  width: 274px;
  height: 220px;
  border: 1px solid #9A9EA1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  line-height: 20px;
  padding: 20px 0;
  transition: .6s;
}
.speciality-item h5{
  color: #9A9EA1;
}
a{
  text-decoration: none;
  color: #9A9EA1 !important;
}
.ellipse{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #9A9EA1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.speciality-item:hover h5{
  color: #0084FF;
}
.speciality-item:hover {
  border-color: #0084FF;
  color: #0084FF !important;
  border-radius: 10px 25px 10px 45px;
  cursor: pointer;
}
.speciality-item:hover .ellipse {
  background-color: #0084FF;
}

.speciality-item:hover .ellipse {
  animation: animation-ellipse .7s ease-in-out;
}

@keyframes animation-ellipse {
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0);
  }
}
.icon{
  width: 70%;
  height: auto;
}
</style>
