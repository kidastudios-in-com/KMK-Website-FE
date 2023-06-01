import { Box } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section3 = () => {
	

	return (
		<section
			style={{
				width: "100%",
				backgroundColor: "#fff",
				paddingTop: 50,
				paddingBottom: 100,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					width: "80%",
					maxWidth: "1400px",
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					"@media only screen and (max-width: 600px)": {
						width: "95%",
					},
				}}
			>
				<div style={{ width: "80%", textAlign: "center", marginTop: 0 }}>
					<Text
						b
						size={28}
						css={{
							lineHeight: 1.2,
							"@media only screen and (max-width: 600px)": {
								fontSize: 18,
								maxWidth: "355px",
								lineHeight: 1,
							},
						}}
					>
						KamayaKya focuses on the Small-Cap segment, which can yield huge
						returns if invested in the right companies. We provide data-driven
						research to recommend top-notch stocks in the SME, Micro-cap, and
						Small-Cap segment. We carefully select these stocks after analyzing
						factors such as cash flow, growth, management quality, and more. We
						do not use technical analysis but instead focus on fundamental
						triggers such as capacity expansion and favorable policies.
						KamayaKya provides concise and detailed reports in multiple
						languages, allowing you to do a background check before investing.
					</Text>
				</div>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap-reverse",
						width: "85%",
						textAlign: "start",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: '50px',
						"@media only screen and (max-width: 600px)": {
							width: '95%'
						},
						"@media only screen and (max-width: 800px)": {
							width: "100%",
							alignContent: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						},
					}}
				>
					<Box
						style={{
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
						}}
					>
						<Text
							b
							size={45}
							color="#ff9f24"
							css={{
								lineHeight: 1.5,
								letterSpacing: -1.5,
								"@media only screen and (max-width: 600px)": {
									fontSize: 26,
									width: "85%",
									lineHeight: 1,
									textAlign: "center",
								},
								"@media only screen and (max-width: 800px)": {
									// fontSize: 45,
									// width: '85%',
								},
							}}
						>
							Subscribe to our best picks
						</Text>
						<Text
							b
							size={28}
							css={{
								lineHeight: 1.2,
								width: "500px",
								marginTop: 10,
								"@media only screen and (max-width: 600px)": {
									fontSize: 18,
									width: "350px",
									lineHeight: 1,
									textAlign: "center",
								},
							}}
						>
							We only recommend stocks that we personally are willing to invest
							in. We research rigorously, so you don't have to.
						</Text>
					</Box>
					<Box sx={{ maxWidth: "450px", height: "100%" }}>
						<video
							autoPlay
							loop
							muted
							src="/kmk-recommendations.mp4"
							style={{
								borderRadius: "20px",
								// maxWidth: "500px",
								width: "100%",
							}}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						width: "85%",
						textAlign: "start",
						alignItems: "center",
						marginTop: '30px',
						"@media only screen and (max-width: 600px)": {
							width: '95%'
						},
					}}
				>
					<Box sx={{ maxWidth: "450px", height: "100%" }}>
						<video
							src="kmk-performanceTrack.mp4"
							style={{ borderRadius: "20px", width: "100%" }}
						/>
					</Box>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<Text
							b
							size={45}
							color="#ff9f24"
							css={{
								letterSpacing: -1.5,
								lineHeight: 1.5,
								"@media only screen and (max-width: 600px)": {
									fontSize: 26,
									width: "350px",
									lineHeight: 1,
									textAlign: "center",
								},
							}}
						>
							We give 100% transparency
						</Text>
						<Text
							b
							size={28}
							css={{
								lineHeight: 1.2,
								width: "500px",
								marginTop: 10,
								"@media only screen and (max-width: 600px)": {
									marginTop: "10px",
									fontSize: 18,
									width: "350px",
									lineHeight: 1,
									textAlign: "center",
								},
							}}
						>
							Our entire philosophy is based on celebrating wins and embracing
							losses. We want you to have access to our entire track record.
						</Text>
					</div>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap-reverse",
						width: "85%",
						textAlign: "start",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: '30px',
						"@media only screen and (max-width: 600px)": {
							width: '95%'
						},
					}}
				>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<Text
							b
							size={45}
							color="#ff9f24"
							css={{
								letterSpacing: -1.5,
								lineHeight: 1.5,
								"@media only screen and (max-width: 600px)": {
									fontSize: 26,
									width: "350px",
									lineHeight: 1,
									textAlign: "center",
								},
							}}
						>
							Understanding Investments
						</Text>
						<Text
							b
							size={28}
							css={{
								lineHeight: 1.2,
								width: "500px",
								marginTop: 10,
								"@media only screen and (max-width: 600px)": {
									marginTop: "10px",
									fontSize: 18,
									width: "350px",
									lineHeight: 1,
									textAlign: "center",
								},
							}}
						>
							Investing without context is like throwing a dart blindfolded. But
							with KamayaKya, you will get all the information you need to
							establish context, enabling you to make better investments.
						</Text>
					</div>
					<Box sx={{ maxWidth: "450px", height: "100%" }}>
					<video
						src="kmk-360.mp4"
						style={{ borderRadius: "20px", width: "100%" }}
					/>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default Section3;
