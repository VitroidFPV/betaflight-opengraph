export default function Template({
	title,
	bgImageUrl,
	description,
	height,
	width,
}: {
	title: string;
	bgImageUrl: string;
	description: string;
	height: number;
	width: number;
}) {
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
					objectFit: "cover",
					zIndex: -1,
				}}
				width={width}
				height={height}
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
