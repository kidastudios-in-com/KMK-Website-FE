import type { NextPage } from "next";
import React, { useState, useEffect, useContext } from "react";
import NavBar from "@/components/Navbar";
import HomePage from "./screens/HomePage";
// import AboutUs from "./screens/AboutUs";
import WhyUs from "./screens/WhyUs";
// import Solutions from "./screens/Solutions";
import Blogs from "./screens/Blogs";
// import Blogs2 from "./screens/blogs2";
import FAQs from "./screens/FAQs";
// import Process from "./screens/Process";
import FaqsNew from "./screens/FaqsNew";
// import Process2 from "./screens/Process2";
import Testimonials from "./screens/Testimonials";
import SubscriptionNew from "../components/SubscriptionNew";
// import Script from "next/script";
import NavBar2 from "@/components/Navbar2";
import AuthProvider from "@/components/AuthContext";

const Home: NextPage = () => {
	const { isLoggedIn } = useContext(AuthProvider);

	return (
		<>
			{/* <script id="google-analytics" data-nscript="afterInteractive">
          window.dataLayer = window.dataLayer || [];
          function gtag(){typeof window !== 'undefined' && window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PBMR9CBK3J');
        </script> */}
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			{/* <AuthProvider> */}
			<HomePage />
			<Blogs />
			<SubscriptionNew />
			{/* <AboutUs /> */}
			{/* <Process /> */}
			{/* <Process2/> */}
			<WhyUs />
			{/* <Blogs2 /> */}
			<Testimonials />
			{/* <Solutions /> */}
			<FaqsNew />
			<FAQs />
			{/* <Footer /> */}
			{/* </AuthProvider> */}
		</>
	);
};

export default Home;
