import { Box } from "@mui/material";
import { Card, Text } from "@nextui-org/react";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import React from "react";

const Section4 = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", paddingBottom: '50px' }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%",
					justifyContent: "center",
					gap: "25px",
					"@media only screen and (max-width: 672px)": {
						gap: "2%",
					},
				}}
			>
				<Card
					isHoverable
					css={{
						background: "#e1ecfb",
						display: "flex",
						flexDirection: "column",
						marginBottom: "80px",
						width: "430px",
						alignItems: "center",
						paddingBottom: "40px",
						"@media only screen and (max-width: 672px)": {
							width: "90%",
							marginBottom: "20px",
						},
					}}
				>
					<video
						muted
						autoPlay
						loop
						src="/kmk-sebi.mp4"
						width="100%"
						style={{ width: "100%" }}
					/>
					<Text
						b
						size={30}
						css={{
                            width: '95%',
                            textAlign: 'center',
							marginTop: "30px",
							marginBottom: "30px",
							"@media only screen and (max-width: 672px)": {
								// lineHeight: 1.5,
								fontSize: 22,
							},
						}}
					>
						We are trusted by SEBI ❤️
					</Text>
					<Text
						b
						size={22}
						css={{
							width: '95%',
                            textAlign: 'center',
							lineHeight: 1.2,
							"@media only screen and (max-width: 672px)": {
								lineHeight: 1.2,
								fontSize: 16,
							},
						}}
					>
						We are one of the 890 research analyst firms certified by Securities
						and Exchange Board of India.
					</Text>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							alignSelf: "start",
							marginTop: "30px",
						}}
					>
						<CheckBoxRoundedIcon
							sx={{ color: "#00d784", marginLeft: "30px" }}
						/>
						<Text
							b
							size={22}
							css={{
								textAlign: "center",
								lineHeight: 1.2,
								marginLeft: "30px",
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							We follow compliances
						</Text>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							alignSelf: "start",
							marginTop: "30px",
							marginRight: "30px",
						}}
					>
						<CheckBoxRoundedIcon
							sx={{ color: "#00d784", marginLeft: "30px" }}
						/>
						<Text
							b
							size={22}
							css={{
								lineHeight: 1.2,
								marginLeft: "30px",
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							Our competence is trusted by the governing body of the stock
							markets
						</Text>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							alignSelf: "start",
							marginTop: "30px",
							marginRight: "30px",
						}}
					>
						<CheckBoxRoundedIcon
							sx={{ color: "#00d784", marginLeft: "30px" }}
						/>
						<Text
							b
							size={22}
							css={{
								lineHeight: 1.2,
								marginLeft: "30px",
								"@media only screen and (max-width: 672px)": {
									lineHeight: 1.2,
									fontSize: 16,
								},
							}}
						>
							We are not like your rishtedar who keeps giving random financial
							advice
						</Text>
					</Box>
				</Card>
				<Card
					isHoverable
					css={{
						background: "#ffe5c5",
						display: "flex",
						flexDirection: "column",
						marginBottom: "80px",
						width: "430px",
						alignItems: "center",
						paddingBottom: "40px",
						"@media only screen and (max-width: 672px)": {
							width: "90%",
							marginBottom: "20px",
						},
					}}
				>
					<video
						muted
						autoPlay
						loop
						src="/kmk-research.mp4"
						width="100%"
						style={{ width: "100%" }}
					/>
					<Text
						b
						size={30}
						css={{
							marginTop: "30px",
							marginBottom: "30px",
							"@media only screen and (max-width: 672px)": {
								// lineHeight: 1.5,
								fontSize: 22,
							},
						}}
					>
						We Research. A Lot.
					</Text>
					<Text
						b
						size={22}
						css={{
							width: '90%',
							textAlign: "center",
							lineHeight: 1.2,
							opacity: 0.75,
							"@media only screen and (max-width: 672px)": {
								lineHeight: 1.2,
								fontSize: 16,
							},
						}}
					>
						Our structured approach to research enables us to pick potential
						multibaggers with greater accuracy.
					</Text>
					<Text
						b
						size={22}
						css={{
							width: "90%",
							textAlign: "center",
							lineHeight: 1.2,
							marginTop: "30px",
							"@media only screen and (max-width: 672px)": {
								lineHeight: 1.2,
								fontSize: 16,
							},
						}}
					>
						How do we pick the best bets?
					</Text>
					<Text
						b
						size={22}
						css={{
							width: "90%",
							textAlign: "center",
							lineHeight: 1.2,
							marginTop: "20px",
							opacity: 0.75,
							"@media only screen and (max-width: 672px)": {
								lineHeight: 1.2,
								fontSize: 16,
							},
						}}
					>
						We study their finances, talk to their management and go on the
						ground to see their operations in real time to produce a
						comprehensive and unbiased report.
					</Text>
				</Card>
				<Card
					isHoverable
					css={{
						background: "#bfe8c5",
						display: "flex",
						flexDirection: "column",
						marginBottom: "80px",
						width: "430px",
						alignItems: "center",
						paddingBottom: "40px",
						"@media only screen and (max-width: 672px)": {
							width: "90%",
							marginBottom: "20px",
						},
					}}
				>
					<video
						muted
						autoPlay
						loop
						src="/kmk-starsTeam.mp4"
						width="100%"
						style={{ width: "100%" }}
					/>
					<Text
						b
						size={30}
						css={{
                            width: '95%',
                            textAlign: 'center',
							marginTop: "30px",
							marginBottom: "30px",
							"@media only screen and (max-width: 672px)": {
								// lineHeight: 1.5,
								fontSize: 22,
							},
						}}
					>
						Our team is packed with ⭐s
					</Text>
					<Text
						b
						size={22}
						css={{
							width: "90%",
							textAlign: "center",
							lineHeight: 1.2,
							// marginTop: "20px",
							opacity: 0.75,
							"@media only screen and (max-width: 672px)": {
								lineHeight: 1.2,
								fontSize: 16,
							},
						}}
					>
						Investment is a serious decision and you want only the best people
						behind the wheel taking shots for you.
					</Text>
					<Text
						b
						size={22}
						css={{
							width: "90%",
							textAlign: "center",
							lineHeight: 1.2,
							marginTop: "20px",
							opacity: 0.75,
							"@media only screen and (max-width: 672px)": {
								lineHeight: 1.2,
								fontSize: 16,
							},
						}}
					>
						We have curated the top 1% talent in finance, engineering, and
						economics with 25 years of combined experience to ensure we deliver
						the best for you.
					</Text>
				</Card>
			</Box>
		</Box>
	);
};

export default Section4;
