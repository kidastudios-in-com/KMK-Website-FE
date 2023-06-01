import { Text, Button, Avatar, Modal, useModal } from "@nextui-org/react";
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Login from "@/components/Login";
// import { Document, Page, pdfjs } from "react-pdf";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';


const HomePage = () => {
	const { setVisible, bindings } = useModal();
	const [showLoginModal, setShowLoginModal] = useState(false);

	const handleLogin = () => {
		setShowLoginModal(true);
	};

	const handleCloseLoginModal = () => {
		setShowLoginModal(false);
	};
	// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

	// const [numPages, setNumPages] = useState<number | null>(null);

	// const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
	// 	setNumPages(numPages);
	// };

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
				paddingTop: 20,
				backgroundColor: "#fff",
				paddingBottom: 60,
			}}
		>
			<Box
				sx={{
					marginTop: 6,
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
				<Text
					b
					size={70}
					css={{
						maxWidth: "70%",
						textAlign: "center",
						lineHeight: 1.2,
						"@media only screen and (max-width: 600px)": {
							fontSize: 47.5,
							maxWidth: "85%",
						},
					}}
				>
					Maximise the growth of your funds by investing in High-potential ideas
				</Text>
				<Text
					b
					size={30}
					css={{
						marginTop: 10,
						maxWidth: "50%",
						textAlign: "center",
						color: "Grey",
						lineHeight: 1.2,
						"@media only screen and (max-width: 600px)": {
							fontSize: 20,
							maxWidth: "75%",
							display: "none",
						},
					}}
				>
					KamayaKya is your friendly investment guru who will assist you in
					finding the best SME, MicroCap and SmallCap stocks to invest in,
					backed by solid research.
				</Text>
				<Box
					sx={{ marginTop: "25px", display: "flex", flexDirection: "column" }}
				>
					<Text b size={18} color="#888888">
						SEBI Registration No.: INH000009843
						{/* | MSME Udyam Registration Number : UDYAM-MH-26-0204983  */}
					</Text>
					{/* <Text b size={18} color="#888888" css={{ textAlign: 'center' }}>
					Start-up Certificate No.: DIPP95081
					</Text> */}
				</Box>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button
						size={"xl"}
						onPress={() => setVisible(true)}
						css={{
							marginTop: 30,
							backgroundColor: "#ff9f24",
							zIndex: 0,
							paddingLeft: 50,
							paddingRight: 50,
							"@media only screen and (max-width: 600px)": {
								fontSize: 20,
								padding: "5px 10px",
								marginTop: "35px",
								marginBottom: "5px",
								width: "60%",
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
						width="1200px"
						aria-labelledby="modal-title"
						aria-describedby="modal-description"
						{...bindings}
						css={{ background: 'transparent', boxShadow: 'none' }}
					>
						
							<iframe
								src="SampleReport.pdf#toolbar=0"
								style={{ height: "700px" }}
							></iframe>
							<Button
								flat
								onPress={() => setVisible(false)}
								css={{
									alignSelf: 'end',
									width: "150px",
									backgroundColor: "#ffa12e",
									color: "#fff",
									fontSize: 17,
								}}
							>
								Close
							</Button>
					</Modal>
					<Button
						size={"xl"}
						css={{
							marginTop: 30,
							marginLeft: 30,
							backgroundColor: "#0a5b53",
							zIndex: 0,
							paddingLeft: 50,
							paddingRight: 50,
							"@media only screen and (max-width: 600px)": {
								fontSize: 20,
								padding: "5px 10px",
								marginLeft: 0,
								marginBottom: 10,
								marginTop: "10px",
								width: "85%",
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
									padding: "5px 10px",
									// marginRight: 10,
									// marginBottom: 10,
									width: "auto",
								},
							}}
						>
							Get Access
						</Text>
					</Button>
					<Modal width="1200px" open={showLoginModal} onClose={handleCloseLoginModal}>
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
				</div>

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

				{/* <div
					style={{
						maxWidth: "900px",
						width: "100%",
						margin: "0 auto",
						borderRadius: "14px",
						marginTop: 50,
					}}
				>
					<video
						src="./KMK-V1.mp4"
						muted
						loop
						autoPlay
						style={{ width: "100%", height: "auto", borderRadius: "14px" }}
					/>
				</div> */}
			</Box>
		</section>
	);
};

export default HomePage;
