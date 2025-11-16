import { ImageResponse, loadGoogleFont } from "workers-og";
import Template from "./template";

export default {
	async fetch(request: Request): Promise<Response> {
		const params = new URLSearchParams(new URL(request.url).search);

		const title =
			params.get("title") || "Pushing the Limits of UAV Performance";
		const bgImageUrl = new URL("/og-bg.png", request.url).toString();
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
