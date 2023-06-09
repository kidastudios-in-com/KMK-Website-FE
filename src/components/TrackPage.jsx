import {
	Text,
	Button,
	Card,
	Modal,
	useModal,
	Divider,
} from "@nextui-org/react";
import React from "react";
import { Box } from "@mui/material";
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleRight,
} from "react-icons/fa";
import ReactECharts from "echarts-for-react";

const WhyUs = () => {
	const { setVisible, bindings } = useModal();
	const outerData = [
		{ value: 60, name: "Hits" },
		{ value: 10, name: "Miss" },
	];

	const innerData = [
		{ value: 10, name: "Miss" },
		{ value: 60, name: "" },
	];

	const options = {
		//   title: {
		// 	text: "Call History",
		// 	x: "center",
		//   },
		//   tooltip: {
		// 	trigger: "item",
		//   },
		//   legend: {
		// 	orient: "vertical",
		// 	left: "left",
		// 	data: ["Outer", "Inner"],
		//   },
		series: [
			{
				name: "Hits",
				type: "pie",
				radius: ["50%", "65%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderWidth: 0, // Remove border
					borderRadius: 20,
					color: "#125a54",
					// background:
				},
				label: {
					show: false,
					position: "center",
				},
				emphasis: {
					label: {
						show: false,
						fontSize: "20",
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: outerData.map((item) => ({
					...item,
					itemStyle: {
						color: item.name === "Miss" ? "rgba(255, 255, 255, 0.5)" : null,
					},
					label: {
						show: true,
						position: "center",
						formatter: item.name === "Hits" ? "{d}%" : "",
						textStyle: {
							fontSize: 24,
							fontWeight: "bold",
							color: "#125a54", // Set the color of the percentage text
						},
					},
				})),
			},
			{
				name: "Miss",
				type: "pie",
				radius: ["35%", "47%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderWidth: 0, // Remove border
					borderRadius: 20,
					color: "#ffa12e",
				},
				label: {
					show: false,
					position: "center",
				},
				emphasis: {
					label: {
						show: false,
						fontSize: "14",
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: innerData.map((item) => ({
					...item,
					itemStyle: {
						color: item.name === "" ? "rgba(255,255,255, 0.5)" : null,
					},
				})),
			},
		],
	};

	return (
		<section
			style={{
				width: "100%",
				// maxWidth: '2000px',
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div
				style={{
					maxWidth: "2000px",
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					alignItems: "center",
					paddingTop: "30px",
					paddingBottom: 80,
				}}
			>
				<Box
					sx={{
						paddingLeft: "40px",
						paddingRight: "40px",
						paddingTop: "10px",
						paddingBottom: "10px",
						marginTop: "25px",
						display: "flex",
						flexDirection: "column",
						backgroundImage: "linear-gradient(to top , #0d2c7b, #6067b5)",
						// backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
						borderRadius: "12.5px",
					}}
				>
					<Text
						b
						size={26}
						color="#FFF"
						css={{
							fontWeight: "bolder",
							"@media only screen and (max-width: 600px)": {
								fontSize: 14,
								padding: "1px 5px",
								width: "auto",
							},
						}}
					>
						SEBI Registration No.: INH000009843
					</Text>
				</Box>
				<Text
					b
					size={70}
					css={{
						alignSelf: "center",
						paddingTop: "20px",
						paddingBottom: "20px",
						"@media only screen and (max-width: 600px)": {
							textAlign: "center",
							fontSize: 36,
							lineHeight: 1.2,
						},
					}}
				>
					Track Record
				</Text>
				<Box
				sx={{
					maxWidth: "2000px",
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					alignItems: "center",
					paddingTop: "20px",
					paddingBottom: "10px",
					paddingLeft: "10px",
					paddingRight: "10px",
					backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
					// borderBottomLeftRadius: "20px",
					// borderBottomRightRadius: "20px",
					borderRadius: "30px",
					"@media only screen and (max-width: 764px)": {
						width: "95%",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						// marginBottom: "10px",
						gap: "50px",
						alignItems: "center",
						"@media only screen and (max-width: 764px)": {
							gap: "30px",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								lineHeight: 1,
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 16,
								},
							}}
						>
							Avg. Return Rate
						</Text>
						<Text
							b
							size={45}
							css={{
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 30,
								},
							}}
						>
							20%
						</Text>
					</Box>
					<Divider
						css={{
							borderLeft: "6px solid black",
							height: "30px",
							width: "6px",
							background: "transparent",
							opacity: 0.6,
							borderRadius: "20px",
						}}
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								lineHeight: 1,
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 16,
								},
							}}
						>
							Avg. Days Taken
						</Text>
						<Text
							b
							size={45}
							css={{
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 30,
								},
							}}
						>
							200
						</Text>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						height: "200px",
						width: "100%",
						borderBottomLeftRadius: "20px",
						borderBottomRightRadius: "20px",
						padding: "10px 30px",
						// paddingLeft: "30px",
						// paddingRight: "30px",
						background: "#fff",
						alignItems: "center",
						"@media only screen and (max-width: 764px)": {
							height: '180px',
							paddingLeft: "10px",
							paddingRight: "10px",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 764px)": {
									fontSize: 16
								},
							}}
						>
							Hits
						</Text>
						<Divider
							css={{
								height: "8px",
								width: "45px",
								borderRadius: "20px",
								background: "#125a54",
								"@media only screen and (max-width: 764px)": {
									width: "30px",
									height: "4px",
								},
							}}
						/>
						<Text b size={30} css={{ lineHeight: 1, mt: "10px" }}>
							60
						</Text>
						<Text b size={12} css={{ lineHeight: 1.5 }}>
							of
						</Text>
						<Text b size={24} css={{ lineHeight: 1 }}>
							70
						</Text>
					</Box>
					{/* <Box
						sx={{
							display: 'flex',

							height: "200px",
							width: "250px",
							"@media only screen and (max-width: 764px)": {
								width: '150px',
								height: '200px',
							},
						}}
					> */}
					<ReactECharts
						option={options}
						style={{
							width: "100%",
							height: "100%",
							maxWidth: "500px",
							background: "#fff",
							margin: "0 auto",
						}}
					/>
					{/* </Box> */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 764px)": {
									fontSize: 16,
								},
							}}
						>
							Misses
						</Text>
						<Divider
							css={{
								height: "8px",
								width: "45px",
								borderRadius: "20px",
								background: "#ffa12e",
								"@media only screen and (max-width: 764px)": {
									width: "30px",
									height: "4px",
								},
							}}
						/>
						<Text
							b
							size={30}
							css={{
								lineHeight: 1,
								mt: "10px",
								// "@media only screen and (max-width: 764px)": {
								// 	fontSize: 26
								// },
							}}
						>
							10
						</Text>
						<Text b size={12} css={{ lineHeight: 1.5 }}>
							of
						</Text>
						<Text b size={24} css={{ lineHeight: 1 }}>
							70
						</Text>
					</Box>
				</Box>
				</Box>
				<div
					style={{
						width: "80%",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						gap: 15,
						justifyContent: "center",
						marginTop: '20px'
					}}
				>
					{[...Array(10)].map((_, index) => (
						<Card
							key={index}
							isHoverable
							css={{
								width: "420px",
								height: "auto",
								padding: "20px",
								paddingTop: "15px",
								paddingBottom: "15px",
								backgroundImage:
									"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
								borderRadius: "30px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								"@media only screen and (max-width: 764px)": {},
							}}
						>
							<div
								style={{
									width: "95%",
									borderRadius: "20px",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									flexDirection: "row",
									// paddingTop: "5%",
									paddingBottom: "10px",
								}}
							>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Text b size={22} color="#fff" css={{ lineHeight: 1.5 }}>
										Ion Exchange Ltd.
									</Text>
									<Text
										b
										size={16}
										color="#fff"
										css={{ lineHeight: 1, opacity: 0.7 }}
									>
										STATUS: ACTIVE
									</Text>
								</div>
								<img src="HoldBubbleYellow.png" style={{ width: "20%" }} />
							</div>
							<Divider
								css={{
									height: "3px",
									width: "95%",
									background: "#fff",
									opacity: 0.7,
								}}
							/>
							<div
								style={{
									width: "95%",
									display: "flex",
									flexDirection: "row",
									// justifyContent: "space-between",
									marginTop: "10px",
									gap: "20px",
								}}
							>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Text
										b
										size={16}
										color="#fff"
										css={{ opacity: 0.7, lineHeight: 1 }}
									>
										ENTRY PRICE
									</Text>
									<Text b size={22} color="#fff">
										2067.00
									</Text>
									<Text
										b
										size={16}
										color="#fff"
										css={{
											opacity: 0.7,
											lineHeight: 1,
										}}
									>
										03 Nov 2022
									</Text>
								</Box>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Text
										b
										size={16}
										color="#fff"
										css={{ opacity: 0.7, lineHeight: 1 }}
									>
										CMP
									</Text>
									<Text b size={22} color="#fff">
										4015.25
									</Text>
									<Text
										b
										size={16}
										color="#fff"
										css={{
											opacity: 0.7,
											lineHeight: 1,
										}}
									>
										26 May 2023
									</Text>
								</Box>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Text
										b
										size={16}
										color="#fff"
										css={{ opacity: 0.7, lineHeight: 1 }}
									>
										RETURNS
									</Text>
									<Text b size={22} color="#fff">
										94.25%
									</Text>
									<Text
										b
										size={16}
										color="#fff"
										css={{
											opacity: 0.7,
											lineHeight: 1,
										}}
									>
										149 DAYS LEFT
									</Text>
								</Box>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									marginTop: 10,
								}}
							>
								<Button
									onPress={() => setVisible(true)}
									css={{
										borderRadius: "10000px",
										backgroundImage:
											"linear-gradient(to top , #FF9D28, #ffa736)",
										fontSize: 18,
										color: "#202020",
										marginTop: "10px",
									}}
								>
									Get Report
								</Button>
								<Modal
									// scroll
									width="1200px"
									aria-labelledby="modal-title"
									aria-describedby="modal-description"
									{...bindings}
									css={{ background: "transparent", boxShadow: "none" }}
								>
									<iframe
										src="SampleReport.pdf#toolbar=0"
										style={{ height: "700px" }}
									></iframe>
									<Button
										flat
										onPress={() => setVisible(false)}
										css={{
											alignSelf: "end",
											width: "150px",
											backgroundColor: "#ffa12e",
											color: "#fff",
											fontSize: 17,
										}}
									>
										Close
									</Button>
								</Modal>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
