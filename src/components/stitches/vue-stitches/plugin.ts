import { ref, nextTick, inject } from "vue";

export const Plugin = {
  install(app: any, options: any) {
    const theme = ref(null);

    const { themes, initialTheme } = options;

    const selectedTheme = themes.find(
      (theme: any) => initialTheme === theme.selector.replace(".", "")
    );
    theme.value = selectedTheme;

    app.provide("S_THEME", theme);
    app.provide("S_THEME_CHANGE", (name: string) => {
      console.log("change theme called", name);
      theme.value = themes.find(
        (theme: any) => name === theme.selector.replace(".", "")
      );

      console.log(theme.value);
    });
  },
};
