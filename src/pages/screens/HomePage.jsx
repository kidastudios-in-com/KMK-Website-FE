import {
	Text,
	Button,
	Avatar,
	Modal,
	useModal,
	Dropdown,
} from "@nextui-org/react";
import React, { useState, useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Login from "@/components/Login";
import AuthContext from "@/components/AuthContext";

const HomePage = () => {
	const { isLoggedIn } = useContext(AuthContext);
	const { setVisible, bindings } = useModal();
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showCert, setShowCert] = useState(false);

	const handleCert = () => {
		setShowCert(true);
	};

	const handleCertClose = () => {
		setShowCert(false);
	};

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

	const [selectedPDF, setSelectedPDF] = useState(new Set(["SampleReport.pdf"]));

	const PdfValue = React.useMemo(
		() => Array.from(selectedPDF)[0]?.replaceAll("_", " ") || "",
		[selectedPDF]
	);

	return (
		<main
			id="home"
			style={{
				backgroundColor: "#fff",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					// paddingTop: "30px",
					display: "flex",
					// flexWrap: "wrap",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					maxWidth: "80rem",
					"@media only screen and (min-width: 672px)": {
						paddingTop: "10vh",
						paddingBottom: "10vh",
					},
					"@media only screen and (max-width: 672px)": {
						// maxHeight: "100vh",
						marginTop: "0px",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						paddingLeft: "15px",
						paddingRight: "15px",
					},
				}}
			>
				<Box
					sx={{
						paddingLeft: "40px",
						paddingRight: "40px",
						paddingTop: "15px",
						paddingBottom: "15px",
						// marginTop: "25px",
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
							css={{
								borderRadius: "20px",
								background: "#ffa12e",
								fontSize: 18,
							}}
						>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<Text
					b
					size={70}
					css={{
						marginTop: "40px",
						// width: "90%",
						maxWidth: "80rem" /* 1280px */,
						textAlign: "center",
						lineHeight: 1.2,
						paddingLeft: "15px",
						paddingRight: "15px",
						"@media only screen and (max-width: 764px)": {
							fontSize: 55,
							marginTop: "35px",
							maxWidth: "100%",
							textAlign: "left",
						},
					}}
				>
					Maximize the growth of your funds by investing in{" "}
					<span style={{ color: "#074E47" }}>high-potential ideas</span>
				</Text>
				<Text
					b
					size={30}
					css={{
						marginTop: 10,
						maxWidth: "80rem" /* 1280px */,
						textAlign: "center",
						color: "#125a54",
						lineHeight: 1.2,
						paddingLeft: "15px",
						paddingRight: "15px",
						"@media only screen and (max-width: 672px)": {
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
						marginTop: "40px",
						maxWidth: "80rem",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						"@media only screen and (min-width: 600px)": {
							justifyContent: "center",
							alignItems: "center",
						},
						"@media only screen and (max-width: 672px)": {
							width: "90vw",
							marginTop: "0",
							justifyContent: "flex-start",
							alignItems: "flex-start",
						},
					}}
				>
					<Button
						auto
						size={"xl"}
						onPress={() => setVisible(true)}
						css={{
							borderRadius: "10000px",
							marginTop: 10,
							backgroundColor: "#ff9f24",
							zIndex: 0,
							paddingLeft: 50,
							paddingRight: 50,
							"@media only screen and (max-width: 672px)": {
								paddingLeft: 25,
								paddingRight: 25,
								marginLeft: 0,
								marginBottom: 0,
								marginTop: "35px",
								height: "55px",
							},
						}}
					>
						<Text
							b
							size={28}
							color="White"
							css={{
								"@media only screen and (max-width: 672px)": {
									fontSize: 20,
									// padding: "1px 5px",
									width: "auto",
								},
							}}
						>
							Sample Reports
						</Text>
					</Button>
					<Modal
						width="100%"
						aria-labelledby="modal-title"
						aria-describedby="modal-description"
						{...bindings}
						css={{
							alignSelf: "center",
							background: "transparent",
							boxShadow: "none",
							borderRadius: "0px",
						}}
					>
						<Dropdown>
							<Dropdown.Button
								flat
								css={{
									alignSelf: 'center',
									width: "250px",
									backgroundColor: "#125a54",
									borderRadius: "10000px",
									color: "#fff",
									fontSize: 16,
									"@media only screen and (max-width: 768px)": {
										width: "70%",
										"& span": {
											// display: "none",
										},
									},
								}}
							>
								{/* {PdfValue} */}
								Report Types
							</Dropdown.Button>
							<Dropdown.Menu
							// defaultSelectedKeys={'SampleReport.pdf'}
								aria-label="TimeActions"
								selectionMode="single"
								selectedKeys={selectedPDF}
								onSelectionChange={(key) => setSelectedPDF(key)}
							>
								<Dropdown.Item key="SampleReport.pdf">Half Page Report</Dropdown.Item>
								<Dropdown.Item key="FullPageReport.pdf">Full Page Report</Dropdown.Item>
								<Dropdown.Item key="Test1.pdf">Detailed Report</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<iframe
							src={`${PdfValue}#toolbar=0`}
							// src={`Test1.pdf#toolbar=0`}
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
								marginTop: "20px",
							}}
						>
							Close
						</Button>
					</Modal>
					<span style={{ width: "10px" }}></span>
					<Button
						auto
						size={"xl"}
						css={{
							borderRadius: "10000px",
							display: isLoggedIn ? "none" : "block",
							marginTop: 10,
							marginLeft: 30,
							// backgroundColor: "#0a5b53",
							backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
							zIndex: 0,
							paddingLeft: 50,
							paddingRight: 50,
							"@media only screen and (max-width: 672px)": {
								paddingLeft: 25,
								paddingRight: 25,
								marginLeft: 0,
								marginBottom: 0,
								marginTop: "35px",
								height: "55px",
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
								"@media only screen and (max-width: 672px)": {
									fontSize: 20,
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
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						marginTop: "40px",
						"@media only screen and (max-width: 672px)": {
							marginTop: "20px",
							marginBottom: "10vh",
							marginLeft: "15px",
							alignItems: "flex-start",
							justifyContent: "flex-start",
						},
					}}
				>
					<Avatar.Group>
						{pictureUsers.map((url, index) => (
							<Avatar
								key={index}
								size="sm"
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
		</main>
	);
};

export default HomePage;
