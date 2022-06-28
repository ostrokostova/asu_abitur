<template>
  <div class="mobile-menu">
    <div class="m-menu">
      <input class="m-menu__toggle" type="checkbox">
      <div class="m-menu__burger">
        <span></span>
      </div>
      <div class="m-menu__content" style="padding: 5px">
        <nav>
          <h2>Бакалавриат</h2>
          <ul>
            <li v-for="item in bachelor" :key="item.name">
              <router-link :to="item.link">{{item.name}}</router-link>
            </li>
          </ul>
          <h2>Среднее профессиональное</h2>
          <ul>
            <li v-for="item in spo" :key="item.name">
              <router-link :to="item.link">{{item.name}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="m-menu__backdrop"></div>
    </div>
    <div style="margin-left: 90px">
      <MainLogo />
    </div>
  </div>
</template>

<script setup>
import MainLogo from "@/components/MainLogo";


import {ref} from "vue";

const bachelor = ref([
  {
    name: 'Целевое обучение',
    link: '/target',
  },
  {
    name: 'Образовательные программы',
    link: '/educationprogram',
  },
  {
    name: 'Иностранным абитуриентам',
    link: '/inter',
  },
  {
    name: 'Количество мест ',
    link: '/seats',
  },
  {
    name: 'Прием документов ',
    link: '/receptiondocuments',
  },
  {
    name: 'Шкала перевода баллов ЕГЭ',
    link: '/points'
  },
  {
    name: 'Вступительные испытания',
    link: '/test',
  },
  {
    name: 'Нормативные документы',
    link: '/regdocuments',
  },
  {
    name: 'Стипендии и материальная поддержка',
    link: '/grants',
  },
  {
    name: 'Калькулятор ЕГЭ',
    link: '/calc',
  },
  {
    name: 'Платное образование',
    link: '/paidedu',
  },
  {
    name: 'Приказы о зачислении на обучение',
    link: '/prikaz',
  },
  {
    name: 'Задать вопрос',
    link: '/backquestion',
  }
])

const spo = ref([
  {
    name: 'Образовательные программы',
    link: '/educationprogram',
  },
  {
    name: 'Нормативные документы',
    link: '/regdocuments',
  },
  {
    name: 'Количество мест ',
    link: '/seats',
  },
  {
    name: 'Прием документов',
    link: '/receptiondocuments',
  },
  {
    name: 'Вступительные испытания',
    link: '/test',
  },
  {
    name: 'Стипендии и материальная поддержка',
    link: '/grants',
  },
  {
    name: 'Платное образование',
    link: '/paidedu',
  },
  {
    name: 'Приказы о зачислении на обучение',
    link: '/prikaz',
  },
  {
    name: 'Задать вопрос',
    link: '/backquestion',
  },
])
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  text-align: left;

  margin-top: 5px;
}
li a{
  text-align: left;
  color: #0084FF;
}
.mobile-menu{
  display: none;
  height: 100px;
}

nav{
  display: unset;
}
.m-menu {
  display: none;
  z-index: 100;
  pointer-events: none;
  margin: 0;
  padding: 0;
}
@media (max-width: 1200px) {
  .mobile-menu{
    display: flex;
    height: 100px;
    align-items: center;
  }
  .m-menu {
    display: unset;
  }
}

.m-menu__backdrop {
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #F2F4F5;
  opacity: 0;
  transition: opacity 500ms ease-out;
  pointer-events: none;
}

.m-menu__burger {
  z-index: 2;
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 1.1rem;
  left: 1.1rem;
  padding: 0.6rem 0.4rem;
}

.m-menu__burger span,
.m-menu__burger span::before,
.m-menu__burger span::after {
  content: '';
  display: block;
  width: 3.2rem;
  height: 0.4rem;
  position: absolute;
  margin-top: 1.2rem;
  background: #0084FF;
  border-radius: 0.3rem;
}

.m-menu__burger span::before {
  margin-top: -0.8rem;
}

.m-menu__burger span::after {
  margin-top: 0.8rem;
}

.m-menu__toggle {
  z-index: 3;
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 1.1rem;
  left: 1.1rem;
  cursor: pointer;
  opacity: 0;
  outline: 1px solid black;
  pointer-events: all;
}

.m-menu__content {
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  width: 80%;
  height: 100vh;
  margin: 0;
  padding: 0 0 2rem 0;
  background: #F2F4F5;
  transform-origin: 0 0;
  transform: translateX(-105%);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  pointer-events: all;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.75);
}

.m-menu__toggle:checked {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}

.m-menu__toggle:checked ~ .m-menu__content {
  transform: none;
}

.m-menu__toggle:checked ~ .m-menu__backdrop {
  opacity: 1;
}
</style>
