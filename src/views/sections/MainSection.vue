<template>
  <div class="back">
    <div class="wrapper" style="max-width: 1300px">
      <div class="main">
        <PageHeader />
        <div class="screen-info">
          <div class="text-info">
            <h1 class="text-info-main">
              Абитуриенту 2022
            </h1>
            <p class="text-info-subtitle">
              Поможем собрать все документы для поступления <br>на бакалавриат и среднее профессиональное образование
            </p>
            <div class="actions-wrapper">
              <router-link to="/calc" class="btn btn-outline">
                Куда поступить
              </router-link>
              <router-link to="/receptiondocuments" class="btn btn-warning">
                Подать документы
              </router-link>
            </div>
          </div>
          <div class="main-img">
            <img src="@/assets/1sectionbg.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import PageHeader from "@/components/PageHeader";
</script>

<style scoped>
.back {
  background-image: url("~@/assets/background.svg");
  background-size: contain;
}
.main{
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 95px 1fr;
  justify-content: center;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .main{
    grid-template-rows: 1fr;
  }
}

.screen-info{
  display: grid;
  grid-template-columns: 5fr 6fr;
  align-items: center;
  text-align: left;
  padding-left: 20px;
}

@media (max-width: 1200px) {
  .screen-info{
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: dense;
  }
}
.text-info-main{
  color: #0084FF;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4em;
}
@media (max-width: 600px) {
  .text-info-main{
    font-size: 34px;
  }
}
.text-info-subtitle{
  color: #C7C7C7;
  font-size: 16px;
  font-style: italic;
  margin-top: 10px;
}

.actions-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 20px;
  margin-top: 20px;
}
@media (max-width: 800px) {
  .actions-wrapper {
    flex-direction: column;
  }
}
.btn{
  border: none;
  min-height: 50px;
  border-radius: 25px;
  color: white;
  font-size: 1.3em;
  font-weight: 600;
  padding: 15px 15px;
  width: 200px;
  text-align: center;
  text-decoration: none;
}

.btn-warning{
  background-color: #FF5652!important;
}

.btn-outline {
  background-color: #FFFFFF;
  color: #FF5652;
  border: 1px solid #FF5652;
}

.main-img{

}
.main-img img {
  display: unset;
  width: 100%;
  height: auto;
}
@media (max-width: 600px) {
  .main-img {
    background-position: center top;
  }
}
@media (max-width: 400px) {
  .main-img {
    background-image: none;
  }
  .main-img img{
    display: unset;
    width: 100%;
    height: auto;
  }
}
</style>
