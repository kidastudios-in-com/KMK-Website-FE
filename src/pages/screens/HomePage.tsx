import {
	Text,
	Button,
	Avatar,
	Modal,
	useModal,
	Divider,
} from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Login from "@/components/Login";
import { keyframes } from "@emotion/react";
import AuthContext from "@/components/AuthContext";

const animationDuration = 500;
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const HomePage = () => {
	const { isLoggedIn } = useContext(AuthContext);
	const { setVisible, bindings } = useModal();
	const [showLoginModal, setShowLoginModal] = useState(false);
	const words = ["High-potential", "MicroCap", "SmallCap"];
	const [isFading, setIsFading] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0); // Current index of the word
	const [currentWord, setCurrentWord] = useState(words[currentIndex]); // Current word to display

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Increment index and loop back to 0 when reaching the end
			setCurrentWord(words[currentIndex]);
		}, 3000); // Change word every 3 seconds

		return () => {
			clearInterval(timer); // Clear the timer when the component unmounts
		};
	}, [currentWord]); // Remove currentIndex from the dependency array to prevent re-rendering on word change

	const handleLogin = () => {
		setShowLoginModal(true);
	};

	const handleCloseLoginModal = () => {
		setShowLoginModal(false);
	};
	const router = useRouter();
	const handleRegestier = () => {
		router.push("/registration");
	};
	const pictureUsers = [
		"https://i.pravatar.cc/150?u=a042581f4e29026024d",
		"https://i.pravatar.cc/150?u=a042581f4e29026704d",
		"https://i.pravatar.cc/150?u=a04258114e29026702d",
	];

	return (
		<section
			id="home"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				paddingTop: "10px",
				backgroundColor: "#fff",
				paddingBottom: 60,
			}}
		>
			<Box
				sx={{
					marginTop: "20px",
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					maxWidth: "2000px",
					"@media only screen and (max-width: 600px)": {
						marginTop: "0px",
					},
				}}
			>
				<Box
					sx={{
						paddingLeft: "40px",
						paddingRight: "40px",
						paddingTop: "10px",
						paddingBottom: "10px",
						marginTop: "25px",
						display: "flex",
						flexDirection: "column",
						backgroundImage: "linear-gradient(to top , #0d2c7b, #6067b5)",
						// backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
						borderRadius: "12.5px",
					}}
				>
					<Text
						b
						size={26}
						color="#FFF"
						css={{
							fontWeight: "bolder",
							"@media only screen and (max-width: 600px)": {
								fontSize: 14,
								padding: "1px 5px",
								width: "auto",
							},
						}}
					>
						SEBI Registration No.: INH000009843
					</Text>
				</Box>
				<Text
					b
					size={70}
					css={{
						marginTop: "40px",
						maxWidth: "70%",
						textAlign: "center",
						lineHeight: 1.2,
						"@media only screen and (max-width: 764px)": {
							fontSize: 47.5,
							maxWidth: "85%",
						},
					}}
				>
					Maximise the growth of your funds by investing in High-potential ideas
				</Text>
				{/* <div
					className="rotating-text-container"
					style={{ display: "flex", flexDirection: "row" }}
				>
					<div className="rotating-text-wrapper">
						<div className="rotating-text-cube">
							<div className="rotating-text-front">{currentWord}</div> 
							 <div className="rotating-text-back">{currentWord}</div>
						</div>
					</div>
					<Text b size={70} css={{
						"@media only screen and (max-width: 764px)": {
							textAlign: 'center',
							fontSize: 47.5,
							maxWidth: "85%",
						},
					}}>
						High-potential ideas
					</Text>
				</div> */}

				<Text
					b
					size={30}
					css={{
						marginTop: 10,
						maxWidth: "50%",
						textAlign: "center",
						color: "#125a54",
						lineHeight: 1.2,
						"@media only screen and (max-width: 764px)": {
							fontSize: 20,
							maxWidth: "75%",
							display: "none",
							marginTop: "0",
						},
					}}
				>
					KamayaKya is your friendly investment guru who will assist you in
					finding the best SME, MicroCap and SmallCap stocks to invest in,
					backed by solid research.
				</Text>
				<Box
					sx={{
						marginTop: "50px",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
						"@media only screen and (max-width: 764px)": {
							marginTop: "0",
						},
					}}
				>
					<Button
						auto
						size={"xl"}
						onPress={() => setVisible(true)}
						css={{
							borderRadius: "10000px",
							// marginTop: 30,
							backgroundColor: "#ff9f24",
							zIndex: 0,
							paddingLeft: 50,
							paddingRight: 50,
							"@media only screen and (max-width: 600px)": {
								fontSize: 20,
								padding: "5px 30px",
								marginTop: "35px",
								marginBottom: "5px",
								// width: "60%",
							},
						}}
					>
						<Text
							b
							size={28}
							color="White"
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 20,
									padding: "1px 5px",
									width: "auto",
								},
							}}
						>
							Read Sample Report
						</Text>
					</Button>
					<Modal
						// scroll
						width="100%"
						aria-labelledby="modal-title"
						aria-describedby="modal-description"
						{...bindings}
						css={{
							alignSelf: 'center',
							background: "transparent",
							boxShadow: "none",
							borderRadius: "0px",
							// maxWidth: "1300px",
						}}
					>
						<iframe
							src="SampleReport.pdf#toolbar=0"
							style={{
								height: "75vh",
								borderColor: "transparent",
								borderRadius: "0px",
								borderWidth: "0px",
								background: "#fff",
							}}
						></iframe>
						<Button
							flat
							onPress={() => setVisible(false)}
							css={{
								alignSelf: "end",
								width: "150px",
								backgroundColor: "#ffa12e",
								color: "#fff",
								fontSize: 17,
								marginTop: "50px",
							}}
						>
							Close
						</Button>
					</Modal>
					<Button
						auto
						size={"xl"}
						css={{
							borderRadius: "10000px",
							display: isLoggedIn ? "none" : "block",
							// marginTop: 30,
							marginLeft: 30,
							// backgroundColor: "#0a5b53",
							backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
							zIndex: 0,
							paddingLeft: 50,
							paddingRight: 50,
							"@media only screen and (max-width: 600px)": {
								fontSize: 20,
								// padding: "5px 10px",
								marginLeft: 0,
								marginBottom: 10,
								marginTop: "10px",
								width: "65%",
							},
						}}
						onPress={handleLogin}
						// onPress={() => handleRegestier()}
					>
						<Text
							b
							size={28}
							color="White"
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 28,
									// padding: "5px 10px",
									// marginRight: 10,
									// marginBottom: 10,
									width: "auto",
								},
							}}
						>
							Get Access
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
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						marginTop: 5,
						alignItems: "center",
						"@media only screen and (max-width: 600px)": {
							marginTop: "7.5px",
						},
					}}
				>
					<Avatar.Group>
						{pictureUsers.map((url, index) => (
							<Avatar
								key={index}
								size="md"
								pointer
								src={url}
								stacked
								style={{ zIndex: 0 }}
							/>
						))}
					</Avatar.Group>
					<Box
						sx={{
							marginLeft: "10px",
						}}
					>
						<Text b size={22} color="#888888">
							2k+ regular users
						</Text>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default HomePage;
