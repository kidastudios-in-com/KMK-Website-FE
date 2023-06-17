import { Navbar, Link, Text, Button, Modal } from "@nextui-org/react";
import { IconButton, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import Login from "./Login";
import CloseIcon from "@mui/icons-material/Close";
import { CloseSquare } from "iconsax-react";

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

	const [isOpen, setIsOpen] = useState(false);

	const handleToggleClick = () => {
		setIsOpen(!isOpen);
	  };

	const handleToggleClose = () => {
		setIsOpen(false);
	};

	return (
		
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
				"@media only screen and (max-width: 672px)": {
					// w: "195px",
					height: "80px",
					// left: 15,
				},
			}}
		>
			<Navbar.Brand
				css={{
					zIndex: 99,
					// width: "250px",
					height: "80px",
					"@media only screen and (max-width: 600px)": {
						// w: "195px",
						h: "80px",
						w: "auto",
					},
				}}
			>
				<img
					onClick={handleHome}
					src="./kmk-logo (1).png"
					alt="logo"
					style={{
						width: "auto",
						height: "70%",
					}}
				/>
			</Navbar.Brand>
			<Navbar.Toggle
				aria-label="toggle navigation"
				showIn="md"
				// className="modal-open"
				css={{
					position: "fixed",
					right: "20px",
				}}
				aria-pressed={isOpen}
				onClick={handleToggleClick}
			>
				<RxHamburgerMenu size={24} />
			</Navbar.Toggle>
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
				>
					<Navbar.Link
						// isActive={activeLink === "home"}
						isActive={
							typeof window !== "undefined" && window.location.pathname === "/"
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
				<Modal width="30%" open={showModal} onClose={handleCloseModal}>
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
				<Navbar.Collapse
					className={isOpen ? "my-navbar-collapse" : ""}
					css={{
						position: "fixed",
					}}
				>
					<Navbar.CollapseItem
						onClick={handleToggleClose}
						css={{ justifyContent: "end" }}
					>
						<CloseSquare />
					</Navbar.CollapseItem>
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
					<Navbar.CollapseItem onClick={handleLogin}>
						Login
					</Navbar.CollapseItem>
				</Navbar.Collapse>
			{/* ) : (
				''
			)} */}
		</Navbar>
		// {/* </div> */}
		// </>
	);
}
