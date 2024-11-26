import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const viteConfig = defineViteConfig({
  plugins: [react()],
});
const vitestConfig = defineVitestConfig({
  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
});
export default mergeConfig(viteConfig, vitestConfig);
