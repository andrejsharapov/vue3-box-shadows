import { createApp } from 'vue'
import App from './App.vue'
import vueBoxShadows from "./index";

const app = createApp(App);

app.use(vueBoxShadows);
app.mount('#app');
