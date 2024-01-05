import {
	Text,
	Button,
	Card,
	Modal,
	Divider,
	Progress,
} from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { DocumentText, LockCircle } from "iconsax-react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import CloseIcon from "@mui/icons-material/Close";
import Login from "@/components/Login";

const Design3 = ({ record, isLoggedIn, isSubscribed }) => {
	const [showTargets, setShowTargets] = useState(false);
	const [showReports, setShowReports] = useState(false);
	const [selectedCardIndex, setSelectedCardIndex] = useState([]);
	const [selectedReportUrl, setSelectedReportUrl] = useState("");
	const [showLoginModal, setShowLoginModal] = useState(false);

	const handleCloseTargets = () => {
		setShowTargets(false);
	};
	const handleOpenTargets = (index) => {
		setSelectedCardIndex(index);
		setShowTargets(true);
	};

	const [selectedPDF, setSelectedPDF] = useState(new Set([""]));

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

	// let imageHeight = 140;

	const imageStyle = {
		position: "absolute",
		zIndex: "0",
		height: "140px",
		top: "80px",
		right: "20px",
	};

	const imageStyleAction = {
		// position: "absolute",
		width: "55px",
		height: "55px",
		rotate: "-20deg",
		justifyContent: "flex-start",
		// right: "70px",
		// top: "45px",
	};

	const isMobile = window.innerWidth <= 764; // Adjust the breakpoint as needed

	if (isMobile) {
		// Override styles for mobile
		imageStyle.top = "115px";
		imageStyle.right = "20px";
		imageStyleAction.top = "75px";
		imageStyleAction.right = "45px";
		// imageHeight = 120;
	}
	// if (isMobile) {
	// 	// Override styles for mobile
	// 	imageStyleAction.top = "55px";
	// 	imageStyleAction.right = "45px";
	// }
	// if (isMobile) {
	// 	imageHeight = "120px";
	// }

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				marginTop: "15px",
				background: "#fff",
			}}
		>
			<Box>{record?.length > 0 ? "" : "False"}</Box>
			<Grid item container gap={"20px"} justifyContent={"center"}>
				{record.map((item, index) => (
					<>
						<Card
							key={index}
							isHoverable
							css={{
								width: "450px",
								// height: "380px",
								// padding: "40px",
								paddingTop: "30px",
								paddingBottom: "30px",
								backgroundImage:
									"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
								borderRadius: "30px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								"@media only screen and (max-width: 764px)": {
									width: "95vw",
									// height: "380px",
									paddingTop: "30px",
									paddingBottom: "30px",
								},
							}}
						>
							{isLoggedIn === false && (
								<Box
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										backdropFilter: "blur(10px)",
										WebkitBackdropFilter: "blur(10px)",
										margin: "0px",
										alignItems: "center",
										zIndex: "100",
										"@media only screen and (max-width: 768px)": {
											margin: "0px",
										},
									}}
								>
									<IconButton
										onClick={handleLogin}
										sx={{ top: "35%", left: "43.5%" }}
									>
										<LockCircle
											size={55}
											color={"white"}
											style={{
												top: "35%",
												left: "43.5%",
												background: "linear-gradient(to top , #fb7716,#fe9807)",
												paddingTop: "5px",
												paddingBottom: "5px",
												borderRadius: "10000px",
												boxShadow: "none",
												"&:hover": {
													background:
														"linear-gradient(to top , #ffa736, #ffa736)",
												},
												position: "absolute",
												alignSelf: "center",
											}}
										/>
									</IconButton>
									<Button
										// variant="contained"
										css={{
											width: "50%",
											top: "55.5%",
											left: "25%",
											background: "linear-gradient(to top , #fb7716,#fe9807)",
											paddingTop: "5px",
											paddingBottom: "5px",
											borderRadius: "10000px",
											boxShadow: "none",
											"&:hover": {
												backgroundImage:
													"linear-gradient(to top , #ffa736, #ffa736)",
											},
											position: "absolute",
											alignSelf: "center",
										}}
										onPress={handleLogin}
									>
										<Text b color="#FFF" size={18}>
											Login to unlock
										</Text>
									</Button>
									<Modal
										width="450px"
										// blur
										open={showLoginModal}
										onClose={handleCloseLoginModal}
									>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row",
												width: "100%",
												justifyContent: "space-between",
												alignItems: "center",
											}}
										>
											<img src="kmk-k.png" style={{ maxWidth: "260px" }} />
											<IconButton
												sx={{
													width: "40px",
													"&:hover": { background: "#fff" },
													// alignSelf: "end",
													right: "20px",
												}}
												onClick={() => handleCloseLoginModal()}
											>
												<CloseIcon sx={{ color: "#e81123" }} />
											</IconButton>
										</Box>

										<Modal.Body>
											<Login />
										</Modal.Body>
									</Modal>
								</Box>
							)}
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
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
										// justifyContent: "space-between",
										alignItems: "center",
										flexDirection: "row",
										// paddingTop: "5%",
										paddingBottom: "5px",
									}}
								>
									<div style={{ display: "flex", flexDirection: "column",width: "75%" }}>
										<Text
											b
											size={15}
											color="#fff"
											css={{
												lineHeight: 1,
												opacity: 0.7,
												zIndex: "0",
												letterSpacing: 0.7,
												"@media only screen and (max-width: 764px)": {
													paddingTop: "5px",
													fontSize: "15px",
													lineHeight: 1.1,
												},
											}}
										>
											{item.tag1}
											{item.tag2 ? <span> | {item.tag2}</span> : ""}
										</Text>
										<Text
											b
											size={22}
											color="#fff"
											css={{
												lineHeight: 1.5,
												// width: "80%",
												"@media only screen and (max-width: 764px)": {
													paddingTop: "5px",
													fontSize: "22px",
													lineHeight: 1.1,
												},
												filter:
													((!isLoggedIn || !isSubscribed) && item.action) ===
													"BUY"
														? "blur(10px)"
														: "none",
											}}
										>
											{item.stock_name.length > 25 ? (
												<Marquee delay={5} speed={30} style={{ width: "100%" }}>
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
											size={15}
											color="#fff"
											css={{
												lineHeight: 1,
												opacity: 0.7,
												zIndex: "0",
												letterSpacing: 0.7,
												"@media only screen and (max-width: 764px)": {
													fontSize: "14px",
												},
											}}
										>
											Status: {item.status}
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
											// position: "absolute",
											width: "55px",
											height: "55px",
											rotate: "-20deg",
											// right: "70px",
											// top: "45px",
										}}
										// style={imageStyleAction}
									/>
									<img
										src="trackRecord-lion.png"
										height={"120px"}
										// height={imageHeight}
										style={{
											position: "absolute",
											zIndex: "0",
											top: "80px",
											right: "35px",
										}}
										// style={imageStyle}
										// className="custom-image"
									/>
								</div>
								{/* <Divider
									css={{
										height: "3px",
										width: "70%",
										background: "#fff",
										borderRadius: "20px",
										opacity: 0.5,
										alignSelf: "start",
										marginTop: "10px",
										zIndex: "0",
									}}
								/> */}
								<Progress
									value={Math.floor(
										(new Date() - new Date(item.start_date)) /
											(1000 * 60 * 60 * 24)
									)}
									max={
										item.stock_targets.length > 0
											? Math.round(
													(new Date(
														item.stock_targets[
															item.stock_targets.length - 1
														].target_date
													).getTime() -
														new Date(item.start_date).getTime()) /
														(1000 * 60 * 60 * 24)
											  )
											: Math.ceil(
													(new Date(item.end_date) -
														new Date(item.start_date)) /
														(1000 * 60 * 60 * 24)
											  )
									}
									css={{
										width: "65%",
										marginTop: "15px",
										marginBottom: "8px",
										opacity: 1,
										height: "6px",
										color: "#fff",
										backgroundColor: "#01774c",
										".nextui-c-dwnaVv": { background: "#01774c", opacity: 1 },
									}}
								/>
								<Text
									b
									size={16}
									color="#fff"
									css={{
										opacity: 0.7,
										lineHeight: 1,
										marginBottom: "3px",
										marginLeft: "10px",
										"@media only screen and (max-width: 764px)": {
											paddingTop: "0px",
											fontSize: "14.5px",
										},
									}}
								>
									{item.action === "SELL" ? (
										<span>
											{item.gain_loss > 0 ? (
												<span>Profit booked in </span>
											) : item.gain_loss == 0 ? (
												<span>Exit call given in </span>
											) : (
												<span>Loss booked in </span>
											)}{" "}
											{Math.ceil(
												(new Date(item.end_date) - new Date(item.start_date)) /
													(1000 * 60 * 60 * 24)
											)}{" "}
											days
										</span>
									) : (
										<span>Time left: {item.time_left} days</span>
									)}
								</Text>
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
												opacity: 0.7,
												lineHeight: 1,
												letterSpacing: "$wide",
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "14.5px",
												},
											}}
										>
											Entry Price
										</Text>
										<Text
											b
											size={22}
											color="#fff"
											css={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												zIndex: "0",
												opacity: 0.7,
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "20px",
												},
											}}
										>
											<span style={{ fontSize: 16, opacity: 0.75 }}>₹</span>

											{
												item?.stock_targets[item?.stock_targets.length - 1]
													?.entry_price
											}
										</Text>
										<Text
											b
											size={16}
											color="#fff"
											css={{
												opacity: 0.7,
												lineHeight: 1,
												zIndex: "0",
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "14.5px",
												},
											}}
										>
											{item?.stock_targets.length > 1
												? `${new Date(
														item?.stock_targets[
															item?.stock_targets.length - 1
														].created
												  ).getDate()} ${new Date(
														item?.stock_targets[
															item?.stock_targets.length - 1
														].created
												  ).toLocaleString("default", {
														month: "short",
												  })} ${new Date(
														item?.stock_targets[
															item?.stock_targets.length - 1
														].created
												  ).getFullYear()}`
												: `${new Date(item?.start_date).getDate()} ${new Date(
														item.start_date
												  ).toLocaleString("default", {
														month: "short",
												  })} ${new Date(item?.start_date).getFullYear()}`}
										</Text>
									</Box>
									<Box sx={{ display: "flex", flexDirection: "column" }}>
										<Text
											b
											size={16}
											color="#fff"
											css={{
												opacity: 0.7,
												lineHeight: 1,
												letterSpacing: "$wide",
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "14.5px",
												},
											}}
										>
											{item.action == "SELL" ? "Exit Price" : "Current Price"}
										</Text>
										<Text
											b
											size={22}
											color="#fff"
											css={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												zIndex: "0",
												opacity: 0.7,
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "20px",
												},
											}}
										>
											<span style={{ fontSize: 16, opacity: 0.75 }}>₹</span>

											{item.action == "SELL" ? (
												<>{item.exit_price.toFixed(2)}</>
											) : (
												<>{item.live_price.toFixed(2)}</>
											)}
										</Text>
										<Text
											b
											size={16}
											color="#fff"
											css={{
												opacity: 0.7,
												lineHeight: 1,
												zIndex: "0",
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "14.5px",
												},
											}}
										>
											{item.action == "SELL"
												? `${new Date(item.exit_date).getDate()} ${new Date(
														item.exit_date
												  ).toLocaleString("default", {
														month: "short",
												  })} ${new Date(item.exit_date).getFullYear()}`
												: `${new Date().getDate()} ${new Date().toLocaleString(
														"default",
														{
															month: "short",
														}
												  )} ${new Date().getFullYear()}`}
										</Text>
									</Box>
								</div>
								{/* <Divider
									css={{
										height: "3px",
										width: "40%",
										background: "#fff",
										borderRadius: "20px",
										opacity: 0.5,
										alignSelf: "start",
										marginTop: "15px",
										zIndex: "0",
									}}
								/> */}
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										// alignItems: "center",
										justifyContent: "space-between",
										marginTop: "15px",
										zIndex: "0",
									}}
								>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											// alignSelf: "flex-start",
											justifyContent: "end",
											// width: "50%",
										}}
									>
										{/* <Text
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
										</Text> */}
										<Text
											b
											size={44}
											color="#fff"
											css={{
												display: "flex",
												// justifyContent: 'center',
												flexDirection: "row",
												alignItems: "center",
												textAlign: "center",
												// background: '#125a54',
												borderRadius: "10px",
												background: "transparent",
												lineHeight: 1.1,
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "40px",
												},
											}}
										>
											{item?.gain_loss}%
										</Text>
										<Text
											b
											size={16}
											color="#fff"
											css={{
												// width: "120px",
												opacity: 1,
												lineHeight: 1,
												letterSpacing: "$wider",
												"@media only screen and (max-width: 764px)": {
													paddingTop: "0px",
													fontSize: "14.5px",
												},
											}}
										>
											{item.action == "SELL" ? (
												<span>
													{item.gain_loss > 0 ? (
														<span>profit in </span>
													) : item.gain_loss == 0 ? (
														<span>exit call in </span>
													) : (
														<span>loss in </span>
													)}{" "}
													{Math.ceil(
														(new Date(item.end_date) -
															new Date(item.start_date)) /
															(1000 * 60 * 60 * 24)
													)}{" "}
													days
												</span>
											) : (
												`returns till date`
											)}
										</Text>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											// width: "40%",
											height: "70px",
											// marginLeft: "20px",

											justifyContent: "end",
										}}
									>
										{item.stock_targets.length > 1 ? (
											// <Button
											// 	auto
											// 	onPress={() => handleOpenTargets(index)}
											// 	css={{
											// 		borderRadius: "11px 11px 1px 11px",
											// 		width: "47.5%",
											// 		fontSize: 18,
											// 		backgroundImage:
											// 			"linear-gradient(to top , #FF9D28, #ffa736)",
											// 	}}
											// >
											// 	Previous Targets
											// </Button>
											<Text
												onClick={() => handleOpenTargets(index)}
												style={{
													textDecoration: "underline",
													color: "#fff",
													alignSelf: "center",
													cursor: "pointer",
													lineHeight: 1.8,
													fontSize: 16,
												}}
											>
												Previous Targets
											</Text>
										) : (
											""
										)}
										{isSubscribed === true ? (
											<Button
												auto
												onPress={() => handleOpenReports(index)}
												css={{
													alignSelf: "center",
													borderRadius: "5px",
													width: "47.5%",
													fontSize: 18,
													backgroundImage:
														"linear-gradient(to top , #FF9D28, #ffa736)",
													// background: "#fc8019",
													fontWeight: "$semibold",
													letterSpacing: 0.2,
												}}
											>
												Details Reports
											</Button>
										) : (
											""
										)}
									</Box>
								</Box>
								{/* <Box
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "row",
										gap: "5%",
										mt: "15px",
										zIndex: "0",
									}}
								>
									
								</Box> */}
							</Box>
						</Card>
						{/* Targets Modal */}

						<Modal
							// blur
							scroll
							fullScreen
							closeButton
							noPadding
							// flat
							open={showTargets}
							onClose={handleCloseTargets}
							aria-describedby="modal-description"
							css={{
								display: "flex",
								// background: "transparent !important",
								background: "#000",
								boxShadow: "none",
								alignItems: "center",
								borderRadius: "0px",
								position: "fixed",
								top: "0px",
								bottom: "10px",
								left: "0px",
								right: "10px",
								// width: "100%",
								"@media only screen and (max-width: 764px)": {
									flexWrap: "wrap",
									width: "100vw",
									height: "100vh",
								},
								// "& .nextui-c-csEDlc-ivNdeP-css": {
								// 	"--nextui--backdropOpacity": 0.2,
								//   },
								"& .nextui-c-iDzHRq": {
									padding: "$0 !important",
									// paddingLeft: "10px !important",
								},
							}}
						>
							<Modal.Body
								style={{
									width: "100vw",
									justifyContent: "flex-start",
									alignItems: "center",
									marginTop: "0px",
								}}
							>
								{record[selectedCardIndex] && (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column", //change back to row
											gap: "15px",
											justifyContent: "center",
											// overflowY: "scroll",
											"@media only screen and (max-width: 764px)": {},
										}}
									>
										{/* Main Target Card  */}
										<Card
											key={record[selectedCardIndex].id}
											css={{
												width: "450px",
												paddingTop: "20px",
												paddingBottom: "20px",
												backgroundImage:
													"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
												borderRadius: "30px",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												filter: "none",
												boxShadow: "none",
												"@media only screen and (max-width: 764px)": {
													width: "95vw",
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
													<div
														style={{
															display: "flex",
															flexDirection: "column",
														}}
													>
														<Text
															b
															size={22}
															color="#fff"
															css={{
																lineHeight: 1.5,
																width: "70%",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "5px",
																	fontSize: "22px",
																	lineHeight: 1.1,
																},
															}}
														>
															{record[selectedCardIndex].stock_name.length >
															28 ? (
																<Marquee delay={5} speed={30}>
																	<span
																		style={{
																			paddingRight: "40px",
																			filter:
																				isSubscribed === false
																					? "blur(8px)" //8px blur
																					: "blur(0px)",
																		}}
																	>
																		{record[selectedCardIndex].stock_name}
																	</span>
																</Marquee>
															) : (
																<div
																	style={{
																		filter:
																			isSubscribed === false
																				? "blur(8px)" //8px Blur
																				: "blur(0px)",
																	}}
																>
																	{record[selectedCardIndex].stock_name}
																</div>
															)}
														</Text>
													</div>
													<img
														src={
															record[selectedCardIndex].action === "HOLD"
																? "HoldBubbleYellow.png"
																: record[selectedCardIndex].action === "SELL"
																? "SellBubbleRed.png"
																: record[selectedCardIndex].action === "BUY"
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
														width: "100%",
														background: "#fff",
														borderRadius: "20px",
														opacity: 0.5,
														alignSelf: "start",
														// marginTop: "10px",
													}}
												/>
												<Box
													sx={{
														width: "100%",
														display: "flex",
														flexDirection: "row",
														marginTop: "15px",
														gap: "15px",
														"@media only screen and (max-width: 764px)": {
															gap: "15px",
															width: "100%",
															// justifyContent: 'space-evenly',
														},
													}}
												>
													<Box
														sx={{
															display: "flex",
															flexDirection: "column",
															width: "35%",
														}}
													>
														<Text
															b
															size={16}
															color="#fff"
															css={{
																opacity: 1,
																lineHeight: 1,
																// width: "100%",
																alignSelf: "start",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "0px",
																	fontSize: "13.5px",
																	width: "100%",
																},
															}}
														>
															ENTRY PRICE 1
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
															<span style={{ fontSize: 16, opacity: 0.75 }}>
																₹
															</span>
															{
																record[selectedCardIndex].stock_targets[
																	record[selectedCardIndex].stock_targets
																		.length - 1
																].entry_price
															}
														</Text>
														<Text
															b
															size={16}
															color="#fff"
															css={{
																opacity: 0.7,
																lineHeight: 1,
																alignSelf: "start",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "0px",
																	fontSize: "14.5px",
																},
															}}
														>
															{`${new Date(
																record[selectedCardIndex].start_date
															).getDate()} ${new Date(
																record[selectedCardIndex].start_date
															).toLocaleString("default", {
																month: "short",
															})} ${new Date(
																record[selectedCardIndex].start_date
															).getFullYear()}`}
														</Text>
													</Box>
													<Box
														sx={{
															display: "flex",
															flexDirection: "column",
															width: "30%",
														}}
													>
														<Text
															b
															size={16}
															color="#fff"
															css={{
																opacity: 1,
																lineHeight: 1,
																alignSelf: "start",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "0px",
																	fontSize: "13.5px",
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
																alignSelf: "start",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "0px",
																	fontSize: "20px",
																},
															}}
														>
															<span style={{ fontSize: 16, opacity: 0.75 }}>
																₹
															</span>
															{record[selectedCardIndex].live_price}
														</Text>
														{
															<Text
																b
																size={16}
																color="#fff"
																css={{
																	opacity: 0.7,
																	lineHeight: 1,
																	alignSelf: "start",
																	"@media only screen and (max-width: 764px)": {
																		paddingTop: "0px",
																		fontSize: "14.5px",
																	},
																}}
															>
																{`${
																	new Date().getDate()
																	// record[selectedCardIndex].target_met
																} ${new Date().toLocaleString("default", {
																	// target.target_met
																	month: "short",
																})} ${
																	new Date().getFullYear()
																	// target.target_met
																}`}
															</Text>
														}
													</Box>
													<Box
														sx={{
															display: "flex",
															flexDirection: "column",
															width: "35%",
															alignSelf: "flex-start",
														}}
													>
														<Text
															b
															size={16}
															color="#ffa230"
															css={{
																opacity: 1,
																lineHeight: 1,
																alignSelf: "start",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "0px",
																	fontSize: "13.5px",
																},
															}}
														>
															TOTAL RETURNS
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
															{`${record[selectedCardIndex].gain_loss} %`}
														</Text>
														<Text
															b
															size={16}
															color="#fff"
															css={{
																// width: "120px",
																opacity: 0.7,
																lineHeight: 1,
																alignSelf: "start",
																"@media only screen and (max-width: 764px)": {
																	paddingTop: "0px",
																	fontSize: "14.5px",
																},
															}}
														>
															{`Target ${record[selectedCardIndex].stock_targets.length} Active`}
														</Text>
													</Box>
												</Box>
											</Box>
										</Card>
										<Divider
											style={{
												height: "5px",
												width: "30%",
												alignSelf: "center",
												background: "#fff",
												borderRadius: "10px",
											}}
										/>

										{/* Mapping of Previous Targets  */}
										{record[selectedCardIndex].stock_targets.length > 1 ? (
											record[selectedCardIndex].stock_targets.map(
												(target, index) => (
													<Card
														key={target.id}
														css={{
															width: "450px",
															// height: "218px",
															paddingTop: "20px",
															paddingBottom: "20px",
															backgroundImage:
																"linear-gradient(to top , #0F734D, #0F734D, #105B54)",
															borderRadius: "30px",
															// borderBottomRightRadius: "5px",
															display: "flex",
															flexDirection: "column",
															// overflowY: "scroll",
															alignItems: "center",
															filter: "none",
															boxShadow: "none",
															"@media only screen and (max-width: 764px)": {
																width: "95vw",
																paddingTop: "20px",
																paddingBottom: "20px",
																// overflowY: "scroll",
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
																<div
																	style={{
																		display: "flex",
																		flexDirection: "column",
																	}}
																>
																	<Text
																		b
																		size={22}
																		color="#fff"
																		css={{
																			lineHeight: 1.5,
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "5px",
																					fontSize: "22px",
																					lineHeight: 1.1,
																				},
																		}}
																	>
																		{index === 0
																			? `Target ${
																					record[selectedCardIndex]
																						.stock_targets.length - index
																			  } Active`
																			: `Target ${
																					record[selectedCardIndex]
																						.stock_targets.length - index
																			  } Met`}
																	</Text>
																</div>
															</div>
															<Divider
																css={{
																	height: "3px",
																	width: "100%",
																	background: "#fff",
																	borderRadius: "20px",
																	opacity: 0.5,
																	alignSelf: "start",
																	// marginTop: "10px",
																}}
															/>
															<Box
																sx={{
																	width: "100%",
																	display: "flex",
																	flexDirection: "row",
																	marginTop: "15px",
																	gap: "15px",
																	"@media only screen and (max-width: 764px)": {
																		gap: "15px",
																		width: "100%",
																		// justifyContent: 'space-evenly',
																	},
																}}
															>
																<Box
																	sx={{
																		display: "flex",
																		flexDirection: "column",
																		width: "30%",
																	}}
																>
																	<Text
																		b
																		size={16}
																		color="#fff"
																		css={{
																			opacity: 1,
																			lineHeight: 1,
																			// width: "100%",
																			alignSelf: "start",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "13.5px",
																					width: "100%",
																				},
																		}}
																	>
																		{target.target_action === "BUY" ||
																		index ==
																			record[selectedCardIndex].stock_targets
																				.length -
																				1
																			? "ENTRY"
																			: "HOLD"}{" "}
																		{`PRICE ${
																			record[selectedCardIndex].stock_targets
																				.length - index
																		}`}
																	</Text>

																	<Text
																		b
																		size={22}
																		color="#fff"
																		css={{
																			display: "flex",
																			flexDirection: "row",
																			alignItems: "center",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "20px",
																				},
																		}}
																	>
																		<span
																			style={{ fontSize: 16, opacity: 0.75 }}
																		>
																			₹
																		</span>
																		{/* {record[selectedCardIndex].entry_price} */}
																		{target.entry_price}
																	</Text>
																	<Text
																		b
																		size={16}
																		color="#fff"
																		css={{
																			opacity: 0.7,
																			lineHeight: 1,
																			alignSelf: "start",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "14.5px",
																				},
																		}}
																	>
																		{`${new Date(
																			target.created
																		).getDate()} ${new Date(
																			target.created
																		).toLocaleString("default", {
																			month: "short",
																		})} ${new Date(
																			target.created
																		).getFullYear()}`}
																	</Text>
																</Box>
																<Box
																	sx={{
																		display: "flex",
																		flexDirection: "column",
																		width: "35%",
																	}}
																>
																	<Text
																		b
																		size={16}
																		color="#fff"
																		css={{
																			opacity: 1,
																			lineHeight: 1,
																			alignSelf: "start",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "13.5px",
																				},
																		}}
																	>
																		{/* EXIT PRICE */}
																		{`TARGET PRICE ${
																			record[selectedCardIndex].stock_targets
																				.length - index
																		}`}
																	</Text>
																	<Text
																		b
																		size={22}
																		color="#fff"
																		css={{
																			display: "flex",
																			flexDirection: "row",
																			alignItems: "center",
																			alignSelf: "start",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "20px",
																				},
																		}}
																	>
																		<span
																			style={{ fontSize: 16, opacity: 0.75 }}
																		>
																			₹
																		</span>
																		{target.target_price}
																	</Text>
																	{target.target_met ? (
																		<Text
																			b
																			size={16}
																			color="#fff"
																			css={{
																				opacity: 0.7,
																				lineHeight: 1,
																				alignSelf: "start",
																				"@media only screen and (max-width: 764px)":
																					{
																						paddingTop: "0px",
																						fontSize: "14.5px",
																					},
																			}}
																		>
																			{`${new Date(
																				target.target_met
																			).getDate()} ${new Date(
																				target.target_met
																			).toLocaleString("default", {
																				month: "short",
																			})} ${new Date(
																				target.target_met
																			).getFullYear()}`}
																		</Text>
																	) : (
																		""
																	)}
																</Box>
																<Box
																	sx={{
																		display: "flex",
																		flexDirection: "column",
																		// width: "40%",
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
																			alignSelf: "start",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "13.5px",
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
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "20px",
																				},
																		}}
																	>
																		{index === 0
																			? `${target.gain_loss}%`
																			: `${(
																					((target.target_price -
																						target.entry_price) /
																						target.entry_price) *
																					100
																			  ).toFixed(2)}%`}
																	</Text>
																	<Text
																		b
																		size={16}
																		color="#fff"
																		css={{
																			// width: "120px",
																			opacity: 0.7,
																			lineHeight: 1,
																			alignSelf: "start",
																			"@media only screen and (max-width: 764px)":
																				{
																					paddingTop: "0px",
																					fontSize: "14.5px",
																				},
																		}}
																	>
																		{target.target_met
																			? `In ${Math.round(
																					Math.abs(
																						(new Date(target.target_met) -
																							new Date(target.created)) /
																							(24 * 60 * 60 * 1000)
																					)
																			  )} Days`
																			: `${new Date().getDate()} ${new Date().toLocaleString(
																					"default",
																					{ month: "short" }
																			  )} ${new Date().getFullYear()}`}
																	</Text>
																</Box>
															</Box>
														</Box>
													</Card>
												)
											)
										) : (
											<></>
										)}
									</Box>
								)}
							</Modal.Body>
						</Modal>

						{/* Reports Modal */}

						<Modal
							// blur
							open={showReports}
							onClose={handleCloseReports}
							css={{
								justifyContent: "center",
								alignItems: "center",
								// width: "800px",
								background: "transparent",
								boxShadow: "none",
								"@media only screen and (max-width: 764px)": {
									width: "100vw",
									height: "95vh",
								},
							}}
						>
							{record[selectedCardIndex] &&
							record[selectedCardIndex].stock_reports &&
							record[selectedCardIndex].stock_reports.length > 0 ? (
								<>
									<Card
										css={{
											width: "100%",
											// height: "218px",
											paddingTop: "50px",
											paddingBottom: "50px",
											background: "#fff",
											borderRadius: "30px",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											filter: "none",
											boxShadow: "none",
											"@media only screen and (max-width: 764px)": {
												width: "100vw",
												paddingTop: "30px",
												paddingBottom: "30px",
											},
										}}
									>
										<IconButton
											sx={{ position: "absolute", top: "5px", right: "5px" }}
											onClick={handleCloseReports}
										>
											<CloseIcon color="error" />
										</IconButton>
										<Text
											b
											size={27}
											css={{ color: "#000000", marginBottom: "20px" }}
										>
											{record[selectedCardIndex].stock_name}
										</Text>
										{record[selectedCardIndex].stock_reports.map((report) => (
											<IconButton
												key={report.document}
												sx={{
													color: "#000000",
													"&:hover": { background: "transparent" },
													borderRadius: "0px",
													paddingLeft: "0px",
													marginBottom: "20px",
												}}
												onClick={() =>
													window.open(
														`${report.document}#view=FitH&toolbar=0&password=$420%69#kamayakya#69%420$`,
														"_blank",
														"fullscreen=yes"
													)
												}
											>
												<DocumentText size={25} />
												<Text b size={18} css={{ color: "#000000" }}>
													{report.report_name}
												</Text>
											</IconButton>
										))}
									</Card>
								</>
							) : (
								<Text b size={22} color="#fff">
									No Reports Available
								</Text>
							)}
						</Modal>
					</>
				))}
			</Grid>
		</div>
	);
};

export default Design3;
