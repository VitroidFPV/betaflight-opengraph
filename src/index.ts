import template from "./template.html?raw";

export default {
	fetch() {
		return new Response(template, {
			headers: {
				"Content-Type": "text/html",
			},
		});
	},
};
