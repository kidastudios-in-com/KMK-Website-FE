import { Button, Card, Text, Tooltip } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_ALL_URL } from "./api/URLs";
import { Box, Grid } from "@mui/material";
import Navbar2 from "../components/Navbar2";
import { AiOutlineRight } from "react-icons/ai";
import { IconButton } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import StockCard from "../components/StockCard";
import FaqsNew from "./screens/FaqsNew";
import FAQs from "./screens/FAQs";
import StockCardBlur from "../components/StockCardBlur";

const StockPicks = () => {
	return (
		<>
			<Navbar2 />
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
