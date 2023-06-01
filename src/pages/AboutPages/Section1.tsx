import { Divider } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section1 = () => {
	return (
		<section
			style={{
				width: "100%",
				backgroundColor: "#fff",
				paddingTop: 100,
				paddingBottom: 100,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "1400px",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-between",
				}}
			>
				<div style={{ width: "40%", display: 'flex', flexDirection: 'column' }}>
					<Divider
						sx={{
							width: "20%",
							backgroundColor: "#ff9f24",
							height: 3,
							borderRadius: "200px",
						}}
					/>
					<Text b size={60}>
						Our Story
					</Text>
                    <Text b size={30}>
                        Why we started it 
                    </Text>
				</div>
				<div style={{ width: "60%" }}>
					<Text b size={28} css={{ lineHeight: 1.2 }}>
						KamayaKya focuses on the Small-Cap segment, which can yield huge
						returns if invested in the right companies. They provide data-driven
						research to recommend top-notch stocks in the SME, Micro-cap, and
						Small-Cap segment. They carefully select these stocks after
						analyzing factors such as cash flow, growth, management quality, and
						more. They do not use technical analysis but instead focus on
						fundamental triggers such as capacity expansion and favorable
						policies. KamayaKya provides concise and detailed reports in
						multiple languages, allowing you to do a background check before
						investing.
					</Text>
				</div>
			</div>
		</section>
	);
};

export default Section1;
