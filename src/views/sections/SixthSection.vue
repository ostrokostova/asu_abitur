<template>
  <div class="calendar-wrapper">
    <div class="wrapper">
        <div class="title-section">
          Календарь абитуриента 2022
        </div>
      <div class="subtitle-1">
        В календаре описаны  сроки приема документов в Рубцовский институт (филиал) АГУ.
      </div>
      <div class="calendar-items">
        <div class="calendar-item" v-for="i in 3" :key="i">
          <div class="calendar-item-title">
            {{months[i-1]}}
          </div>
          <div class="calendar-item-dates">
            <Calendar
                :from-page="fromPages[i-1]"
                :attributes="atrCalendars[i-1]"
                is-expanded
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Calendar} from 'v-calendar'
import {ref} from "vue";
const months = ref(['Июнь 2022', 'Июль 2022', 'Август 2022'])
const fromPages = ref([
  {
    month: 6,
    year: 2022
  },
  {
    month: 7,
    year: 2022
  },
  {
    month: 8,
    year: 2022
  }
])
const atrCalendars = ref([
  [
    {
      // An optional key can be used for retrieving this attribute later,
      // and will most likely be derived from your data object
      // Attribute type definitions
      highlight:{
        color: '#fff',
        class: 'yellow '
      },  // Boolean, String, Object
      //bar: true,        // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Сегодня'
      }, // Only objects allowed
      // Your custom data object for later access, if needed
      //customData: { ... },
      // We also need some dates to know where to display the attribute
      // We use a single date here, but it could also be an array of dates,
      //  a date range or a complex date pattern.
      dates: new Date(),
      // You can optionally provide dates to exclude
      excludeDates: null,
      // Think of `order` like `z-index`
      order: 0
    },
    {
      highlight: {
        color: '#fff',
        class: 'red'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Старт приемной комиссии.Прием начала подачи документов'
      },
      dates: new Date(2022,5,17),
    }
  ],
    // июль
  [
    {
      highlight: {
        color: '#fff',
        class: 'blue'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов очную форму на места в рамках КЦП для лиц, поступающих по результатам дополнительных творческих испытаний и вступительных испытаний, проводимых Университетом самостоятельно'
      },
      dates: new Date(2022,6,18),
    },
    {
      // An optional key can be used for retrieving this attribute later,
      // and will most likely be derived from your data object
      // Attribute type definitions
      highlight:{
        color: '#fff',
        class: 'yellow '
      },  // Boolean, String, Object
      dot: true,        // Boolean, String, Object
      //bar: true,        // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Сегодня'
      }, // Only objects allowed
      // Your custom data object for later access, if needed
      //customData: { ... },
      // We also need some dates to know where to display the attribute
      // We use a single date here, but it could also be an array of dates,
      //  a date range or a complex date pattern.
      dates: new Date(),
      // You can optionally provide dates to exclude
      excludeDates: null,
      // Think of `order` like `z-index`
      order: 0
    },
    {
      // An optional key can be used for retrieving this attribute later,
      // and will most likely be derived from your data object
      // Attribute type definitions
      highlight: {
        color: '#fff',
        class: 'green'
      },  // Boolean, String, Object
      //bar: true,        // Boolean, String, Object
      content: 'green',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов на очную форму обучения на места в рамках КЦП для лиц, поступающих только по результатам ЕГЭ'
      }, // Only objects allowed
      // Your custom data object for later access, if needed
      //customData: { ... },
      // We also need some dates to know where to display the attribute
      // We use a single date here, but it could also be an array of dates,
      //  a date range or a complex date pattern.
      dates: new Date(2022, 6, 25),
      // You can optionally provide dates to exclude
      excludeDates: null,
      // Think of `order` like `z-index`
      order: 0
    }
  ],
    //август
  [
    {
      highlight: {
        color: '#fff',
        class: 'blue'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов очно-заочную, заочную форму обучения на места в рамках КЦП для лиц, поступающих по результатам дополнительных творческих испытаний и вступительных испытаний, проводимых Университетом самостоятельно'
      },
      dates: new Date(2022,7,6),
    },
    {
      highlight: {
        color: '#fff',
        class: 'blue'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов на специальность, «Правоохранительная деятельность»'
      },
      dates: new Date(2022,7,10),
    },
    {
      highlight: {
        color: '#fff',
        class: 'green'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов очно-заочную, заочную форму обучения на места в рамках КЦП для лиц, поступающих по результатам ЕГЭ'
      },
      dates: new Date(2022,7,13),
    },
    {
      highlight: {
        color: '#fff',
        class: 'green'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов на все специальности, кроме специальности «Правоохранительная деятельность»'
      },
      dates: new Date(2022,7,15),
    },
    {
      highlight: {
        color: '#fff',
        class: 'blue'
      },  // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Завершается прием подачи документов очную форму обучения на места по договорам об оказании платных образовательных услуг'
      },
      dates: new Date(2022,7,26),
    },
    {
      // An optional key can be used for retrieving this attribute later,
      // and will most likely be derived from your data object
      // Attribute type definitions
      highlight:{
        color: '#fff',
        class: 'yellow '
      },  // Boolean, String, Object
      dot: true,        // Boolean, String, Object
      //bar: true,        // Boolean, String, Object
      content: 'red',   // Boolean, String, Object
      popover: {
        label: 'Сегодня'
      }, // Only objects allowed
      // Your custom data object for later access, if needed
      //customData: { ... },
      // We also need some dates to know where to display the attribute
      // We use a single date here, but it could also be an array of dates,
      //  a date range or a complex date pattern.
      dates: new Date(),
      // You can optionally provide dates to exclude
      excludeDates: null,
      // Think of `order` like `z-index`
      order: 0
    }
  ]
])
</script>

<style>

.calendar-wrapper{
  padding: 40px 0;
  background: rgba(0, 132, 255, 0.03);
}
.calendar-items{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 40px;
  margin-top: 70px;
}
.calendar-item{
  position: relative;
  width: 30%;
  border: 1px solid #4AA3EB;
  height: 330px;
  min-width: 370px;
}
.calendar-item-title{
  position: absolute;
  top: -25px;
  left: 30%;
  height: 50px;
  width: 40%;
  background: #4AA3EB;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.calendar-item-dates {
  width: 80%;
  margin: 40px auto;
}
.vc-container{
  background: transparent !important;
  border: none !important;
}
.vc-weeks{
  position: relative;
  color: #9A9EA1;
}
.vc-weeks::after{
  position: absolute;
  top: 20px;
  left: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 1px;
  background: #4AA3EB;
  content: '';
}
.vc-arrows-container{
  display: none !important;
}
.vc-day-content {
  width: 40px !important;
  height: 40px !important;
}
.vc-day .vc-day-content {
  color: #9A9EA1 !important;
}
.vc-container .vc-pane-container .vc-pane-layout .vc-pane .vc-header {
  display: none;
}
.vc-highlights + span.vc-day-content{
  color: white !important;
}

div.vc-pane-container > div.vc-pane-layout > div > div.vc-weeks > div.vc-day > div.vc-highlights.vc-day-layer > div > div {
  border-radius: unset;
  width: 40px;
  height: 40px;
}
.vc-popover-content {
  max-width: 300px;
}
.red {
  background-color: #FF5652;
}
.green{
  background-color: #43c94c;
}

.blue{
  background-color: #0084FF;
}
.yellow {
  background-color: #ff9f13;
}
</style>
