import { createApp } from "vue";
import App from "./App.vue";
import shadows from "../index";

const app = createApp(App);

app.use(shadows);
app.mount("#app");
