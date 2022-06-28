<template>
  <div>
    <PageBase :links="links" title="ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ">
        <template #content>
          <div class="title-section">
            НАПРАВЛЕНИЯ ПОДГОТОВКИ ВЫСШЕГО ОБРАЗОВАНИЯ
          </div>
          <div class="specialities-items">
            <router-link class="speciality-item" v-for="(item, i) in bachelor" :to="item.link" :key="i">
              <div class="ellipse">
                <img class="icon" :src="getImgUrl(item.iconLink)" alt="">
              </div>
              <h5 v-html="item.title"></h5>
            </router-link>
          </div>
          <div class="title-section">
            СПЕЦИАЛЬНОСТИ СРЕДНЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ
          </div>
          <div class="specialities-items">
            <router-link class="speciality-item" style="width: 300px" v-for="(item, i) in spo" :to="item.link" :key="i">
              <div class="ellipse">
                <img class="icon" :src="getImgUrl(item.iconLink)" alt="">
              </div>
              <h5 v-html="item.title"></h5>
            </router-link>
          </div>
<!--          <div CLASS="link">-->
<!--            <router-link to="/educationprogram/bachelor/ped">Педагогическое образование, профиль "Обществознание"</router-link>-->
<!--            <router-link to="/educationprogram/bachelor/pi">Прикладная информатика, профиль "Цифровые технологии и управление данными</router-link>-->
<!--            <router-link to="/educationprogram/bachelor/yris">Юриспруденция, профиль "Общеправовой"</router-link>-->
<!--            <router-link to="/educationprogram/bachelor/reklama">Реклама и связи с общественностью</router-link>-->
<!--            <router-link to="/educationprogram/bachelor/econom">ЭКОНОМИКА, ПРОФИЛЬ "ЦИФРОВАЯ ЭКОНОМИКА И ФИНАНСЫ"</router-link>-->
<!--            <router-link to="/educationprogram/bachelor/psich">ПСИХОЛОГИЯ, профиль "ОБЩАЯ ПСИХОЛОГИЯ И ПСИХОЛОГИЯ ЛИЧНОСТИ"</router-link>-->
<!--            <router-link to="/educationprogram/bachelor/gmu">Государственное и муниципальное управление, профиль "Цифровое государство"</router-link>-->
<!--          </div>-->
<!--          <div class="link">-->
<!--            <router-link to="/educationprogram/spo/zi">Земельно-имущественные</router-link>-->
<!--            <router-link to="/educationprogram/spo/pd">Правоохранительная деятельность</router-link>-->
<!--            <router-link to="/educationprogram/spo/is">Информационные системы и программирование</router-link>-->
<!--            <router-link to="/educationprogram/spo/e">Экономика и бухгалтерский учет (по отраслям)</router-link>-->
<!--            <router-link to="/educationprogram/spo/f">Финансы</router-link>-->
<!--          </div>-->
        </template>
    </PageBase>
  </div>
</template>

<script setup>
import PageBase from "@/components/PageBase";
import {ref} from "vue";

const links = ref([
  {name: 'Образовательные программы', url: '/educationprogram'}
])

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
.link{
  display: flex;
  flex-direction: column;
  gap: 10px;
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
.speciality-item:hover h5{
  color: #0084FF;
}
a{
  text-decoration: none;
  color: #9A9EA1 !important;
}
.speciality-item:hover {
  border-color: #0084FF;
  color: #0084FF;
  border-radius: 10px 25px 10px 45px;
  cursor: pointer;
}
.speciality-item:hover .ellipse {
  background-color: #0084FF;
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
