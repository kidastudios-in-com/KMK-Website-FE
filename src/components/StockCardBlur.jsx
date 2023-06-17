import { Button, Card, Divider, Text, Tooltip } from "@nextui-org/react";
import SpeedIcon from "@mui/icons-material/Speed";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_ALL_URL } from "../pages/api/URLs";
import { MdOutlineLock } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/router";

const StockCardBlur = () => {
	const [stocks, setStocks] = useState([]);
	const router = useRouter();

	const getRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const handleSubscribe = () => {
		router.push("/login");
	};

	useEffect(() => {
		const refresh = localStorage.getItem("refresh");
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
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div style={{ marginLeft: '0px', marginTop: '-90px' }}>
		<Grid container justifyContent={"center"} gap={"20px"}>
			{stocks.map((stock) => (
				<Grid
					key={stock.id}
					item
					xs={"auto"}
					sm={"auto"}
					md={"auto"}
					lg={"auto"}
					style={{ alignItems: "center" }}
				>
					<Card
						isHoverable
						style={{
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
									minWidth: "90%",
									maxWidth: "90%",
								}}
							>
								<Box
									sx={{
										zIndex: 1,
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
										{stock.stock_industry}
									</Text>
								</Box>
								<Text
									b
									size={26}
									style={{
										minWidth: "100%",
										maxWidth: "100%",
										textAlign: "center",
										lineHeight: 1.2,
										position: "relative",
										zIndex: 0,
									}}
								>
									Pachis Din Mein Paisa Double
								</Text>
								<div
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										backdropFilter: "blur(10px)",
										zIndex: 0,
									}}
								></div>
							</Box>
							<div
								style={{
									zIndex: 1,
									minWidth: "90%",
									maxWidth: "90%",
									backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
									borderRadius: "15px",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									paddingTop: 10,
									paddingBottom: 15,
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
										css={{ lineHeight: 1, marginLeft: 10 }}
									>
										{/* {`${Math.round(stock.upside_left)}%`} */}
										{`${getRandomNumber(10, Math.round(stock.upside_left))}%`}
									</Text>
								</div>
							</div>
							<Box
								sx={{
									zIndex: 1,
									minWidth: "90%",
									maxWidth: "90%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									pt: 1,
									pb: 1,
									marginTop: 2,
									mb: "20px",
									backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
									borderRadius: "10000px",
								}}
							>
								<SpeedIcon color="#fff" style={{ fontSize: 20 }} />
								<Text b style={{ marginLeft: 5, color: "Black" }} size={14}>
									{`MEDIUM RISK`}
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
										<div style={{ display: "flex", flexDirection: "column" }}>
											<Text b style={{ lineHeight: 1.1 }} size={15}>
												CURRENT
											</Text>
											<Text b size={15} style={{ lineHeight: 1.1 }}>
												PRICE (in ₹)
											</Text>
										</div>
										<Text b style={{ flex: 1, textAlign: "right" }} size={22}>
											{`Bheek Mange`}
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
										<div style={{ display: "flex", flexDirection: "column" }}>
											<Text b style={{ lineHeight: 1.1 }} size={15}>
												TIME LEFT
											</Text>
											<Text b size={15} style={{ lineHeight: 1.1 }}>
												(IN DAYS)
											</Text>
										</div>
										<Text b style={{ flex: 1, textAlign: "right" }} size={22}>
											{`Aukat Ke Bahar`}
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
export default StockCardBlur;
