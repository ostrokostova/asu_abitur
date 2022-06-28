<template>
  <router-link to="/" style="text-decoration: none; text-align: left" class="logo-wrapper">
    <div class="logo">
    </div>
    <div class="title-wrapper">
      <div class="title">
        Абитуриент
      </div>
      <div class="subtitle">
        Рубцовский институт (филиал) АлтГУ
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MainLogo"
}
</script>

<style scoped>
.logo-wrapper{
  width: content-box;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo{
  background-image: url("~@/assets/logo.svg");
  background-repeat: no-repeat;
  width: 75px;
  height: 50px;
}

.title-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title{
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #0084FF;
}

.subtitle {
  color: #929292;
  font-size: 1em;
}
@media (max-width: 1200px) {
  .subtitle{
    display: none;
  }
}
</style>
