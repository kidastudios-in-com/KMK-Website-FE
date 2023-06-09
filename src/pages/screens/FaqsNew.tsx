import React, { useState } from "react";
import { Collapse, Text, Grid, Input, Button, Divider } from "@nextui-org/react";
import { AiOutlineRightCircle, AiOutlineDownCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { Box } from "@mui/material";

const FaqsNew = () => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleCollapseToggle = (index: number) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
	};

	return (
		<section
			style={{
				display: "flex",
				flexWrap: "wrap",
				backgroundColor: "#125a54",
				paddingTop: 50,
				paddingBottom: 25,
				width: "100%",
				height: "100%",
				justifyContent: "center",
				alignContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					paddingTop: 50,
					paddingBottom: 25,
					maxWidth: "2000px",
					width: "100%",
					backgroundColor: "#125a54",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap-reverse",
						flexDirection: "row",
						justifyContent: "space-between",
						maxWidth: "1600px",
						// gap: "10%",
						paddingLeft: "5%",
						paddingRight: "5%",
						alignItems: "start",
					}}
				>
					<Box
						sx={{
							maxWidth: "400px",
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
							"@media only screen and (max-width: 764px)": {
								justifyContent: "center",
								width: "auto",
								textAlign: "center",
							},
						}}
					>
						<Divider
						css={{
							width: "120px",
							backgroundColor: "#ff9f24",
							height: "5px",
							borderRadius: "200px",
							mb: '15px',
							mt: '10px'
						}}
					/>
						<Text
							b
							size={50}
							color="#fff"
							css={{
								lineHeight: 1.2,
								marginBottom: 10,
								"@media only screen and (max-width: 764px)": {
									fontSize: 40,
								},
							}}
						>
							Got A Question?
						</Text>
						<Text
							b
							size={24}
							color="#fff"
							css={{
								lineHeight: 1.4,
								marginBottom: 0,
								"@media only screen and (max-width: 764px)": {
									fontSize: 20,
								},
							}}
						>
							If there are questions you want to ask, we will answer all your
							questions.
						</Text>
						<Button
							auto
							size={"lg"}
							css={{
								backgroundImage:
													"linear-gradient(to top , #FF9D28, #ffa736)",
								borderRadius: "50px",
								marginTop: "20px",
								width: "350px",
								"@media only screen and (max-width: 764px)": {
									width: '60%',
									alignSelf: 'center'
								},
							}}
						>
							<a href="mailto:contact@kamayakya.com" target="_blank">
								<Text b size={22} color="#fff">
									E-mail
								</Text>
							</a>
						</Button>
						<Input
							size="xl"
							rounded={true}
							css={{
								// paddingLeft: 5,
								display: "none",
								marginTop: 30,
								borderRadius: "10000px",
								"& .nextui-c-eXOOPO": {
									backgroundColor: "white",
								},
							}}
							contentRightStyling={false}
							placeholder="   eg: +919087654321"
							contentRight={
								<Button auto size={"lg"} css={{ borderRadius: "50px" }}>
									Submit
								</Button>
							}
						/>
					</Box>
					<Box
						sx={{
							width: "60%",
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
							flexWrap: "wrap",
							"@media only screen and (max-width: 764px)": {
								width: "auto",
								mb: 5,
							},
						}}
					>
						<Grid.Container gap={2} css={{ marginTop: -30 }}>
							<Grid>
								<Collapse.Group>
									<Collapse
										title="Why do we focus on SMEs, Micro-Caps and Small-Caps?"
										arrowIcon={
											expandedIndex === 0 ? (
												<RxCrossCircled size={24} />
											) : (
												<AiOutlineDownCircle size={24} />
											)
										}
										expanded={expandedIndex === 0}
										onChange={() => handleCollapseToggle(0)}
										className="custom-collapse"
										css={{ "& h3": { letterSpacing: 0.5, fontSize: 25 }, color: '#fff' }}
									>
										<Text b size={25} color="#fff" css={{ lineHeight: 1 }}>
											SME, Micro-Cap and Small-cap companies are the hidden gems
											that can provide massive returns if invested in at the
											right time. Companies such as Reliance, Infosys were once
											small-caps who performed well consistently to become the
											behemoths that they are today. We want to provide you a
											niche service which can help in growing your wealth
											faster.
										</Text>
									</Collapse>
									<Collapse
										title="How to start with KamayaKya?"
										arrowIcon={
											expandedIndex === 1 ? (
												<RxCrossCircled size={24} />
											) : (
												<AiOutlineDownCircle size={24} />
											)
										}
										expanded={expandedIndex === 1}
										onChange={() => handleCollapseToggle(1)}
										className="custom-collapse"
										css={{ "& h3": { letterSpacing: 0.5, fontSize: 25 }, color: '#fff' }}
									>
										<Text b size={25} color="#fff" css={{ lineHeight: 1 }}>
											Click on Get Free Subscription button in the header
											Complete your Registration by providing basic details such
											as your name, Email ID, Mobile No and creating a safe
											password. You will get FREE Subscription for completing
											the above steps and complete access to our offerings
											including stock picks and regular notifications
										</Text>
									</Collapse>
									<Collapse
										title="What is a Stock Pick?"
										arrowIcon={
											expandedIndex === 2 ? (
												<RxCrossCircled size={24} />
											) : (
												<AiOutlineDownCircle size={24} />
											)
										}
										expanded={expandedIndex === 2}
										onChange={() => handleCollapseToggle(2)}
										className="custom-collapse"
										css={{ "& h3": { letterSpacing: 0.5, fontSize: 25 }, color: '#fff' }}
									>
										<Text b size={25} color="#fff" css={{ lineHeight: 1 }}>
											Stock picks are curated stock recommendations generated by
											our equity research team. You can buy a stock pick with
											your respective broker. Once bought, we will give you
											smart alerts to help you exit the trade when the time is
											right, thereby maximising your profits and minimising
											losses.
										</Text>
									</Collapse>
									<Collapse
										title="What would the research report contain?"
										arrowIcon={
											expandedIndex === 3 ? (
												<RxCrossCircled size={24} />
											) : (
												<AiOutlineDownCircle size={24} />
											)
										}
										expanded={expandedIndex === 3}
										onChange={() => handleCollapseToggle(3)}
										className="custom-collapse"
										css={{ "& h3": { letterSpacing: 0.5, fontSize: 25 }, color: '#fff' }}
									>
										<Text b size={25} color="#fff" css={{ lineHeight: 1 }}>
											We will provide 3 options in research reports which will
											provide the most important details such as Entry Price,
											Target Price, Risk Profile, MCap of company, Holding
											Period or Duration and the rationale behind choosing a
											particular company as our stock pick.
										</Text>
									</Collapse>
									{/* <Collapse
										title="What are the platform charges?"
										arrowIcon={
											expandedIndex === 4 ? (
												<RxCrossCircled size={24} />
											) : (
												<AiOutlineDownCircle size={24} />
											)
										}
										expanded={expandedIndex === 4}
										onChange={() => handleCollapseToggle(4)}
										css={{ "& h3": { letterSpacing: 0.5, fontSize: 22 } }}
									>
										<Text b size={16}>
											It is currently free to use for our registered users.
											We'll be launching our premium membership which will take
											a subscription fee in the future when we launch our app.
										</Text>
									</Collapse> */}
								</Collapse.Group>
							</Grid>
						</Grid.Container>
					</Box>
				</div>
			</div>
		</section>
	);
};

export default FaqsNew;
