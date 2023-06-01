import { Box } from "@mui/material";
import { Button, Text } from "@nextui-org/react";
import React from "react";

const Section1 = () => {
	return (
		<section
			style={{
				zIndex: 0,
				backgroundColor: "#fff",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				maxWidth: "2000px",
				paddingTop: "50px",
				paddingBottom: "50px",
				margin: "0 auto",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap-reverse",
					flexDirection: "row",
					width: "75%",
					justifyContent: "center",
					"@media only screen and (max-width: 764px)": {
						width: "100%",
						marginTop: "-30px",
					},
				}}
			>
				<Box
					sx={{
						width: "30%",
						"@media only screen and (max-width: 764px)": {
							width: "100%",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							height: "458px",
							maxHeight: "480px",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							backgroundColor: "#000000",
							padding: "30px",
						}}
					>
						<Text
							b
							size={40}
							color="#fff"
							css={{
								lineHeight: 1.2,
								marginBottom: "20px",
								"@media only screen and (max-width: 764px)": {
									fontSize: 38
								},
							}}
						>
							What is Equity Research?
						</Text>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Text b size={14} color="#fff">
								Team KamayaKya
							</Text>
							<Text b size={14} color="#fff">
								09-Jan-2023
							</Text>
						</Box>
						<Text
							b
							size={18}
							color="#AEAEAE"
							css={{
								lineHeight: 1.5,
								marginTop: "20px",
								// maxHeight: '300px',
								overflowY: 'hidden',
								"@media only screen and (max-width: 764px)": {
									lineHeight: 1,
									fontSize: 18
								},
							}}
						>
							The field of equity research bestows a tinge of glamour whenever
							anybody talks about it. Through this primer, let us demystify this
							field and enter the world that is the epicentre of the stock
							market analysis.
						</Text>
						<Button
							css={{
								borderRadius: "0px",
								alignSelf: "flex-start",
								marginTop: "20px",
								backgroundColor: "#242424",
							}}
						>
							<Text b size={15} color="#FFF">
								Read More
							</Text>
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						width: "70%",
						height: "100%",
						// marginTop: "5px",
						"@media only screen and (max-width: 764px)": {
							width: "100%",
							height: '300px',
							marginTop: "0",
							marginBottom: "-10px",
						},
					}}
				>
					<img
						width={"100%"}
						height={"458px"}
						style={{
							objectFit: "cover",
							// height: '455px',
							maxHeight: "480px",
						}}
						src="./kmk-blog1.webp"
						alt="Blog Image"
					/>
				</Box>
			</Box>
		</section>
	);
};

export default Section1;
