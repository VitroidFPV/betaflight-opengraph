import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		cloudflare({
			main: "./src/index.tsx",
		}),
	],
	publicDir: "public",
	build: {
		assetsInlineLimit: 0, // Don't inline assets, serve them as files
	},
});
