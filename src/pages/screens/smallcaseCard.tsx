import { Box, IconButton } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const SmallcaseCard = () => {
	return (
		<main
			id="blogs"
			style={{
				backgroundColor: "#fff",
				width: "100vw",
				paddingLeft: "15px",
				paddingRight: "15px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					paddingTop: '0px',
					"@media only screen and (max-width: 672px)": {
						paddingTop: "50px",
						// backgroundImage: 'url(RightSide.svg)',
						// zIndex: 
					},
				}}
			>
				<div style={{ display: "flex", justifyContent: "center", }} >
					<Box
						sx={{
							maxWidth: "80rem",
							// maxHeight: "450px",
							// height: "450px",
							borderRadius: "40px",
							display: "flex",
							justifyContent: "space-between",
							backgroundImage: "linear-gradient(to top , #1f33e0, #00d4ff)",
				
							"@media only screen and (max-width: 672px)": {
								padding: "20px",
								alignItems: "start",
								width: "94vw",
								height: "270px",
								marginTop: -2,
								marginBottom: 6,
								borderRadius: "20px",
								background: "linear-gradient(to top , #1f33e0, #00d4ff), url(RightSide.svg)",
							},
						}}
					>
						<Box
							sx={{
								width: "60%",
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
								alignItems: "start",
								"@media only screen and (max-width: 672px)": {
									width: "100%",
									paddingLeft: "2.5%",
								},
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingLeft: "3%",
									marginLeft: "5%",
									"@media only screen and (max-width: 672px)": {
										paddingLeft: 0,
										ml: "0%",
										mb: "10px",
										width: "100%",
										height: "50px",
									},
								}}
							>
								<img
									src="kamayakya-smallcaseLogo.png"
									alt="logo"
									// className="kmk-smallcase-logo"
									style={{
										marginTop: "10%",
										marginBottom: "5%",
										width: "40%",

									}}
								/>
							</Box>
							<Text
								b
								size={45}
								color="#fff"
								css={{
									marginLeft: "5%",
									paddingLeft: 20,
									lineHeight: 1.4,
									"@media only screen and (max-width: 672px)": {
										marginLeft: 0,
										paddingLeft: 0,
										width: "100%",
										fontSize: 24,
									},
								}}
							>
								KamayaKya - Value Buy Opportunities
							</Text>
							<Text
								b
								size={26}
								color="#fff"
								css={{
									marginLeft: "5%",
									paddingLeft: 20,
									marginTop: 10,
									"@media only screen and (max-width: 672px)": {
										marginLeft: 0,
										paddingLeft: 0,
										width: "auto",
										fontSize: 15,
									},
								}}
							>
								We look for value where it can be found
							</Text>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									marginLeft: 5,
									marginTop: "5%",
									alignItems: "center",
									"@media only screen and (max-width: 672px)": {
										width: "auto",
										marginLeft: 0,
										fontSize: 20,
									},
								}}
							>
								<IconButton
									sx={{
										borderRadius: "10000px",
										backgroundColor: "#fff",
										color: "#1859e7",
										paddingLeft: 7,
										paddingRight: 7,
										marginBottom: 8,
										"&:hover": {
											backgroundColor: "#1859e7",
											color: "#fff",
											boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
										},
										"@media only screen and (max-width: 672px)": {
											width: "100%",
											fontSize: 14,
											paddingLeft: "15px",
											paddingRight: "15px",
											marginBottom: "5%",
										},
									}}
									onClick={() =>
										window.open("https://kamayakya.smallcase.com/#portfolios","_blank")
									}
								>
									view on smallcase
								</IconButton>
							</Box>
						</Box>
						<Box
							sx={{
								marginRight: 0,
								width: "50%",
								borderRadius: "40px",
								"@media only screen and (max-width: 672px)": {
									display: "none",
								},
							}}
						>
							<img
								src="RightSide.svg"
								style={{
									marginTop: "0",
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "40px",
								}}
							/>
						</Box>
					</Box>
				</div>
			</Box>
		</main>
	);
};

export default SmallcaseCard;
