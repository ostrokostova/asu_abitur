<template>
<PageBase title="Шкала переводов баллов ЕГЭ" :links="links">
  <template #content>
      <p>Минимальное количество баллов ЕГЭ по общеобразовательным предметам, соответствующим специальности или направлению подготовки, по которым проводится прием на обучение в образовательных организациях, находящихся в ведении Министерства науки и высшего образования Российской Федерации, на 2022-2023 учебный год:</p>
      <div class="responsive-table">
        <table style="margin-top: 25px">
          <thead>
          <tr>
            <th>Вступительные испытания </th>
            <th>Минимальное количество баллов</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(point, i) in points" :key="i">
            <td>{{point.discipline}}</td>
            <td>{{point.point}}</td>
          </tr>
          </tbody>
        </table>
      </div>
  </template>
</PageBase>
</template>

<script setup>
import PageBase from "@/components/PageBase";
import {ref} from "vue";
const points = ref([
  {
    discipline: 'Русский язык ',
    point: 40
  },
  {
    discipline: 'Математика',
    point: 39
  },
  {
    discipline: 'Физика',
    point: 39
  },
  {
    discipline: 'Обществознание',
    point: 45
  },
  {
    discipline: 'История',
    point: 35
  },
  {
    discipline: 'Информатика и ИКТ',
    point: 44
  },
  {
    discipline: 'Биология',
    point: 39
  },
  {
    discipline: 'География',
    point: 40
  }
])

const links = ref([
  {name: 'Шкала переводов баллов ЕГЭ', url: '/points'}
])
</script>

<style scoped>

</style>
