import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwind from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    },
  },
});
