import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import "lib-flexible";
import axios from "axios";
import '@/styles/common.less';

import { Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, List, Tabbar, TabbarItem,Icon,Field,CellGroup,NavBar,Toast,Notify} from "vant";

Notify.setDefaultOptions({
    className:'my-notify'
})
Toast.setDefaultOptions({
    className:'my-toast'
})
Vue.use(Button)
	.use(Row)
	.use(Col)
	.use(Search)
	.use(Swipe)
	.use(SwipeItem)
	.use(Lazyload)
	.use(List)
	.use(Tabbar)
    .use(TabbarItem)
    .use(Icon)
    .use(Field)
    .use(CellGroup)
    .use(NavBar)
    .use(Toast)
    .use(Notify)

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

//过滤器
import * as filters from './filter';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
Vue.prototype.filterDate = filters.filterDate; //时间过滤方法
Vue.prototype.filterAmount = filters.filterAmount; //数字金额大写中文转换
Vue.prototype.ModalHelper = filters.ModalHelper;
Vue.prototype.HTML_FONT_SIZE = parseInt(document.documentElement.style.fontSize);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
