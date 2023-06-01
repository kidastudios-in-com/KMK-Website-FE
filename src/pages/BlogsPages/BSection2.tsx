import React from "react";
import { Box } from "@mui/material";
import { Avatar, Button, Divider, Text } from "@nextui-org/react";
import { AiFillTwitterCircle, AiFillChrome } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

const BSection2 = () => {
	return (
		<section
			style={{
				backgroundColor: "#fff",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				maxWidth: "2000px",
				paddingBottom: "25px",
				margin: "0 auto",
			}}
		>
			<Box
				sx={{
					width: "75%",
					display: "flex",
					flexDirection: ["column", "row"],
					// flexWrap: "wrap",
				}}
			>
				<Box
					sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
				>
					<Box
						sx={{
							// width: "80%",
							display: "flex",
							flexWrap: "wrap",
							flexDirection: "row",
							gap: "50px",
							marginBottom: "50px",
							"@media only screen and (max-width: 600px)": {
								gap: '0px'
							},
						}}
					>
						<Box sx={{ maxWidth: ["100%", "30%"] }}>
							<img src="blog1.jpg" alt="Blog 2" />
						</Box>
						<Box
							sx={{
								// width: "50%",
								maxWidth: "700px",
								display: "flex",
								flexWrap: "wrap",
								flexDirection: "column",
								marginTop: "10px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									flexDirection: "row",
									justifyContent: ["center", "space-between"],
									"@media only screen and (max-width: 600px)": {
										width: "90%",
									},
								}}
							>
								<Text b size={15} css={{ lineHeight: 1 }}>
									Team KamayaKya
								</Text>
								<Text b size={15} css={{ lineHeight: 1 }}>
									10-Jan-2023
								</Text>
							</Box>
							<Text
								b
								size={26}
								css={{
									lineHeight: 1.2,
									marginTop: "10px",
									"@media only screen and (max-width: 600px)": {
										width: "90%",
									},
								}}
							>
								Impact of oil prices on Indian markets
							</Text>
							<Text b size={16} css={{ lineHeight: 1.2, marginTop: "10px" }}>
								Oil prices have increased by more than 27% since the beginning
								of this year. Right from inflation to current account deficit,
								rising oil prices have negative impact on Indian economy.
							</Text>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Button
									css={{
										width: "80px",
										borderRadius: "0px",
										alignSelf: "flex-start",
										marginTop: "10px",
										backgroundColor: "#eaeaea",
									}}
								>
									<Text b size={14}>
										Read More
									</Text>
									<BiChevronRight
										color="#000000"
										size={20}
										style={{ marginLeft: "20px" }}
									/>
								</Button>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										marginTop: "10px",
										gap: "10px",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<BsFacebook size={24} color="#202020" />
										<Text b>200</Text>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AiFillChrome size={24} color="#202020" />
										<Text b>102</Text>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AiFillTwitterCircle size={24} color="#202020" />
									</div>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							// width: "80%",
							display: "flex",
							flexWrap: "wrap",
							flexDirection: "row",
							gap: "50px",
							marginBottom: "50px",
							"@media only screen and (max-width: 600px)": {
								gap: '0px'
							},
						}}
					>
						<Box sx={{ maxWidth: ["100%", "30%"] }}>
							<img src="blog2.jpg" alt="Blog 2" />
						</Box>
						<Box
							sx={{
								// width: "50%",
								maxWidth: "700px",
								display: "flex",
								flexWrap: "wrap",
								flexDirection: "column",
								marginTop: "10px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									flexDirection: "row",
									justifyContent: ["center", "space-between"],
									"@media only screen and (max-width: 600px)": {
										width: "90%",
									},
								}}
							>
								<Text b size={15} css={{ lineHeight: 1 }}>
									Team KamayaKya
								</Text>
								<Text b size={15} css={{ lineHeight: 1 }}>
									10-Jan-2023
								</Text>
							</Box>
							<Text
								b
								size={26}
								css={{
									lineHeight: 1.2,
									marginTop: "10px",
									"@media only screen and (min-width: 600px)": {
										width: "90%",
									},
								}}
							>
								Impact of oil prices on Indian markets
							</Text>
							<Text b size={16} css={{ lineHeight: 1.2, marginTop: "10px" }}>
								Oil prices have increased by more than 27% since the beginning
								of this year. Right from inflation to current account deficit,
								rising oil prices have negative impact on Indian economy.
							</Text>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Button
									css={{
										width: "80px",
										borderRadius: "0px",
										alignSelf: "flex-start",
										marginTop: "10px",
										backgroundColor: "#eaeaea",
									}}
								>
									<Text b size={14}>
										Read More
									</Text>
									<BiChevronRight
										color="#000000"
										size={20}
										style={{ marginLeft: "20px" }}
									/>
								</Button>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										marginTop: "10px",
										gap: "10px",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<BsFacebook size={24} color="#202020" />
										<Text b>200</Text>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AiFillChrome size={24} color="#202020" />
										<Text b>102</Text>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AiFillTwitterCircle size={24} color="#202020" />
									</div>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							// width: "80%",
							display: "flex",
							flexWrap: "wrap",
							flexDirection: "row",
							gap: "50px",
							marginBottom: "50px",
							"@media only screen and (max-width: 600px)": {
								gap: '0px'
							},
						}}
					>
						<Box sx={{ maxWidth: ["100%", "30%"] }}>
							<img src="blog3.jpg" alt="Blog 2" />
						</Box>
						<Box
							sx={{
								// width: "50%",
								maxWidth: "700px",
								display: "flex",
								flexWrap: "wrap",
								flexDirection: "column",
								marginTop: "10px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									flexDirection: "row",
									justifyContent: ["center", "space-between"],
									"@media only screen and (max-width: 600px)": {
										width: "90%",
									},
								}}
							>
								<Text b size={15} css={{ lineHeight: 1 }}>
									Team KamayaKya
								</Text>
								<Text b size={15} css={{ lineHeight: 1 }}>
									10-Jan-2023
								</Text>
							</Box>
							<Text
								b
								size={26}
								css={{
									lineHeight: 1.2,
									marginTop: "10px",
									"@media only screen and (max-width: 600px)": {
										width: "90%",
									},
								}}
							>
								Impact of oil prices on Indian markets
							</Text>
							<Text b size={16} css={{ lineHeight: 1.2, marginTop: "10px" }}>
								Oil prices have increased by more than 27% since the beginning
								of this year. Right from inflation to current account deficit,
								rising oil prices have negative impact on Indian economy.
							</Text>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Button
									css={{
										width: "80px",
										borderRadius: "0px",
										alignSelf: "flex-start",
										marginTop: "10px",
										backgroundColor: "#eaeaea",
									}}
								>
									<Text b size={14}>
										Read More
									</Text>
									<BiChevronRight
										color="#000000"
										size={20}
										style={{ marginLeft: "20px" }}
									/>
								</Button>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										marginTop: "10px",
										gap: "10px",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<BsFacebook size={24} color="#202020" />
										<Text b>200</Text>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AiFillChrome size={24} color="#202020" />
										<Text b>102</Text>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AiFillTwitterCircle size={24} color="#202020" />
									</div>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
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
				</Box>
			</Box>
		</section>
	);
};

export default BSection2;
