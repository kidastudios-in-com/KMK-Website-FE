import { useContext } from "react";
import NavBar2 from "../components/Navbar2";
import NavBar from "../components/Navbar";
import StockCard from "../components/StockCard";
import FaqsNew from "./screens/FaqsNew";
import FAQs from "./screens/FAQs";
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
				<FAQs />
			</div>
		</>
	);
};

export default StockPicks;
