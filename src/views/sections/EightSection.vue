<template>
  <div class="eight-section-wrapper">
    <div class="wrapper">
      <div class="title-section" style="color:#0084FF">
        Продолжи свое обучение в магистратуре
      </div>
      <div class="info-magistr">
        <img src="@/assets/8sectionbg.svg" alt="">
        <div class="info">
          <p>Алтайский государственный университет приглашает выпускников вузов продолжить обучение в магистратуре. На ваш выбор более 60 образовательных программ, доступных для поступления.
          </p>
          <div class="magistr-title">Магистратура — это:</div>
          <ul>
            <li>возможность продлить студенчество ещё на два года;</li>
            <li>возможность получить ещё одну профессию/квалификацию всего за два года;</li>
            <li>возможность в течение двух лет улучшать свою подготовку по избранной профессии.</li>
          </ul>
          <p>
            Магистратура является новым, более высоким уровнем
            высшего образования. И сегодня студентами магистратуры
            становятся не только вчерашние выпускники специалитета и
            бакалавриата, но и люди, окончившие университет много лет назад.
          </p>
          <a target="_blank" href="https://abiturient.asu.ru/postgraduate/" class="more">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.eight-section-wrapper{
  padding: 45px 0;
  background-color: #F6FBFF;
}
.info-magistr{
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-items: center;
}

@media (max-width: 800px) {
  .info-magistr{
    grid-template-columns: unset;
    grid-template-rows: auto 1fr;
  }
}
.info{
  display: flex;
  flex-direction: column;
  align-items:start;
}
p{
  color: #9A9EA1;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  text-align: justify;
}
.magistr-title {
  color: #0084FF;
  text-align: left;
  font-size: 36px;
  font-weight: 700;
}
ul {
  list-style-image: url("~@/assets/checkmarkmini.png");
}
li {
  color: #0084FF;
  font-size: 20px !important;
  font-style: italic;
  line-height: 28px;
  font-weight: 400;
  text-align: left;
}
.more{
  padding: 15px;
  background: #FF5652;
  border-radius: 25px;
  height: 50px;
  width: 170px;
  color: white;
  border: none;
  margin-top: 40px;
  font-size: 14px;
  text-decoration: none;
}
</style>
