import React from "react";
import UserDetails from "./UserDetails/UserDetails";
import NavBar2 from "@/components/Navbar2";
import FaqsNew from "./screens/FaqsNew";
import FAQs from "./screens/FAQs";

const UserProfile = () => {
	return (
		<div
			style={{
				maxWidth: "2000px",
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
			}}
		>
			<NavBar2 />
			<UserDetails />
			<FaqsNew />
			<FAQs />
		</div>
	);
};

export default UserProfile;
