import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: 'https://artielsry.github.io/Virtual_Museum/vite-deploy'
});
