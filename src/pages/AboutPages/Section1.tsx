import { Divider } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section1 = () => {
	return (
		<section
			style={{
				width: "100%",
				background: "#edf6f8",
				paddingTop: 100,
				paddingBottom: 100,
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "1300px",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						width: "35%",
						display: "flex",
						flexDirection: "column",
						flexWrap: "wrap",
					}}
				>
					<Divider
						sx={{
							width: "120px",
							backgroundColor: "#ff9f24",
							height: "5px",
							borderRadius: "200px",
						}}
					/>
					<Text
						b
						size={70}
						css={{
							lineHeight:1,
							mt: '15px',
							mb: '5px',
							"@media only screen and (max-width: 600px)": {
								// textAlign: "center",
								fontSize: 42,
								lineHeight: 1,
								marginTop: '5px',
								marginBottom: '5px',
							},
						}}
					>
						Our Story
					</Text>
					<Text
						b
						size={30}
						css={{
							"@media only screen and (max-width: 600px)": {
								// textAlign: "center",
								fontSize: 28,
								lineHeight: 1,
							},
						}}
					>
						Why we started it
					</Text>
				</div>
				<div style={{ width: "65%" }}>
					<Text
						b
						size={28}
						css={{
							lineHeight: 1.2,
							"@media only screen and (max-width: 600px)": {
								textAlign: "center",
								fontSize: 18,
								lineHeight: 1,
							},
						}}
					>
						KamayaKya focuses on the Small-Cap segment, which can yield huge
						returns if invested in the right companies. They provide data-driven
						research to recommend top-notch stocks in the SME, Micro-cap, and
						Small-Cap segment. They carefully select these stocks after
						analyzing factors such as cash flow, growth, management quality, and
						more. They do not use technical analysis but instead focus on
						fundamental triggers such as capacity expansion and favorable
						policies. KamayaKya provides concise and detailed reports in
						multiple languages, allowing you to do a background check before
						investing.
					</Text>
				</div>
			</div>
		</section>
	);
};

export default Section1;
