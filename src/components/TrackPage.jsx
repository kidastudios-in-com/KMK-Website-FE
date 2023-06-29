import {
	Text,
	Button,
	Card,
	Modal,
	Divider,
	Progress,
	Dropdown,
} from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, IconButton, LinearProgress } from "@mui/material";
import ReactECharts from "echarts-for-react";
import ReactCardFlip from "react-card-flip";
import { ArrowCircleRight, ArrowCircleUp, DocumentText } from "iconsax-react";
import FaqsNew from "@/pages/screens/FaqsNew";
import AuthContext from "@/components/AuthContext";
import { TRACK_RECORD_FOR_ALL, TRACK_RECORD_FOR_USER } from "@/pages/api/URLs";
import Footer from "@/pages/screens/Footer";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { DocumentAskPasswordEvent } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const WhyUs = () => {
	// const { setVisible, bindings } = useModal();
	const [flipStates, setFlipStates] = useState(Array(8).fill(false));
	const [record, setRecord] = useState([]);
	const { isLoggedIn } = useContext(AuthContext);

	const handleTrackRecord = async () => {
		try {
			const refreshToken = localStorage.getItem("refresh");

			const url = isLoggedIn ? TRACK_RECORD_FOR_USER : TRACK_RECORD_FOR_ALL;

			const headers = {
				"Content-Type": "application/json",
			};

			if (isLoggedIn) {
				headers.Authorization = `token ${refreshToken}`;
			}

			const response = await fetch(url, {
				method: "GET",
				headers,
			});

			if (response.ok) {
				const data = await response.json();
				setRecord(data);
			} else {
				// Handle API call error
				console.error("Error Getting Track Records | Track Reacord Page");
			}
		} catch (error) {
			// Handle any other error
			console.error(error);
			// console.log("no call");
		}
	};

	useEffect(() => {
		handleTrackRecord();
	}, [isLoggedIn]);

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

	const [showTargets, setShowTargets] = useState(false);
	const [showReports, setShowReports] = useState(false);
	const [selectedCardIndex, setSelectedCardIndex] = useState([]);
	const [selectedReportUrl, setSelectedReportUrl] = useState("");

	const handleCloseTargets = () => {
		setShowTargets(false);
	};
	const handleOpenTargets = (index) => {
		setSelectedCardIndex(index);
		setShowTargets(true);
	};

	const [selectedPDF, setSelectedPDF] = useState(new Set([""]));

	const PdfValue = React.useMemo(
		() => Array.from(selectedPDF)[0],
		[selectedPDF]
	);

	const handleCloseReports = () => {
		setShowReports(false);
		setSelectedPDF("");
	};
	const handleOpenReports = (index) => {
		setSelectedCardIndex(index);
		setShowReports(true);

		if (record[index].stock_reports && record[index].stock_reports.length > 0) {
			const firstReportUrl = record[index].stock_reports[0].document;
			setSelectedReportUrl(firstReportUrl);
			// setSelectedPDF(firstReportUrl);
			// console.log(selectedPDF);
			// console.log(selectedReportUrl);
		}
	};

	// const PdfURL =
	// 	selectedPDF === "" || selectedPDF === undefined
	// 		? selectedReportUrl
	// 		: PdfValue;

	const PdfURL =
		selectedPDF === "" || selectedPDF === undefined
			? selectedReportUrl
			: PdfValue;

	const handleAskPassword = (e) => {
		e.verifyPassword("$420%69#kamayakya#69%420$");
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
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				backgroundColor: "#fff",
			}}
		>
			<Box
				sx={{
					width: "95%",
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					alignItems: "center",
					paddingTop: "5vh",
					paddingBottom: "10vh",
					"@media only screen and (max-width: 764px)": {
						// maxHeight: "100vh",
						marginTop: "0px",
						paddingTop: "0px",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						paddingLeft: "5px",
						paddingRight: "5px",
					},
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
						"@media only screen and (max-width: 764px)": {
							paddingLeft: "5px",
							paddingRight: "5px",
							marginTop: "0px",
							borderRadius: "10px",
							alignItems: "flex-start",
							backgroundImage: "linear-gradient(to top , #fff, #fff)",
						},
					}}
				>
					<Text
						b
						size={28}
						color="#FFF"
						css={{
							fontWeight: "bolder",
							"@media only screen and (max-width: 764px)": {
								fontSize: 18,
								width: "100%",
								textAlign: "left",
								color: "#021C61",
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
					css={{
						background: "transparent",
						boxShadow: "none",
						"@media only screen and (max-width: 764px)": {
							width: "100vw",
							height: "95vh",
							paddingLeft: "15px",
							paddingRight: "15px",
						},
					}}
				>
					<iframe
						src="Kamayakya-SEBI-License.pdf#view=FitH&toolbar=0"
						alt="SEBI Certificate"
						style={{
							width: "100%",
							height: "90vh",
							borderColor: "transparent",
							borderRadius: "15px",
							borderWidth: "0px",
							zoom: "1",
						}}
						className="iframePdfMobile"
					/>
					{/* <Modal.Footer> */}
					<Button
						auto
						onClick={handleCertClose}
						css={{
							// alignSelf: "end",
							width: "100%",
							backgroundColor: "#ffa12e",
							color: "#fff",
							fontSize: 19,
							marginTop: "20px",
							borderRadius: "10px",
							height: "50px",
							"@media only screen and (max-width: 768px)": {
								width: "100%",
								fontSize: 15,
								height: "50px",
								marginTop: "0px",
								borderRadius: "0px 0px 10px",
								"& span": {
									// display: "none",
								},
							},
						}}
					>
						Close
					</Button>
					{/* </Modal.Footer> */}
				</Modal>
				<Text
					b
					size={70}
					css={{
						marginTop: "40px",
						marginBottom: "0px",
						// width: "90%",
						maxWidth: "80rem" /* 1280px */,
						textAlign: "center",
						lineHeight: 1.2,
						paddingLeft: "15px",
						paddingRight: "15px",
						"@media only screen and (max-width: 764px)": {
							fontSize: 45,
							lineHeight: 1.1,
							paddingLeft: "5px",
							paddingRight: "5px",
							marginTop: "0px",
							marginBottom: "10px",
							maxWidth: "100%",
							textAlign: "left",
						},
					}}
				>
					Track record
				</Text>

				<Text
					b
					size={30}
					css={{
						marginTop: 10,
						marginBottom: "40px",
						maxWidth: "80rem" /* 1280px */,
						textAlign: "center",
						color: "#125a54",
						lineHeight: 1.2,
						paddingLeft: "15px",
						paddingRight: "15px",
						"@media only screen and (max-width: 764px)": {
							fontSize: 20,
							maxWidth: "100%",
							paddingLeft: "5px",
							paddingRight: "5px",
							marginTop: "0px",
							marginBottom: "40px",
							textAlign: "left",
							color: "#000",
						},
					}}
				>
					KamayaKya is your friendly investment guru who will assist you in
					finding the best SME, MicroCap and SmallCap stocks to invest in,
					backed by solid research.
				</Text>
				{/* <Grid
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
				  > */}
				<Grid item container gap={"20px"} justifyContent={"center"}>
					{record.map((item, index) => (
						<ReactCardFlip
							key={index}
							isFlipped={flipStates[index]}
							flipDirection="horizontal"
						>
							<Card
								key={item.id}
								isHoverable
								css={{
									width: "450px",
									// height: "330px",
									// padding: "40px",
									paddingTop: "30px",
									paddingBottom: "30px",
									backgroundImage:
										"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
									borderRadius: "30px",
									borderBottomRightRadius: "5px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									"@media only screen and (max-width: 764px)": {
										width: "95vw",
										// height: "350px",
										paddingTop: "30px",
										paddingBottom: "30px",
									},
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
										"@media only screen and (max-width: 764px)": {
											width: "100%",
											paddingLeft: "20px",
											paddingRight: "20px",
										},
									}}
								>
									<div
										style={{
											width: "100%",
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
												size={15}
												color="#fff"
												css={{
													lineHeight: 1,
													opacity: 0.7,
													"@media only screen and (max-width: 764px)": {
														fontSize: "14px",
													},
												}}
											>
												STATUS: {item.status.toUpperCase()}
											</Text>
											<Text
												b
												size={22}
												color="#fff"
												css={{
													lineHeight: 1.5,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "5px",
														fontSize: "22px",
														lineHeight: 1.1,
													},
												}}
											>
												{item.stock_name.length > 28 ? (
													<Marquee delay={5} speed={30}>
														<span style={{ paddingRight: "40px" }}>
															{item.stock_name}
														</span>
													</Marquee>
												) : (
													<>{item.stock_name}</>
												)}
											</Text>
											<Text
												b
												size={16.5}
												color="#fff"
												css={{
													lineHeight: 1,
													opacity: 0.7,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "5px",
														fontSize: "15px",
														lineHeight: 1.1,
													},
												}}
											>
												TARGET {item.tag1.toUpperCase()} | {item.tag2 ? item.tag2.toUpperCase() : ""}
											</Text>
										</div>
										<img
											src={
												item.action === "HOLD"
													? "HoldBubbleYellow.png"
													: item.action === "SELL"
													? "SellBubbleRed.png"
													: item.action === "BUY"
													? "BuyBubbleBlue.png"
													: "HoldBubbleYellow.png"
											}
											style={{
												width: "55px",
												height: "55px",
												alignSelf: "start",
											}}
										/>
									</div>
									<Divider
										css={{
											height: "3px",
											width: "70%",
											background: "#fff",
											borderRadius: "20px",
											opacity: 0.5,
											alignSelf: "start",
											marginTop: "10px",
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
												css={{
													opacity: 1,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
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
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "20px",
													},
												}}
											>
												<span style={{ fontSize: 16, opacity: 0.75 }}>₹</span>
												{item.entry_price}
											</Text>
											<Text
												b
												size={16}
												color="#fff"
												css={{
													opacity: 0.7,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												{item.start_date ? `${new Date(item.start_date).getDate()} ${new Date(item.start_date).toLocaleString(
													"default",
													{
														month: "short",
													}
												)} ${new Date(item.start_date).getFullYear()}` : "03 Nov 2022"}
											</Text>
										</Box>
										<Box sx={{ display: "flex", flexDirection: "column" }}>
											<Text
												b
												size={16}
												color="#fff"
												css={{
													opacity: 1,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
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
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "20px",
													},
												}}
											>
												<span style={{ fontSize: 16, opacity: 0.75 }}>₹</span>
												{item.live_price}
											</Text>
											<Text
												b
												size={16}
												color="#fff"
												css={{
													opacity: 0.7,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												{`${new Date().getDate()} ${new Date().toLocaleString(
													"default",
													{
														month: "short",
													}
												)} ${new Date().getFullYear()}`}
											</Text>
										</Box>
										{/* <Box
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
										</Box> */}
									</div>
									<Divider
										css={{
											height: "3px",
											width: "40%",
											background: "#fff",
											borderRadius: "20px",
											opacity: 0.5,
											alignSelf: "start",
											marginTop: "15px",
										}}
									/>
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											marginTop: "15px",
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
												css={{
													opacity: 1,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												RETURNS
											</Text>
											<Text
												b
												size={22}
												color="#fff"
												css={{
													display: "flex",
													flexDirection: "row",
													alignItems: "center",
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "20px",
													},
												}}
											>
												{item.gain_loss}%
											</Text>
											<Text
												b
												size={16}
												color="#fff"
												css={{
													width: "120px",
													opacity: 0.7,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												{`${new Date().getDate()} ${new Date().toLocaleString(
													"default",
													{
														month: "short",
													}
												)} ${new Date().getFullYear()}`}
											</Text>
										</Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												width: "70%",
												marginLeft: "20px",
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
													"@media only screen and (max-width: 764px)": {
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												Time Left: {item.time_left} days
											</Text>
											<Progress
												value={Math.floor(
													(new Date() - new Date(item.start_date)) /
														(1000 * 60 * 60 * 24)
												)}
												max={Math.ceil(
													(new Date(item.end_date) -
														new Date(item.start_date)) /
														(1000 * 60 * 60 * 24)
												)}
												css={{
													width: "80%",
													opacity: 1,
													height: "22.5px",
													color: "#fff",
													backgroundColor: "rgba(255, 255, 255, 0.3)",
													".nextui-c-dwnaVv": { background: "#fff" },
												}}
											/>
											{/* {console.log(
												"Curr",
												new Date()
													.toLocaleDateString("en-GB", {
														year: "numeric",
														month: "2-digit",
														day: "2-digit",
													})
													.split("/")
													.reverse()
													.join("-"),
												"Start Date",
												item.start_date,
												"End Date",
												item.end_date,
											)} */}
											{/* {console.log(
												"Progress",
												Math.floor(
													(new Date() - new Date(item.start_date)) /
													  (1000 * 60 * 60 * 24)
												  )
											)} */}
											{/* {console.log(item.start_date)} */}
											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
													justifyContent: "space-between",
													width: "80%",
												}}
											>
												<Text
													b
													size={12}
													color="#fff"
													css={{ marginTop: "5px", opacity: 1 }}
												>
													0
												</Text>
												<Text
													b
													size={12}
													color="#fff"
													css={{ marginTop: "5px", opacity: 1 }}
												>
													{item.end_date ? (
														<Text
															b
															size={12}
															color="#fff"
															css={{ marginTop: "5px", opacity: 1 }}
														>
															{`${Math.ceil(
																(new Date(item.end_date) -
																	new Date(item.start_date)) /
																	(1000 * 60 * 60 * 24)
															)}`}
														</Text>
													) : (
														<Text
															b
															size={12}
															color="#fff"
															css={{ marginTop: "5px", opacity: 1 }}
														>
															365 days
														</Text>
													)}
												</Text>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											gap: "5%",
											mt: "15px",
										}}
									>
										<Button
											auto
											onPress={() => handleOpenTargets(index)}
											css={{
												borderRadius: "1000px",
												width: "47.5%",
												fontSize: 18,
												backgroundImage:
													"linear-gradient(to top , #FF9D28, #ffa736)",
											}}
										>
											Previous Targets
										</Button>
										<Button
											auto
											onPress={() => handleOpenReports(index)}
											css={{
												borderRadius: "1000px",
												width: "47.5%",
												fontSize: 18,
												backgroundImage:
													"linear-gradient(to top , #FF9D28, #ffa736)",
											}}
										>
											Reports
										</Button>
									</Box>
								</Box>

								{/* Targets Modal */}

								<Modal
									blur
									open={showTargets}
									onClose={handleCloseTargets}
									css={{
										// width: "800px",
										background: "transparent",
										boxShadow: "none",
										"@media only screen and (max-width: 764px)": {
											width: "100vw",
											height: "95vh",
											paddingLeft: "15px",
											paddingRight: "15px",
										},
									}}
								>
									{record[selectedCardIndex] && (
										<Card
											key={selectedCardIndex}
											css={{
												width: "350px",
												height: "230px",
												paddingTop: "30px",
												paddingBottom: "30px",
												backgroundImage:
													"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
												borderRadius: "30px",
												borderBottomRightRadius: "5px",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												filter: "none",
												boxShadow: "none",
												"@media only screen and (max-width: 764px)": {
													width: "100%",
													paddingTop: "30px",
													paddingBottom: "30px",
												},
											}}
										>
											<Text b size={22} color="#fff">
												{record[selectedCardIndex].stock_name}
											</Text>

											{record[selectedCardIndex].stock_targets.length > 0 ? (
												record[selectedCardIndex].stock_targets.map(
													(target) => (
														<div key={target.id} style={{ textAlign: "start" }}>
															<Text color="#fff">
																Hold Price: ₹{target.hold_price}
															</Text>
															<Text color="#fff">
																Target Price: ₹{target.target_price}
															</Text>
															<Text color="#fff">
																Target Date: {target.target_date}
															</Text>
															<Text color="#fff">
																Profit/Loss: {target.gain_loss}%
															</Text>
														</div>
													)
												)
											) : (
												<Text>No targets available</Text>
											)}
										</Card>
									)}

									<Button
										flat
										onPress={handleCloseTargets}
										css={{
											alignSelf: "end",
											width: "100%",
											backgroundColor: "#ffa12e",
											color: "#fff",
											fontSize: 19,
											marginTop: "20px",
											borderRadius: "10px",
											height: "50px",
											"@media only screen and (max-width: 768px)": {
												width: "100%",
												fontSize: 15,
												height: "50px",
												marginTop: "0px",
												borderRadius: "0px 0px 10px",
												"& span": {
													// display: "none",
												},
											},
										}}
									>
										Close
									</Button>
								</Modal>

								{/* Reports Modal */}

								<Modal
									blur
									open={showReports}
									onClose={handleCloseReports}
									css={{
										// width: "800px",
										background: "transparent",
										boxShadow: "none",
										"@media only screen and (max-width: 764px)": {
											width: "100vw",
											height: "95vh",
											paddingLeft: "15px",
											paddingRight: "15px",
										},
									}}
								>
									{record[selectedCardIndex] &&
									record[selectedCardIndex].stock_reports &&
									record[selectedCardIndex].stock_reports.length > 0 ? (
										<>
											<Dropdown>
												<Dropdown.Button
													flat
													css={{
														alignSelf: "center",
														width: "100%",
														backgroundColor: "#125a54",
														color: "#fff",
														fontSize: 19,
														marginBottom: "20px",
														borderRadius: "10px",
														height: "50px",
														"@media only screen and (max-width: 768px)": {
															width: "100%",
															fontSize: 15,
															height: "50px",
															marginBottom: "0px",
															borderRadius: "10px 0 0",
															"& span": {
																// display: "none",
															},
														},
													}}
												>
													{selectedPDF === "" || selectedPDF === undefined
														? "Reports"
														: record[selectedCardIndex].stock_reports.find(
																(report) =>
																	report.document === Array.from(selectedPDF)[0]
														  )?.report_name}
												</Dropdown.Button>
												<Dropdown.Menu
													// defaultSelectedKeys={'SampleReport.pdf'}
													aria-label="TractReports"
													selectionMode="single"
													selectedKeys={selectedPDF}
													onSelectionChange={(key) => setSelectedPDF(key)}
													// defaultSelectedKeys={[record[selectedCardIndex].stock_reports[0]?.document]}
													style={{ width: "100%" }}
												>
													{record[selectedCardIndex].stock_reports.map(
														(report) => (
															<Dropdown.Item key={report.document}>
																{report.report_name}
															</Dropdown.Item>
														)
													)}
												</Dropdown.Menu>
											</Dropdown>
											{/* {console.log(PdfURL)}
											{console.log(selectedReportUrl)} */}
											<Worker
												workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js`}
											>
												<Box
													sx={{
														height: "75vh",
														"@media only screen and (max-width: 768px)": {
															// width: '500px',
															// height: '80%',
														},
													}}
												>
													<Viewer
														fileUrl={`${
															PdfURL ? PdfURL : selectedReportUrl
														}#view=FitH&toolbar=0`}
														onDocumentAskPassword={handleAskPassword}
													/>
												</Box>
											</Worker>
										</>
									) : (
										<Text b size={22} color="#fff">
											No Reports Available
										</Text>
									)}
									<Button
										flat
										onPress={handleCloseReports}
										css={{
											alignSelf: "end",
											width: "100%",
											backgroundColor: "#ffa12e",
											color: "#fff",
											fontSize: 19,
											marginTop: "20px",
											borderRadius: "10px",
											height: "50px",
											"@media only screen and (max-width: 768px)": {
												width: "100%",
												fontSize: 15,
												height: "50px",
												marginTop: "0px",
												borderRadius: "0px 0px 10px",
												"& span": {
													// display: "none",
												},
											},
										}}
									>
										Close
									</Button>
								</Modal>
							</Card>
							<Card
								key={index}
								isHoverable
								css={{
									width: "450px",
									height: "330px",
									// padding: "40px",
									paddingTop: "30px",
									paddingBottom: "30px",
									backgroundImage:
										"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
									borderRadius: "30px",
									borderBottomLeftRadius: "5px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									filter: "none",
									boxShadow: "none",
									"@media only screen and (max-width: 764px)": {
										width: "95vw",
										height: "350px",
										paddingTop: "30px",
										paddingBottom: "30px",
									},
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
									blur
									width="790px"
									open={showPDF}
									onClose={handlePDFClose}
									css={{ background: "transparent", boxShadow: "none" }}
								>
									<iframe
										src="SampleReport.pdf#view=FitH&toolbar=0"
										style={{
											width: "100%",
											height: "90vh",
											borderColor: "transparent",
											borderRadius: "15px",
											borderWidth: "0px",
											zoom: "1",
										}}
										className="iframePdfMobile"
									></iframe>
									<Button
										auto
										onClick={handlePDFClose}
										css={{
											// alignSelf: "end",
											width: "100%",
											backgroundColor: "#ffa12e",
											color: "#fff",
											fontSize: 19,
											marginTop: "20px",
											borderRadius: "10px",
											height: "50px",
											"@media only screen and (max-width: 768px)": {
												width: "100%",
												fontSize: 15,
												height: "50px",
												marginTop: "0px",
												borderRadius: "0px 0px 10px",
												"& span": {
													// display: "none",
												},
											},
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
				{/* </Grid> */}
			</Box>
			<FaqsNew />
			<Footer />
		</section>
	);
};

export default WhyUs;
