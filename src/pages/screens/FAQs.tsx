import { Box, IconButton } from "@mui/material";
import { Divider, Text } from "@nextui-org/react";
import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from "@nextui-org/react";

const FAQs = () => {
	return (
		<main
			id="FAQs"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#fff",
				width: "100vw",
				height: "100%",
				paddingTop: "10vh",
				paddingBottom: "5vh",
			}}
		>
			<div style={{ width: "100%", maxWidth: "80rem" }}>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						maxWidth: "80rem",
						width: "100vw",
						"@media only screen and (max-width: 600px)": {
							justifyContent: "center",
							alignItems: "center",
							width: "auto",
						},
					}}
				>
					<img src="./kmk-logo.png" alt="LOGO" height={60} width={220} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							marginTop: "10px",
							gap: 3,
							"@media only screen and (max-width: 600px)": {
								justifyContent: "center",
								alignItems: "center",
								width: "auto",
							},
						}}
					>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 12,
									width: "auto",
								},
							}}
						>
							<Link href="/TermsAndCond" css={{ color: "Black" }}>
								Terms & Conditions
							</Link>
						</Text>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 12,
									width: "auto",
								},
							}}
						>
							<Link href="/PrivacyPolicy" css={{ color: "Black" }}>
								Privacy Policy
							</Link>
						</Text>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 12,
									width: "auto",
								},
							}}
						>
							<Link href="/Disclaimer" css={{ color: "Black" }}>
								Disclaimer
							</Link>
						</Text>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 12,
									width: "auto",
								},
							}}
						>
							<Link href="/InvestorCharter" css={{ color: "Black" }}>
								Investor Charter
							</Link>
						</Text>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 600px)": {
									fontSize: 12,
									width: "auto",
								},
							}}
						>
							<Link href="/Complaints" css={{ color: "Black" }}>
								Complaints
							</Link>
						</Text>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "start",
							alignItems: "start",
							gap: "10px",
							// marginTop: 2,
							"@media only screen and (max-width: 600px)": {
								mb: "5px",
							},
						}}
					>
						<IconButton
							onClick={() =>
								window.open("https://www.facebook.com/KamayaKya/", "_blank")
							}
						>
							<FaFacebook size={30} color="#1877f2" />
						</IconButton>
						<IconButton
							onClick={() =>
								window.open(
									"https://www.instagram.com/kamakyaofficial/",
									"_blank"
								)
							}
						>
							<img src="/kmk-instagram.png" height={30} width={30} />
						</IconButton>
						<IconButton
							onClick={() =>
								window.open(
									"https://www.linkedin.com/company/kamayakya/",
									"_blank"
								)
							}
						>
							<FaLinkedinIn size={30} color="#0077b5" />
						</IconButton>
						<IconButton
							onClick={() =>
								window.open("https://twitter.com/KamayaKyaIndia", "_blank")
							}
						>
							<FaTwitter size={30} color="#1d9bf0" />
						</IconButton>
					</Box>
				</Box>
				<Box
					sx={{ display: "flex", flexDirection: "column", marginTop: "35px", marginBottom: "35px" }}
				>
					<Text
						b
						size={15}
						css={{
							textAlign: "center",
							"@media only screen and (max-width: 672px)": {
								marginTop: "10px",
								textAlign: "left",
								fontSize: 15,
								lineHeight: 1.1,
							},
						}}
					>
						Kamayakya Wealth Management Pvt. Ltd makes no warranties or
						representations, express or implied, on products and services
						offered through the platform. It accepts no liability for any
						damages or losses, however, caused in connection with the use of, or
						on the reliance of its research and recommendation services.
						Past performance is not indicative of future returns. Please
						consider your specific investment requirements, risk tolerance,
						goal, time frame, risk and reward balance and the cost associated
						with the investment before choosing a fund, or designing a portfolio
						that suits your needs. Performance and returns of any investment
						portfolio can neither be predicted nor guaranteed.
					</Text>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignSelf: "center",
						textAlign: "center",
						justifyContent: "space-evenly",
						marginTop: "20px",
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							// maxWidth: "250px",
							alignItems: "center",
						}}
					>
						<img src="MSME logo.png" width={"auto"} height={"50px"} />
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "flex-start",
						}}>
							<Text b size={14} css={{ textAlign: 'start' }}>
								Udyam Registration Number:
							</Text>
							<Text b size={20} css={{ textDecoration: 'underline' }}>
								UDYAM-MH-26-0204983
							</Text>
						</Box>
					</Box>
					<Box
						sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}
					>
						<img src="SEBI.png" width={"auto"} height={"50px"} />
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "flex-start",
						}}>
						<Text b size={14} css={{ textAlign: 'start' }}>
							Registration No:
						</Text>
						<Text b size={20} css={{ textDecoration: 'underline' }}>
							INH000009843
						</Text>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							// maxWidth: "200px",
							alignItems: "flex-start",
							justifyContent: "flex-start",
						}}
					>
						<img src="Startup India Logo.png" width={"auto"} height={"50px"} />
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Text b size={14}>
							Certificate No:
						</Text>
						<Text b size={20} css={{ textDecoration: 'underline' }}>
							DIPP95081
						</Text>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
						marginTop: 2,
						"@media only screen and (max-width: 600px)": {
							justifyContent: "center",
							width: "auto",
						},
					}}
				>
					<Text
						b
						size={15}
						color="#525357"
						css={{
							"@media only screen and (max-width: 600px)": {
								fontSize: 12,
								width: "auto",
							},
						}}
					>
						© Copyright 2023 KamayaKya. All rights reserved
					</Text>
				</Box>
			</div>
		</main>
	);
};

export default FAQs;
