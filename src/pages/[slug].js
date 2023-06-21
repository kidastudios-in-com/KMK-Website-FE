import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_SPECIFIC_BLOG } from "./api/URLs";
import { Box } from "@mui/material";
import AuthContext from "../components/AuthContext";
import { useContext } from "react";
import NavBar2 from "../components/Navbar2";
import NavBar from "../components/Navbar";
import FaqsNew from "./screens/FaqsNew";
import Footer from "./screens/Footer";
import { Text } from "@nextui-org/react";

const BlogPage = () => {
	const router = useRouter();
	const { slug } = router.query;
	const [blog, setBlog] = useState(null);
	const { isLoggedIn } = useContext(AuthContext);

	useEffect(() => {
		const fetchBlogData = async () => {
			if (slug) {
				try {
					const refresh = localStorage.getItem("refresh");
					const response = await axios.get(`${GET_SPECIFIC_BLOG}${slug}`, {
						headers: {
							// Authorization: `Token ${refresh}`,
						},
					});
					setBlog(response.data);
				} catch (error) {
					console.error("Error fetching blog data:", error);
				}
			}
		};

		fetchBlogData();
	}, [slug]);

	if (!blog) {
		return (
			<Box
				sx={{
					backgroundColor: "#fff",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					maxWidth: "80rem",
					paddingTop: "10vh",
					paddingBottom: "10vh",
					margin: "0 auto",
					fontSize: 30,
				}}
			>
				Loading...
			</Box>
		);
	}

	return (
		<main style={{ backgroundColor: "#fff" }}>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			<Box
				sx={{
					backgroundColor: "#fff",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					maxWidth: "80rem",
					paddingTop: "10vh",
					paddingBottom: "10vh",
					margin: "0 auto",
				}}
			>
				<Text b size={50} css={{ marginBottom: "10px" }}>
					{blog.title}
				</Text>
				<Box
					sx={{
						width: "80%",
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "row",
					}}
				>
					<Text b size={20} css={{ lineHeight: 1, marginBottom: "20px" }}>
						{new Date(blog.created).toLocaleDateString()}
					</Text>
					<Text b size={20} css={{ lineHeight: 1, marginBottom: "10px" }}>
						Read Time: {blog.read_time} mins
					</Text>
				</Box>
				<Box sx={{ width: "100%" }}>
					<img
						src={blog.image1}
						alt="Blog 1"
						width={"100%"}
						height={"500px"}
						style={{
							objectFit: "cover",
							marginBottom: "15px",
							borderRadius: "20px",
						}}
					/>
				</Box>
				<p style={{ fontSize: 18 }}>{blog.description}</p>
			</Box>
			<FaqsNew />
			<Footer />
		</main>
	);
};

export default BlogPage;
