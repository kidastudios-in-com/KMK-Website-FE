import NavBar from "@/components/Navbar";
import FaqsNew from "./screens/FaqsNew";
import Footer from "./screens/Footer";
import React, { useContext } from "react";
import AuthContext from "@/components/AuthContext";
import NavBar2 from "@/components/Navbar2";
import { Text } from "@nextui-org/react";
import { Box } from "@mui/material";

const Disclaimer = () => {
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<div>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			<Box
				sx={{
					// paddingTop: "30px",
					display: "flex",
					// flexWrap: "wrap",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					paddingLeft: "15px",
					paddingRight: "15px",
					background: "#fff",
					"@media only screen and (min-width: 672px)": {
						paddingTop: "2.5vh",
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
				<Text
					b
					size={60}
					css={{
						marginTop: "0px",
						width: "100%",
						maxWidth: "80rem" /* 1280px */,
						textAlign: "center",
						lineHeight: 1.2,
						paddingLeft: "15px",
						paddingRight: "15px",
						"@media only screen and (max-width: 764px)": {
							fontSize: 45,
							marginTop: "35px",
							maxWidth: "100%",
							textAlign: "left",
						},
					}}
				>
					Equity Research Report Disclaimer and Disclosures
				</Text>
				<Text
					size={20}
					css={{
						marginTop: "2.5vh",
						width: "100%",
						maxWidth: "80rem" /* 1280px */,
						textAlign: "left",
						lineHeight: 1.2,
						paddingLeft: "15px",
						paddingRight: "15px",
						"@media only screen and (max-width: 764px)": {
							fontSize: 15,
							marginTop: "35px",
							marginBottom: "35px",
							maxWidth: "100%",
							textAlign: "left",
						},
					}}
				>
					The table provides information on the various disclosures of each of
					the companies with a detailed document attached that can be downloaded
					and read.
				</Text>
			</Box>
			<FaqsNew />
			<Footer />
		</div>
	);
};

export default Disclaimer;
