import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap CSS & JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/main.css";

// 1. Import fungsi inject dari Vercel Analytics khusus framework agnostik (Vue)
import { inject } from "@vercel/analytics";

// 2. Panggil fungsinya sebelum mounting app
inject();

createApp(App).mount("#app");
