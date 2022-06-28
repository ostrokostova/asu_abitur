<template>
  <HamburgMenu />
  <router-view>
  </router-view>
  <div class="button-actions-wrapper">
    <ButtonFloatActions />
  </div>
  <div id="modals"></div>
</template>

<script>

import ButtonFloatActions from "@/components/ButtonFloatActions";
import HamburgMenu from "@/components/HamburgMenu";
export default {
  name: 'App',
  components: {HamburgMenu, ButtonFloatActions}
}
</script>

<style>
div {
  box-sizing: border-box;
}
a{
  font-size: 16px;
  text-decoration: none;
}
body{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  position: relative;
}
p{
  font-size: 12px;
}
td {
  font-size: 14px;
  text-align: center;
}
td p {
  font-size: 14px !important;
  text-align: center;
}
ul{
  font-size: 12px;
}
li{
  font-size: 12px !important;
}

.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}

h1,h2,h3,h4,h5,h6{
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}


.subtitle-1 {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 25px;
  font-family: 'Montserrat', sans-serif;
}
.title-section{
  font-size: 40px;
  line-height: 58px;
  color: #FF5652;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
}

.subtitle-2 {
  font-size: 14px;
  line-height: 28px;
  font-weight: 400;
  color: #9A9EA1;
  font-family: 'Montserrat', sans-serif;
}
p{
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  text-align: justify;
  text-indent: 20px;
}
h1,h2,h3,h4,h5,h6 {
  color: #0084FF;
}
strong{
  color: #0084FF;
}
b {
  color: #0084FF;
}
.hidden {
  display: none;
}
ul{
  text-align: left;
}
ol{
  text-align: left;
}
li {
  font-size: 16px !important;
  text-align: justify;
}
table{
  border-collapse: collapse;
  border: 1px solid #828282;
  margin: 0 auto;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
}
tr {
  border: 1px solid #828282;
}
td {
  border: 1px solid #828282;
  padding: 10px;
}
th {
  border: 1px solid #828282;
  padding: 10px;
}
tr th {
  color: white;
  background-color: #0084FF;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
}
thead{
  text-align: center;
}

.button-actions-wrapper {
  position: fixed;
  bottom: 50px;
  right: 25px;
  z-index: 1000;
}
.responsive-table{
  width: 100%;
  overflow: scroll;
}
</style>
