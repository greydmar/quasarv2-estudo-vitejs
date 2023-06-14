import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Quasar } from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v6/mdi-v6.css';

import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(Quasar, {config:{}});

app.mount('#app');
