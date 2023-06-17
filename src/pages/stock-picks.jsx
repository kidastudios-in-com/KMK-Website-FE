import { useContext } from "react";
import NavBar2 from "../components/Navbar2";
import NavBar from "../components/Navbar";
import StockCard from "../components/StockCard";
import FaqsNew from "./screens/FaqsNew";
import Footer from "./screens/Footer";
import AuthContext from '../components/AuthContext';

const StockPicks = () => {
	const { isLoggedIn } = useContext(AuthContext);
	
	return (
		<>
			{isLoggedIn ? <NavBar2 /> : <NavBar />}
			<div
				style={{
					background: "#fff",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<StockCard />
				{/* <StockCardBlur /> */}
				<FaqsNew />
				<Footer />
			</div>
		</>
	);
};

export default StockPicks;
