import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropDownListPlugin} from '@syncfusion/ej2-vue-dropdowns';
Vue.use(DropDownListPlugin);
import Select2 from 'v-select2-component';
Vue.component('Select2', Select2);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
