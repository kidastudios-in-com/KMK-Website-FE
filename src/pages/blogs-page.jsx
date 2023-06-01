import React from "react";
import BSection1 from "./BlogsPages/BSection1";
import BSection2 from './BlogsPages/BSection2';
import NavBar from "../components/Navbar";
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';

const BlogsPage = () => {
	return (
		<div>
			<NavBar />
			<BSection1 />
			<BSection2 />
			<FaqsNew />
			<FAQs />
		</div>
	);
};

export default BlogsPage;
