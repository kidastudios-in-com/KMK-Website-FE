import React, { useContext } from 'react'
import AuthContext from '@/components/AuthContext';
import UserDetails from "./UserDetails/UserDetails";
import NavBar from "@/components/Navbar";
import NavBar2 from "@/components/Navbar2";
import FaqsNew from "./screens/FaqsNew";
import FAQs from "./screens/FAQs";

const UserProfile = () => {
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<div
			style={{
				maxWidth: "2000px",
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
			}}
		>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			<UserDetails />
			<FaqsNew />
			<FAQs />
		</div>
	);
};

export default UserProfile;
