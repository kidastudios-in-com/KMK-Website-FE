import React, { useContext } from "react";
import BSection1 from "./BlogsPages/BSection1";
import BSection2 from './BlogsPages/BSection2';
import NavBar from "../components/Navbar";
import NavBar2 from "../components/Navbar2";
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';
import AuthContext from "../components/AuthContext";

const BlogsPage = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<div>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			{/*<BSection1 />*/}
			<BSection2 />
			<FaqsNew />
			<FAQs />
		</div>
	);
};

export default BlogsPage;
