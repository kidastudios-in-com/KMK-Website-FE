import { Text } from "@nextui-org/react";
import React from "react";

const Section2 = () => {
	return (
		<section
			style={{
				width: "100%",
				backgroundColor: "#fff",
				paddingTop: "50px",
				paddingBottom: '60px',
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "100%",
					maxWidth: "1400px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					margin: "0 auto",
					padding: "0 30px",
				}}
			>
				<Text
					b
					size={60}
					css={{
						"@media only screen and (max-width: 600px)": {
							textAlign: "center",
							fontSize: 52,
							lineHeight: 1,
							paddingBottom: "10px",
						},
					}}
				>
					Meet The Team
				</Text>
				<Text
					b
					size={25}
					css={{
						textAlign: "center",
						"@media only screen and (max-width: 600px)": {
							textAlign: "center",
							fontSize: 17.5,
							lineHeight: 1.1,
						},
					}}
				>
					KamayaKya was born when we saw a major opportunity in the market - the Small-Cap segment. If invested at the right time, these companies can give you massive returns. But how do you know which company will grow?
					Data-driven Research
				</Text>
				<div
					style={{
						marginTop: 60,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						// width: '1300px',
						maxWidth: "1400px",
						justifyContent: "center",
						gap: 30,
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "40px",
							maxWidth: "300px",
							alignItems: "center",
						}}
					>
						<img
							src="/kmk-profile1.jpeg"
							alt="DhirenS"
							width="100%"
							style={{ maxWidth: "800px", height: "400px" }}
						/>
						<Text b size={26} css={{ marginTop: 10 }}>
							Dhiren Shah
						</Text>
						<Text b size={18} css={{ lineHeight: 1 }}>
							Director and Co-Founder
						</Text>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "80px",
							maxWidth: "300px",
							alignItems: "center",
						}}
					>
						<img
							src="/kmk-profile2.jpeg"
							alt="AnandS"
							width="100%"
							style={{ maxWidth: "800px", height: "400px" }}
						/>
						<Text b size={26} css={{ marginTop: 10 }}>
							Nitya Shah
						</Text>
						<Text b size={18} css={{ lineHeight: 1 }}>
							Director and Co-Founder
						</Text>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "40px",
							maxWidth: "300px",
							alignItems: "center",
						}}
					>
						<img
							src="/kmk-profile3.jpeg"
							alt="NityaS"
							width="100%"
							style={{ maxWidth: "800px", height: "400px" }}
						/>
						<Text b size={26} css={{ marginTop: 10 }}>
							Aniket Kulkarni
						</Text>
						<Text b size={18} css={{ lineHeight: 1 }}>
							Director and Co-Founder
						</Text>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginBottom: "40px",
							maxWidth: "300px",
							alignItems: "center",
						}}
					>
						<img
							src="/kmk-profile4.jpeg"
							alt="AniketK"
							width="100%"
							style={{ maxWidth: "800px", height: "400px" }}
						/>
						<Text b size={26} css={{ marginTop: 10 }}>
							Tushar Raghatate
						</Text>
						<Text b size={18} css={{ lineHeight: 1 }}>
							Equity Research Analyst
						</Text>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
