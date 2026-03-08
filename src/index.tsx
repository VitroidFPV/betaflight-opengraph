import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import Template from "./template";

async function loadGoogleFont(
	font: string,
	text: string,
	weight: number,
): Promise<ArrayBuffer> {
	const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
	const css = await (await fetch(url)).text();
	const resource = css.match(
		/src: url\((.+)\) format\('(opentype|truetype)'\)/,
	);

	if (resource) {
		const response = await fetch(resource[1]);

		if (response.ok) {
			return await response.arrayBuffer();
		}
	}

	throw new Error(`Failed to load ${font} font data from Google Fonts`);
}

interface Env {
	ASSETS: { fetch(input: RequestInfo, init?: RequestInit): Promise<Response> };
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const params = new URLSearchParams(new URL(request.url).search);

		const title =
			params.get("title") || "Pushing the Limits of UAV Performance";

		const bgImageRes = await env.ASSETS.fetch(new URL("/og-bg.png", request.url).href);
		const bgImageBuf = await bgImageRes.arrayBuffer();
		const bytes = new Uint8Array(bgImageBuf);
		let binary = "";
		for (let i = 0; i < bytes.length; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		const bgImageUrl = `data:image/png;base64,${btoa(binary)}`;

		const description =
			params.get("description") ||
			"Betaflight is the world's leading multi-rotor flight control software.";

		const height = 900;
		const width = 1575;
		const fontText = `${title} ${description} Betaflight Docs`;
		const [geistRegular, geistMedium, geistBold] = await Promise.all([
			loadGoogleFont("Geist", fontText, 400),
			loadGoogleFont("Geist", fontText, 500),
			loadGoogleFont("Geist", fontText, 700),
		]);

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
						name: "Geist",
						data: geistRegular,
						style: "normal",
						weight: 400,
					},
					{
						name: "Geist",
						data: geistMedium,
						style: "normal",
						weight: 500,
					},
					{
						name: "Geist",
						data: geistBold,
						style: "normal",
						weight: 700,
					},
				],
			},
		);
	},
};
