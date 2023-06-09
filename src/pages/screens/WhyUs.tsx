import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box, IconButton } from "@mui/material";
import ReactECharts from "echarts-for-react";

const WhyUs = () => {
	const outerData = [
		{ value: 60, name: "Hits" },
		{ value: 10, name: "Miss" },
	];

	const innerData = [
		{ value: 10, name: "Miss" },
		{ value: 60, name: "" },
	];

	const options = {
		//   title: {
		// 	text: "Call History",
		// 	x: "center",
		//   },
		//   tooltip: {
		// 	trigger: "item",
		//   },
		//   legend: {
		// 	orient: "vertical",
		// 	left: "left",
		// 	data: ["Outer", "Inner"],
		//   },
		series: [
			{
				name: "Hits",
				type: "pie",
				radius: ["50%", "65%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderWidth: 0, // Remove border
					borderRadius: 20,
					color: "#125a54",
					// background:
				},
				label: {
					show: false,
					position: "center",
				},
				emphasis: {
					label: {
						show: false,
						fontSize: "20",
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: outerData.map((item) => ({
					...item,
					itemStyle: {
						color: item.name === "Miss" ? "rgba(255, 255, 255, 0.5)" : null,
					},
					label: {
						show: true,
						position: "center",
						formatter: item.name === "Hits" ? "{d}%" : "",
						textStyle: {
							fontSize: 20,
							fontWeight: "bold",
							color: "#125a54", // Set the color of the percentage text
						},
					},
				})),
			},
			{
				name: "Miss",
				type: "pie",
				radius: ["35%", "47%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderWidth: 0, // Remove border
					borderRadius: 20,
					color: "#ffa12e",
				},
				label: {
					show: false,
					position: "center",
				},
				emphasis: {
					label: {
						show: false,
						fontSize: "14",
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: innerData.map((item) => ({
					...item,
					itemStyle: {
						color: item.name === "" ? "rgba(255,255,255, 0.5)" : null,
					},
				})),
			},
		],
	};

	return (
		<section
			id="whyUs"
			style={{
				width: "100%",
				// height: "800px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				background: "#fff",
			}}
		>
			<Box
				sx={{
					maxWidth: "2000px",
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					alignItems: "center",
					paddingTop: "20px",
					paddingBottom: "10px",
					paddingLeft: "10px",
					paddingRight: "10px",
					backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
					// borderBottomLeftRadius: "20px",
					// borderBottomRightRadius: "20px",
					borderRadius: "30px",
					"@media only screen and (max-width: 764px)": {
						width: "95%",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						// marginBottom: "10px",
						gap: "50px",
						alignItems: "center",
						"@media only screen and (max-width: 764px)": {
							gap: "30px",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								lineHeight: 1,
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 16,
								},
							}}
						>
							Avg. Return Rate
						</Text>
						<Text
							b
							size={45}
							css={{
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 30,
								},
							}}
						>
							20%
						</Text>
					</Box>
					<Divider
						css={{
							borderLeft: "6px solid black",
							height: "30px",
							width: "6px",
							background: "transparent",
							opacity: 0.6,
							borderRadius: "20px",
						}}
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								lineHeight: 1,
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 16,
								},
							}}
						>
							Avg. Days Taken
						</Text>
						<Text
							b
							size={45}
							css={{
								opacity: 0.75,
								"@media only screen and (max-width: 764px)": {
									fontSize: 30,
								},
							}}
						>
							200
						</Text>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						height: "200px",
						width: "100%",
						borderBottomLeftRadius: "20px",
						borderBottomRightRadius: "20px",
						padding: "10px 30px",
						// paddingLeft: "30px",
						// paddingRight: "30px",
						background: "#fff",
						alignItems: "center",
						"@media only screen and (max-width: 764px)": {
							height: '180px',
							paddingLeft: "10px",
							paddingRight: "10px",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 764px)": {
									fontSize: 16
								},
							}}
						>
							Hits
						</Text>
						<Divider
							css={{
								height: "8px",
								width: "45px",
								borderRadius: "20px",
								background: "#125a54",
								"@media only screen and (max-width: 764px)": {
									width: "30px",
									height: "4px",
								},
							}}
						/>
						<Text b size={30} css={{ lineHeight: 1, mt: "10px" }}>
							60
						</Text>
						<Text b size={12} css={{ lineHeight: 1.5 }}>
							of
						</Text>
						<Text b size={24} css={{ lineHeight: 1 }}>
							70
						</Text>
					</Box>
					{/* <Box
						sx={{
							display: 'flex',

							height: "200px",
							width: "250px",
							"@media only screen and (max-width: 764px)": {
								width: '150px',
								height: '200px',
							},
						}}
					> */}
					<ReactECharts
						option={options}
						style={{
							width: "100%",
							height: "100%",
							maxWidth: "500px",
							background: "#fff",
							margin: "0 auto",
						}}
					/>
					{/* </Box> */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Text
							b
							size={20}
							css={{
								"@media only screen and (max-width: 764px)": {
									fontSize: 16,
								},
							}}
						>
							Misses
						</Text>
						<Divider
							css={{
								height: "8px",
								width: "45px",
								borderRadius: "20px",
								background: "#ffa12e",
								"@media only screen and (max-width: 764px)": {
									width: "30px",
									height: "4px",
								},
							}}
						/>
						<Text
							b
							size={30}
							css={{
								lineHeight: 1,
								mt: "10px",
								// "@media only screen and (max-width: 764px)": {
								// 	fontSize: 26
								// },
							}}
						>
							10
						</Text>
						<Text b size={12} css={{ lineHeight: 1.5 }}>
							of
						</Text>
						<Text b size={24} css={{ lineHeight: 1 }}>
							70
						</Text>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default WhyUs;
