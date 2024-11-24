import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
// import the package

import 'element-plus/dist/index.css'
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file

import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.use(ElementPlus)

app.mount('#app')
