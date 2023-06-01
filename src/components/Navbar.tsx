import { Navbar, Link, Text, Button, Modal } from "@nextui-org/react";
import { IconButton, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import Login from "./Login";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
	const [activeLink, setActiveLink] = useState("home");

	const router = useRouter();

	const [showModal, setShowModal] = useState(false);

	const handleLogin = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleLoginClick = () => {
		router.push("/login");
	};

	const ourStockPicks = () => {
		router.push("/stock-picks");
	};

	const handleAboutUs = () => {
		router.push("/about-company");
	};

	const handleHome = () => {
		router.push("/");
	};

	const handleBlog = () => {
		router.push("/blogs-page");
	};

	const handleLinkClick = (link: string) => {
		setActiveLink(link);
		const element = document.getElementById(link);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	const isScrolledIntoView = (element: HTMLElement) => {
		if (!element) return false;
		const rect = element.getBoundingClientRect();
		const elemTop = rect.top;
		const elemBottom = rect.bottom;
		const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		return isVisible;
	};

	useEffect(() => {
		const handleScroll = () => {
			const homeSection = document.getElementById("home");
			const aboutSection = document.getElementById("aboutUs");
			const whySection = document.getElementById("whyUs");
			const solutionsSection = document.getElementById("solutions");
			const blogsSection = document.getElementById("blogs");
			const faqsSection = document.getElementById("FAQs");

			if (homeSection && isScrolledIntoView(homeSection)) {
				setActiveLink("home");
			} else if (aboutSection && isScrolledIntoView(aboutSection)) {
				setActiveLink("aboutUs");
			} else if (whySection && isScrolledIntoView(whySection)) {
				setActiveLink("whyUs");
			} else if (solutionsSection && isScrolledIntoView(solutionsSection)) {
				setActiveLink("solutions");
			} else if (blogsSection && isScrolledIntoView(blogsSection)) {
				setActiveLink("blogs");
			} else if (faqsSection && isScrolledIntoView(faqsSection)) {
				setActiveLink("FAQs");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			style={{
				zIndex: 99,
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
				// maxWidth: "10000px",
			}}
		>
			<Navbar
				variant="static"
				maxWidth={"fluid"}
				disableShadow={true}
				height={100}
				css={{
					marginTop: 0,
					zIndex: 1,
					$$navbarBackgroundColor: "transparent",
					$$navbarBlurBackgroundColor: "none",
					".nextui-navbar-container": {
						backgroundColor: "#fff",
						backdropFilter: "none",
						boxShadow: "none",
						boxSizing: "content-box",
					},
					".nextui-c-hhqfap-kAwfsS-disableShadow-false": {
						boxShadow: "none",
					},
					".nextui-c-dGYPDG": { height: "0%" },
				}}
			>
				<Navbar.Brand
					css={{
						zIndex: 99,
						width: "250px",
						height: "60px",
						"@media only screen and (max-width: 600px)": {
							// w: "195px",
							h: "60px",
							w: "100%",
							left: 15,
						},
						// position: "fixed",
					}}
				>
					<img
						onClick={() => handleLinkClick("home")}
						src="./kmk-logo (1).png"
						alt="logo"
						width="220px"
						height="60px"
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					showIn="md"
					css={{
						position: "fixed",
						right: "20px",
						// "@media only screen and (min-width: 1000px)": {
						// 	display: "block",
						// },
					}}
				>
					<RxHamburgerMenu size={26} />
				</Navbar.Toggle>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						marginLeft: "-10%",
					}}
				>
					<Navbar.Content
						activeColor="warning"
						hideIn="md"
						variant="underline-rounded"
						// css={{
						// 	"@media only screen and (max-width: 1000px)": {
						// 		display: "none",
						// 	},
						// }}
					>
						<Navbar.Link
							// isActive={activeLink === "home"}
							isActive={
								typeof window !== "undefined" &&
								window.location.pathname === "/"
							}
							onClick={() => handleHome()}
						>
							<Text b size={20} css={{ lineHeight: 5 }}>
								Home
							</Text>
						</Navbar.Link>
						<Navbar.Link
							// isActive={activeLink === "aboutUs"}
							isActive={
								typeof window !== "undefined" &&
								window.location.pathname === "/about-company"
							}
							onClick={() => handleAboutUs()}
						>
							<Text b size={20} css={{ lineHeight: 5 }}>
								About Us
							</Text>
						</Navbar.Link>
						<Navbar.Link
							// isActive={activeLink === "blogs"}
							isActive={
								typeof window !== "undefined" &&
								window.location.pathname === "/blogs-page"
							}
							onClick={() => handleBlog()}
						>
							<Text b size={20} css={{ lineHeight: 5 }}>
								Blogs
							</Text>
						</Navbar.Link>
					</Navbar.Content>
				</div>
				<Navbar.Content
					hideIn={"md"}
					css={{
						"@xs": {
							w: "12%",
							jc: "flex-end",
						},
						position: "fixed",
						right: 20,
					}}
				>
					{router.pathname !== "/login" && (
						<Navbar.Item>
							<Button
								size={"md"}
								auto
								color={"warning"}
								// onPress={handleLoginClick}
								onPress={handleLogin}
								css={{ backgroundColor: "#ff9f24" }}
							>
								Login
							</Button>
						</Navbar.Item>
					)}
					<Modal width="1200px" open={showModal} onClose={handleCloseModal}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<img src="kmk-k.png" style={{ maxWidth: "260px" }} />
							<IconButton
								sx={{
									width: "40px",
									"&:hover": { background: "#fff" },
									// alignSelf: "end",
									right: "20px",
								}}
								onClick={() => handleCloseModal()}
							>
								<CloseIcon sx={{ color: "#e81123" }} />
							</IconButton>
						</Box>

						<Modal.Body>
							<Login />
						</Modal.Body>
					</Modal>
					<Navbar.Item>
						<Button
							auto
							size={"md"}
							color={"success"}
							onPress={ourStockPicks}
							css={{ backgroundColor: "#0a5b53" }}
						>
							Our Stock Picks
						</Button>
					</Navbar.Item>
				</Navbar.Content>
				<Navbar.Collapse css={{ position: "fixed" }}>
					<Navbar.CollapseItem onClick={() => handleHome()}>
						Home
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={() => handleAboutUs()}>
						About Us
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={() => handleBlog()}>
						Blogs
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={() => ourStockPicks()}>
						Stock Picks
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={() => handleLoginClick()}>
						Login
					</Navbar.CollapseItem>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
