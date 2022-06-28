<template>
  <div class="not-found-wrapper">
    <div class="wrapper" style="display: flex; flex-direction: column; justify-content: center; align-items: center">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="">
        <div class="title">
          АБИТУРИЕНТ
        </div>
        <div class="subtitle">
          Рубцовский институт (филиал) АлтГУ
        </div>
      </div>
      <div class="error">
        <div class="info">
          <div class="title">
            СТРАНИЦА НЕ НАЙДЕНА
          </div>
          <div class="description">
            УПС!<br>
            Ошибочка вышла!
            <ol>
              <li>
                Перезагрузите страницу (в частности, путём нажатия на F5), или запросите её вновь путём ввода её адреса в адресную строку вашего браузера и нажатия на «Enter»
              </li>
              <li>
                Убедитесь, что запрашиваемая вами ссылка набрана верно
              </li>
              <li>
                Пройдите на один уровень выше в запрашиваемой вами ссылке
              </li>
            </ol>
            <a style="color: #0084FF" href="https://t.me/rb_asu_ru">Также вы можете задать вопрос в наш телеграм канал</a>
          </div>
        </div>
        <div class="logo">
          <a href="https://t.me/rb_asu_ru" target="_blank" title="Также вы можете задать вопрос в наш телеграм канал">
            <img src="@/assets/Belka_plachet.png" alt="">
            <div style="color: #9A9EA1; font-weight: 300; font-size: 16px; margin-top: 15px;">Символ приемной кампании</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="scss">
.not-found-wrapper{
  background-image: url("~@/assets/background.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.logo{
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo .title{
  font-size: 24px !important;
  font-weight: 500 !important;
}
.info {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
}
.description {
  width: 70%;
  font-size: 18px;
  line-height: 22px;
  color: #9A9EA1;
  font-weight: 700;
}
.error{
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.wrapper{
  height: 100%;
}
.title{
  font-size: 40px;
  font-weight: 900;
  color: #0084FF;
}
</style>
