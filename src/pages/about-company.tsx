import React, { useContext } from "react";
import Section1 from "./AboutPages/Section1";
import Section2 from "./AboutPages/Section2";
import NavBar from "../components/Navbar";
import Section3 from "./AboutPages/Section3";
import FaqsNew from "./screens/FaqsNew";
import FAQs from "./screens/FAQs";
import NavBar2 from "@/components/Navbar2";
import AuthContext from "@/components/AuthContext";
import Section4 from "./AboutPages/Section4";

const AboutCompany = () => {
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<section id="aboutUs">
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			<Section2 />
			<Section1 />
			<Section3 />
			<Section4 />
			<FaqsNew />
			<FAQs />
		</section>
	);
};

export default AboutCompany;
