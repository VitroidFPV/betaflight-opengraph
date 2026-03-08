export default function Template({
	title,
	bgImageData,
	description,
	height,
	width,
}: {
	title: string;
	bgImageData: ArrayBuffer;
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
				padding: "160px",
				color: "white",
				fontFamily: "Geist, sans-serif",
				fontWeight: 400,
				position: "relative",
			}}
		>
			<img
				src={bgImageData as unknown as string}
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
					gap: "16px",
					marginRight: "160px",
				}}
			>
				<h2
					style={{
						fontSize: "32px",
						margin: 0,
						color: "white",
						fontWeight: 500,
					}}
				>
					Betaflight Docs
				</h2>
				<h1
					style={{
						fontSize: "80px",
						margin: 0,
						color: "#ffbb00",
						fontWeight: 700,
					}}
				>
					{title}
				</h1>
			</div>
			<p
				style={{
					fontSize: "32px",
					margin: 0,
					fontWeight: 400,
				}}
			>
				{description}
			</p>
		</div>
	);
}
