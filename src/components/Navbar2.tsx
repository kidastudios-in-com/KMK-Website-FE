import React, { useEffect, useState } from "react";
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
	ListItemIcon,
} from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import CloseIcon from "@mui/icons-material/Close";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Book, Home2 } from "iconsax-react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";
import { BiLogIn } from "react-icons/bi";

const NavBar2 = () => {
	// const isMobile = useMediaQuery("(max-width:940px)");
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
		// if(window.location.pathname === "/") {
		// window.location.reload();
		// }
		// else{
		router.push("/");
		// }
	};

	const ourStockPicks = () => {
		router.push("/stock-picks");
	};

	const trackRecord = () => {
		router.push("/track-record");
	};
	const smeCorner = () => {
		router.push("/sme");
	};

	const handlePricing = () => {
		scrolltoHash("pricing");
	};

	const handlePhilosophy = () => {
		scrolltoHash("philosophy");
	};

	// const handleAboutUs = () => {
	//   router.push("/about-company");
	// };

	const handleHome = () => {
		router.push("/");
	};

	// const handleBlog = () => {
	//   router.push("/blogs-page");
	// };

	const handleMenuAction = (actionKey: React.Key) => {
		switch (actionKey) {
			case "handleHome":
				handleHome();
				break;
			case "handlePricing":
				handlePricing();
				break;
			case "handleAboutUs":
				handlePhilosophy();
				break;
			// case "handleAboutUs":
			//   handleAboutUs();
			//   break;
			// case "handleBlog":
			//   handleBlog();
			//   break;
			case "handleSMECorner":
				smeCorner();
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

	const [activeLink, setActiveLink] = useState("home");

	const scrolltoHash = function (element_id: string) {
		const element = document.getElementById(element_id);

		if (window.location.pathname !== "/" && element_id === "philosophy") {
			router.push("/#philosophy");
		} else if (window.location.pathname !== "/" && element_id === "pricing") {
			// Redirect to home page
			router.push("/#pricing");
		} else if (window.location.pathname !== "/" && element_id === "home") {
			// Redirect to home page
			router.push("/");
		} else {
			element?.scrollIntoView({ behavior: "smooth" });
		}
	};

	function updateActiveLink() {
		const sections = document.querySelectorAll("section[id]");

		// Check if there are sections with id attribute
		if (sections.length === 0) {
			return;
		}

		let closestSection = sections[0];
		let shortestDistance = Math.abs(sections[0].getBoundingClientRect().top);

		sections.forEach((section) => {
			const distance = Math.abs(section.getBoundingClientRect().top);
			if (distance < shortestDistance) {
				shortestDistance = distance;
				closestSection = section;
			}
		});

		const activeLinkId = closestSection.getAttribute("id");
		if (window.location.pathname === "/") {
			setActiveLink(activeLinkId || "");
		} else {
			setActiveLink("");
		}
	}

	// Attach scroll event listener to window
	window.addEventListener("scroll", updateActiveLink);

	useEffect(() => {
		updateActiveLink();
	}, []);

	return (
		// <Container>
		<Navbar
			// variant="static"
			variant={"sticky"}
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
				"@media only screen and (max-width: 764px)": {
					height: "80px",
				},
			}}
		>
			<Navbar.Brand
				css={{
					cursor: "pointer",
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
					// onClick={() => handleHome()}
					onClick={() => scrolltoHash("home")}
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
			<Navbar.Content
				activeColor="warning"
				hideIn="md"
				variant="underline-rounded"
			>
				<Navbar.Link
					// isActive={
					// 	typeof window !== "undefined" && window.location.pathname === "/"
					// }
					// onClick={() => handleHome()}
					isActive={typeof window !== "undefined" && activeLink === "home"}
					onClick={() => scrolltoHash("home")}
				>
					<Text b size={16} css={{ lineHeight: 5 }}>
						Home
					</Text>
				</Navbar.Link>
				<Navbar.Link
					// isActive={
					// 	typeof window !== "undefined" &&
					// 	window.location.pathname === "/about-company"
					// }
					// onClick={() => handlePhilosophy()}
					isActive={
						typeof window !== "undefined" && activeLink === "philosophy"
					}
					onClick={() => scrolltoHash("philosophy")}
				>
					<Text b size={16} css={{ lineHeight: 5 }}>
						About Us
					</Text>
				</Navbar.Link>
				<Navbar.Link
					// isActive={
					// 	typeof window !== "undefined" &&
					// 	window.location.pathname === "/about-company"
					// }
					// onClick={() => handlePhilosophy()}
					isActive={typeof window !== "undefined" && activeLink === "pricing"}
					onClick={() => scrolltoHash("pricing")}
				>
					<Text b size={16} css={{ lineHeight: 5 }}>
						Pricing
					</Text>
				</Navbar.Link>
				{/* <Navbar.Link
					isActive={
						typeof window !== "undefined" &&
						window.location.pathname === "/blogs-page"
					}
					onClick={() => handleBlog()}
				>
					<Text b size={16} css={{ lineHeight: 5 }}>
						Blogs
					</Text>
				</Navbar.Link> */}

				<Navbar.Link
					// isActive={
					// 	typeof window !== "undefined" &&
					// 	window.location.pathname === "/track-record"
					// }
					onClick={() => {
						trackRecord();
						// toggleDrawer();
					}}
				>
					{/* <Text b size={16} css={{ lineHeight: 5 }}> */}
					<Box
						sx={{
							border: "2px solid #094f48",
							borderRadius: "1000px",
							padding: "0px 8px",
							lineHeight: 2,
							background:
								window.location.pathname === "/track-record"
									? "#094f48"
									: "#fff",
							color:
								window.location.pathname === "/track-record" ? "#fff" : "#000",
						}}
					>
						Track Record
					</Box>
					{/* </Text> */}
				</Navbar.Link>
				<Navbar.Link
					// isActive={
					//   typeof window !== "undefined" && window.location.pathname === "/sme"
					// }
					onClick={smeCorner}
				>
					<Box
						sx={{
							border: "2px solid #094f48",
							borderRadius: "1000px",
							padding: "0px 8px",
							lineHeight: 2,
							display: "flex",
							alignItems: "center",
							background:
								window.location.pathname === "/sme" ? "#094f48" : "#fff",
							color: window.location.pathname === "/sme" ? "#fff" : "#000",
						}}
					>
						<TrendingUpRoundedIcon sx={{ fontSize: 30, color: "#FB9E29" }} />
						{/* <Text b size={16} css={{ lineHeight: 5, paddingLeft: "5px" }}> */}
						SME Corner
						{/* </Text> */}
					</Box>
				</Navbar.Link>
			</Navbar.Content>
			{/* </div> */}
			<Navbar.Content hideIn={"md"}>
				<Navbar.Item hideIn="sm">
					{typeof window !== "undefined" &&
					window.location.pathname !== "/stock-picks" ? (
						<Button
							auto
							size={"lg"}
							color={"success"}
							onClick={ourStockPicks}
							css={{
								backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
								borderRadius: "10000px",
								fontSize: "large",
							}}
						>
							<span style={{ fontSize: 20 }}>Stocks To Buy</span>
						</Button>
					) : (
						<Button
							auto
							size={"lg"}
							color={"success"}
							onClick={handleTrack}
							css={{
								backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
								borderRadius: "10000px",
								fontSize: "large",
								opacity: "0",
								// display: "none",
							}}
						>
							<span style={{ fontSize: 20 }}>Track record</span>
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
								// bordered
								as="button"
								// color="warning"
								size="md"
								src="UserAvatar-lion.png"
								style={{
									border: "1.5px solid #6A7046",
									padding: "2.5px",
									backgroundColor: "white",
								}}
							/>
						</Dropdown.Trigger>
					</Navbar.Item>
					<Dropdown.Menu
						aria-label="User menu actions"
						color="success"
						onAction={(actionKey) => handleMenuAction(actionKey)}
					>
						<Dropdown.Item key="handleHome">Home</Dropdown.Item>
						<Dropdown.Item key="handleAboutUs">About us</Dropdown.Item>
						<Dropdown.Item key="handlePricing">Pricing</Dropdown.Item>
						{/* <Dropdown.Item key="handleBlog">Blogs</Dropdown.Item> */}
						<Dropdown.Item key="handleTrack">Track record</Dropdown.Item>
						<Dropdown.Item key="handleSMECorner">SME Corner</Dropdown.Item>
						<Dropdown.Item key="handleStockPicks">Stocks to buy</Dropdown.Item>
						<Dropdown.Item key="settings" withDivider>
							Profile
						</Dropdown.Item>
						{/* <Dropdown.Item key="purchase" withDivider color="warning">
							Subscribe
						</Dropdown.Item> */}
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
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<Home2 size={30} style={{ color: "#FB9E29" }} />
						</ListItemIcon>
						<Text b className="drawerElementText">
							Home
						</Text>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							// handleAboutUs();
							handlePhilosophy();
							toggleDrawer();
						}}
					>
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<GroupsOutlinedIcon
								sx={{ fontSize: 30 }}
								style={{ color: "#FB9E29" }}
							/>
						</ListItemIcon>
						<Text b className="drawerElementText">
							About Us
						</Text>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							// handleBlog();
							handlePricing();
							toggleDrawer();
						}}
					>
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<Book size={30} style={{ color: "#FB9E29" }} />
						</ListItemIcon>
						<Text b className="drawerElementText">
							Pricing
						</Text>
					</ListItemButton>
					{/* <ListItemButton
						onClick={() => {
							// handleBlog();
							toggleDrawer();
						}}
					>
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<Book size={30} style={{ color: "#FB9E29" }} />
						</ListItemIcon>
						<Text b className="drawerElementText">
							Blogs
						</Text>
					</ListItemButton> */}
					<ListItemButton
						onClick={() => {
							trackRecord();
							toggleDrawer();
						}}
					>
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<TrendingUpRoundedIcon
								sx={{ fontSize: 30 }}
								style={{ color: "#FB9E29" }}
							/>
						</ListItemIcon>
						<Text b className="drawerElementText">
							Track Record
						</Text>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							smeCorner();
							toggleDrawer();
						}}
					>
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<MoneyRoundedIcon
								sx={{ fontSize: 30 }}
								style={{ color: "#FB9E29" }}
							/>
						</ListItemIcon>
						<Text b className="drawerElementText">
							SME Corner
						</Text>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							ourStockPicks();
							toggleDrawer();
						}}
					>
						<ListItemIcon sx={{ paddingLeft: "4px" }}>
							<MoneyRoundedIcon
								sx={{ fontSize: 30 }}
								style={{ color: "#FB9E29" }}
							/>
						</ListItemIcon>
						<Text b className="drawerElementText">
							Stocks To Buy
						</Text>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							handleSettings();
							toggleDrawer();
						}}
					>
						<ListItemIcon>
							<BiLogIn size={30} style={{ color: "#FB9E29" }} />
						</ListItemIcon>
						<Text b className="drawerElementText">
							Profile
						</Text>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							handleLogoutClick();
							toggleDrawer();
						}}
					>
						<ListItemIcon>
							<BiLogIn size={30} style={{ color: "#FB9E29" }} />
						</ListItemIcon>
						<Text b className="drawerElementText">
							Logout
						</Text>
					</ListItemButton>
				</List>
			</SwipeableDrawer>
		</Navbar>
		// </Container>
	);
};

export default NavBar2;
