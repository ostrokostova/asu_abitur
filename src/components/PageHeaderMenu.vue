<template>
  <nav>
    <DropDown title="Бакалавриат" id="1" :items="bachelor" />
    <DropDown title="Среднее профессиональное" id="2" :items="spo" />
    <div class="menu-item">
      <a target="_blank" class="main-link" href="https://abiturient.asu.ru/ratings/admissions/f98/">
        Списки поступающих 2022
      </a>
    </div>
  </nav>
</template>

<script setup>
import DropDown from "@/components/DropDown";
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

<style>
nav {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 25px;
}
@media (max-width: 1200px) {
  nav{
    display: none;
  }
}

nav .menu-item {
  color: #FFF;
  position: relative;
  text-align: center;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  transition: 0.4s;
  font-size: 16px;
  z-index: 1000;
}
.main-link {
  text-decoration: none;
  font-size: 16px;
  color: #0084FF;
  font-weight: 600;
}
</style>
