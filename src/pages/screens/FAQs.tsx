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
import { Link } from '@nextui-org/react';

const FAQs = () => {
	return (
		<section
			id="FAQs"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#fff",
				width: "100%",
				height: "100%",
				paddingTop: 25,
				paddingBottom: 25,
			}}
		>
			<div style={{ width: "100%", maxWidth: "1600px" }}>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						maxWidth: "1600px",
						width: "100%",
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
							    <Link href="/TermsAndCond">Terms & Conditions</Link>

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
							<Link href="/PrivacyPolicy">Privacy Policy</Link>
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
							<Link href="/Disclaimer">Disclaimer</Link>
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
							<Link href="/InvestorCharter">Investor Charter</Link>
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
							<Link href="/Complaints">Complaints</Link>
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
					sx={{
						display: "flex",
						alignSelf: "center",
						textAlign: "center",
						justifyContent: 'space-evenly',
						marginTop: "20px",
						alignItems: 'center',
						flexWrap: 'wrap'
					}}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '250px',alignItems: 'center' }}>
						<img src="MSME logo.png" width={"150px"} height={"100px"} />
						<Text b size={16}>
							Udyam Registration Number : UDYAM-MH-26-0204983
						</Text>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '200px' }}>
						<img src="SEBI.png" width={"200px"} height={"100px"} />
						<Text b size={16}>Registration No : INH000009843</Text>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', alignItems: 'center' }}>
						<img src="Startup India Logo.png" width={"180px"} height={"80px"} />
						<Text b size={16}>Certificate No : DIPP95081</Text>
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
		</section>
	);
};

export default FAQs;
