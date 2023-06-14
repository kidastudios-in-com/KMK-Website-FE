import React from "react";
import LoginCard from "../components/LoginCard";

const Login = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					maxWidth: "2000px",
					backgroundColor: "#125a54",
					justifyContent: "space-between",
					alignItems: "center",
					height: "100vh",
					margin: "0 auto",
				}}
			>
				<div
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
				>
					<LoginCard />
				</div>
			</div>
		</div>
	);
};

export default Login;
