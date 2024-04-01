import React, { useEffect, useRef } from "react";
import { Box, Avatar } from "@mui/material";
import { Text } from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
	return (
		<main
			style={{
				backgroundColor: "#fff",
				paddingTop: "10vh",
				paddingBottom: "10vh",
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				alignContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					// flexWrap: "wrap",
					width: "100lvw",
					maxWidth: "2000px",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						// maxWidth: "1300px",
						textAlign: "center",
						marginBottom: "50px",
						justifyContent: "center",
						"@media only screen and (max-width: 600px)": {
							// width: '40%',
							display: "flex",
							flexWrap: "wrap",
							marginBottom: "10px",
						},
					}}
				>
					<Text
						b
						size={60}
						css={{
							"@media only screen and (max-width: 768px)": {
								fontSize: 30,
								width: "70%",
								display: "flex",
								alignContent: "center",
								justifyContent: "center",
								flexWrap: "wrap",
								alignSelf: "center",
							},
						}}
					>
						Satisfied Customers Are Our Best Ads
					</Text>
				</Box>

				{/*
					<Box
						sx={{
							display: "flex",
							flexDirection: "column-reverse",
							minWidth: 400,
							maxWidth: 500,
							marginRight: 5,
							height: 225,
							mt: 5,
							alignItems: "center",
							border: "4px solid #094f48",
							borderRadius: "15px",
							padding: "15px",
						}}
					>
						<Text
							b
							size={14}
							css={{
								maxWidth: "400px",
								whiteSpace: "normal",
								lineHeight: 1.2,
								textAlign: "justify",
								"@media only screen and (max-width: 768px)": {
									fontSize: 10,
								},
							}}
						>
							I have been investing with KamayaKya since over a year now and I
							only have good things to say. Very good returns, transparency and
							a team of market experts with amazing investment strategies. I
							plan to invest with the firm for a long time and I would highly
							recommend it too.
						</Text>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								position: "relative",
								top: "-37px",
								gap: 10,
							}}
						>
							<img
								src="/userFeedback_2.jpg"
								style={{
									width: 100,
									height: 100,
									// zIndex: 1,
									borderRadius: "1000px",
									border: "4px solid #094f48",
								}}
							/>
							<Text b size={18} color="#888888" css={{ lineHeight: 1.2 }}>
								Tanish Mittal
							</Text>
						</div>
					</Box>
					{[...Array(2)].map((_, index) => (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								minWidth: "400px",
								maxWidth: "500px",
								marginRight: "5px",
								// height: "250px",
								mt: "20px",
								backgroundColor: "white",
								padding: "20px",
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								borderRadius: "8px",
							}}
						>
							<FaQuoteLeft color="#0f734d" size={30} />
							<Text
								css={{
									maxWidth: "400px",
									whiteSpace: "normal",
									paddingTop: "10px",
									paddingBottom: "10px",
									paddingLeft: "35px",
									paddingRight: "45px",
									lineHeight: 1.2,
									"@media only screen and (max-width: 768px)": {
										fontSize: "10px",
									},
								}}
							>
								I have been investing with KamayaKya since over a year now and I
								only have good things to say. Very good returns, transparency
								and a team of market experts with amazing investment strategies.
								I plan to invest with the firm for a long time and I would
								highly recommend it too.
							</Text>
							<FaQuoteRight
								color="#0f734d"
								size={30}
								style={{ marginTop: 0, marginRight: 20, alignSelf: "flex-end" }}
							/>
							<Box
								sx={{
									marginTop: "-10px",
									display: "flex",
									flexDirection: "row",
									gap: "10px",
									alignItems: "center",
								}}
							>
								<Avatar
									src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
									sx={{ width: "30px", height: "30px" }}
								/>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Text b css={{ lineHeight: 1.2, color: "#888888" }}>
										Tanish Mittal
									</Text>
								</Box>
							</Box>
						</Box>
					))}
					 */}

				{/* <Box sx={{ display: "inline-flex", flexWrap: "nowrap" }}> */}
				{/* <div
						style={{
							display: "flex",
							alignItems: "start",
							// justifyContent: "start",
						}}
						className="scroll-box"
					> */}
				<Marquee
					delay={2}
					speed={50}
					style={{ paddingTop: "50px", paddingBottom: "15px" }}
				>
					<Box sx={{ display: 'flex', alignItems: 'start' }}>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: "100%",
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_1.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									My experience with Kamayakya in both their smallcase and VIP+
									website subscription has been great so far. Their in depth
									analysis of stocks, understanding the market scenario and
									balancing the risk reward ratio are unmatched in the industry.
									Some of their small cap picks are truly gems that have created
									huge wealth for their investors. I would highly recommend
									investors to take their services to achieve their long term
									financial goals.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Kiran Sanghvi, Indus Properties
								</Text>
							</div>
						</Box>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: 250,
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_2.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									I have been investing with KamayaKya since over a year now and
									I only have good things to say. Very good returns,
									transparency and a team of market experts with amazing
									investment strategies. I plan to invest with the firm for a
									long time and I would highly recommend it too.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Tanish Mittal, Hindustan Pressings Pvt. Ltd
								</Text>
							</div>
						</Box>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: "100%",
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_1.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									My experience with Kamayakya in both their smallcase and VIP+
									website subscription has been great so far. Their in depth
									analysis of stocks, understanding the market scenario and
									balancing the risk reward ratio are unmatched in the industry.
									Some of their small cap picks are truly gems that have created
									huge wealth for their investors. I would highly recommend
									investors to take their services to achieve their long term
									financial goals.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Kiran Sanghvi, Indus Properties
								</Text>
							</div>
						</Box>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: 250,
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_2.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									I have been investing with KamayaKya since over a year now and
									I only have good things to say. Very good returns,
									transparency and a team of market experts with amazing
									investment strategies. I plan to invest with the firm for a
									long time and I would highly recommend it too.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Tanish Mittal, Hindustan Pressings Pvt. Ltd
								</Text>
							</div>
						</Box>
					</Box>
				</Marquee>
				{/* </div> */}
				{/* <div
						style={{
							display: "flex",
							alignItems: "start",
							// justifyContent: "center",
						}}
						className="scroll-box"
						// aria-hidden="true"
					>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: "100%",
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_1.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									My experience with Kamayakya in both their smallcase and VIP+
									website subscription has been great so far. Their in depth
									analysis of stocks, understanding the market scenario and
									balancing the risk reward ratio are unmatched in the industry.
									Some of their small cap picks are truly gems that have created
									huge wealth for their investors. I would highly recommend
									investors to take their services to achieve their long term
									financial goals.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Kiran Sanghvi, Indus Properties
								</Text>
							</div>
						</Box>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: 250,
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_2.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									I have been investing with KamayaKya since over a year now and
									I only have good things to say. Very good returns,
									transparency and a team of market experts with amazing
									investment strategies. I plan to invest with the firm for a
									long time and I would highly recommend it too.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Tanish Mittal, Hindustan Pressings Pvt. Ltd
								</Text>
							</div>
						</Box>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: "100%",
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_1.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									My experience with Kamayakya in both their smallcase and VIP+
									website subscription has been great so far. Their in depth
									analysis of stocks, understanding the market scenario and
									balancing the risk reward ratio are unmatched in the industry.
									Some of their small cap picks are truly gems that have created
									huge wealth for their investors. I would highly recommend
									investors to take their services to achieve their long term
									financial goals.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Kiran Sanghvi, Indus Properties
								</Text>
							</div>
						</Box>
						<Box
							sx={{
								// display: "flex",
								minWidth: 500,
								maxWidth: 500,
								marginRight: "20px",
								// height: 250,
								// mt: "20px",
								borderRadius: "15px",
								padding: "20px",
								boxShadow: "0 10px 26px rgba(0, 0, 0, 0.1)",
								gap: "25px",
							}}
						>
							<div
								style={{
									position: "absolute",
									marginLeft: "185px",
									marginTop: "-65px",
								}}
							>
								<img
									src="/userFeedback_2.jpg"
									style={{
										width: "95px",
										height: "95px",
										borderRadius: "1000px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<FaQuoteLeft
									color="#0f734d"
									size={20}
									style={{ marginTop: "20px", marginLeft: "-10px" }}
								/>
								<Text
									b
									css={{
										display: "flex",
										whiteSpace: "normal",
										// marginTop: "35px",
										paddingBottom: "10px",
										lineHeight: 1.2,
										textAlign: "justify",
										maxWidth: "95%",
										alignSelf: "center",
										"@media only screen and (max-width: 768px)": {
											fontSize: "10px",
										},
									}}
								>
									I have been investing with KamayaKya since over a year now and
									I only have good things to say. Very good returns,
									transparency and a team of market experts with amazing
									investment strategies. I plan to invest with the firm for a
									long time and I would highly recommend it too.
								</Text>
								<FaQuoteRight
									color="#0f734d"
									size={20}
									style={{
										marginTop: 0,
										marginRight: 0,
										alignSelf: "flex-end",
									}}
								/>
								<Text b css={{ textAlign: "end", marginTop: "10px" }}>
									{" "}
									- Tanish Mittal, Hindustan Pressings Pvt. Ltd
								</Text>
							</div>
						</Box>
					</div> */}
				{/* </Box> */}
			</div>
		</main>
	);
};

export default Testimonials;