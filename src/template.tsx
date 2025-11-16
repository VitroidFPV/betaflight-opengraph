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
				padding: "10rem",
				color: "white",
				fontFamily: "Geist-Regular, sans-serif",
				position: "relative",
			}}
		>
			<img
				src={bgImageUrl}
				alt=""
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "1575px",
					height: "900px",
					objectFit: "cover",
					zIndex: -1,
				}}
			/>
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
