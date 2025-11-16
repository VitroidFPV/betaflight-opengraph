import { ImageResponse, loadGoogleFont } from "workers-og";
// Import image as base64 data URL for workers compatibility
import bgImageUrl from "../public/og-bg.png?url";
import Template from "./template";

export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);
		const params = url.searchParams;

		const title =
			params.get("title") || "Pushing the Limits of UAV Performance";

		const description =
			params.get("description") ||
			"Betaflight is the world's leading multi-rotor flight control software.";

		// For development, make absolute URL; in production Vite bundles the asset
		const absoluteBgUrl = bgImageUrl.startsWith("http")
			? bgImageUrl
			: new URL(bgImageUrl, url.origin).toString();

		return new ImageResponse(
			<Template
				title={title}
				bgImageUrl={absoluteBgUrl}
				description={description}
			/>,
			{
				width: 1575,
				height: 900,
				fonts: [
					{
						name: "Geist-Bold",
						data: await loadGoogleFont({ family: "Geist", weight: 700 }),
					},
					{
						name: "Geist-Regular",
						data: await loadGoogleFont({ family: "Geist", weight: 500 }),
					},
				],
			},
		);
	},
};
