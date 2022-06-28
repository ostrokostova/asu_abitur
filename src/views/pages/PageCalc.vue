<template>
  <keep-alive>
    <PageBase title="Калькулятор ЕГЭ" :links="links">
      <template #content>
        <p>
          Выберите три предмета ЕГЭ по общеобразовательным предметам и посмотрите на какое направление вы можете с ними поступить на 2022-2023 учебный год:
        </p>
        <div class="calc" style="margin-top: 20px">
          <div class="active-exam">
            <div class="disciplines">
              <div class="control">
                <div class="control">
                  <label class="checkbox-label" style="background-color: #0084FF; color: white; font-size: 14px; font-weight: 700"> Вступительные испытания </label>
                </div>
                <template v-for="(discipline, i) in disciplines" :key="discipline">
                  <input
                      type="checkbox"
                      :name="discipline"
                      :value="discipline"
                      v-model="selectedDisciplines"
                      style="display: none"
                      class="checkbox"
                      :id="'check'+i"
                  />
                  <label :for="'check'+i" class="checkbox-label">
                    {{ discipline }}
                  </label>
                </template>
              </div>
            </div>
          </div>
          <div class="result">
            <p>ВЫ МОЖЕТЕ ПОСТУПИТЬ НА СЛЕДУЮЩИЕ
              НАПРАВЛЕНИЯ ПОДГОТОВКИ ВЫСШЕГО
              ОБРАЗОВАНИЯ</p>
              <ol>
                <li v-for="enabledSpeciality in enabledSpecialities" :key="enabledSpeciality">
                  <router-link :to="enabledSpeciality.url">{{enabledSpeciality.name}}</router-link>
                </li>
              </ol>
              <router-link to="/educationprogram" v-show="enabledSpecialities.length>0" class="btn-more">
                Подробнее
              </router-link>
           <div v-if="enabledSpecialities.length==0">
             Для начала выберите экзамены, которые вы сдавали (минимум 3)
           </div>
          </div>
        </div>
      </template>
    </PageBase>
  </keep-alive>
</template>

<script setup>
import PageBase from "@/components/PageBase";
import {computed, ref} from "vue";

const selectedDisciplines = ref([])
const links = ref([
  {
    name: 'Калькулятор ЕГЭ',
    url: '/calc'
  }
])
const disciplines = ref([
    'Русский язык',
    'Математика (профиль)',
    'Физика',
    'Обществознание',
    'История',
    'Информатика и ИКТ',
    'Биология',
    'География',
])

const specialities = ref([
  {
    name: 'Государственное и муниципальное управление, профиль "Цифровое государство',
    url: '/educationprogram/bachelor/gmu',
    exam: [
      'Русский язык',
      'Математика (профиль)',
      'Обществознание',
      'География',
    ]
  },
  {
    name: 'ПСИХОЛОГИЯ, профиль "ОБЩАЯ ПСИХОЛОГИЯ И ПСИХОЛОГИЯ ЛИЧНОСТИ"',
    url: '/educationprogram/bachelor/psich',
    exam: [
      'Русский язык',
      'Биология',
      'Обществознание',
      'Математика (профиль)',
    ]
  },
  {
    name: 'ЭКОНОМИКА, ПРОФИЛЬ "ЦИФРОВАЯ ЭКОНОМИКА И ФИНАНСЫ"',
    url: '/educationprogram/bachelor/econom',
    exam: [
      'Русский язык',
      'Математика (профиль)',
      'Обществознание',
      'География',
    ]
  },
  {
    name: 'Реклама и связи с общественностью',
    url: '/educationprogram/bachelor/reklama',
    exam: [
      'Русский язык',
      'Обществознание',
      'История',
      'Информатика и ИКТ',
    ]
  },
  {
    name: 'Юриспруденция, профиль "Общеправовой"',
    url: '/educationprogram/bachelor/yris',
    exam: [
      'Русский язык',
      'Обществознание',
      'История',
      'Информатика и ИКТ',
    ]
  },
  {
    name: 'Прикладная информатика, профиль "Цифровые технологии и управление данными',
    url: '/educationprogram/bachelor/pi',
    exam: [
      'Русский язык',
      'Математика (профиль)',
      'Информатика и ИКТ',
      'Физика',
    ]
  },
  {
    name: 'Педагогическое образование, профиль "Обществознание"',
    url: '/educationprogram/bachelor/ped',
    exam: [
      'Русский язык',
      'Обществознание',
      'История',
      'Математика (профиль)',
    ]
  },
])

const contains = function (where, what){
  for(let i=0; i<what.length; i++){
    if(where.indexOf(what[i]) == -1) return false;
  }
  return true;
}

const enabledSpecialities = computed( () => {
  return specialities.value.filter(speciality => {
    return contains(selectedDisciplines.value, [speciality.exam[0], speciality.exam[1]]) &&
        ( contains(selectedDisciplines.value, [speciality.exam[2]]) ||
            contains(selectedDisciplines.value, [speciality.exam[3]]))
  })
})
</script>

<style scoped lang="scss">
.calc{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media  (max-width: 1000px) {
  .calc{
    grid-template-columns: unset;
    grid-template-rows: 1fr auto;
  }
}
.result{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 15px;
}
.result p {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #0084FF;
  text-align: center;
}
li{
  font-size: 16px !important;
  line-height: 16px;
  margin-top: 10px;
}

select {
  border: none;
  overflow: hidden;
}
select:focus{
  outline: none;
}

select option {
  height: 40px;
  border: 1px solid #828282;
  display: flex;
  align-items: center;
}

select option:checked {
  background-color: #F6AEAD;
}
select option:checked:focus {
  background-color: #FF5652;
}
.btn-more {
  background-color: #FF5652;
  height: 50px;
  border-radius: 25px;
  width: 170px;
  border: none;
  color: white;
  font-size: 16px;
  line-height: 50px;
  text-decoration: none;
}
.disciplines {
  display: flex;
  justify-content: center;
  align-items: center;
}
.control {
  width: 230px;
}
.checkbox-label {
  height: 40px;
  border: 1px solid #828282;
  display: flex;
  align-items: center;
  margin-top: -1px;
  padding-left: 10px;
  font-size: 14px;
}
.checkbox:checked + label {
  background-color: #F6AEAD;
}
.checkbox:checked:focus {
  background-color: #FF5652;
}
</style>
