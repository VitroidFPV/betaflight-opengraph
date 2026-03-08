function Background({ width, height }: { width: number; height: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="none"
			width={width}
			height={height}
			viewBox="0 0 2100 1200"
			style={{ position: "absolute", top: 0, left: 0 }}
		>
			<rect width="2100" height="1200" fill="#161618" />
			<path
				d="M1539.01 885.774C1757.64 810.981 1633.94 595.232 2108.59 615.368V1228.1H943.544C1047.1 894.404 1320.39 960.567 1539.01 885.774Z"
				fill="#FFBB00"
			/>
			<path
				d="M569.578 342.322C350.953 417.115 474.649 632.865 0 612.728V0L1165.05 0C1061.49 333.692 788.204 267.529 569.578 342.322Z"
				fill="#1B1B1D"
			/>
		</svg>
	);
}

function BetaflightLogo() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="none"
			width={214}
			height={203}
			viewBox="-1 -36 215 203"
			style={{
				position: "absolute",
				top: "10rem",
				right: "10rem",
				transform: "scale(0.9)",
			}}
		>
			<path
				d="M169.28 97.366C153.16 90.562 141.7 80.46 130.13 76.101C136.18 73.443 141.8 69.615 145.31 66.319C149.12 62.704 150.29 58.132 150.08 53.772C162.07 61.959 176.28 62.491 183.5 62.916C191.03 63.342 198.14 64.83 199.62 68.445C199.62 68.445 201.96 27.616 118.04 0.502C118.04 0.502 143.08 11.879 150.93 21.023C150.93 21.023 142.02 20.492 138.3 26.233C136.39 29.104 135.97 33.57 137.67 38.461C136.29 38.248 134.7 38.036 133 37.929L-0.25 -35.968L13.75 -5.771L0.6 -10.343L4.52 -2.9C4.63 -2.794 10.04 7.732 22.88 30.168C32.95 47.818 50.99 56.643 74.86 55.58C75.71 55.58 76.77 55.473 77.83 55.367C83.88 54.942 93.21 54.091 102.23 53.241C101.6 56.537 101.7 60.471 102.55 65.256C103.61 70.785 105.84 74.293 108.7 76.526C101.6 79.929 95.12 86.521 92.26 94.389C90.24 99.28 89.71 105.235 92.15 112.146V112.252C92.68 113.635 93.21 115.017 94.06 116.505C94.81 117.888 95.76 119.27 96.93 120.44C111.78 138.09 147.85 135.219 170.56 125.65C170.87 125.543 171.19 125.437 171.51 125.224C173.31 124.48 175.12 123.629 176.92 122.779C177.24 122.566 177.66 122.46 177.98 122.247C179.89 121.29 181.8 120.333 183.71 119.164C206.31 105.979 213.73 90.562 213.73 90.562C213.73 90.562 191.14 106.617 169.28 97.366ZM175.01 36.76C181.38 39.524 191.24 55.473 191.24 55.473C183.07 54.198 166.74 48.881 165.04 42.714C163.34 36.547 168.65 33.889 175.01 36.76ZM154 115.867C154 115.867 155.7 121.184 153.69 128.095C151.46 128.733 149.02 129.265 146.58 129.69C150.5 126.713 154 122.247 154 115.867ZM43.99 13.687L101.81 46.648C91.2 47.712 79.95 48.668 74.33 48.987C65.74 49.413 57.99 48.35 51.2 46.01C41.34 42.501 33.7 36.122 28.39 26.978C21.81 15.494 17.25 7.094 14.28 1.672L26.27 5.819L14.28 -20.019L119.42 38.461C116.55 38.886 113.69 39.737 111.14 41.013L43.99 13.687ZM105.41 54.835C109.55 35.271 134.59 41.438 134.59 41.438C125.47 41.226 120.16 43.777 117.51 47.393C113.58 52.815 118.46 56.962 118.46 56.962C117.08 56.749 115.92 56.324 115.07 55.686C115.07 55.792 115.07 55.899 115.07 55.899C117.19 63.448 123.34 65.468 123.34 65.468C121.01 65.787 118.99 65.681 117.3 65.256C118.68 68.445 120.48 70.785 121.75 71.316C116.24 71.316 113.37 72.592 111.25 73.443C106.9 70.466 103.61 63.342 105.41 54.835ZM122.6 97.685C122.6 97.685 113.48 109.062 93.96 109.062C92.79 104.597 93.21 100.131 94.28 96.197C100.43 100.237 109.76 102.577 122.6 97.685ZM106.05 124.161C114.43 122.247 125.15 117.569 135.33 105.979C135.33 105.979 134.17 118.526 124.72 130.434C120.48 129.903 116.13 128.839 111.99 127.138C109.87 126.288 107.85 125.224 106.05 124.161ZM184.98 113.954C183.82 110.87 183.29 104.703 183.29 104.703C190.29 105.341 198.78 102.47 198.78 102.47C193.15 109.381 184.98 113.954 184.98 113.954Z"
				fill="#FFBB00"
			/>
		</svg>
	);
}

export default function Template({
	title,
	description,
	height,
	width,
}: {
	title: string;
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
				color: "white",
				fontFamily: "Geist, sans-serif",
				fontWeight: 400,
				position: "relative",
				padding: "6rem",
			}}
		>
			<Background width={width} height={height} />
			{/* Card wrapper */}
			<div
				style={{
					display: "flex",
					position: "relative",
					height: "100%",
					width: "100%",
					borderRadius: "4rem",
					boxShadow: "0 0 80px rgba(0, 0, 0, 0.5)",
				}}
			>
				{/* Blurred background layer clipped to card shape */}
				<div
					style={{
						display: "flex",
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						borderRadius: "4rem",
						overflow: "hidden",
					}}
				>
					<div
						style={{
							display: "flex",
							position: "absolute",
							top: "-6rem",
							left: "-6rem",
							width: String(width),
							height: String(height),
							filter: "blur(32px)",
						}}
					>
						<Background width={width} height={height} />
					</div>
				</div>
				{/* Card content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "space-between",
						position: "relative",
						width: "100%",
						height: "100%",
						background: "rgba(0, 0, 0, 0.1)",
						border: "4px solid rgba(255, 255, 255, 0.1)",
						padding: "4rem",
						borderRadius: "4rem",
					}}
				>
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
			</div>
			<BetaflightLogo />
		</div>
	);
}
