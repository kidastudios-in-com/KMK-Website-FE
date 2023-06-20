import React, { useContext } from "react";
import BSection1 from "./BlogsPages/BSection1";
import BSection2 from './BlogsPages/BSection2';
import NavBar from "../components/Navbar";
import NavBar2 from "../components/Navbar2";
import FaqsNew from './screens/FaqsNew';
import Footer from './screens/Footer';
import AuthContext from "../components/AuthContext";
import BlogSection2 from "./BlogsPages/BlogSection2";

const BlogsPage = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<div>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			{/*<BSection1 />*/}
			{/* <BSection2 /> */}
			<BlogSection2 />
			<FaqsNew />
			<Footer />
		</div>
	);
};

export default BlogsPage;
