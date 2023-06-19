import React, { useState, useEffect, useContext } from "react";
import {
	Button,
	Card,
	Divider,
	Text,
	Loading,
	Modal,
	Dropdown,
} from "@nextui-org/react";
import { ArrowCircleUp, DocumentText } from "iconsax-react";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GET_ALL_URL } from "../pages/api/URLs";
import {
	Box,
	Grid,
	Alert,
	IconButton,
	TextField,
	InputBase,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaIndustry, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineLock, MdFilterList } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { useRouter } from "next/router";
import ReactCardFlip from "react-card-flip";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { DocumentAskPasswordEvent } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import packageJson from "../../package.json";
import AuthContext from "./AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import { SearchNormal, Filter } from "iconsax-react";
import Marquee from "react-fast-marquee";

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
	const { isLoggedIn } = useContext(AuthContext);
	// console.log(pdfjsVersion);

	const staticNumbers = [94, 17, 49, 28];

	const handleOpenModal = (documentUrl) => {
		setSelectedReportUrl(documentUrl);
		console.log(selectedReportUrl);
		setShowModal(true);
	};

	const [showCert, setShowCert] = useState(false);

	const handleCert = () => {
		setShowCert(true);
	};

	const handleCertClose = () => {
		setShowCert(false);
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

	const [industries, setIndustries] = useState([]);
	const [selectedIndustries, setSelectedIndustries] = useState([]);
	const handleIndustrySelection = (industry) => {
		if (selectedIndustries.includes(industry)) {
			setSelectedIndustries(
				selectedIndustries.filter((item) => item !== industry)
			);
		} else {
			setSelectedIndustries([...selectedIndustries, industry]);
		}
	};
	const selectedValue = React.useMemo(
		() => Array.from(selectedIndustries).join(", ").replaceAll("_", " "),
		[selectedIndustries]
	);

	useEffect(() => {
		const uniqueIndustries = [
			...new Set(stocks.map((stock) => stock.stock_industry)),
		];
		setIndustries(uniqueIndustries);
	}, [filteredStocks]);

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
		// console.log(selectedIndustries);
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
			.filter((stock) => {
				if (selectedValue.length === 0) {
					return true; // Include all stocks if no industries are selected
				} else {
					return selectedValue.includes(stock.stock_industry);
				}
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
		console.log(filteredAndSortedStocks);
		setFilteredStocks(filteredAndSortedStocks);
	}, [stocks, timeSortValue, upsideSortValue, searchQuery, selectedIndustries]);

	const handleSubscribe = () => {
		router.push("/login");
	};
	const [showLoginModal, setShowLoginModal] = useState(false);
	const handleLogin = () => {
		setShowLoginModal(true);
	};

	const handleCloseLoginModal = () => {
		setShowLoginModal(false);
	};

	const handleFirstCard = () => {
		if (isLoggedIn) {
			router.push("/purchase");
		} else {
			handleLogin();
		}
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
		if (isLoggedIn) {
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
		}
	}, [isLoggedIn]);

	return (
		<div
			style={{
				// maxWidth: "80rem",
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				paddingBottom: 100,
				backgroundColor: "#fff",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					paddingLeft: "40px",
					paddingRight: "40px",
					paddingTop: "15px",
					paddingBottom: "15px",
					marginTop: "5vh",
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
						css={{ borderRadius: "20px", background: "#ffa12e", fontSize: 18 }}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Box
				sx={{
					textAlign: "center",
					marginBottom: "30px",
					marginTop: "30px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",

					"@media only screen and (max-width: 672px)": {
						marginTop: "30px",
						borderRadius: "10px",
						alignItems: "flex-start",
					},
				}}
			>
				<Text
					b
					size={70}
					css={{
						"@media only screen and (max-width: 672px)": {
							textAlign: "center",
							fontSize: 50,
							lineHeight: 1.2,
							paddingLeft: "15px",
							paddingRight: "15px",
						},
					}}
				>
					Stocks to buy
				</Text>
			</Box>
			{isLoading && <Loading style={{ marginBottom: "10px" }} />}

			{/* {isAlertVisible && (
				<Alert
					sx={{ width: "60%", alignSelf: "center", marginBottom: "10px" }}
					severity="error"
					onClose={() => setIsAlertVisible(false)}
				>
					{error}
				</Alert>
			)} */}
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
				<Box
					sx={{
						border: "2px solid #ffa12e",
						borderRadius: "10000px",
						padding: "0px 20px",
						paddingTop: "5px",
						display: "flex",
						alignItems: "center",
					}}
				>
					<IconButton>
						<SearchNormal size={25} color="#125a54" />
					</IconButton>
					<InputBase
						placeholder="Ion Exchange (OR) IONEXCHANG"
						variant="standard"
						size="small"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						// InputProps={{
						// 	startAdornment: (
						// 		<IconButton>
						// 			<SearchNormal size={20} />
						// 		</IconButton>
						// 	),
						// }}
						sx={{
							display: "flex",
							alignItems: "center",
							fontSize: 20,
							lineHeight: 1,
							textAlign: "center",
							width: "540px",
							// border: "1px solid #ffa12e",
							// borderRadius: "10000px",
							padding: "15px 10px",
							"@media only screen and (max-width: 672px)": {
								width: "50%",
							},
						}}
					/>
				</Box>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							height: "70px",
							width: "250px",
							backgroundColor: "#fff",
							borderRadius: "10000px",
							border: "2px solid #ffa12e",
							color: "#202020",
							fontSize: 16,
							"@media only screen and (max-width: 672px)": {
								width: "auto",
								"& span": {
									display: "none",
								},
							},
						}}
					>
						<FaIndustry size={20} style={{ marginRight: "0px" }} />
						<span
							style={{
								marginLeft: "10px",
								"@media only screen and (maxWidth: 600px)": {
									marginLeft: "0px",
								},
							}}
						>
							Industries
						</span>
					</Dropdown.Button>
					<Dropdown.Menu
						selectionMode="multiple"
						selectedKeys={selectedIndustries}
						onSelectionChange={(keys) => setSelectedIndustries(keys)}
					>
						{industries.map((industry) => (
							<Dropdown.Item
								key={industry}
								onClick={() => handleIndustrySelection(industry)}
							>
								{industry}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							height: "70px",
							width: "250px",
							backgroundColor: "#fff",
							borderRadius: "10000px",
							border: "2px solid #ffa12e",
							color: "#202020",
							fontSize: 16,
							"@media only screen and (max-width: 672px)": {
								width: "auto",
								"& span": {
									display: "none",
								},
							},
						}}
					>
						<AiOutlineFieldTime size={22} style={{ marginRight: "0px" }} />
						<span
							style={{
								marginLeft: "10px",
								"@media only screen and (max-width: 672px)": {
									marginLeft: "0px",
								},
							}}
						>
							Time Left
						</span>
					</Dropdown.Button>
					<Dropdown.Menu
						aria-label="TimeActions"
						selectionMode="single"
						selectedKeys={timeSort}
						onSelectionChange={(key) => setTimeSort(key)}
					>
						<Dropdown.Item key="ascending">Ascending</Dropdown.Item>
						<Dropdown.Item key="descending">Descending</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Button
						flat
						css={{
							height: "70px",
							width: "250px",
							backgroundColor: "#fff",
							borderRadius: "10000px",
							border: "2px solid #ffa12e",
							color: "#202020",
							fontSize: 16,
							"@media only screen and (max-width: 672px)": {
								width: "auto",
								"& span": {
									display: "none",
								},
							},
						}}
					>
						<Filter size={20} />
						<span
							style={{
								marginLeft: "10px",
								"@media only screen and (max-width: 672px)": {
									marginLeft: "0px",
								},
							}}
						>
							Upside Left
						</span>
					</Dropdown.Button>
					<Dropdown.Menu
						aria-label="UpsideActions"
						selectionMode="single"
						selectedKeys={upsideSort}
						onSelectionChange={setUpsideSort}
					>
						<Dropdown.Item key="ascending">Ascending</Dropdown.Item>
						<Dropdown.Item key="descending">Descending</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<Grid
					container
					justifyContent={"center"}
					gap={"20px"}
					sx={{
						background: "#fff",
						boxShadow: "none",
						"@media only screen and (max-width: 672px)": {
							gap: "1vw",
						},
					}}
				>
					{stocks.length <= 3 && (
						<Grid>
							<Card
								isHoverable
								css={{
									height: "575px",
									width: "285px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									borderRadius: "35px",
									background: "#fff",
									filter: "none",
									justifyContent: "center",
									paddingTop: "50px",
									paddingBottom: "50px",
									paddingLeft: "15px",
									paddingRight: "15px",
									backgroundImage:
										"linear-gradient(to top , #105B54, #0F734D, #0F734D)",
									"@media only screen and (max-width: 672px)": {
										order: 1,
										width: "48.5vw",
									},
								}}
							>
								<img
									src="kamayakya-logo-white.png"
									style={{ marginTop: "5px", width: "75%" }}
								/>

								<Divider
									css={{
										background: "#fff",
										opacity: "0.5",
										width: "30px",
										height: "3px",
										marginTop: "20px",
									}}
								/>

								<Box
									sx={{
										width: "100%",
										alignSelf: "start",
										marginTop: "20px",
										marginBottom: "10px",
										// marginLeft: "5%",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										paddingLeft: "30px",
										paddingRight: "30px",
									}}
								>
									<CheckCircleIcon
										sx={{
											marginRight: "10px",
											color: "#fff",
											fontSize: 20,
											alignSelf: "start",
											marginTop: "5px",
											opacity: 0.9,
										}}
									/>
									<Text
										b
										color="#fff"
										size={20}
										css={{ lineHeight: 1.2, opacity: 0.9 }}
									>
										2-4 individual stock picks every month
									</Text>
								</Box>
								<Box
									sx={{
										width: "100%",
										alignSelf: "start",
										// marginTop: "20px",
										marginBottom: "10px",
										// marginLeft: "5%",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										paddingLeft: "30px",
										paddingRight: "30px",
									}}
								>
									<CheckCircleIcon
										sx={{
											marginRight: "10px",
											color: "#fff",
											fontSize: 20,
											alignSelf: "start",
											marginTop: "5px",
											opacity: 0.9,
										}}
									/>
									<Text
										b
										color="#fff"
										size={20}
										css={{ lineHeight: 1.2, opacity: 0.9 }}
									>
										NSE + BSE + SME stock picks
									</Text>
								</Box>
								<Box
									sx={{
										width: "100%",
										alignSelf: "start",
										// marginTop: "20px",
										marginBottom: "10px",
										// marginLeft: "5%",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										paddingLeft: "30px",
										paddingRight: "30px",
									}}
								>
									<CheckCircleIcon
										sx={{
											marginRight: "10px",
											color: "#fff",
											fontSize: 20,
											alignSelf: "start",
											marginTop: "5px",
											opacity: 0.9,
										}}
									/>
									<Text
										b
										color="#fff"
										size={20}
										css={{ lineHeight: 1.2, opacity: 0.9 }}
									>
										WhatsApp & Email updates
									</Text>
								</Box>
								<Divider
									css={{
										background: "#fff",
										opacity: "0.5",
										width: "30px",
										height: "3px",
										marginTop: "20px",
										marginBottom: "20px",
									}}
								/>
								<Button
									// variant="contained"
									css={{
										width: "75%",
										backgroundImage:
											"linear-gradient(to top , #FF9D28, #ffa736)",
										paddingTop: "5px",
										paddingBottom: "5px",
										borderRadius: "10000px",
										boxShadow: "none",
										"&:hover": {
											backgroundImage:
												"linear-gradient(to top , #FF9D28, #ffa736)",
										},
									}}
									// onClick={handleLoginOrSub}
								>
									<Text b color="#FFF" size={18}>
										Subscribe Now
									</Text>
								</Button>

								<Text
									b
									size={26}
									color="#fff"
									css={{ textAlign: "center", marginTop: "10px" }}
								>
									for ₹
									<span
										style={{ color: "#fff", fontSize: 36, lineHeight: 1.2 }}
									>
										11,800/year
									</span>
								</Text>

								<Text
									b
									size={20}
									color="#FFF"
									css={{ mt: "0px", opacity: 0.75, lineHeight: 1 }}
								>
									inclusive of taxes
								</Text>
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
							// alignItems={'start'}
							// style={{ alignItems: "center" }}
						>
							<ReactCardFlip
								isFlipped={flipStates[index]}
								flipDirection="horizontal"
							>
								{/* Front face */}
								<Card
									isHoverable
									css={{
										height: "575px",
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
										"@media only screen and (max-width: 672px)": {
											width: "48.5vw",
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
											"@media only screen and (max-width: 672px)": {
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
												"@media only screen and (max-width: 672px)": {
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
													"@media only screen and (max-width: 672px)": {
														fontSize: 18,
													},
												}}
											>
												{stock.stock_name.length > 20 ? (
													<Marquee>{stock.stock_name}</Marquee>
												) : (
													<>{stock.stock_name}</>
												)}
											</Text>
										</Box>
										<Box
											sx={{
												width: "90%",
												backgroundImage:
													"linear-gradient(to top , #106052, #0f734d)",
												borderRadius: "17.5px",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												paddingTop: "20px",
												paddingBottom: "20px",
												"@media only screen and (max-width: 672px)": {
													width: "100%",
													paddingTop: "15px",
													paddingBottom: "15px",
												},
											}}
										>
											<Text
												b
												size={20}
												color="#fff"
												css={{
													lineHeight: 1.5,
													"@media only screen and (max-width: 672px)": {
														fontSize: 17,
													},
												}}
											>
												Upside Left
											</Text>
											<div style={{ display: "flex", alignItems: "center" }}>
												<ArrowCircleUp size={25} color="#fff" />
												<Text
													b
													size={48}
													color="#fff"
													css={{
														lineHeight: 1,
														marginLeft: "3px",
														marginRight: "3px",
														"@media only screen and (max-width: 672px)": {
															fontSize: 40,
														},
													}}
												>
													{`${Math.round(stock.upside_left)}` || <Loading /> ||
														"N/A"}
												</Text>
												<span
													style={{
														fontSize: 25,
														color: "#FFF",
														"@media only screen and (max-width: 672px)": {
															fontSize: 10,
														},
													}}
												>
													%
												</span>
											</div>
											{/*	<Box*/}
											{/*		sx={{*/}
											{/*			display: "flex",*/}
											{/*			flexDirection: "column",*/}
											{/*			alignItems: "center",*/}
											{/*			fontSize: 35,*/}
											{/*			color: "#fff",*/}
											{/*			marginTop: "5px",*/}
											{/*		}}*/}
											{/*	>*/}
											{/*		<Text b size={20} color="#fff" css={{ lineHeight: 1 }}>*/}
											{/*			Target Price*/}
											{/*		</Text>*/}
											{/*		<div*/}
											{/*			style={{*/}
											{/*				display: "flex",*/}
											{/*				flexDirection: "row",*/}
											{/*				alignItems: "center",*/}
											{/*				lineHeight: 1.2,*/}
											{/*				marginTop: "5px",*/}
											{/*			}}*/}
											{/*		>*/}
											{/*			<span style={{ fontSize: 20, opacity: 0.75 }}>₹</span>*/}
											{/*			{`${stock.target_price}`}*/}
											{/*		</div>*/}
											{/*	</Box>*/}
										</Box>
										{/* <Box
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
											"@media only screen and (max-width: 672px)": {
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
									</Box> */}
										<Box
											sx={{
												mt: "20px",
												width: "90%",
												"@media only screen and (max-width: 672px)": {
													width: "100%",
												},
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
															"@media only screen and (max-width: 672px)": {
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
															"@media only screen and (max-width: 672px)": {
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
														"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
															"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
															"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
															"@media only screen and (max-width: 672px)": {
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
											"@media only screen and (max-width: 672px)": {
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
												"@media only screen and (max-width: 672px)": {
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
										height: "575px",
										width: "285px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										backgroundColor: "#fff",
										borderRadius: "40px",
										border: "2px solid",
										borderColor: "#ffa12e",
										marginBottom: "20px",
										"@media only screen and (max-width: 672px)": {
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
												flexDirection: "column",
												textAlign: "center",
												backgroundColor: "#fff",
												marginBottom: "15px",
												width: "90%",
												"@media only screen and (max-width: 672px)": {
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
													"@media only screen and (max-width: 672px)": {
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
												borderRadius: "17.5px",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												paddingTop: "20px",
												paddingBottom: "20px",
												"@media only screen and (max-width: 672px)": {
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
											<div style={{ display: "flex", alignItems: "center" }}>
												<ArrowCircleUp size={25} color="#fff" />
												<Text
													b
													size={48}
													color="#fff"
													css={{
														lineHeight: 1,
														marginLeft: "3px",
														marginRight: "3px",
														"@media only screen and (max-width: 672px)": {
															fontSize: 30,
														},
													}}
												>
													{`${Math.round(stock.upside_left)}` || <Loading /> ||
														"N/A"}
												</Text>
												<span style={{ fontSize: 25, color: "#FFF" }}>%</span>
											</div>
										</Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												alignSelf: "start",
												marginTop: "15px",
											}}
										>
											<Text
												b
												size={20}
												color="#125a54"
												css={{
													"@media only screen and (max-width: 672px)": {
														fontSize: 18,
													},
												}}
											>
												English
											</Text>
											{stock.reports.map((report, reportIndex) => (
												<div key={report.report_name} style={{}}>
													<IconButton
														key={report.report_name}
														onClick={() => handleOpenModal(report.document)}
														sx={{
															"&:hover": { background: "#fff" },
															borderRadius: "0px",
															paddingLeft: "0px",
														}}
													>
														<DocumentText size={25} />
														<Text
															b
															size={18}
															css={{
																marginLeft: "5px",
																alignSelf: "start",
																lineHeight: 1.5,
															}}
														>
															{report.report_name}
														</Text>
													</IconButton>
												</div>
											))}
										</Box>

										<Button
											auto
											onClick={() => handleOpenModal("SampleReport.pdf")}
											css={{
												top: "135px",
												// marginTop: "10%",
												width: "100%",
												borderRadius: "10000px",
												backgroundImage:
													"linear-gradient(to top , #106052, #0f734d)",
												fontSize: 18,
												"@media only screen and (max-width: 672px)": {
													top: "115px",
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
												// marginTop: "5%",
												fontSize: 18,
												top: "145px",
												width: "100%",
												borderRadius: "10000px",
												backgroundImage:
													"linear-gradient(to top , #FF9D28, #ffa736)",
												"@media only screen and (max-width: 672px)": {
													top: "125px",
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
												<Box
													sx={{
														height: "700px",
														width: "100%",
														"@media only screen and (max-width: 672px)": {
															// width: '500px',
															// height: '80%',
														},
													}}
												>
													<Viewer
														// src="SampleReport.pdf#toolbar=0"
														fileUrl={selectedReportUrl}
														onDocumentAskPassword={handleAskPassword}
														// defaultScale={SpecialZoomLevel.PageWidth}
													/>
												</Box>
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
										height: "575px",
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
										"@media only screen and (max-width: 672px)": {
											width: "170px",
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
												"@media only screen and (max-width: 672px)": {
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
													"@media only screen and (max-width: 672px)": {
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
													"@media only screen and (max-width: 672px)": {
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
												borderRadius: "17.5px",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												paddingTop: "20px",
												paddingBottom: "20px",
												"@media only screen and (max-width: 672px)": {
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
											<div style={{ display: "flex", alignItems: "center" }}>
												<ArrowCircleUp size={25} color="#fff" />
												<Text
													b
													size={48}
													color="#fff"
													css={{
														lineHeight: 1,
														marginLeft: "3px",
														marginRight: "3px",
														"@media only screen and (max-width: 672px)": {
															fontSize: 30,
														},
													}}
												>
													{`${number}`}
												</Text>
												<span style={{ fontSize: 25, color: "#FFF" }}>%</span>
											</div>
										</Box>
										{/*<Box*/}
										{/*	sx={{*/}
										{/*		zIndex: 1,*/}
										{/*		width: "90%",*/}
										{/*		backgroundImage:*/}
										{/*			"linear-gradient(to top , #106052, #0f734d)",*/}
										{/*		borderRadius: "15px",*/}
										{/*		display: "flex",*/}
										{/*		flexDirection: "column",*/}
										{/*		alignItems: "center",*/}
										{/*		justifyContent: "center",*/}
										{/*		paddingTop: "10px",*/}
										{/*		paddingBottom: "15px",*/}
										{/*		"@media only screen and (max-width: 672px)": {*/}
										{/*			width: "100%",*/}
										{/*		},*/}
										{/*	}}*/}
										{/*>*/}
										{/*	<Text b size={20} color="#fff" css={{ lineHeight: 1.5 }}>*/}
										{/*		Upside Left*/}
										{/*	</Text>*/}
										{/*	<div>*/}
										{/*		<FaRegArrowAltCircleUp size={25} color="#fff" />*/}
										{/*		<Text*/}
										{/*			b*/}
										{/*			size={40}*/}
										{/*			color="#fff"*/}
										{/*			css={{*/}
										{/*				lineHeight: 1,*/}
										{/*				marginLeft: 10,*/}
										{/*				"@media only screen and (max-width: 672px)": {*/}
										{/*					fontSize: 33,*/}
										{/*				},*/}
										{/*			}}*/}
										{/*		>*/}
										{/*			/!* {`${getRandomNumber(10, Math.round(stock.upside_left))}%`} *!/*/}
										{/*			/!* {`${Math.floor(Math.random() * (100 - 10 + 1)) + 10}%`} *!/*/}
										{/*			/!* {`${getRandomNumber(10, 100)}%`} *!/*/}
										{/*			{`${number}%`}*/}
										{/*		</Text>*/}
										{/*	</div>*/}
										{/*</Box>*/}
										<Box
											sx={{
												// zIndex: 1,
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
												"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
															"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
																"@media only screen and (max-width: 672px)": {
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
															"@media only screen and (max-width: 672px)": {
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
																{isLoggedIn ? "Subscribe" : "Login"}
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
			</Box>
		</div>
	);
};

export default StockCard;
