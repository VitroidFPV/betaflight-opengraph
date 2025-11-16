import { ImageResponse, loadGoogleFont } from "workers-og";
import Template from "./template";

export default {
	async fetch(request: Request): Promise<Response> {
		const params = new URLSearchParams(new URL(request.url).search);

		const title =
			params.get("title") || "Pushing the Limits of UAV Performance";

		const url = new URL(request.url);
		const baseUrl = url.origin + url.pathname.replace(/\/$/, "");
		const bgImageUrl = `${baseUrl}/og-bg.png`;

		const description =
			params.get("description") ||
			"Betaflight is the world's leading multi-rotor flight control software.";

		const height = 900;
		const width = 1575;

		return new ImageResponse(
			<Template
				title={title}
				bgImageUrl={bgImageUrl}
				description={description}
				height={height}
				width={width}
			/>,
			{
				width,
				height,
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
