import { Button, Card, Divider, Progress, Text } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Box, IconButton } from "@mui/material";
import ReactECharts from "echarts-for-react";
import { useRouter } from "next/router";
import { ArrowCircleRight } from "iconsax-react";
import { TRACK_RECORD_FOR_ALL, TRACK_RECORD_FOR_USER } from "@/pages/api/URLs";
import AuthContext from "@/components/AuthContext";

const WhyUs = () => {
	const router = useRouter();
	const { isLoggedIn } = useContext(AuthContext);
	const [record, setRecord] = useState([]);

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
				const filteredData = data.filter((record) =>
					["HOLD", "SELL"].includes(record.action)
				);

				setRecord(filteredData);
				// console.log(data);
			} else {
				// Handle API call error
				console.error("Error Getting Track Records | Home Page");
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

	const trackRecord = () => {
		router.push("/track-record");
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
							fontSize: 20,
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
		<main
			id="whyUs"
			style={{
				width: "100vw",
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#fff",
				paddingTop: "10vh",
			}}
		>
			<div className="trackRecordMobile">
				<Text
					b
					size={70}
					css={{
						lineHeight: 1,
						marginBottom: "0px",
						width: "100vw",
						textAlign: "center",
						"@media only screen and (max-width: 764px)": {
							fontSize: 50,
							marginLeft: "10px",
							marginRight: "10px",
							textAlign: "left",
						},
					}}
				>
					Track Record
				</Text>
				<Text
					b
					size={25}
					css={{
						textAlign: "center",
						marginBottom: "70px",
						maxWidth: "80rem",
						alignSelf: "center",
						"@media only screen and (max-width: 764px)": {
							marginTop: "10px",
							marginBottom: "50px",
							marginLeft: "10px",
							marginRight: "10px",
							textAlign: "left",
							fontSize: 20,
							lineHeight: 1.1,
						},
					}}
				>
					Our methodology does not include doing technical analysis of stocks,
					rather we do research that is deep, thorough and entirely fundamentals
					based
				</Text>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: "0px",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "center",
							alignContent: "center",
							width: "100vw",
							gap: "20px",
						}}
					>
						{record.map((item, index) => (
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
									borderBottomRightRadius: "5px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									"@media only screen and (max-width: 764px)": {
										width: "100%",
										height: "350px",
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
										<div
											style={{
												display: "flex",
												flexDirection: "column",
											}}
										>
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
												STATUS: {item.status}
											</Text>
											<Text
												b
												size={22}
												color="#fff"
												css={{
													lineHeight: 1.5,
													maxLines: 1,
													"@media only screen and (max-width: 764px)": {
														paddingTop: "5px",
														fontSize: "22px",
														lineHeight: 1.1,
														maxLines: 1,
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
												{item.stock_targets && item.stock_targets.length === 0
													? "Targets"
													: item.stock_targets}
												{/* {console.log(item.stock_targets)} */}
											</Text>
										</div>
										<img
											src={
												item.action === "HOLD"
													? "HoldBubbleYellow.png"
													: item.action === "SELL"
													? "SellBubbleRed.png"
													: // : item.action === "BUY"
													  // ? "BuyBubbleBlue.png"
													  "HoldBubbleYellow.png"
											}
											style={{
												width: "60px",
												height: "60px",
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
														fontSize: "13.5px",
													},
												}}
											>
												{item.start_date ? item.start_date : "03 Nov 2022"}
											</Text>
										</Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
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
														fontSize: "13.5px",
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
											width: "95%",
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											marginTop: "15px",
											gap: "20px",
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
												css={{
													opacity: 1,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														// width: "100%",
														// paddingLeft: "20px",
														// paddingRight: "20px",
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												Returns
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
														// width: "100%",
														// paddingLeft: "20px",
														// paddingRight: "20px",
														paddingTop: "0px",
														fontSize: "26.5px",
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
													opacity: 0.7,
													lineHeight: 1,
													"@media only screen and (max-width: 764px)": {
														// width: "100%",
														// paddingLeft: "20px",
														// paddingRight: "20px",
														paddingTop: "0px",
														fontSize: "13.5px",
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
														// width: "100%",
														// paddingLeft: "20px",
														// paddingRight: "20px",
														paddingTop: "0px",
														fontSize: "14.5px",
													},
												}}
											>
												Time Left: {item.time_left} days
											</Text>
											<Progress
												value={35}
												// status={"default"}
												// color={'warning'}
												css={{
													width: "80%",
													opacity: 1,
													height: "22.5px",
													color: "#fff",
													backgroundColor: "rgba(255, 255, 255, 0.3)",
													"@media only screen and (max-width: 764px)": {
														height: "25px",
													},
												}}
											/>
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
													{item.end_date ? item.end_date : "365"}
												</Text>
											</Box>
										</Box>
									</Box>
								</Box>
							</Card>
						))}
					</div>
				</Box>

				<Button
					auto
					css={{
						background: "#FD9800",
						// backgroundImage:
						//   "linear-gradient(to top , #0F734D, #0F734D, #105B54)",
						color: "#fff",
						fontSize: 30,
						marginTop: "10vh",
						padding: "40px 40px",
						width: "764px",
						alignSelf: "center",
						borderRadius: "10000px",
						// maxWidth: "80rem",
						"@media only screen and (max-width: 764px)": {
							width: "100%",
							// paddingLeft: "20px",
							// paddingRight: "20px",
							padding: "30px 10px",
							marginTop: "20px",
							fontSize: "20px",
							borderRadius: "10px",
						},
					}}
					onPress={trackRecord}
				>
					{`Full track record`}
				</Button>
			</div>
		</main>
	);
};

export default WhyUs;
