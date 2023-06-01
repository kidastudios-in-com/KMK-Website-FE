import React, { useState, useEffect } from "react";
import { Button, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar2 = () => {
	const router = useRouter();

	const handleAboutUs = () => {
		router.push("/about-company");
	};

	const handleStockPicks = () => {
		router.push("/stock-picks");
	};

	const handleTrack = () => {
		router.push("/track-record");
	};
	const handleHome = () => {
		router.push("/");
	};

	const handleBlog = () => {
		router.push("/blogs-page");
	};

	const handleLogoutClick = () => {
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
		router.push("/");
	};

	const handleLogoClick = () => {
		router.push("/");
	};

	return (
		// <Container>
		<Navbar
			variant={"static"}
			maxWidth={"fluid"}
			disableShadow={true}
			height={100}
			css={{
				backgroundColor: '#fff',
				marginTop: 0,
				zIndex: 1,
				$$navbarBackgroundColor: "#fff",
				$$navbarBlurBackgroundColor: "none",
				".nextui-navbar-container": {
					backgroundColor: '#fff',
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
					w: "350px",
					zIndex: 99,
					"@media only screen and (max-width: 600px)": {
						// w: "195px",
						// h: '55px',
						h: "60px",
						w: "122%",
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
					width="220px"
					height="60px"
					// height="100%"
				/>
			</Navbar.Brand>
			{/* <Navbar.Toggle showIn={'xs'} /> */}
			<Navbar.Toggle showIn="md" css={{ position: "fixed", right: "20px" }}>
				<RxHamburgerMenu size={26} />
			</Navbar.Toggle>
			<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
				<Navbar.Content
					activeColor="warning"
					hideIn="xs"
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
			<Navbar.Content hideIn="xs">
				<Navbar.Item>
					{typeof window !== "undefined" && window.location.pathname === "/track-record" ? (
						<Button
							onPress={handleStockPicks}
							auto
							flat
							css={{ backgroundColor: "#ff9f24", color: "white" }}
						>
							Our Stock Picks
						</Button>
					) : (
						<Button
							onPress={handleTrack}
							auto
							flat
							css={{ backgroundColor: "#ff9f24", color: "white" }}
						>
							Track Record
						</Button>
					)}
				</Navbar.Item>
				<Navbar.Item>
					<Button
						auto
						onPress={handleLogoutClick}
						css={{ backgroundColor: "#0a5b53" }}
					>
						Logout
					</Button>
				</Navbar.Item>
			</Navbar.Content>

			<Navbar.Collapse>
				<Navbar.CollapseItem onClick={handleTrack}>Track Record</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleStockPicks}>Stock Picks</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleHome}>Home</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleAboutUs}>About Us</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleBlog}>Blogs</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleLogoutClick}>
					Subscribe
				</Navbar.CollapseItem>
			</Navbar.Collapse>
		</Navbar>
		// </Container>
	);
};

export default NavBar2;
