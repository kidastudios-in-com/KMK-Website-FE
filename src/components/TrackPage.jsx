import { Text, Button, Card } from "@nextui-org/react";
import React from "react";
import { Box} from "@mui/material";
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleRight,
} from "react-icons/fa";

const WhyUs = () => {
	return (
		<section
			style={{
				width: "100%",
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
					paddingTop: '30px',
					paddingBottom: 80,
				}}
			>
				{/* <Text
					b
					size={60}
					color="Black"
					css={{
						paddingTop: 40,
						lineHeight: 1,
						opacity: "50%",
						display: "flex",
						flexWrap: "wrap",
						"@media only screen and (max-width: 764px)": {
							textAlign: "center",
							fontSize: 32,
						},
					}}
				>
					Examine our history of achieving
				</Text>
				<Text
					b
					size={80}
					css={{
						paddingBottom: 30,
						lineHeight: 1.2,
						"@media only screen and (max-width: 764px)": {
							textAlign: "center",
							fontSize: 50,
						},
					}}
				>
					100% accuracy
				</Text> */}
				<div
					style={{
						width: "80%",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						gap: 15,
						justifyContent: "center",
					}}
				>
                    {/* {[...Array(20)].map((_, index) => ( */}
                    {[...Array(10)].map((_, index) => (
                        <Card
                        key={index}
                        isHoverable
						css={{
							width: "280px",
							height: "auto",
							padding: '10px',
							backgroundColor: "#fff",
							borderRadius: "20px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							"@media only screen and (max-width: 764px)": {},
						}}
					>
						<div
							style={{
								width: "90%",
								backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
								borderRadius: "20px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								paddingTop: "5%",
								paddingBottom: "5%",
							}}
						>
							<Text b size={20} color="#fff" css={{ lineHeight: 1.5 }}>
								Profit Booked
							</Text>
							<div>
								<FaRegArrowAltCircleUp size={25} color="#fff" />
								<Text
									b
									size={40}
									color="#fff"
									css={{ lineHeight: 1, marginLeft: 10 }}
								>
									26%
								</Text>
							</div>
						</div>
						<Text
							b
							color="#0f734d"
							size={18}
							css={{ marginTop: 10, display: "flex", alignItems: "center" }}
						>
							₹20066.70
							<FaRegArrowAltCircleRight
								size={20}
								style={{ marginLeft: 8, marginRight: 8 }}
							/>
							₹26010.98
						</Text>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<div
								style={{
									width: "auto",
									padding: "5px",
									paddingLeft: "20px",
									paddingRight: "20px",
									borderRadius: "10000px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Button
								css={{
									borderRadius: "10000px",
									backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
                                    fontSize: 18,
                                    color: '#202020'
								}}
							>
								Get Report
							</Button>
							</div>
						</div>
					</Card>
                    ))}
					
					{/* <Box
						sx={{
							width: "280px",
							height: "auto",
							padding: 2,
							backgroundColor: "#fff",
							borderRadius: "20px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<div
							style={{
								width: "100%",
								backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
								borderRadius: "20px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								paddingTop: "5%",
								paddingBottom: "5%",
							}}
						>
							<Text b size={20} color="#fff" css={{ lineHeight: 1.5 }}>
								Profit Booked
							</Text>
							<div>
								<FaRegArrowAltCircleUp size={25} color="#fff" />
								<Text
									b
									size={40}
									color="#fff"
									css={{ lineHeight: 1, marginLeft: 10 }}
								>
									26%
								</Text>
							</div>
						</div>
						<Text
							b
							color="#0f734d"
							size={18}
							css={{ marginTop: 10, display: "flex", alignItems: "center" }}
						>
							₹20066.70
							<FaRegArrowAltCircleRight
								size={20}
								style={{ marginLeft: 8, marginRight: 8 }}
							/>
							₹26010.98
						</Text>
						<div
							style={{
								width: "auto",
								padding: "5px",
								paddingLeft: "20px",
								paddingRight: "20px",
								borderRadius: "10000px",
								display: "flex",
								justifyContent: "center",
								// backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
								marginTop: 10,
								alignItems: "center",
							}}
						>
							<Button
								css={{
									borderRadius: "10000px",
									backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
                                    fontSize: 18,
                                    color: '#202020'
								}}
							>
								Get Report
							</Button>
						</div>
					</Box> */}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
