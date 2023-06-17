import { Box } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Section3 = () => {
	return (
		<section
			style={{
				width: "100%",
				backgroundColor: "#fff",
				paddingTop: '100px',
				paddingBottom: 100,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					width: "80%",
					maxWidth: "1400px",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-between",
					alignItems: "center",
					"@media only screen and (max-width: 600px)": {
						width: "95%",
					},
				}}
			>
				<Box sx={{ width: "550px", height: "100%" }}>
					<video
						muted
						autoPlay
						loop
						src="kmk-performanceTrack.mp4"
						style={{ borderRadius: "20px", width: "100%", height: "100%" }}
					/>
				</Box>
				<Box
					sx={{
						width: "600px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Text
						b
						size={40}
						css={{
							lineHeight: 1.2,
							"@media only screen and (max-width: 600px)": {
								textAlign: "center",
								fontSize: 30,
								lineHeight: 1,
							},
						}}
					>
						We connect our customers with the best, and help them keep up-and
						stay open.
					</Text>
					<Box
						sx={{
							width: "100%",
							alignSelf: "start",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							mt: "30px",
							"@media only screen and (max-width: 600px)": {
								justifyContent: "center",
							},
						}}
					>
						<CheckCircleIcon
							sx={{
								marginRight: "10px",
								fontSize: 30,
								alignSelf: "start",
								marginTop: "5px",
								opacity: 0.9,
								"@media only screen and (max-width: 600px)": {
									textAlign: "center",
									fontSize: 24,
									lineHeight: 1,
								},
							}}
						/>
						<Text
							b
							size={28}
							css={{
								lineHeight: 1,
								"@media only screen and (max-width: 600px)": {
									textAlign: "center",
									fontSize: 24,
									lineHeight: 1,
								},
							}}
						>
							Intense Research
						</Text>
					</Box>
					<Box
						sx={{
							width: "100%",
							alignSelf: "start",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							mt: "30px",
							"@media only screen and (max-width: 600px)": {
								justifyContent: "center",
							},
						}}
					>
						<CheckCircleIcon
							sx={{
								marginRight: "10px",
								fontSize: 30,
								alignSelf: "start",
								marginTop: "5px",
								opacity: 0.9,
								"@media only screen and (max-width: 600px)": {
									textAlign: "center",
									fontSize: 24,
									lineHeight: 1,
								},
							}}
						/>
						<Text
							b
							size={28}
							css={{
								lineHeight: 1,
								"@media only screen and (max-width: 600px)": {
									textAlign: "center",
									fontSize: 24,
									lineHeight: 1,
								},
							}}
						>
							100% transparency
						</Text>
					</Box>
					<Box
						sx={{
							width: "100%",
							alignSelf: "start",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							mt: "30px",
							"@media only screen and (max-width: 600px)": {
								justifyContent: "center",
							},
						}}
					>
						<CheckCircleIcon
							sx={{
								marginRight: "10px",
								fontSize: 30,
								alignSelf: "start",
								marginTop: "5px",
								opacity: 0.9,
								"@media only screen and (max-width: 600px)": {
									textAlign: "center",
									fontSize: 24,
									lineHeight: 1,
								},
							}}
						/>
						<Text
							b
							size={28}
							css={{
								lineHeight: 1,
								"@media only screen and (max-width: 600px)": {
									textAlign: "center",
									fontSize: 24,
									lineHeight: 1,
								},
							}}
						>
							Understanding investments
						</Text>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default Section3;
