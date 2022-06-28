<template>
  <div class="footer">
    <div class="wrapper">
      <div class="menu">
        <div>
          <div class="title-item">
            <a target="_blank" href="https://rb.asu.ru/sveden">Сведения об институте</a>
          </div>
          <div class="sub-item">
            <a target="_blank" href="https://rb.asu.ru">Перейти на сайт</a>
          </div>
        </div>
        <div>
          <div class="title-item">
            <router-link to="/bachelor">Бакалавриат</router-link>
          </div>
          <div class="sub-item">
            <router-link to="/receptiondocuments">Прием документов</router-link>
            <router-link to="/test">Вступительные испытания</router-link>
          </div>
        </div>
        <div>
          <div class="title-item">
            <router-link to="/backquestion">Обратная связь</router-link>
          </div>
          <div class="sub-item">
            <router-link to="/backquestion">Написать</router-link>
          </div>
        </div>
        <div>
          <div class="title-item">
            <router-link to="/educationprogram">Среднее профессиональное</router-link>
          </div>
          <div class="sub-item">
            <router-link to="/receptiondocuments">Прием документов</router-link>
            <router-link to="/paidedu">Платное образование</router-link>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="logo">
          <img src="@/assets/logoRI-2017.png" alt="">
        </div>
        <div class="info-institute">
          <div class="title">
            Рубцовский институт (филиал) АлтГУ
          </div>
          <address>
            Контакты <br>
            Email <a class="white-text" href="mailto:director@rb.asu.ru">director@rb.asu.ru</a> <br>
            Тел./факс  <a class="white-text" href="tel:+73855742004">+7 (38557) 4-20-04</a><br>
            658225, г.Рубцовск, пр-т Ленина 200-Б <br>
          </address>
        </div>
        <div class="info-prcom">
          <div>
            &nbsp;
          </div>
          <address>
            Приемная комиссия <br>
            Email <a class="white-text" href="mailto:prcom@rb.asu.ru">prcom@rb.asu.ru</a> <br>
            Тел. <a class="white-text" href="tel:+73855744535"> +7 (38557) 4-45-35</a> <br>
            Тел. <a class="white-text" href="tel:+79965000025"> +7 996-500-00-25 </a> <a class="white-text" href="https://wa.me/message/7BZ3AEDH3ZPNN1">(Написать в Whatsapp)</a>
          </address>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="wrapper">
        <div>
          © Рубцовский институт (филиал) Алтайского государственного университета
        </div>
        <div>
          Обратная связь prcom@rb.asu.ru
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection"
}
</script>

<style scoped>
.footer{
  background-image: url("~@/assets/background.svg");
  padding-top: 10px;
}
.menu{
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  flex-wrap: wrap;
  gap: 20px;
}
@media (max-width: 1100px){
  .menu{
    justify-content: start;
  }
}
.title-item a {
  text-decoration: none;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #9A9EA1;
}


.sub-item {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
}
@media (max-width: 1100px) {
  .sub-item {
    margin-top: 10px;
  }
}

.sub-item a {
  color: #9A9EA1;
  text-decoration: none;
  font-size: 16px;
}
.info{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  font-size: 14px;
  line-height: 28px;
  color: #9A9EA1;
  font-weight: 700;
}
.info .title{
}
.info-prcom {
  gap: 100px;
}
address{
  text-align: left;
}
.copyright{
  background-color: #0084FF;
}
.copyright .wrapper{
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
}
@media (max-width: 1000px) {
  .copyright .wrapper {
    flex-direction: column;
  }
}
a {
  color: #9A9EA1;
}
</style>
