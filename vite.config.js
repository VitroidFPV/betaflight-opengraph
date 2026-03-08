import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

/** Vite plugin that adds esbuild loader for .bin files during dependency optimization */
function binLoaderPlugin() {
	return {
		name: "vite:bin-loader",
		config(config) {
			const loader = { ".bin": "binary" };
			const existing = config.optimizeDeps?.esbuildOptions?.loader ?? {};
			const merged = { ...existing, ...loader };
			return {
				optimizeDeps: {
					...config.optimizeDeps,
					esbuildOptions: {
						...config.optimizeDeps?.esbuildOptions,
						loader: merged,
					},
				},
			};
		},
		configResolved(config) {
			// Also patch per-environment optimizeDeps so worker env gets the loader
			for (const env of Object.values(config.environments ?? {})) {
				if (env.optimizeDeps?.esbuildOptions) {
					env.optimizeDeps.esbuildOptions.loader = {
						...env.optimizeDeps.esbuildOptions.loader,
						".bin": "binary",
					};
				}
			}
		},
	};
}

export default defineConfig({
	plugins: [
		binLoaderPlugin(),
		cloudflare({
			main: "./src/index.tsx",
		}),
	],
});
