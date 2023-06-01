import NavBar2 from "@/components/Navbar2";
import { Text } from "@nextui-org/react";
import React from "react";
import TrackPage from '../components/TrackPage';

const TrackRecord = () => {
	return (
		<section
			style={{
				background: "#fff",
                // backgroundImage: "linear-gradient(to top , #FF9D28, #ffa736)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<NavBar2 />
			<Text
				b
				size={70}
				css={{
					paddingTop: "20px",
					// paddingBottom: "50px",
					"@media only screen and (max-width: 600px)": {
						textAlign: "center",
						fontSize: 36,
						lineHeight: 1.2,
					},
				}}
			>
				Track Record
			</Text>
            <TrackPage />
		</section>
	);
};

export default TrackRecord;
