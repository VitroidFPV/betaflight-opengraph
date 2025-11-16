import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		cloudflare({
			main: "./src/index.tsx",
		}),
	],
	// publicDir: "public",
});
