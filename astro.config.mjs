import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "es"]
  }
});
