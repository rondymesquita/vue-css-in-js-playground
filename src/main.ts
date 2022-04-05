import { Plugin } from "./components/stitches/vue-stitches";
import { createApp } from "vue";
import App from "./App.vue";

import { darkTheme, lightTheme } from "./components/stitches/theme";

const app = createApp(App);
app.use(Plugin, {
  themes: [darkTheme, lightTheme],
  initialTheme: "light-theme",
});
app.mount("#app");
