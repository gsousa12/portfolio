import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@articles": path.resolve(__dirname, "./src/sections/articles"),
      "@contents": path.resolve(__dirname, "./src/sections/articles/contents"),
      "@home": path.resolve(__dirname, "./src/sections/home"),
      "@projects": path.resolve(__dirname, "./src/sections/projects"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@datas": path.resolve(__dirname, "./src/shared/datas"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
});
