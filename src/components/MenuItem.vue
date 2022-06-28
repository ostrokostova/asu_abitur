<template>
  <div id="menu" class="row">
    <ul class="menu">
      <li class="menu__item menu__item--dropdown" @click="toggle('ranking')"
          :class="{'open' : dropDowns.ranking.open}"
          v-for="item in menu"
          :key="item.groupName"
      >
        <a class="menu__link menu__link--toggle" @click="close()">
          <span>{{item.groupName}}</span>
          <i class="menu__icon fa fa-angle-down"></i>
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-menu__item" v-for="childItem in item.groupChild" :key="childItem.name">
            <router-link class="dropdown-menu__link" :to="childItem.link">{{childItem.name}}</router-link>
          </li>
        </ul>
      </li>

      <li class="menu__item">
        <a class="menu__link" href="#">Списки поступающих 2022</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {ref, onMounted} from "vue";
onMounted(() => {
  window.addEventListener('click', function(e){
    if (! e.target.parentNode.classList.contains('menu__link--toggle'))
    {
      this.close()
    }
  }, false)
})
const dropDowns = ref({
  ranking: { open: false}
})

const toggle = function(dropdownName)
{
  //alert(dropdownName)
  this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
}

const close =  function()
{
  for (let dd in this.dropDowns)
  {
    this.dropDowns[dd].open = false;
  }
}

const menu = ref([
  {
    groupName: 'Бакалавриат',
    groupChild: [
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
        name: 'Вступительные испытания',
        link: '',
      },
      {
        name: 'Нормативные документы',
        link: '',
      },
      {
        name: 'Стипендии и материальная поддержка',
        link: '/grants',
      },
      {
        name: 'Калькулятор абитуриента',
        link: '/calc',
      },
      {
        name: 'Платное образование',
        link: '/paidedu',
      },
      {
        name: 'Приказы о зачислении на обучение',
        link: '',
      },
      {
        name: 'Задать вопрос',
        link: '',
      }
    ]
  },
  {
    groupName: 'Среднее профессиональное',
    groupChild: [
      {
        name: 'Образовательные программы',
        link: '',
      },
      {
        name: 'Нормативные документы',
        link: '',
      },
      {
        name: 'Количество мест ',
        link: '',
      },
      {
        name: 'Прием документов',
        link: '',
      },
      {
        name: 'Вступительные испытания',
        link: '',
      },
      {
        name: 'Стипендии и материальная поддержка',
        link: '',
      },
      {
        name: 'Платное образование',
        link: '',
      },
      {
        name: 'Приказы о зачислении на обучение',
        link: '',
      },
      {
        name: 'Задать вопрос',
        link: '',
      },
    ]
  }
])
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}

.menu {
  display: flex;

  &__item {
    position: relative;
    padding-right: 3rem;


    &--dropdown {}
  }

  &__link {
    color: #0084FF;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      //color: $menu_link_hover_color;
    }

    &--toggle {

    }
  }

  &__icon {
    margin: 0 !important;
  }
}

.open .dropdown-menu {
  display: block;
}

.dropdown-menu {
  font-size: 0.9rem;
  position: absolute;
  width: 250px;
  top: 2.2rem;
  display: none;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1000;
}

.dropdown-menu__item:first-child .dropdown-menu__link {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.dropdown-menu__item:last-child .dropdown-menu__link {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.dropdown-menu__link {
  display: block;
  padding: 1rem;
  color: blue;
  background-color: #fafafa;
  text-decoration: none;
  border: 1px solid #0084FF;

  &:hover {
    color: #ffffff;
    background-color: #FF5652;
    text-decoration: none;
    border-bottom-color: #FF5652;
    border-top-color:#FF5652;
  }
}
</style>
