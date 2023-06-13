import { Card, Divider, Text, Modal } from "@nextui-org/react";
import React, { useState, useContext } from "react";
import { Box, Button, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import AuthContext from "./AuthContext";
import { useRouter } from "next/router";

const SubscriptionNew = () => {
	const { isLoggedIn } = useContext(AuthContext);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const router = useRouter();

	const handleLoginOrSub = () => {
		if (isLoggedIn) {
			router.push("/purchase");
		}
		setShowLoginModal(true);
	};
	const handleLogin = () => {
		setShowLoginModal(true);
	};

	const handleCloseLoginModal = () => {
		setShowLoginModal(false);
	};

	return (
		<section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
			<section
				style={{
					// paddingTop: "50px",
					paddingBottom: "80px",
					display: "flex",
					flexDirection: "column",
					maxWidth: "2000px",
					backgroundColor: "#fff",
					justifyContent: "center",
					alignItems: "center",
					"@media only screen and (max-width: 600px)": {
						paddingBottom: "0px",
					},
				}}
			>
				<Box sx={{ textAlign: "center", marginBottom: "80px" }}>
					<Text
						b
						size={70}
						css={{
							"@media only screen and (max-width: 600px)": {
								textAlign: "center",
								fontSize: 45,
								lineHeight: 1.2,
								maxWidth: "600px",
								width: "90%",
							},
						}}
					>
						Our Subscription Plans
					</Text>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						gap: "40px",
						alignItems: "center",
						"@media only screen and (max-width: 600px)": {
							justifyContent: "center",
							gap: "20px",
						},
					}}
				>
					<Card
						css={{
							// height: "650px",
							width: "320px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							borderRadius: "35px",
							background: "#fff",
							filter: "none",
							border: "2px solid #fda629",
							justifyContent: "center",
							paddingTop: "50px",
							paddingBottom: "50px",
							paddingLeft: "15px",
							paddingRight: "15px",
							"@media only screen and (max-width: 800px)": {
								order: 2,
							},
						}}
					>
						<img
							src="./kmk-logo (1).png"
							style={{ marginTop: "5px", width: "65%" }}
						/>
						<Divider
							css={{
								background: "#000000",
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
									fontSize: 20,
									alignSelf: "start",
									marginTop: "5px",
									opacity: 0.9,
								}}
							/>
							<Text b size={18} css={{ lineHeight: 1.2, opacity: 0.9 }}>
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Box
							sx={{
								width: "100%",
								alignSelf: "start",
								marginBottom: "10px",
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
									fontSize: 20,
									alignSelf: "start",
									marginTop: "5px",
									opacity: 0.9,
								}}
							/>
							<Text b size={18} css={{ lineHeight: 1.2, opacity: 0.9 }}>
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Box
							sx={{
								width: "100%",
								alignSelf: "start",
								marginBottom: "10px",
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
									fontSize: 20,
									alignSelf: "start",
									marginTop: "5px",
									opacity: 0.9,
								}}
							/>
							<Text b size={18} css={{ lineHeight: 1.2, opacity: 0.9 }}>
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Divider
							css={{
								background: "#000000",
								width: "30px",
								height: "3px",
								marginTop: "20px",
								marginBottom: "20px",
							}}
						/>
						<Button
							onClick={handleLogin}
							variant="contained"
							sx={{
								width: "75%",
								backgroundImage:
									"linear-gradient(to top , #105B54, #0F734D, #0F734D)",
								paddingTop: "5px",
								paddingBottom: "5px",
								borderRadius: "10000px",
								boxShadow: "none",
								"&:hover": {
									backgroundImage:
										"linear-gradient(to top , #105B54, #0F734D, #0F734D)",
								},
							}}
						>
							<Text b size={18} color="#fff">
								Free Access
							</Text>
						</Button>
						<Modal
							width="1200px"
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
						<Text b size={20} css={{ marginTop: "10px", opacity: 0 }}>
							for ₹<span style={{ fontSize: 28, opacity: 0 }}>11,800/year</span>
						</Text>
					</Card>
					<Card
						isHoverable
						css={{
							// height: "650px",
							width: "350px",
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
							"@media only screen and (max-width: 800px)": {
								order: 1,
							},
						}}
					>
						{/* <div
						style={{
							display: 'flex',
							width: "350px",
							height: "50px",
							background: "#00d784",
							textAlign: "center",
							paddingTop: "3px",
							paddingBottom: "3px",
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Text b color="#fff" size={14} css={{ alignItems: 'center' }}>
							SPECIAL OFFER
						</Text>
					</div> */}
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
								Unlimited Stock Picks Unlimited Stock Picks
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
								Unlimited Stock Picks Unlimited Stock Picks
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
								Unlimited Stock Picks Unlimited Stock Picks
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
								Unlimited Stock Picks Unlimited Stock Picks
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
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Box
							sx={{
								width: "100%",
								alignSelf: "start",
								marginBottom: "10px",
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
								Unlimited Stock Picks Unlimited Stock Picks
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
							variant="contained"
							sx={{
								width: "75%",
								background: "linear-gradient(to top , #fb7716,#fe9807)",
								paddingTop: "5px",
								paddingBottom: "5px",
								borderRadius: "10000px",
								boxShadow: "none",
								"&:hover": {
									background: "linear-gradient(to top , #fb7716,#fe9807)",
								},
							}}
							onClick={handleLoginOrSub}
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
							at ₹
							<span style={{ color: "#fff", fontSize: 36, lineHeight: 1.2 }}>
								33/day
							</span>
						</Text>

						<Text
							b
							size={20}
							color="#FFF"
							css={{ mt: "0px", opacity: 0.75, lineHeight: 1 }}
						>
							Billed Annualy
						</Text>
					</Card>
					<Card
						css={{
							// height: "650px",
							width: "320px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							borderRadius: "35px",
							background: "#fff",
							filter: "none",
							border: "2px solid #1877f2",
							justifyContent: "center",
							paddingTop: "50px",
							paddingBottom: "50px",
							paddingLeft: "15px",
							paddingRight: "15px",
							"@media only screen and (max-width: 800px)": {
								order: 3,
							},
						}}
					>
						<img
							src="smallcase-full-logo.svg"
							style={{ marginTop: "5px", width: "65%" }}
						/>
						<Divider
							css={{
								background: "#000000",
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
									fontSize: 20,
									alignSelf: "start",
									marginTop: "5px",
									opacity: 0.9,
								}}
							/>
							<Text b size={18} css={{ lineHeight: 1.2, opacity: 0.9 }}>
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Box
							sx={{
								width: "100%",
								alignSelf: "start",
								marginBottom: "10px",
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
									fontSize: 20,
									alignSelf: "start",
									marginTop: "5px",
									opacity: 0.9,
								}}
							/>
							<Text b size={18} css={{ lineHeight: 1.2, opacity: 0.9 }}>
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Box
							sx={{
								width: "100%",
								alignSelf: "start",
								marginBottom: "10px",
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
									fontSize: 20,
									alignSelf: "start",
									marginTop: "5px",
									opacity: 0.9,
								}}
							/>
							<Text b size={18} css={{ lineHeight: 1.2, opacity: 0.9 }}>
								Unlimited Stock Picks Unlimited Stock Picks
							</Text>
						</Box>
						<Divider
							css={{
								background: "#000000",
								width: "30px",
								height: "3px",
								marginTop: "20px",
								marginBottom: "20px",
							}}
						/>
						<Button
							variant="contained"
							sx={{
								width: "75%",
								background: "#1877f2",
								paddingTop: "5px",
								paddingBottom: "5px",
								borderRadius: "10000px",
								boxShadow: "none",
								"&:hover": {
									background: "#1877f2",
								},
							}}
							onClick={() =>
								window.open(
									"https://kamayakya.smallcase.com/#portfolios",
									"_blank"
								)
							}
						>
							<Text b size={18} color="#fff">
								Subscribe Now
							</Text>
						</Button>
						<Text b size={20} css={{ marginTop: "10px" }}>
							for ₹<span style={{ fontSize: 28 }}>11,800/year</span>
						</Text>
					</Card>
				</Box>
			</section>
		</section>
	);
};

export default SubscriptionNew;
