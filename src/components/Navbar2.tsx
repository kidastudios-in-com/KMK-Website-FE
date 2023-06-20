import React, { useState } from "react";
import { Avatar, Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import {
	IconButton,
	Box,
	List,
	ListItemText,
	ListItemButton,
	useMediaQuery,
	SwipeableDrawer,
} from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import CloseIcon from "@mui/icons-material/Close";

const NavBar2 = () => {
	const isMobile = useMediaQuery("(max-width:1280px)");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const router = useRouter();

	const handleStockPicks = () => {
		router.push("/stock-picks");
	};

	const handleTrack = () => {
		router.push("/track-record");
	};

	const handleSettings = () => {
		router.push("/user-profile");
	};

	const handleLogoutClick = () => {
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
		router.push("/");
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
					// ".nextui-c-dGYPDG": { height: "0%" },
					// ".nextui-c-hhqfap-idKuEpT-css .nextui-c-dGYPDG": {
					// 	 height: "100%",
					// },
					"@media only screen and (max-width: 672px)": {
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
			{/* <div style={{ display: "flex", justifyContent: "center", width: "100%" }}> */}
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
			{/* </div> */}
			<Navbar.Content hideIn={'sm'}>
				<Navbar.Item hideIn="md">
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
						<Dropdown.Item key="handleHome">Home</Dropdown.Item>
						<Dropdown.Item key="handleAboutUs">About Us</Dropdown.Item>
						<Dropdown.Item key="handleBlog">Blogs</Dropdown.Item>
						<Dropdown.Item key="handleTrack">Track Record</Dropdown.Item>
						<Dropdown.Item key="handleStockPicks">Stock Picks</Dropdown.Item>
						<Dropdown.Item key="settings" withDivider>
							Settings
						</Dropdown.Item>
						<Dropdown.Item key="handleLogoutClick" withDivider color="error">
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>

			{/* <Navbar.Collapse>
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
			</Navbar.Collapse> */}

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
							sx={{ justifyContent: 'end'}}
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
								handleLogoutClick();
								toggleDrawer();
							}}
						>
							<ListItemText primary="Login" />
						</ListItemButton>
					</List>
				</SwipeableDrawer>
		</Navbar>
		// </Container>
	);
};

export default NavBar2;
