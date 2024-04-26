import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "gl"]
  },

  integrations: [tailwind()]
});