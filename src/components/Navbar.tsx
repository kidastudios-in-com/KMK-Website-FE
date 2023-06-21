import { Navbar, Link, Text, Button, Modal } from "@nextui-org/react";
import {
	IconButton,
	Box,
	List,
	ListItemText,
	ListItemButton,
	useMediaQuery,
	SwipeableDrawer,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import Login from "./Login";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
	const [activeLink, setActiveLink] = useState("home");

	const isMobile = useMediaQuery("(max-width:1280px)");

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

	const trackRecord = () => {
		router.push("/track-record");
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

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<>
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
					// ".nextui-c-hhqfap-idKuEpT-css .nextui-c-dGYPDG": {
					// 	 height: "100%",
					// },
					"@media only screen and (max-width: 764px)": {
						// w: "195px",
						height: "80px",
						// left: 15,
					},
				}}
			>
				<Navbar.Brand
					css={{
						// w: "350px",
						zIndex: 99,
						"@media only screen and (max-width: 764px)": {
							// w: "195px",
							// h: '55px',
							h: "50px",
							// w: "122%",
							left: 15,
						},
						// position: "fixed",
					}}
				>
					<img
						onClick={() => handleHome()}
						// src={
						// 	activeLink === "whyUs"
						// 		? "./kamayakya-logo-white.png"
						// 		: "./kmk-logo.png"
						// }
						src="./kmk-logo (1).png"
						alt="logo"
						// width="220px"
						// height="60px"
						// height="100%"
						className="logoNavbar"
					/>
				</Navbar.Brand>
				{/* <Navbar.Toggle
					aria-label="toggle navigation"
					showIn="md"
					// className="modal-open"
					css={{
						// zIndex: 9999,
						height: "100vh",
						position: "fixed",
						right: "20px",
						// boxSizing: 'unset',
					}}
					// onClick={toggleMenu}
				>
					<RxHamburgerMenu size={24} />
				</Navbar.Toggle> */}
				{isMobile && (
					<IconButton
						aria-label="toggle navigation"
						onClick={toggleDrawer}
						sx={{
							position: "fixed",
							top: "20px",
							right: "20px",
							zIndex: 9999,
						}}
					>
						<RxHamburgerMenu size={24} />
					</IconButton>
				)}
				<SwipeableDrawer
					anchor="right"
					open={isDrawerOpen}
					onOpen={() => setIsDrawerOpen(true)}
					onClose={toggleDrawer}
					sx={{
						width: "100vw",
						maxWidth: "100%",
						"& .MuiDrawer-paper": {
							width: "100vw",
							maxWidth: "100%",
						},
					}}
				>
					<List>
						<ListItemButton
							onClick={() => {
								toggleDrawer();
							}}
							sx={{ justifyContent: "end" }}
						>
							<CloseIcon />
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								handleHome();
								toggleDrawer();
							}}
						>
							<ListItemText primary="Home" />
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								handleAboutUs();
								toggleDrawer();
							}}
						>
							<ListItemText primary="About Us" />
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								handleBlog();
								toggleDrawer();
							}}
						>
							<ListItemText primary="Blogs" />
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								trackRecord();
								toggleDrawer();
							}}
						>
							<ListItemText primary="Track Record" />
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								ourStockPicks();
								toggleDrawer();
							}}
						>
							<ListItemText primary="Our Stock Picks" />
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								handleLogin();
								toggleDrawer();
							}}
						>
							<ListItemText primary="Login" />
						</ListItemButton>
					</List>
				</SwipeableDrawer>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						marginLeft: "-16%",
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
							onClick={handleAboutUs}
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
							onClick={handleBlog}
						>
							<Text b size={20} css={{ lineHeight: 5 }}>
								Blogs
							</Text>
						</Navbar.Link>
						<Navbar.Link
							// isActive={activeLink === "blogs"}
							isActive={
								typeof window !== "undefined" &&
								window.location.pathname === "/track-record"
							}
							onClick={trackRecord}
						>
							<Text b size={20} css={{ lineHeight: 5 }}>
								Track Record
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
					<Modal
						// width="30vw"
						open={showModal}
						onClose={handleCloseModal}
						css={{
							marginLeft: "2.5vw",
							"@media only screen and (max-width: 764px)": {
								width: "95vw",
							},
						}}
					>
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
				{/* <Navbar.Collapse css={{ position: "fixed" }}>
					<Navbar.CollapseItem onClick={handleHome}>Home</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={handleAboutUs}>
						About Us
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={handleBlog}>Blogs</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={ourStockPicks}>
						Stock Picks
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={trackRecord}>
						Track Record
					</Navbar.CollapseItem>
					<Navbar.CollapseItem onClick={handleLoginClick}>
						Login
					</Navbar.CollapseItem>
				</Navbar.Collapse> */}
			</Navbar>
			{/* </div> */}
		</>
	);
}
