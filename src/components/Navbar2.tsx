import React from "react";
import { Avatar, Button, Dropdown, Navbar, Text } from "@nextui-org/react";
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

	const handleSettings = () => {
		router.push("/user-profile");
	}

	const handleLogoutClick = () => {
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
		router.push("/");
	};

	const handleMenuAction = (actionKey: React.Key) => {
		switch (actionKey) {
		  case "handleHome":
			handleHome();
			break;
		  case "handleAboutUs":
			handleAboutUs();
			break;
		  case "handleBlog":
			handleBlog();
			break;
		  case "handleTrack":
			handleTrack();
			break;
		  case "handleStockPicks":
			handleStockPicks();
			break;
		  case "settings":
			handleSettings();
			break;
		  case "handleLogoutClick":
			handleLogoutClick();
			break;
		  default:
			break;
		}
	  };

	return (
		// <Container>
		<Navbar
			variant={"static"}
			maxWidth={"fluid"}
			disableShadow={true}
			height={100}
			css={{
				backgroundColor: "#fff",
				marginTop: 0,
				zIndex: 1,
				$$navbarBackgroundColor: "#fff",
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
			{/* <Navbar.Toggle showIn="md" css={{ position: "fixed", right: "20px" }}>
				<RxHamburgerMenu size={26} />
			</Navbar.Toggle> */}
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
			<Navbar.Content>
				<Navbar.Item hideIn="xs">
					{typeof window !== "undefined" &&
					window.location.pathname !== "/stock-picks" ? (
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
				{/* <Navbar.Item>
					<Button
						auto
						onPress={handleLogoutClick}
						css={{ backgroundColor: "#0a5b53" }}
					>
						Logout
					</Button>
				</Navbar.Item> */}
				<Dropdown placement="bottom-right">
					<Navbar.Item>
						<Dropdown.Trigger>
							<Avatar
								//   bordered
								as="button"
								//   color="warning"
								size="md"
								src="UserAvatar.jpg"
							/>
						</Dropdown.Trigger>
					</Navbar.Item>
					<Dropdown.Menu
						aria-label="User menu actions"
						color="success"
						onAction={(actionKey) => handleMenuAction(actionKey)}
					>
						<Dropdown.Item key="handleHome">
							Home
						</Dropdown.Item>
						<Dropdown.Item key="handleAboutUs">
							About Us
						</Dropdown.Item>
						<Dropdown.Item key="handleBlog">
							Blogs
						</Dropdown.Item>
						<Dropdown.Item key="handleTrack">
							Track Record
						</Dropdown.Item>
						<Dropdown.Item key="handleStockPicks">
							Stock Picks
						</Dropdown.Item>
						<Dropdown.Item key="settings" withDivider>
							Settings
						</Dropdown.Item>
						<Dropdown.Item key="handleLogoutClick" withDivider color="error">
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>

			<Navbar.Collapse>
				<Navbar.CollapseItem onClick={handleTrack}>
					Track Record
				</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleStockPicks}>
					Stock Picks
				</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleHome}>Home</Navbar.CollapseItem>
				<Navbar.CollapseItem onClick={handleAboutUs}>
					About Us
				</Navbar.CollapseItem>
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