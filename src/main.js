import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible';
import axios from 'axios';


import { Button, Row, Col,Search , Swipe , SwipeItem,Lazyload,List,Tabbar,TabbarItem } from 'vant';

Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Tabbar).use(TabbarItem);


Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
