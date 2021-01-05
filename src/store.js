
import vuex from 'vuex';
import Vue from 'vue';

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
            const name = `product ${Math.ceil(Math.random() * 10)}`;
            const price = Math.random() * 10;

            state.products.push({ name, price });
        },

        setProduct({ state }, product) {
            state.product = product;
        }
    }
})
