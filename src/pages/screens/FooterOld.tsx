import React from "react";
import { Box, IconButton } from "@mui/material";
import { Text } from "@nextui-org/react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import InstagramIcon from '@mui/icons-material/Instagram';
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const FooterOld = () => {
	return (
		<section
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
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					maxWidth: "2000px",
				}}
			>
				<img src="./image.png" alt="LOGO" height={80} width={250} />
				<Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
					<Text
						size={18}
						color="#a0a0a0"
						css={{
							maxWidth: "400px",
							display: "flex",
							alignItems: "center",
							paddingLeft: 15,
						}}
					>
						<BsTelephone size={20} style={{ marginRight: 14 }} /> (+91)
						1234567890
					</Text>
					<Text
						size={18}
						color="#a0a0a0"
						css={{
							maxWidth: "400px",
							display: "flex",
							alignItems: "center",
							paddingLeft: 15,
						}}
					>
						<CiMail size={24} style={{ marginRight: 10 }} />{" "}
						contact@KamayaKya.com
					</Text>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row", gap: 5, mt: 2 }}>
					<IconButton>
						<FaFacebook size={40} color="#1877f2" />
					</IconButton>
					<IconButton>
						<img src="/kmk-instagram.png" height={40} width={40}/>
					</IconButton>
					<IconButton>
						<FaLinkedinIn size={40} color="#0077b5" />
					</IconButton>
					<IconButton>
						<FaTwitter size={40} color="#1d9bf0" />
					</IconButton>
				</Box>
                
                <div
					style={{
						display: "flex",
                        flexWrap: 'wrap',
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 20,
					}}
				>
					<div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
						<Text b>Privacy Policy</Text>
						<Text b>Disclaimer</Text>
						<Text b>Complaints</Text>
						<Text b>Terms of use</Text>
					</div>
					<Text b size={18} color="#525357">
						© Copyright 2023 KamayaKya. All rights reserved
					</Text>
				</div>
                
			</Box>
		</section>
	);
};

export default FooterOld;