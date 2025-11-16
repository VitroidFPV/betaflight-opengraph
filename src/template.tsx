export default function Template({
	title,
	bgImageUrl,
	description,
}: {
	title: string;
	bgImageUrl: string;
	description: string;
}) {
	console.log({ title, bgImageUrl });
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "space-between",
				height: "100%",
				width: "100%",
				backgroundImage: `url(${bgImageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				padding: "10rem",
				color: "white",
				fontFamily: "Geist-Regular, sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					gap: "1rem",
					marginRight: "10rem",
				}}
			>
				<h2
					style={{
						fontSize: "2rem",
						margin: 0,
						color: "white",
					}}
				>
					Betaflight Docs
				</h2>
				<h1
					style={{
						fontSize: "5rem",
						fontFamily: "Geist-Bold, sans-serif",
						margin: 0,
						color: "#ffbb00",
					}}
				>
					{title}
				</h1>
			</div>
			<p
				style={{
					fontSize: "2rem",
				}}
			>
				{description}
			</p>
		</div>
	);
}
