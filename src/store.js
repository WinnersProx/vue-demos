
import vuex from 'vuex';
import Vue from 'vue';
import { randomString } from './utils';

Vue.use(vuex);


export default new vuex.Store({
    state: {
        products: [
            { name: 'Beans', price: 100 },
        ],
        cart: {
            items: []
        },

        product: {},
    },

    mutations: {

    },

    actions: {
        addProduct({ state }) {
            const name = randomString(6);
            const price = (Math.random() * 1000).toFixed(5);

            state.products.push({ name, price });
        },

        setProduct({ state }, product) {
            state.product = product;
        }
    }
})
