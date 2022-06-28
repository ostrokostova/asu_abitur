<template>
  <PageBase title="Задать вопрос" :links="links">
    <template #content>
      <div style="width: 80%; margin: 0 auto;">
        <h2>Уважаемые абитуриенты!</h2>
        <p style="text-align: center">Вы можете задать любой интересующий вас вопрос о поступлении в наш вуз, мы постараемся дать на него информативный, исчерпывающий ответ. Но для этого постарайтесь четко сформулировать его, уточнить конкретные детали.</p>
        <form class="form" @submit.prevent="showModal=true">
          <div class="form-control">
            <label for="name">Укажите ваше имя*</label>
            <input required type="text" id="name">
          </div>
          <div class="form-control">
            <label for="email">Укажите ваш E-mail*</label>
            <input required type="email" id="email">
          </div>
          <div class="form-control">
            <label for="message">Укажите ваше сообщение*</label>
            <textarea required id="message"></textarea>
          </div>
          <div class="form-control">
            <label>Символом * отмечены обязательные для заполнения поля</label>
          </div>
          <div class="form-control">
            <div style="display: flex; justify-content: center">
              <button type="submit">
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
      <CustomModal v-show="showModal" />
    </template>
  </PageBase>
</template>

<script setup>
import PageBase from "@/components/PageBase";
import {ref} from "vue";
import CustomModal from "@/components/CustomModal";

const showModal = ref(false)
const links = ref([
  {
    name: 'Задать вопрос',
    url: '/backquestion'
  }
])
</script>

<style scoped>
.modal {
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}
.form{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.form-control{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-control input[type=text], input[type=email] {
  height: 50px;
  background-color: #D9d9d9;
  font-size: 24px;
  border: none;
  outline: none;
}

.form-control textarea {
  background-color: #D9d9d9;
  font-size: 24px;
  border: none;
  outline: none;
}

.form-control label {
  font-size: 16px;
  text-align: left;
}
.form-control button {
  background-color: #FF5652;
  color: #FFFFFF;
  width: 170px;
  height: 50px;
  border-radius: 25px;
  border: none;
}
</style>
