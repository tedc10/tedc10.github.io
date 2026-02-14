// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tedc10.github.io",
  base: "/", // o lo puedes omitir
  vite: { plugins: [tailwindcss()] },
});
