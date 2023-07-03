import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css' // if needed

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast)
})
// import { createApp } from "vue";
// import Toast, { PluginOptions } from "vue-toastification";
// // Import the CSS or use your own!
// import "vue-toastification/dist/index.css";

// const app = createApp(...);

// const options: PluginOptions = {
//     // You can set your default options here
// };

// app.use(Toast, options);