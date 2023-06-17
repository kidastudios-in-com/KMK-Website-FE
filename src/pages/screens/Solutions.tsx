import React, { useRef } from "react";
import Slider from "react-slick";
import SliderRef from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Card, Text } from "@nextui-org/react";
import { IconButton } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import ReactStars from "react-stars";

const Solutions = () => {
	const sliderRef = useRef<SliderRef>(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2.5,
		slidesToScroll: 3,
	};

	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	return (
		<section
			id="solutions"
			style={{
				backgroundColor: "#fff",
				padding: "60px 30px"
			}}
		>
			<div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<Text b size={50} css={{ color: "#25262c" }}>
						What our users who have used it say
					</Text>
					<div>
						<IconButton
							onClick={handlePrev}
							size="large"
							sx={{
								backgroundColor: "#7c7d80",
								color: "white",
								marginRight: 2,
								marginTop: 4,
								marginBottom: 4,
								"&:hover": { backgroundColor: "#25262c" },
							}}
						>
							<AiOutlineLeft size={60} />
						</IconButton>
						<IconButton
							onClick={handleNext}
							size="large"
							sx={{
								backgroundColor: "#7c7d80",
								color: "white",
								marginRight: 5,
								marginTop: 4,
								marginBottom: 4,
								"&:hover": { backgroundColor: "#25262c" },
							}}
						>
							<AiOutlineRight size={60} />
						</IconButton>
					</div>
				</div>

				<Slider {...settings} ref={sliderRef}>
					<div>
						<Card
							variant="flat"
							isHoverable
							css={{
								padding: 20,
								width: "580px",
								height: 360,
								marginLeft: "30px",
								// marginRight: 90,
								marginBottom: 40,
								marginTop: 40,
								backgroundColor: "#ebeaf1",
							}}
						>
							<div style={{ marginTop: 10 }}>
								<Text b size={24}></Text>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: 5,
									}}
								>
									<Avatar
										src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
										alt="Avatar"
										style={{
											width: 95,
											height: 90,
											marginRight: 20,
											marginLeft: 20,
										}}
									/>
									<div>
										<Text b size={30}>
											{" "}
											Ramuel Smith{" "}
										</Text>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginTop: 5,
											}}
										>
											{/* <ReactStars
													count={5}
													value={5}
													size={24}
													color2="#f7c479"
													edit={false}
												/> */}
										</div>
									</div>
								</div>
								<div style={{ marginTop: 30, marginLeft: 20 }}>
									<Text size={30} color="#919192">
										You will target the unanimity with a clear division and
										target with a very clear set time
									</Text>
								</div>
							</div>
						</Card>
					</div>
					<div>
						<Card
							variant="flat"
							isHoverable
							css={{
								padding: 20,
								width: 580,
								height: 360,
								marginLeft: 30,
								marginBottom: 40,
								marginTop: 40,
								backgroundColor: "#ebeaf1",
							}}
						>
							<div style={{ marginTop: 10 }}>
								<Text b size={24}></Text>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: 5,
									}}
								>
									<Avatar
										src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
										alt="Avatar"
										style={{
											width: 95,
											height: 90,
											marginRight: 20,
											marginLeft: 20,
										}}
									/>
									<div>
										<Text b size={30}>
											{" "}
											Ramuel Smith{" "}
										</Text>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginTop: 5,
											}}
										>
											{/* <ReactStars
													count={5}
													value={5}
													size={24}
													color2="#f7c479"
													edit={false}
												/> */}
										</div>
									</div>
								</div>
								<div style={{ marginTop: 30, marginLeft: 20 }}>
									<Text size={30} color="#919192">
										You will target the unanimity with a clear division and
										target with a very clear set time
									</Text>
								</div>
							</div>
						</Card>
					</div>
					<div>
						<Card
							variant="flat"
							isHoverable
							css={{
								padding: 20,
								width: 580,
								height: 360,
								marginLeft: 30,
								marginBottom: 40,
								marginTop: 40,
								backgroundColor: "#ebeaf1",
							}}
						>
							<div style={{ marginTop: 10 }}>
								<Text b size={24}></Text>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: 5,
									}}
								>
									<Avatar
										src="https://i.pravatar.cc/150?u=a04258114e29026702d"
										alt="Avatar"
										style={{
											width: 95,
											height: 90,
											marginRight: 20,
											marginLeft: 20,
										}}
									/>
									<div>
										<Text b size={30}>
											{" "}
											Ramuel Smith{" "}
										</Text>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginTop: 5,
											}}
										>
											{/* <ReactStars
													count={5}
													value={5}
													size={24}
													color2="#f7c479"
													edit={false}
												/> */}
										</div>
									</div>
								</div>
								<div style={{ marginTop: 30, marginLeft: 20 }}>
									<Text size={30} color="#919192">
										You will target the unanimity with a clear division and
										target with a very clear set time
									</Text>
								</div>
							</div>
						</Card>
					</div>
					<div>
						<Card
							variant="flat"
							isHoverable
							css={{
								padding: 20,
								width: 580,
								height: 360,
								marginLeft: 30,
								marginBottom: 40,
								marginTop: 40,
								backgroundColor: "#ebeaf1",
							}}
						>
							<div style={{ marginTop: 10 }}>
								<Text b size={24}></Text>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: 5,
									}}
								>
									<Avatar
										src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
										alt="Avatar"
										style={{
											width: 95,
											height: 90,
											marginRight: 20,
											marginLeft: 20,
										}}
									/>
									<div>
										<Text b size={30}>
											{" "}
											Ramuel Smith{" "}
										</Text>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginTop: 5,
											}}
										>
											{/* <ReactStars
													count={4}
													value={4}
													size={24}
													color2="#f7c479"
													edit={false}
												/> */}
										</div>
									</div>
								</div>
								<div style={{ marginTop: 30, marginLeft: 20 }}>
									<Text size={30} color="#919192">
										You will target the unanimity with a clear division and
										target with a very clear set time
									</Text>
								</div>
							</div>
						</Card>
					</div>
					<div>
						<Card
							variant="flat"
							isHoverable
							css={{
								padding: 20,
								width: 580,
								height: 360,
								marginLeft: 30,
								marginBottom: 40,
								marginTop: 40,
								backgroundColor: "#ebeaf1",
							}}
						>
							<div style={{ marginTop: 10 }}>
								<Text b size={24}></Text>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: 5,
									}}
								>
									<Avatar
										src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
										alt="Avatar"
										style={{
											width: 95,
											height: 90,
											marginRight: 20,
											marginLeft: 20,
										}}
									/>
									<div>
										<Text b size={30}>
											{" "}
											Ramuel Smith{" "}
										</Text>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginTop: 5,
											}}
										>
											{/* <ReactStars
													count={5}
													value={5}
													size={24}
													color2="#f7c479"
													edit={false}
												/> */}
										</div>
									</div>
								</div>
								<div style={{ marginTop: 30, marginLeft: 20 }}>
									<Text size={30} color="#919192">
										You will target the unanimity with a clear division and
										target with a very clear set time
									</Text>
								</div>
							</div>
						</Card>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default Solutions;
