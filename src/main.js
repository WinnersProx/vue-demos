import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Products from './components/Products';
import Cart from './components/Cart';
import store from './store';
import ViewProduct from './components/ViewProduct';


Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Products },
    { path: '/cart', component: Cart },
    { path: '/product/:id', component: ViewProduct }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
