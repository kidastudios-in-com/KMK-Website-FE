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
			  paddingTop: "5vh",
			  paddingBottom: "10vh",
			},
			"@media only screen and (max-width: 764px)": {
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
			  "@media only screen and (max-width: 764px)": {
				paddingLeft: "5px",
				paddingRight: "5px",
				marginTop: "0px",
				borderRadius: "10px",
				alignItems: "flex-start",
				backgroundImage: "linear-gradient(to top , #fff, #fff)",
			  },
			}}
		  >
			<Text
			  b
			  size={28}
			  color="#FFF"
			  css={{
				fontWeight: "bolder",
				"@media only screen and (max-width: 764px)": {
				  fontSize: 18,
				  width: "100%",
				  textAlign: "left",
				  color: "#021C61",
				},
			  }}
			  onClick={handleCert}
			>
			  SEBI Registered: INH000009843
			</Text>
		  </Box>
		  <Modal
			width="790px"
			blur
			open={showCert}
			onClose={handleCertClose}
			css={{
			  background: "transparent",
			  boxShadow: "none",
			  "@media only screen and (max-width: 764px)": {
				width: "100vw",
				height: "95vh",
				paddingLeft: "15px",
				paddingRight: "15px",
			  },
			}}
		  >
			<img
			  src="Kamayakya-SEBI-License.jpg"
			  alt="SEBI Certificate"
			  style={{ height: "90vh", objectFit: "cover" }}
			/>
			<Modal.Footer justify="center">
			  <Button
				auto
				onClick={handleCertClose}
				css={{
				  borderRadius: "20px",
				  background: "#116751",
				  fontSize: 18,
				  alignSelf: "center",
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
				fontSize: 45,
				lineHeight: 1.1,
				paddingLeft: "5px",
				paddingRight: "5px",
				marginTop: "0px",
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
			  "@media only screen and (max-width: 764px)": {
				fontSize: 20,
				maxWidth: "100%",
				paddingLeft: "5px",
				paddingRight: "5px",
				marginTop: "10px",
				textAlign: "left",
				color: "#000",
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
			  "@media only screen and (max-width: 764px)": {
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
				"@media only screen and (max-width: 764px)": {
				  borderRadius: "15px",
				  paddingLeft: 15,
				  paddingRight: 15,
				  marginLeft: 0,
				  marginBottom: 0,
				  marginTop: "25px",
				  height: "55px",
				},
			  }}
			>
			  <Text
				b
				size={28}
				color="White"
				css={{
				  "@media only screen and (max-width: 764px)": {
					fontSize: 18,
					// padding: "1px 5px",
					width: "auto",
				  },
				}}
			  >
				Sample Reports
			  </Text>
			</Button>
			<Modal
			  blur
			  aria-labelledby="modal-title"
			  aria-describedby="modal-description"
			  {...bindings}
			  css={{
				width: "65vw",
				maxWidth: "65vw",
				alignSelf: "flex-end",
				background: "transparent",
				boxShadow: "none",
				borderRadius: "15px",
				"@media only screen and (max-width: 764px)": {
				  width: "95vw !important",
				  maxWidth: "95vw !important",
				},
			  }}
			>
			  <Dropdown>
				<Dropdown.Button
				  flat
				  css={{
					alignSelf: "center",
					width: "100%",
					backgroundColor: "#125a54",
					color: "#fff",
					fontSize: 19,
					marginBottom: "20px",
					borderRadius: "10px",
					height: "50px",
					"@media only screen and (max-width: 768px)": {
					  width: "100%",
					  fontSize: 15,
					  height: "50px",
					  marginBottom: "0px",
					  borderRadius: "10px 0 0",
					  "& span": {
						// display: "none",
					  },
					},
				  }}
				>
				  {PdfValue}
				  {/*Report Types*/}
				</Dropdown.Button>
				<Dropdown.Menu
				  // defaultSelectedKeys={'SampleReport.pdf'}
				  aria-label="TimeActions"
				  selectionMode="single"
				  selectedKeys={selectedPDF}
				  onSelectionChange={(key) => setSelectedPDF(key)}
				  style={{ width: "100%" }}
				>
				  <Dropdown.Item key="SampleReport.pdf">
					Half Page Report
				  </Dropdown.Item>
				  <Dropdown.Item
					key="Ion Exchange Half Page Report - English.pdf"
					css={{ width: "100vw" }}
				  >
					Ion Exchange Half Page Report - English
				  </Dropdown.Item>
				  <Dropdown.Item key="DetailedReport.pdf">
					Detailed Report
				  </Dropdown.Item>
				</Dropdown.Menu>
			  </Dropdown>
			  <iframe
				src={`${PdfValue}#view=FitH&toolbar=0`}
				// src={`Test1.pdf#toolbar=0`}
				style={{
				  width: "100%",
				  height: "75vh",
				  borderColor: "transparent",
				  borderRadius: "15px",
				  borderWidth: "0px",
				  zoom: "1",
				}}
				className="iframePdfMobile"
			  />
			  <Button
				flat
				onPress={() => setVisible(false)}
				css={{
				  alignSelf: "end",
				  width: "100%",
				  backgroundColor: "#ffa12e",
				  color: "#fff",
				  fontSize: 19,
				  marginTop: "20px",
				  borderRadius: "10px",
				  height: "50px",
				  "@media only screen and (max-width: 768px)": {
					width: "100%",
					fontSize: 15,
					height: "50px",
					marginTop: "0px",
					borderRadius: "0px 0px 10px",
					"& span": {
					  // display: "none",
					},
				  },
				}}
			  >
				Close
			  </Button>
			</Modal>
			{/* <span style={{ width: "10px" }}></span> */}
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
				"@media only screen and (max-width: 764px)": {
				  borderRadius: "15px",
				  paddingLeft: 15,
				  paddingRight: 15,
				  marginLeft: 0,
				  marginBottom: 0,
				  marginTop: "25px",
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
				  "@media only screen and (max-width: 764px)": {
					fontSize: 18,
					// padding: "5px 10px",
					// marginRight: 10,
					// marginBottom: 10,
					width: "auto",
				  },
				}}
			  >
				Get free access
			  </Text>
			</Button>
			<Modal
			  // width="1200px"
			  blur
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
			  "@media only screen and (max-width: 764px)": {
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
			  <Text
				b
				size={22}
				color="#888888"
				css={{
				  "@media only screen and (max-width: 764px)": {
					fontSize: "18px",
				  },
				}}
			  >
				2k+ regular users
			  </Text>
			</Box>
		  </Box>
		</Box>
	  </main>
	);
  };
  
  export default HomePage;
  
  // Home Section