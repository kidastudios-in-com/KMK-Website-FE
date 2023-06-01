import React, { useState, useEffect } from "react";
import {
	Button,
	Card,
	Divider,
	Text,
	Loading,
	Modal,
	Dropdown,
} from "@nextui-org/react";
import axios from "axios";
import { GET_ALL_URL } from "../pages/api/URLs";
import { Box, Grid, Alert, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SpeedIcon from "@mui/icons-material/Speed";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { useRouter } from "next/router";
import ReactCardFlip from "react-card-flip";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { DocumentAskPasswordEvent } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import packageJson from "../../package.json";

const StockCard = () => {
	const router = useRouter();
	const [stocks, setStocks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const [flipStates, setFlipStates] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [filteredStocks, setFilteredStocks] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedReportUrl, setSelectedReportUrl] = useState("");
	const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];
	// console.log(pdfjsVersion);

	const staticNumbers = [94, 17, 49, 28];

	const handleOpenModal = (documentUrl) => {
		setSelectedReportUrl(documentUrl);
		console.log(selectedReportUrl);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleAskPassword = (e) => {
		e.verifyPassword("kamayakya");
	};

	const handleClick = (index) => {
		const newFlipStates = flipStates.map((state, i) =>
			i == index ? !state : false
		);
		setFlipStates(newFlipStates);
	};

	const [timeSort, setTimeSort] = useState(new Set([""]));
	const [upsideSort, setUpsideSort] = useState(new Set([""]));

	const timeSortValue = React.useMemo(
		() => Array.from(timeSort)[0]?.replaceAll("_", " ") || "",
		[timeSort]
	);

	const upsideSortValue = React.useMemo(
		() => Array.from(upsideSort)[0]?.replaceAll("_", " ") || "",
		[upsideSort]
	);

	useEffect(() => {
		// console.log("timeSort:", timeSortValue);
		// console.log("upsideSort:", upsideSortValue);

		const filteredAndSortedStocks = stocks
			.filter((stock) => {
				let passTimeFilter = true;
				let passUpsideFilter = true;
				let passSearchFilter = true;

				if (timeSortValue === "ascending") {
					passTimeFilter = stock.time_left > 0;
				} else if (timeSortValue === "descending") {
					passTimeFilter = stock.time_left >= 0;
				}

				if (upsideSortValue === "ascending") {
					passUpsideFilter = stock.upside_left > 0;
				} else if (upsideSortValue === "descending") {
					passUpsideFilter = stock.upside_left >= 0;
				}

				if (searchQuery.trim() !== "") {
					passSearchFilter =
						stock.stock_name
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) ||
						stock.stock_symbol.includes(searchQuery);
					// console.log(searchQuery)
				}

				return passTimeFilter && passUpsideFilter && passSearchFilter;
			})
			.sort((stockA, stockB) => {
				if (timeSortValue === "ascending") {
					return stockA.time_left - stockB.time_left;
				} else if (timeSortValue === "descending") {
					return stockB.time_left - stockA.time_left;
				} else if (upsideSortValue === "ascending") {
					return stockA.upside_left - stockB.upside_left;
				} else if (upsideSortValue === "descending") {
					return stockB.upside_left - stockA.upside_left;
				}

				return 0;
			});

		setFilteredStocks(filteredAndSortedStocks);
	}, [stocks, timeSortValue, upsideSortValue, searchQuery]);

	const handleSubscribe = () => {
		router.push("/login");
	};

	const showAlert = () => {
		setIsAlertVisible(true);
		setTimeout(() => {
			setIsAlertVisible(false);
		}, 10000);
	};

	useEffect(() => {
		if (error) {
			showAlert();
		}
	}, [error]);

	useEffect(() => {
		const refresh = localStorage.getItem("refresh");
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await axios.get(GET_ALL_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `token ${refresh}`,
					},
				});
				setStocks(response.data);
				setFlipStates(new Array(response.data.length).fill(false));
			} catch (error) {
				setError("Please Login First to see our stock picks!");
				showAlert();
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<div
			style={{
				maxWidth: "2000px",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				paddingBottom: 100,
				backgroundColor: "#fff",
			}}
		>
			<Box
				sx={{ textAlign: "center", marginBottom: "30px", marginTop: "50px" }}
			>
				<Text
					b
					size={70}
					css={{
						"@media only screen and (max-width: 600px)": {
							textAlign: "center",
							fontSize: 36,
							lineHeight: 1.2,
						},
					}}
				>
					Stock Recommendations
				</Text>
			</Box>
			{isLoading && <Loading style={{ marginBottom: "10px" }} />}
			{isAlertVisible && (
				<Alert
					sx={{ width: "60%", alignSelf: "center", marginBottom: "10px" }}
					severity="error"
					onClose={() => setIsAlertVisible(false)}
				>
					{error}
				</Alert>
			)}
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					gap: "20px",
					marginBottom: "4%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<TextField
					label="Search Stock"
					variant="outlined"
					size="small"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					InputProps={{
						endAdornment: (
							<IconButton>
								<SearchIcon />
							</IconButton>
						),
					}}
				/>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							width: "250px",
							backgroundColor: "#b9c1ca",
							color: "#202020",
							fontSize: 16,
						}}
					>
						Time Left
					</Dropdown.Button>
					<Dropdown.Menu
						aria-label="TimeActions"
						selectionMode="single"
						selectedKeys={timeSort}
						onSelectionChange={(key) => setTimeSort(key)}
					>
						<Dropdown.Item key="ascending">Time Ascending</Dropdown.Item>
						<Dropdown.Item key="descending">Time Descending</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							width: "250px",
							backgroundColor: "#b9c1ca",
							color: "#202020",
							fontSize: 16,
						}}
					>
						Upside Left
					</Dropdown.Button>
					<Dropdown.Menu
						aria-label="UpsideActions"
						selectionMode="single"
						selectedKeys={upsideSort}
						onSelectionChange={setUpsideSort}
					>
						<Dropdown.Item key="ascending">Upside Ascending</Dropdown.Item>
						<Dropdown.Item key="descending">Upside Descending</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							width: "250px",
							backgroundColor: "#b9c1ca",
							color: "#202020",
							fontSize: 16,
						}}
					>
						Current Price
					</Dropdown.Button>
					<Dropdown.Menu
						aria-label="CurrentActions"
						selectionMode="single"
						// selectedKeys={upsideSort}
						// onSelectionChange={setUpsideSort}
					>
						<Dropdown.Item key="ascending">Ascending</Dropdown.Item>
						<Dropdown.Item key="descending">Descending</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							width: "250px",
							backgroundColor: "#b9c1ca",
							color: "#202020",
							fontSize: 16,
						}}
					>
						Target Price
					</Dropdown.Button>
					<Dropdown.Menu
						aria-label="TargetActions"
						selectionMode="single"
						// selectedKeys={upsideSort}
						// onSelectionChange={setUpsideSort}
					>
						<Dropdown.Item key="ascending">Ascending</Dropdown.Item>
						<Dropdown.Item key="descending">Descending</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Box>
			<Grid
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
				{stocks.length <= 3 && (
					<Grid>
						<Card
							isHoverable
							css={{
								height: "650px",
								width: "285px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								backgroundColor: "#fff",
								borderRadius: "40px",
								border: "2px solid",
								borderColor: "#ffa12e",
								marginBottom: "0px",
								boxShadow: "none",
								filter: "none",
								"@media only screen and (max-width: 600px)": {
									width: "185px",
									height: "570px",
									borderRadius: "25px",
								},
							}}
						>
							<Box
								marginLeft={"5%"}
								marginRight={"5%"}
								marginTop={"20px"}
								marginBottom={"20px"}
								sx={{
									minWidth: "90%",
									maxWidth: "90%",
									height: "600px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									textAlign: "center",
								}}
							>
								<Text
									b
									size={36}
									color="#106052"
									css={{
										"@media only screen and (max-width: 600px)": {
											fontSize: 20,
										},
									}}
								>
									Subscribe With KamayaKya
								</Text>
								<Text
									b
									size={36}
									color="#fda629"
									css={{
										"@media only screen and (max-width: 600px)": {
											fontSize: 30,
										},
									}}
								>
									Now!
								</Text>
								<Button
									auto
									css={{
										width: "80%",
										background: "#fda629",
										fontSize: 18,
										marginTop: "30px",
									}}
								>
									Get Access
								</Button>
							</Box>
						</Card>
					</Grid>
				)}
				{filteredStocks.map((stock, index) => (
					<Grid
						key={stock.id}
						item
						xs={"auto"}
						sm={"auto"}
						md={"auto"}
						lg={"auto"}
						style={{ alignItems: "center" }}
					>
						<ReactCardFlip
							isFlipped={flipStates[index]}
							flipDirection="horizontal"
						>
							{/* Front face */}
							<Card
								isHoverable
								css={{
									height: "650px",
									width: "285px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									backgroundColor: "#fff",
									borderRadius: "40px",
									border: "2px solid",
									borderColor: "#ffa12e",
									marginBottom: "0px",
									boxShadow: "none",
									filter: "none",
									"@media only screen and (max-width: 600px)": {
										width: "185px",
										height: "570px",
										borderRadius: "25px",
									},
								}}
							>
								<Box
									sx={{
										marginLeft: "5%",
										marginRight: "5%",
										marginTop: "20px",
										marginBottom: "20px",
										minWidth: "90%",
										maxWidth: "90%",
										height: "600px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										"@media only screen and (max-width: 600px)": {
											marginLeft: "5px",
											marginRight: "5px",
										},
									}}
								>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											textAlign: "center",
											backgroundColor: "#fff",
											marginBottom: "15px",
											width: "90%",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<Box
											sx={{
												width: "100%",
												paddingTop: "7.5px",
												paddingBottom: "7.5px",
												paddingLeft: "5px",
												paddingRight: "5px",
												backgroundImage:
													"linear-gradient(to top , #FF9D28, #ffa736)",
												marginBottom: "15px",
												marginTop: "5px",
												borderRadius: "10000px",
												lineHeight: 1,
											}}
										>
											<Text b size={14} color="Black" css={{ lineHeight: 1 }}>
												{stock.stock_industry || <Loading /> || "N/A"}
											</Text>
										</Box>
										<Text
											b
											size={26}
											css={{
												minWidth: "100%",
												maxWidth: "100%",
												textAlign: "center",
												lineHeight: 1.2,
												"@media only screen and (max-width: 600px)": {
													fontSize: 18,
												},
											}}
										>
											{stock.stock_name || <Loading /> || "N/A"}
										</Text>
									</Box>
									<Box
										sx={{
											width: "90%",
											backgroundImage:
												"linear-gradient(to top , #106052, #0f734d)",
											borderRadius: "15px",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											paddingTop: "10px",
											paddingBottom: "15px",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<Text
											b
											size={20}
											color="#fff"
											css={{
												lineHeight: 1.5,
											}}
										>
											Upside Left
										</Text>
										<div>
											<FaRegArrowAltCircleUp size={25} color="#fff" />
											<Text
												b
												size={40}
												color="#fff"
												css={{
													lineHeight: 1,
													marginLeft: 10,
													"@media only screen and (max-width: 600px)": {
														fontSize: 30,
													},
												}}
											>
												{`${Math.round(stock.upside_left)}%` || <Loading /> ||
													"N/A"}
											</Text>
										</div>
									</Box>
									<Box
										sx={{
											width: "90%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											pt: 1,
											pb: 1,
											marginTop: 2,
											mb: "20px",
											backgroundImage:
												"linear-gradient(to top , #FF9D28, #ffa736)",
											borderRadius: "10000px",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<SpeedIcon color="#fff" style={{ fontSize: 20 }} />
										<Text
											b
											style={{ marginLeft: 5, color: "Black", lineHeight: 1 }}
											size={14}
										>
											{`${stock.risk} Risk` || <Loading /> || "N/A"}
										</Text>
									</Box>
									<Box
										sx={{
											width: "90%",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<div
											style={{
												display: "flex",
												width: "100%",
												flexDirection: "column",
											}}
										>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div
													style={{ display: "flex", flexDirection: "column" }}
												>
													<Text
														b
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
														size={15}
													>
														CURRENT
													</Text>
													<Text
														b
														size={15}
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
													>
														PRICE (in ₹)
													</Text>
												</div>
												<Text
													b
													css={{
														flex: 1,
														textAlign: "right",
														"@media only screen and (max-width: 600px)": {
															fontSize: 20,
														},
													}}
													size={22}
												>
													{`${stock.live_price}` || <Loading /> || "N/A"}
													{/* {`100000.00`} */}
												</Text>
											</div>
											<Divider
												height={2}
												style={{
													backgroundColor: "#ffa12e",
													marginTop: "10px",
													marginBottom: "10px",
												}}
											/>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div
													style={{ display: "flex", flexDirection: "column" }}
												>
													<Text
														b
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
														size={15}
													>
														TARGET
													</Text>
													<Text
														b
														size={15}
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
													>
														PRICE (IN ₹)
													</Text>
												</div>
												<Text
													b
													css={{
														flex: 1,
														textAlign: "right",
														"@media only screen and (max-width: 600px)": {
															fontSize: 20,
														},
													}}
													size={22}
												>
													{`${stock.target_price}` || <Loading /> || "N/A"}
												</Text>
											</div>
											<Divider
												height={2}
												style={{
													backgroundColor: "#ffa12e",
													marginTop: "10px",
													marginBottom: "10px",
												}}
											/>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div
													style={{ display: "flex", flexDirection: "column" }}
												>
													<Text
														b
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
														size={15}
													>
														MKT. CAP.
													</Text>
													<Text
														b
														size={15}
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
													>
														(IN Cr.)
													</Text>
												</div>
												<Text
													b
													css={{
														flex: 1,
														textAlign: "right",
														"@media only screen and (max-width: 600px)": {
															fontSize: 20,
														},
													}}
													size={22}
												>
													{`${stock.market_cap}` || <Loading /> || "N/A"}
												</Text>
											</div>
											<Divider
												height={2}
												style={{
													backgroundColor: "#ffa12e",
													marginTop: "10px",
													marginBottom: "10px",
												}}
											/>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div
													style={{ display: "flex", flexDirection: "column" }}
												>
													<Text
														b
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
														size={15}
													>
														TIME LEFT
													</Text>
													<Text
														b
														size={15}
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
													>
														(IN DAYS)
													</Text>
												</div>
												<Text
													b
													css={{
														flex: 1,
														textAlign: "right",
														"@media only screen and (max-width: 600px)": {
															fontSize: 20,
														},
													}}
													size={22}
												>
													{`${stock.time_left}` || <Loading /> || "N/A"}
												</Text>
											</div>
										</div>
									</Box>
								</Box>
								<Box
									sx={{
										bottom: "5px",
										width: "85%",
										marginBottom: "25px",
										"@media only screen and (max-width: 600px)": {
											width: "90%",
											justifyContent: "center",
										},
									}}
								>
									<Button
										auto
										onPress={() => handleClick(index)}
										css={{
											alignSelf: "center",
											// bottom: "25px",
											width: "100%",
											borderRadius: "10000px",
											backgroundImage:
												"linear-gradient(to top , #FF9D28, #ffa736)",
											fontSize: 18,
											"@media only screen and (max-width: 600px)": {
												fontSize: 15,
												lineHeight: 1,
												height: "30px",
											},
										}}
									>
										Get Report
									</Button>
								</Box>
							</Card>
							<Card
								isHoverable
								css={{
									height: "650px",
									width: "285px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									backgroundColor: "#fff",
									borderRadius: "40px",
									border: "2px solid",
									borderColor: "#ffa12e",
									marginBottom: "20px",
									"@media only screen and (max-width: 600px)": {
										width: "185px",
										height: "570px",
										borderRadius: "25px",
									},
								}}
							>
								<Box
									sx={{
										marginLeft: "5%",
										marginRight: "5%",
										marginTop: "20px",
										marginBottom: "20px",
										minWidth: "90%",
										maxWidth: "90%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignSelf: "center",
											textAlign: "center",
											"@media only screen and (max-width: 600px)": {
												fontSize: 18,
											},
										}}
									>
										{`${stock.stock_name}`}
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignSelf: "start",
										}}
									>
										<Text
											b
											size={20}
											color="#125a54"
											css={{
												"@media only screen and (max-width: 600px)": {
													fontSize: 18,
												},
											}}
										>
											English
										</Text>
										{stock.reports.map((report, reportIndex) => (
											<div key={report.report_name}>
												<React.Fragment key={report.report_name}>
													<IconButton
														key={report.report_name}
														onClick={() => handleOpenModal(report.document)}
														sx={{
															"&:hover": { background: "#fff" },
															borderRadius: "0px",
															paddingLeft: "0px",
														}}
													>
														<GrDocumentPdf size={20} />
														<Text
															b
															size={18}
															css={{ marginLeft: "5px", alignSelf: "start" }}
														>
															{report.report_name}
														</Text>
													</IconButton>
												</React.Fragment>
											</div>
										))}
									</Box>

									<Button
										auto
										css={{
											marginTop: "10%",
											width: "100%",
											borderRadius: "10000px",
											backgroundImage:
												"linear-gradient(to top , #106052, #0f734d)",
											fontSize: 18,
											"@media only screen and (max-width: 600px)": {
												lineHeight: 1,
												height: "30px",
												fontSize: 15,
											},
										}}
									>
										Disclosure
									</Button>
									<Button
										auto
										onPress={() => handleClick(index)}
										css={{
											marginTop: "5%",
											width: "100%",
											borderRadius: "10000px",
											backgroundImage:
												"linear-gradient(to top , #FF9D28, #ffa736)",
											"@media only screen and (max-width: 600px)": {
												lineHeight: 1,
												height: "30px",
												fontSize: 15,
											},
										}}
									>
										Stock Details
									</Button>
									<Modal
										width="60%"
										open={showModal}
										onClose={handleCloseModal}
										aria-labelledby="modal-title"
										aria-describedby="modal-description"
										css={{
											borderRadius: "0px",
											background: "transparent",
											boxShadow: "none",
										}}
									>
										<Worker
											workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js`}
										>
											<div style={{ height: "700px", width: "100%" }}>
												<Viewer
													// src="SampleReport.pdf#toolbar=0"
													fileUrl={selectedReportUrl}
													onDocumentAskPassword={handleAskPassword}
													defaultScale={SpecialZoomLevel.ActualSize}
												/>
											</div>
										</Worker>
										<Button
											flat
											onPress={handleCloseModal}
											css={{
												marginTop: "10px",
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
								</Box>
							</Card>
						</ReactCardFlip>
					</Grid>
				))}
				{/* {stocks.length <= 3 && stocks.map((stock) => ( */}
				{/* {stocks.length <= 3 &&
					Array.from({ length: 4 }).map((_, index) => ( */}
				{stocks.length <= 3 &&
					staticNumbers.map((number, index) => (
						<Grid
							// key={stock.id}
							key={index}
							item
							xs={"auto"}
							sm={"auto"}
							md={"auto"}
							lg={"auto"}
							style={{ alignItems: "center" }}
						>
							<Card
								variant="flat"
								css={{
									height: "650px",
									width: "285px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									backgroundColor: "#fff",
									borderRadius: "40px",
									border: "2px solid",
									borderColor: "#ffa12e",
									marginBottom: "20px",
									boxShadow: "none",
									filter: "none",
									"@media only screen and (max-width: 600px)": {
										width: "185px",
										height: "570px",
										borderRadius: "25px",
									},
								}}
							>
								<Box
									sx={{
										marginLeft: "5%",
										marginRight: "5%",
										marginTop: "20px",
										marginBottom: "20px",
										width: "90%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Box
										sx={{
											marginTop: "5px",
											display: "flex",
											flexDirection: "column",
											textAlign: "center",
											backgroundColor: "#fff",
											marginBottom: "15px",
											width: "90%",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<Box
											sx={{
												zIndex: 0,
												width: "100%",
												paddingTop: "7.5px",
												paddingBottom: "7.5px",
												paddingLeft: "5px",
												paddingRight: "5px",
												backgroundImage:
													"linear-gradient(to top , #FF9D28, #ffa736)",
												marginBottom: "15px",
												marginTop: "5px",
												borderRadius: "10000px",
												lineHeight: 1,
											}}
										>
											<Text b size={14} color="Black" css={{ lineHeight: 1 }}>
												{/* {stock.stock_industry} */}
												{`<Industry>`}
											</Text>
										</Box>
										<Text
											b
											size={26}
											css={{
												minWidth: "100%",
												maxWidth: "100%",
												textAlign: "center",
												lineHeight: 1.2,
												position: "relative",
												zIndex: 0,
												"@media only screen and (max-width: 600px)": {
													fontSize: 20,
												},
											}}
										>
											{`<Stock Name>`}
										</Text>
										<Box
											sx={{
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												backdropFilter: "blur(8px)",
												zIndex: 0,
												WebkitBackdropFilter: "blur(8px)",
												margin: "15px",
												"@media only screen and (max-width: 600px)": {
													margin: "0px",
												},
											}}
										>{` `}</Box>
									</Box>
									<Box
										sx={{
											zIndex: 1,
											width: "90%",
											backgroundImage:
												"linear-gradient(to top , #106052, #0f734d)",
											borderRadius: "15px",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											paddingTop: "10px",
											paddingBottom: "15px",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<Text b size={20} color="#fff" css={{ lineHeight: 1.5 }}>
											Upside Left
										</Text>
										<div>
											<FaRegArrowAltCircleUp size={25} color="#fff" />
											<Text
												b
												size={40}
												color="#fff"
												css={{
													lineHeight: 1,
													marginLeft: 10,
													"@media only screen and (max-width: 600px)": {
														fontSize: 33,
													},
												}}
											>
												{/* {`${getRandomNumber(10, Math.round(stock.upside_left))}%`} */}
												{/* {`${Math.floor(Math.random() * (100 - 10 + 1)) + 10}%`} */}
												{/* {`${getRandomNumber(10, 100)}%`} */}
												{`${number}%`}
											</Text>
										</div>
									</Box>
									<Box
										sx={{
											zIndex: 1,
											width: "90%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											pt: 1,
											pb: 1,
											marginTop: 2,
											mb: "20px",
											backgroundImage:
												"linear-gradient(to top , #FF9D28, #ffa736)",
											borderRadius: "10000px",
											"@media only screen and (max-width: 600px)": {
												width: "100%",
											},
										}}
									>
										<SpeedIcon color="#fff" style={{ fontSize: 20 }} />
										<Text
											b
											style={{ marginLeft: 5, color: "Black", lineHeight: 1 }}
											size={14}
										>
											{`Medium Risk`}
										</Text>
									</Box>
									<Box sx={{ minWidth: "90%", maxWidth: "90%" }}>
										<div
											style={{
												display: "flex",
												width: "100%",
												flexDirection: "column",
											}}
										>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div
													style={{ display: "flex", flexDirection: "column" }}
												>
													<Text
														b
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
														size={15}
													>
														CURRENT
													</Text>
													<Text
														b
														size={15}
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
													>
														PRICE (in ₹)
													</Text>
												</div>
												<Text
													b
													css={{
														flex: 1,
														textAlign: "right",
														"@media only screen and (max-width: 600px)": {
															fontSize: 20,
														},
													}}
													size={22}
												>
													{`XXXX.XX`}
												</Text>
											</div>
											<Divider
												height={1.5}
												style={{
													backgroundColor: "#ffa12e",
													marginTop: "10px",
													marginBottom: "10px",
												}}
											/>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div
													style={{ display: "flex", flexDirection: "column" }}
												>
													<Text
														b
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
														size={15}
													>
														TIME LEFT
													</Text>
													<Text
														b
														size={15}
														css={{
															lineHeight: 1.1,
															"@media only screen and (max-width: 600px)": {
																fontSize: 13,
															},
														}}
													>
														(IN DAYS)
													</Text>
												</div>
												<Text
													b
													css={{
														flex: 1,
														textAlign: "right",
														"@media only screen and (max-width: 600px)": {
															fontSize: 20,
														},
													}}
													size={22}
												>
													{`XXX`}
												</Text>
											</div>
											<div
												style={{
													zIndex: 1,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													flexDirection: "column",
												}}
											>
												<MdOutlineLock color="#ffa12e" size={50} />
												<div
													style={{
														display: "flex",
														alignItems: "center",
														flexDirection: "row",
														marginTop: "20px",
													}}
												>
													<Button
														on
														onPress={() => handleSubscribe()}
														css={{ backgroundColor: "transparent" }}
													>
														<Text b size={20}>
															Subscribe
														</Text>
														<BiChevronRight size={24} color="#000000" />
													</Button>
												</div>
											</div>
										</div>
									</Box>
								</Box>
							</Card>
						</Grid>
					))}
			</Grid>
		</div>
	);
};

export default StockCard;
