import { ImageResponse, loadGoogleFont } from "workers-og";
// @ts-expect-error
import bgImageAsset from "../public/og-bg.png";
import Template from "./template";

export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);

		// Serve the background image
		if (url.pathname === "/og-bg.png") {
			const imageResponse = await fetch(bgImageAsset);
			const imageBuffer = await imageResponse.arrayBuffer();
			return new Response(imageBuffer, {
				headers: {
					"Content-Type": "image/png",
					"Cache-Control": "public, max-age=31536000, immutable",
				},
			});
		}

		const params = new URLSearchParams(url.search);

		const title =
			params.get("title") || "Pushing the Limits of UAV Performance";

		const baseUrl = url.origin;
		const bgImageUrl = `${baseUrl}/og-bg.png`;

		const description =
			params.get("description") ||
			"Betaflight is the world's leading multi-rotor flight control software.";

		return new ImageResponse(
			<Template
				title={title}
				bgImageUrl={bgImageUrl}
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
