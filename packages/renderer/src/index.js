import Vue from 'vue';
import App from './App.vue';

import Pixel, { ThemeProvider, MpReset } from '@mekari/pixel';
import VueRouter from 'vue-router';

Vue.use(Pixel);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(ThemeProvider, [h(MpReset), h(App)]),
}).$mount('#app');
    