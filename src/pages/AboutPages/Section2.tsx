import { Box } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section2 = () => {
	return (
		<section
			style={{
				width: "100%",
				backgroundColor: "#fff",
				paddingTop: "50px",
				paddingBottom: "60px",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Box
				style={{
					width: "100%",
					maxWidth: "1400px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					margin: "0 auto",
					// padding: "0 30px",
				}}
			>
				<Text
					b
					size={60}
					css={{
						padding: "0 30px",
						"@media only screen and (max-width: 672px)": {
							textAlign: "center",
							fontSize: 52,
							lineHeight: 1,
							paddingBottom: "10px",
						},
					}}
				>
					Meet The Team
				</Text>
				<Text
					b
					size={25}
					css={{
						textAlign: "center",
						padding: "0 30px",
						"@media only screen and (max-width: 672px)": {
							textAlign: "center",
							fontSize: 17.5,
							lineHeight: 1.1,
						},
					}}
				>
					KamayaKya was born when we saw a major opportunity in the market - the
					Small-Cap segment. If invested at the right time, these companies can
					give you massive returns. But how do you know which company will grow?
					Data-driven Research
				</Text>
				<Box
					sx={{
						marginTop: "60px",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						width: "100%",
						maxWidth: "1400px",
						justifyContent: "center",
						gap: "25px",
						"@media only screen and (max-width: 672px)": {
							gap: "2%",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "80px",
							maxWidth: "300px",
							alignItems: "center",
							"@media only screen and (max-width: 672px)": {
								width: "48%",
								height: "355px",
								marginBottom: "20px",
							},
						}}
					>
						<img
							src="/kmk-profile1.jpeg"
							alt="AnandS"
							width="100%"
							style={{ height: "400px" }}
						/>
						<Text
							b
							size={26}
							css={{
								marginTop: 10,
								"@media only screen and (max-width: 672px)": {
									// lineHeight: 1.5,
									fontSize: 22,
								},
							}}
						>
							Dhiren Shah
						</Text>
						<Text
							b
							size={18}
							css={{
								lineHeight: 1,
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							Director and Co-Founder
						</Text>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "80px",
							maxWidth: "300px",
							alignItems: "center",
							"@media only screen and (max-width: 672px)": {
								width: "48%",
								height: "355px",
								marginBottom: "20px",
							},
						}}
					>
						<img
							src="/kmk-profile2.jpeg"
							alt="AnandS"
							width="100%"
							style={{ height: "400px" }}
						/>
						<Text
							b
							size={26}
							css={{
								marginTop: 10,
								"@media only screen and (max-width: 672px)": {
									// lineHeight: 1.5,
									fontSize: 22,
								},
							}}
						>
							Nitya Shah
						</Text>
						<Text
							b
							size={18}
							css={{
								lineHeight: 1,
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							Director and Co-Founder
						</Text>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "80px",
							maxWidth: "300px",
							alignItems: "center",
							"@media only screen and (max-width: 672px)": {
								width: "48%",
								height: "355px",
								marginBottom: "20px",
							},
						}}
					>
						<img
							src="/kmk-profile3.jpeg"
							alt="AnandS"
							width="100%"
							style={{ height: "400px" }}
						/>
						<Text
							b
							size={26}
							css={{
								marginTop: 10,
								"@media only screen and (max-width: 672px)": {
									// lineHeight: 1.5,
									fontSize: 22,
								},
							}}
						>
							Aniket Kulkarni
						</Text>
						<Text
							b
							size={18}
							css={{
								lineHeight: 1,
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							Director and Co-Founder
						</Text>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "80px",
							maxWidth: "300px",
							alignItems: "center",
							"@media only screen and (max-width: 672px)": {
								width: "48%",
								height: "355px",
								marginBottom: "20px",
							},
						}}
					>
						<img
							src="/kmk-profile4.jpeg"
							alt="AnandS"
							width="100%"
							style={{ height: "400px" }}
						/>
						<Text
							b
							size={26}
							css={{
								marginTop: 10,
								"@media only screen and (max-width: 672px)": {
									// lineHeight: 1,
									fontSize: 22,
								},
							}}
						>
							Tushar Raghatate
						</Text>
						<Text
							b
							size={18}
							css={{
								lineHeight: 1.2,
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							Equity Research Analyst
						</Text>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default Section2;
