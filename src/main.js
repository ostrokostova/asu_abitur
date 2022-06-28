import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/normalize.css'
import 'v-calendar/dist/style.css';
import router from "@/router";
import 'vue-universal-modal/dist/index.css';

import VueUniversalModal from 'vue-universal-modal';

createApp(App).use(router).use(VueUniversalModal, {
    teleportTarget: '#modals',
}).mount('#app')
