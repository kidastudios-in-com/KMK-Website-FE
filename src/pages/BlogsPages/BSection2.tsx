import React from "react";
import { Box } from "@mui/material";
import { Avatar, Button, Divider, Text } from "@nextui-org/react";
import { AiFillTwitterCircle, AiFillChrome } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import {width} from "@mui/system";

const BSection2 = () => {
	return (
		<main style={{backgroundColor: "#fff"}}>
		<section
			style={{
				backgroundColor: "#fff",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				maxWidth: "80rem",
				paddingTop: "10vh",
				paddingBottom: "10vh",
				margin: "0 auto",

			}}
		>
			<Box
				sx={{
					width: "100%",
					maxWidth: "80rem",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
					paddingLeft: "15px",
					paddingRight: "15px",
					// flexWrap: "wrap",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: ["column", "row"],
						flexWrap: "wrap",
						gap: "30px",
					}}
				>
					<Box
						sx={{
							width: "280px",
							display: "flex",
							flexWrap: "wrap",
							flexDirection: "column",
							marginBottom: "50px",
							"@media only screen and (max-width: 600px)": {
								width: '100%',
								gap: "0px",
							},
						}}
					>
						<Box sx={{ width: "100%",}}>
							<img src="http://kk-cms-dev.mitplindia.com/uploads/pngtree_business_blue_airplane_travel_advertising_background_picture_image_1008129_8f2d8a28ae.jpg"
								 alt="Blog 1" width={'100%'} height={'180px'}
								 style={{
									 objectFit: "cover",
									 marginBottom: "15px",
									borderRadius: "2.5px",

							}} />
						</Box>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								flexDirection: "row",
								justifyContent: "flex-start",
								"@media only screen and (max-width: 600px)": {
									width: "90%",
								},
							}}
						>
							{/*<Text b size={15} css={{ lineHeight: 1 }}>*/}
							{/*	Team KamayaKya*/}
							{/*</Text>*/}
							<div style={{width: "20px", height: "5px", backgroundColor: "#FF9E24", marginTop: "4px", marginRight: "7.5px", borderRadius: "10000px"}}></div>
							<Text b size={14} css={{ lineHeight: 1 , }}>
								10 Jan 2023
							</Text>
						</Box>
						<Text
							b
							size={24}
							css={{
								lineHeight: 1.1,
								marginTop: "10px",
								"@media only screen and (max-width: 600px)": {
									width: "90%",
								},
							}}
						>
							Will the Travel & Tourism industry take-off in the coming years?
						</Text>
						<Text b size={14} css={{ lineHeight: 1.2, marginTop: "5px" }}>
							The Indian tourism industry has been growing at an impressive pace in recent years, and this growth is only set to accelerate and is expected to grow at 7-9% per annum over the next decade....
						</Text>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								flexDirection: "row",
								// alignItems: "flex-end",
								justifyContent: "flex-end",
							}}
						>
							<Button
								css={{
									width: "100%",
									borderRadius: "2.5px",
									marginTop: "25px",
									backgroundColor: "#142d51",
								}}
							>
								<Text b size={14} css={{color: "white",}}>
									Read More
								</Text>
								<BiChevronRight
									color="#fff"
									size={20}
									style={{ marginLeft: "20px" }}
								/>
							</Button>
						</Box>

					</Box>

				{/*	<Box*/}
				{/*		sx={{*/}
				{/*			width: "23%",*/}
				{/*			display: "flex",*/}
				{/*			flexWrap: "wrap",*/}
				{/*			flexDirection: "column",*/}
				{/*			marginBottom: "50px",*/}
				{/*			"@media only screen and (max-width: 600px)": {*/}
				{/*				width: '100%',*/}
				{/*				gap: "0px",*/}
				{/*			},*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		<Box sx={{ maxWidth: "100%", }}>*/}
				{/*			<img src="blog2.jpg" alt="Blog 2" height={'180px'} width={'100%'} />*/}
				{/*		</Box>*/}
				{/*		<Box*/}
				{/*			sx={{*/}
				{/*				display: "flex",*/}
				{/*				flexWrap: "wrap",*/}
				{/*				flexDirection: "row",*/}
				{/*				justifyContent: "space-between",*/}
				{/*				"@media only screen and (max-width: 600px)": {*/}
				{/*					width: "90%",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<Text b size={15} css={{ lineHeight: 1 }}>*/}
				{/*				Team KamayaKya*/}
				{/*			</Text>*/}
				{/*			<Text b size={15} css={{ lineHeight: 1 }}>*/}
				{/*				10-Jan-2023*/}
				{/*			</Text>*/}
				{/*		</Box>*/}
				{/*		<Text*/}
				{/*			b*/}
				{/*			size={26}*/}
				{/*			css={{*/}
				{/*				lineHeight: 1.2,*/}
				{/*				marginTop: "10px",*/}
				{/*				"@media only screen and (max-width: 600px)": {*/}
				{/*					width: "90%",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			Impact of oil prices on Indian markets*/}
				{/*		</Text>*/}
				{/*		<Text b size={16} css={{ lineHeight: 1.2, marginTop: "10px" }}>*/}
				{/*			Oil prices have increased by more than 27% since the beginning of*/}
				{/*			this year. Right from inflation to current account deficit...*/}
				{/*		</Text>*/}
				{/*		<Box*/}
				{/*			sx={{*/}
				{/*				display: "flex",*/}
				{/*				flexWrap: "wrap",*/}
				{/*				flexDirection: "row",*/}
				{/*				justifyContent: "space-between",*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<Button*/}
				{/*				css={{*/}
				{/*					width: "80px",*/}
				{/*					borderRadius: "0px",*/}
				{/*					alignSelf: "flex-start",*/}
				{/*					marginTop: "10px",*/}
				{/*					backgroundColor: "#eaeaea",*/}
				{/*				}}*/}
				{/*			>*/}
				{/*				<Text b size={14}>*/}
				{/*					Read More*/}
				{/*				</Text>*/}
				{/*				<BiChevronRight*/}
				{/*					color="#000000"*/}
				{/*					size={20}*/}
				{/*					style={{ marginLeft: "20px" }}*/}
				{/*				/>*/}
				{/*			</Button>*/}
				{/*		</Box>*/}
				{/*	</Box>*/}
				{/*	<Box*/}
				{/*		sx={{*/}
				{/*			width: "23%",*/}
				{/*			display: "flex",*/}
				{/*			flexWrap: "wrap",*/}
				{/*			flexDirection: "column",*/}
				{/*			marginBottom: "50px",*/}
				{/*			"@media only screen and (max-width: 600px)": {*/}
				{/*				width: '100%',*/}
				{/*				gap: "0px",*/}
				{/*			},*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		<Box sx={{ maxWidth: "100%" }}>*/}
				{/*			<img src="blog3.jpg" alt="Blog 3" height={'180px'} width={'100%'} />*/}
				{/*		</Box>*/}
				{/*		<Box*/}
				{/*			sx={{*/}
				{/*				display: "flex",*/}
				{/*				flexWrap: "wrap",*/}
				{/*				flexDirection: "row",*/}
				{/*				justifyContent: "space-between",*/}
				{/*				"@media only screen and (max-width: 600px)": {*/}
				{/*					width: "90%",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<Text b size={15} css={{ lineHeight: 1 }}>*/}
				{/*				Team KamayaKya*/}
				{/*			</Text>*/}
				{/*			<Text b size={15} css={{ lineHeight: 1 }}>*/}
				{/*				10-Jan-2023*/}
				{/*			</Text>*/}
				{/*		</Box>*/}
				{/*		<Text*/}
				{/*			b*/}
				{/*			size={26}*/}
				{/*			css={{*/}
				{/*				lineHeight: 1.2,*/}
				{/*				marginTop: "10px",*/}
				{/*				"@media only screen and (max-width: 600px)": {*/}
				{/*					width: "90%",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			Impact of oil prices on Indian markets*/}
				{/*		</Text>*/}
				{/*		<Text b size={16} css={{ lineHeight: 1.2, marginTop: "10px" }}>*/}
				{/*			Oil prices have increased by more than 27% since the beginning of*/}
				{/*			this year. Right from inflation to current account deficit...*/}
				{/*		</Text>*/}
				{/*		<Box*/}
				{/*			sx={{*/}
				{/*				display: "flex",*/}
				{/*				flexWrap: "wrap",*/}
				{/*				flexDirection: "row",*/}
				{/*				justifyContent: "space-between",*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<Button*/}
				{/*				css={{*/}
				{/*					width: "80px",*/}
				{/*					borderRadius: "0px",*/}
				{/*					alignSelf: "flex-start",*/}
				{/*					marginTop: "10px",*/}
				{/*					backgroundColor: "#eaeaea",*/}
				{/*				}}*/}
				{/*			>*/}
				{/*				<Text b size={14}>*/}
				{/*					Read More*/}
				{/*				</Text>*/}
				{/*				<BiChevronRight*/}
				{/*					color="#000000"*/}
				{/*					size={20}*/}
				{/*					style={{ marginLeft: "20px" }}*/}
				{/*				/>*/}
				{/*			</Button>*/}
				{/*		</Box>*/}
				{/*	</Box>*/}
				{/*	<Box*/}
				{/*		sx={{*/}
				{/*			width: "23%",*/}
				{/*			display: "flex",*/}
				{/*			flexWrap: "wrap",*/}
				{/*			flexDirection: "column",*/}
				{/*			marginBottom: "50px",*/}
				{/*			"@media only screen and (max-width: 600px)": {*/}
				{/*				width: '100%',*/}
				{/*				gap: "0px",*/}
				{/*			},*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		<Box sx={{ maxWidth: "100%" }}>*/}
				{/*			<img src="kmk-blog2.jpg" alt="Blog 4" height={'180px'} width={'100%'}/>*/}
				{/*		</Box>*/}
				{/*		<Box*/}
				{/*			sx={{*/}
				{/*				// marginTop: '10px',*/}
				{/*				display: "flex",*/}
				{/*				flexWrap: "wrap",*/}
				{/*				flexDirection: "row",*/}
				{/*				justifyContent: "space-between",*/}
				{/*				"@media only screen and (max-width: 600px)": {*/}
				{/*					width: "90%",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<Text b size={15} css={{ lineHeight: 1 }}>*/}
				{/*				Team KamayaKya*/}
				{/*			</Text>*/}
				{/*			<Text b size={15} css={{ lineHeight: 1 }}>*/}
				{/*				10-Jan-2023*/}
				{/*			</Text>*/}
				{/*		</Box>*/}
				{/*		<Text*/}
				{/*			b*/}
				{/*			size={26}*/}
				{/*			css={{*/}
				{/*				lineHeight: 1.2,*/}
				{/*				marginTop: "10px",*/}
				{/*				"@media only screen and (max-width: 600px)": {*/}
				{/*					width: "90%",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			Impact of oil prices on Indian markets*/}
				{/*		</Text>*/}
				{/*		<Text b size={16} css={{ lineHeight: 1.2, marginTop: "10px" }}>*/}
				{/*			Oil prices have increased by more than 27% since the beginning of*/}
				{/*			this year. Right from inflation to current account deficit...*/}
				{/*		</Text>*/}
				{/*		<Box*/}
				{/*			sx={{*/}
				{/*				display: "flex",*/}
				{/*				flexWrap: "wrap",*/}
				{/*				flexDirection: "row",*/}
				{/*				justifyContent: "space-between",*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<Button*/}
				{/*				css={{*/}
				{/*					width: "80px",*/}
				{/*					borderRadius: "0px",*/}
				{/*					alignSelf: "flex-start",*/}
				{/*					marginTop: "10px",*/}
				{/*					backgroundColor: "#eaeaea",*/}
				{/*				}}*/}
				{/*			>*/}
				{/*				<Text b size={14}>*/}
				{/*					Read More*/}
				{/*				</Text>*/}
				{/*				<BiChevronRight*/}
				{/*					color="#000000"*/}
				{/*					size={20}*/}
				{/*					style={{ marginLeft: "20px" }}*/}
				{/*				/>*/}
				{/*			</Button>*/}
				{/*		</Box>*/}
				{/*	</Box>*/}
				{/*</Box>*/}
				{/* <Box
					sx={{
						width: "40%",
						// marginLeft: "30px",
						"@media only screen and (max-width: 600px)": {
							width: "100%",
							marginLeft: 0
						},
					}}
				>
					<Box sx={{ "@media only screen and (max-width: 600px)": {
							width: "100%",
						}, }}>
						<img
							src="kmk-blog4.jpg"
							alt="Blog 4"
							width={"300px"}
							height={"330px"}
						/>
					</Box>
					<Divider css={{ marginTop: "15px", marginBottom: "15px" }} />
					<Box>
						<Text b size={14} color="#202020">
							INSTAGRAM
						</Text>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<Avatar
								size="md"
								pointer
								src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
								style={{ zIndex: 0, marginTop: "10px", marginBottom: "10px" }}
							/>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<Text b size={13}>
									kamayakyaofficial
								</Text>
								<Text b size={18}>
									KamayaKya
								</Text>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<Text b size={15}>
									596
								</Text>
								<Text b size={11} color="#808080">
									FOLLOWING
								</Text>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<Text b size={15}>
									1M
								</Text>
								<Text b size={11} color="#808080">
									FOLLOWERS
								</Text>
							</div>
						</div>
						<Box
							sx={{
								marginTop: "10px",
								display: "flex",
								flexDirection: "row",
								gap: '2%',
								"@media only screen and (max-width: 600px)": {
									width: "100%",
								},
							}}
						>
							<img
								src="kmk-blog5.jpg"
								height={"120px"}
								width={"49%"}
								// style={{ marginRight: "10px" }}
							/>
							<img src="kmk-blog6.jpg" 
							height={"120px"}
							 width={"49%"} />
						</Box>
						<Box
							sx={{
								marginTop: "5px",
								display: "flex",
								flexDirection: "row",
								gap: '2%',
								"@media only screen and (max-width: 600px)": {
									width: "100%",
								},
							}}
						>
							<img
								src="kmk-blog7.webp"
								height={"120px"}
								width={"49%"}
								// style={{ marginRight: "10px" }}
							/>
							<img src="kmk-blog4.jpg" 
							height={"120px"}
							width={"49%"} />
						</Box>
					</Box>
				</Box> */}
				</Box>
			</Box>
		</section>
		</main>
	);
};

export default BSection2;
