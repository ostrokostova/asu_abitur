<template>
  <div>
    <PageBase title="Опрос для абитуриента" :links="links">
      <template #content>
        <p>
          Уважаемый абитуриент!
        </p>
        <p>
          Наш университет постоянно совершенствуется, и нам важно знать ваше мнение. Мы будем благодарны, если вы примете участие в нашем исследовании. Просим ответить на вопросы анкеты.
          Заранее благодарны за сотрудничество!
        </p>
        <form @submit.prevent="showModal=true" class="questions">
          <div class="question">
            <label for="1">1. Чем вы руководствуетесь при выборе университета, в который хотите поступить? (Отметьте не более трех позиций.)
            </label>
            <input required type="text" name="1">
          </div>
          <div class="question">
            <label for="2">2. Каким источникам информации при выборе вуза вы больше доверяете?
            </label>
            <input required type="text" name="2">
          </div>
          <div class="question">
            <label for="3">3. Чего вы ожидаете от обучения в университете?
            </label>
            <input required type="text" name="3">
          </div>
          <div class="question">
            <label for="4">4. Какие направления подготовки вы рассматриваете для поступления?
            </label>
            <input required type="text" name="4">
          </div>
          <div class="question">
            <label for="5">5. В какие вузы вы собираетесь подавать заявление на поступление в этом году?
            </label>
            <input required type="text" name="5">
          </div>
          <div class="question">
            <label for="6">6. Если вы планируете поступать в другой вуз, то почему? (Отметьте один ответ.)
            </label>
            <input required type="text" name="6">
          </div>
          <div class="question">
            <label for="7">7. Откуда вы впервые узнали о Рубцовском институте?
            </label>
            <input required type="text" name="7">
          </div>
          <div class="question">
            <label for="8">8. Кто помогал вам определиться с выбором высшего учебного заведения?
            </label>
            <input required type="text" name="8">
          </div>
          <button type="submit">
            Отправить
          </button>
        </form>
        <CustomModal v-show="showModal" />
      </template>
    </PageBase>
  </div>
</template>

<script setup>
import PageBase from "@/components/PageBase";
import {ref} from "vue";
import CustomModal from "@/components/CustomModal";

const showModal = ref(false)
const links = ref([
  {name: 'Опрос для абитуриента', url: '/questions'}
])
</script>

<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-top: 1em;
}
.question{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.question input[type=text] {
  height: 50px;
  background-color: #D9d9d9;
  font-size: 24px;
  border: none;
  outline: none;
}
.question label {
  font-size: 16px;
  text-align: left;
}
button {
  height: 50px;
  width: 170px;
  background-color: #FF5652;
  color: white;
  border-radius: 25px;
  border: none;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  margin-top: 1em;
}
</style>
