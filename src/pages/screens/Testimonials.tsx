import React, { useEffect, useRef } from "react";
import { Box, Avatar } from "@mui/material";
import { Text } from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {

	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
	  const { current } = scrollRef;
	  if (current) {
		current.scrollTo({ left: 0, behavior: "smooth" });
	  }
	}, []);

	return (
		<section
			style={{
				backgroundColor: "#fff",
				paddingTop: 100,
				paddingBottom: 50,
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				alignContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexWrap: "nowrap",
					maxWidth: "2000px",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div style={{ maxWidth: "1300px", textAlign: 'center', marginBottom: '50px' }}>
					<Text
						b
						size={60}
						css={{
							"@media only screen and (max-width: 600px)": {
								fontSize: 32,
								width: "380px",
								display: 'flex',
								justifyContent: 'center',
								flexWrap: 'wrap',
							},
							"@media only screen and (max-width: 768px)": {
								fontSize: 42,
								width: "100%",
								display: 'flex',
								alignContent: 'center',
								justifyContent: 'center',
								flexWrap: 'wrap',
							},
						}}
					>
						Satisfied Customers Are Our Best Ads
					</Text>
				</div>
				<div
					style={{
						
						display: "flex",
						flexWrap: "nowrap",
						// overflowX: "auto",
						whiteSpace: "nowrap",
						marginBottom: 50,
						width: '1300px',
						height: '300px'
						
					}}
					ref={scrollRef}
					className="scroll-box"
				>
					{[...Array(20)].map((_, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								minWidth: 400,
								maxWidth: 500,
								marginRight: 5,
								height: 250,
								mt: 5
							}}
						>
							<FaQuoteLeft color="#0f734d" size={30} />
							<Text b size={28} css={{ maxWidth: '400px', whiteSpace: 'normal'}}>
								“Thanks to KamayaKya I can now Invest with Zero Stress and i
								recommend it to you”
							</Text>
							<FaQuoteRight
								color="#0f734d"
								size={30}
								style={{ marginTop: 0, marginRight: 20, alignSelf: "end" }}
							/>
							<div
								style={{
									marginTop: -10,
									display: "flex",
									flexDirection: "row",
									gap: 10,
									alignItems: "center",
								}}
							>
								<Avatar
									src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
									sx={{ width: 30, height: 30 }}
								/>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Text b size={22} color="#888888" css={{ lineHeight: 1.2 }}>
										Wade Warren
									</Text>
								</div>
							</div>
						</Box>
					))}
				</div>

				{/* <div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: 'wrap',
						gap: 50,
						width: "75%",
						marginTop: 50,
						overflowX: 'scroll'
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "column", width: "30%",  }}>
						<FaQuoteLeft color="#0f734d" size={30} />
						<Text b size={28}>
							“Thanks to KamayaKya I can now Invest with Zero Stress and i
							recommend it to you”
						</Text>
						<FaQuoteRight
							color="#0f734d"
							size={30}
							style={{ marginTop: 10, marginRight: 10, alignSelf: "end" }}
						/>
						<div
							style={{
								marginTop: -10,
								display: "flex",
								flexDirection: "row",
								gap: 10,
								alignItems: "center",
							}}
						>
							<Avatar
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
								sx={{ width: 30, height: 30 }}
							/>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<Text b size={22} color="#888888" css={{ lineHeight: 1.2 }}>
									Wade Warren
								</Text>
							</div>
						</div>
					</Box>
					
					<Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
						<FaQuoteLeft color="#0f734d" size={30} />
						<Text b size={28}>
							“Thanks to KamayaKya I can now Invest with Zero Stress and i
							recommend it to you”
						</Text>
						<FaQuoteRight
							color="#0f734d"
							size={30}
							style={{ marginTop: 10, marginRight: 10, alignSelf: "end" }}
						/>
						<div
							style={{
								marginTop: -10,
								display: "flex",
								flexDirection: "row",
								gap: 10,
								alignItems: "center",
							}}
						>
							<Avatar
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
								sx={{ width: 30, height: 30 }}
							/>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<Text b size={22} color="#888888" css={{ lineHeight: 1.2 }}>
									Wade Warren
								</Text>
							</div>
						</div>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
						<FaQuoteLeft color="#0f734d" size={30} />
						<Text b size={28}>
							“Thanks to KamayaKya I can now Invest with Zero Stress and i
							recommend it to you”
						</Text>
						<FaQuoteRight
							color="#0f734d"
							size={30}
							style={{ marginTop: 10, marginRight: 10, alignSelf: "end" }}
						/>
						<div
							style={{
								marginTop: -10,
								display: "flex",
								flexDirection: "row",
								gap: 10,
								alignItems: "center",
							}}
						>
							<Avatar
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
								sx={{ width: 30, height: 30 }}
							/>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<Text b size={22} color="#888888" css={{ lineHeight: 1.2 }}>
									Wade Warren
								</Text>
							</div>
						</div>
					</Box>
				</div> */}
			</div>
		</section>
	);
};

export default Testimonials;
