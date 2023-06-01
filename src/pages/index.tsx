import type { NextPage } from "next";
import React from "react";
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
// import Footer from "./screens/Footer";
import SubscriptionNew from "../components/SubscriptionNew";
// import Script from "next/script";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>KamayaKya</title>
			</Head>
			{/* <script id="google-analytics" data-nscript="afterInteractive">
          window.dataLayer = window.dataLayer || [];
          function gtag(){typeof window !== 'undefined' && window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PBMR9CBK3J');
        </script> */}
			<NavBar />
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
		</>
	);
};

export default Home;
