import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'
import { Quasar } from "quasar";
import ApiService from "./services/ApiService";
import quasarUserOptions from "./quasar-user-options";
const pinia = createPinia()
createApp(App).use(Quasar, quasarUserOptions).use(ApiService).use(pinia).use(router).mount("#app");
