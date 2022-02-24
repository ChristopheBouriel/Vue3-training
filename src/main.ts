import { createApp } from "vue";

import { createPinia } from "pinia";

import App from "./App.vue";
import Products from './components/Products.vue';

import router from "./router";

const app = createApp(App);

//app.use(createPinia());
app.use(router);

app.component("Products", Products) /** Enregistré de la sorte, le composant est
                                    * utilisable n'importe où dans l'application */

app.mount("#app");
