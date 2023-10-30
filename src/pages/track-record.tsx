import React, { useContext } from "react";
import AuthContext from "@/components/AuthContext";
import NavBar2 from "@/components/Navbar2";
import NavBar from "@/components/Navbar";
// import { Text } from "@nextui-org/react";
import TrackPage from "../components/TrackPage";

const TrackRecord = () => {
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<section
			style={{
				background: "#fff",
			}}
		>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}

			<TrackPage />
		</section>
	);
};

export default TrackRecord;
