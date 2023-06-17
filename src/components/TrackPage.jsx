import {
	Text,
	Button,
	Card,
	Modal,
	useModal,
	Divider,
	Progress,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Box, Grid, IconButton, LinearProgress } from "@mui/material";
import ReactECharts from "echarts-for-react";
import ReactCardFlip from "react-card-flip";
import { ArrowCircleRight, ArrowCircleUp, DocumentText } from "iconsax-react";
import FaqsNew from "@/pages/screens/FaqsNew";
import FAQs from "@/pages/screens/FAQs";

const WhyUs = () => {
	const { setVisible, bindings } = useModal();
	const [flipStates, setFlipStates] = useState(Array(8).fill(false));

	const handleClick = (index) => {
		const newFlipStates = flipStates.map((state, i) =>
			i == index ? !state : false
		);
		setFlipStates(newFlipStates);
	};
	const [showPDF, setShowPDF] = useState(false);

	const handlePDF = () => {
		setShowPDF(true);
	};

	const handlePDFClose = () => {
		setShowPDF(false);
	};

	const [showCert, setShowCert] = useState(false);

	const handleCert = () => {
		setShowCert(true);
	};

	const handleCertClose = () => {
		setShowCert(false);
	};

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
				display: "flex",
				flexDirection: 'column',
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				backgroundColor: "#fff",
			}}
		>
			<div
				style={{
					width: "95%",
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
						paddingTop: "15px",
						paddingBottom: "15px",
						// marginTop: "25px",
						display: "flex",
						flexDirection: "column",
						backgroundImage: "linear-gradient(to top , #0d2c7b, #6067b5)",
						alignItems: "center",
						// backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
						borderRadius: "12.5px",
						"@media only screen and (max-width: 672px)": {
							paddingLeft: "20px",
							paddingRight: "20px",
							marginTop: "10px",
							borderRadius: "10px",
							alignItems: "flex-start",
						},
					}}
				>
					<Text
						b
						size={28}
						color="#FFF"
						css={{
							fontWeight: "bolder",
							"@media only screen and (max-width: 672px)": {
								fontSize: 19,
								width: "100%",
								textAlign: "center",
							},
						}}
						onClick={handleCert}
					>
						SEBI Registered: INH000009843
					</Text>
				</Box>
				<Modal
					width="790px"
					open={showCert}
					onClose={handleCertClose}
					css={{ background: "transparent", boxShadow: "none" }}
				>
					<img
						src="Kamayakya-SEBI-License.jpg"
						alt="SEBI Certificate"
						style={{ height: "90vh", objectFit: "contain" }}
					/>
					<Modal.Footer>
						<Button
							auto
							onClick={handleCertClose}
							css={{
								borderRadius: "20px",
								background: "#ffa12e",
								fontSize: 18,
							}}
						>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
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

				<Grid
					xs={"auto"}
					sm={"auto"}
					md={"auto"}
					lg={"auto"}
					container
					justifyContent={"center"}
					gap={"20px"}
					sx={{
						background: "#fff",
						boxShadow: "none",
						"@media only screen and (max-width: 600px)": {
							gap: "5px",
						},
					}}
				>
					<Grid item container gap={"20px"} justifyContent={"center"}>
						{[...Array(10)].map((_, index) => (
							<ReactCardFlip
								key={index}
								isFlipped={flipStates[index]}
								flipDirection="horizontal"
							>
								<Card
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
										borderBottomRightRadius: "5px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										"@media only screen and (max-width: 764px)": {},
									}}
								>
									<Box
										sx={{
											padding: "5px",
											paddingTop: "0px",
											paddingLeft: "15px",
											display: "flex",
											flexDirection: "column",
											// alignItems: "center",
											// background: 'rgba(255, 255, 255, 0.15) url("LineChartGreen.png")',
											backgroundSize: "cover",
											height: "auto",
											width: "410px",
										}}
									>
										<div
											style={{
												width: "95%",
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												flexDirection: "row",
												// paddingTop: "5%",
												paddingBottom: "5px",
											}}
										>
											<div style={{ display: "flex", flexDirection: "column" }}>
												<Text
													b
													size={16}
													color="#fff"
													css={{ lineHeight: 1, opacity: 0.7 }}
												>
													STATUS: ACTIVE
												</Text>
												<Text
													b
													size={22}
													color="#fff"
													css={{ lineHeight: 1.5 }}
												>
													Gufic BioSciences Ltd. (GBL)
												</Text>
												<Text
													b
													size={18}
													color="#fff"
													css={{ lineHeight: 1, opacity: 0.7 }}
												>
													Target One Hit | Target Two Active
												</Text>
											</div>
											<img
												src="HoldBubbleYellow.png"
												style={{
													width: "55px",
													height: "55px",
													alignSelf: "start",
												}}
											/>
										</div>
										<Divider
											css={{
												height: "4px",
												width: "70%",
												background: "#fff",
												borderRadius: "20px",
												opacity: 0.5,
												alignSelf: "start",
												marginTop: "2%",
											}}
										/>
										<div
											style={{
												width: "95%",
												display: "flex",
												flexDirection: "row",
												marginTop: "15px",
												gap: "20px",
											}}
										>
											<Box sx={{ display: "flex", flexDirection: "column" }}>
												<Text
													b
													size={16}
													color="#fff"
													css={{ opacity: 1, lineHeight: 1 }}
												>
													ENTRY PRICE
												</Text>
												<Text
													b
													size={22}
													color="#fff"
													css={{
														display: "flex",
														flexDirection: "row",
														alignItems: "center",
													}}
												>
													<span style={{ fontSize: 18, opacity: 0.75 }}>₹</span>
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
													css={{ opacity: 1, lineHeight: 1 }}
												>
													CMP
												</Text>
												<Text
													b
													size={22}
													color="#fff"
													css={{
														display: "flex",
														flexDirection: "row",
														alignItems: "center",
													}}
												>
													<span style={{ fontSize: 18, opacity: 0.75 }}>₹</span>
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
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													alignSelf: "center",
													marginLeft: "28%",
												}}
											>
												<Button
													auto
													onPress={() => handleClick(index)}
													css={{
														borderRadius: "10000px",
														background: "transparent",
														fontSize: 18,
														color: "#fff",
														padding: "0px",
													}}
												>
													<ArrowCircleRight size={30} />
												</Button>
											</Box>
										</div>
										<Divider
											css={{
												height: "4px",
												width: "40%",
												background: "#fff",
												borderRadius: "20px",
												opacity: 0.5,
												alignSelf: "start",
												marginTop: "3%",
											}}
										/>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												marginTop: "2.5%",
												// justifyContent: 'space-evenly'
											}}
										>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													alignSelf: "flex-start",
												}}
											>
												<Text
													b
													size={16}
													color="#fff"
													css={{ opacity: 1, lineHeight: 1 }}
												>
													RETURNS
												</Text>
												<Text b size={22} color="#fff">
													94%
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
													13 Jun 2023
												</Text>
											</Box>
											{/* <LinearProgress
													variant="determinate"
													value={35}
													
													sx={{ width: "60%", height: '15px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)',color: '#fff' }}
												/> */}
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													width: "70%",
													marginLeft: "5%",
												}}
											>
												<Text
													b
													size={16}
													color="#fff"
													css={{
														opacity: 1,
														lineHeight: 1,
														marginBottom: "8px",
													}}
												>
													Time Left: 142 days
												</Text>
												<Progress
													value={35}
													status={"default"}
													color={'warning'}
													css={{ width: "80%", opacity: 1, border: 0 }}
												/>
												<Box sx={{
													display: "flex",
													flexDirection: "row",
													justifyContent: 'space-between',
													width: "80%",
												}}>
												<Text b size={12} color="#fff" css={{ marginTop: '5px', opacity: 0.5 }}>
													0
												</Text>
												<Text b size={12} color="#fff" css={{ marginTop: '5px', opacity: 0.5 }}>
													365
												</Text>
												</Box>
											</Box>
										</Box>
									</Box>
								</Card>
								<Card
									key={index}
									isHoverable
									css={{
										width: "420px",
										height: "290px",
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
									<Text b size={20} color="#fff">
										Stock Reports
									</Text>
									<IconButton
										// key={report.report_name}
										onClick={handlePDF}
										sx={{
											// "&:hover": { background: "#fff" },
											borderRadius: "0px",
											paddingLeft: "0px",
										}}
									>
										<DocumentText size={25} color="#fff" />
										<Text
											b
											size={20}
											color="#fff"
											css={{
												marginLeft: "5px",
												alignSelf: "start",
												lineHeight: 1.5,
											}}
										>
											English
										</Text>
									</IconButton>
									<Modal
										width="790px"
										open={showPDF}
										onClose={handlePDFClose}
										css={{ background: "transparent", boxShadow: "none" }}
									>
										<iframe
											src="SampleReport.pdf#toolbar=0"
											style={{
												height: "80vh",
												borderColor: "transparent",
												borderRadius: "0px",
												borderWidth: "0px",
												background: "#fff",
											}}
										></iframe>
										<Button
											auto
											onClick={handlePDFClose}
											css={{
												alignSelf: "end",
												mt: "5%",
												width: "150px",
												borderRadius: "20px",
												background: "#ffa12e",
												fontSize: 18,
											}}
										>
											Close
										</Button>
									</Modal>
									<Button
										auto
										onPress={() => handleClick(index)}
										css={{
											top: "105px",
											background: "#ffa12e",
											borderRadius: "20px",
											fontSize: 18,
											width: "150px",
										}}
									>
										Return
									</Button>
								</Card>
							</ReactCardFlip>
						))}
					</Grid>
				</Grid>
			</div>
			{/* </div> */}
			<FaqsNew />
			<FAQs />
		</section>
	);
};

export default WhyUs;
