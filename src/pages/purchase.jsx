import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Text } from "@nextui-org/react";
import { GET_PRODUCT, PAYMENT_URL } from "./api/URLs";
import { Box } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import NavBar2 from "@/components/Navbar2";
import FaqsNew from '../pages/screens/FaqsNew';
import Footer from '../pages/screens/Footer';

const stripePromise = loadStripe(
	"pk_test_51N3dAPSFPooNZtZaCwGwRUC1IHpC4HqARVbxMBia13Fqan4H6SoLZUhLz21xqqMhtDU5Kiurtzia2uznSEbGSADk00LRBh1V2p"
);

export default function PreviewPage() {
	const [productID, setProductID] = useState("");

	useEffect(() => {
		const handleGetProduct = async () => {
			try {
				const refreshToken = localStorage.getItem("refresh");
				const response = await fetch(GET_PRODUCT, {
					headers: {
						Authorization: `token ${refreshToken}`,
					},
				});
				const data = await response.json();
				console.log(data);
				const kamayaKyaProduct = data.find(
					(product) => product.name === "KamayaKya"
				);
				const kamayaKyaProductID = kamayaKyaProduct?.stripe_product_id || "";
				setProductID(kamayaKyaProductID);
			} catch (error) {
				console.error(error);
			}
		};
		handleGetProduct();
	}, []);
	const refreshToken = localStorage.getItem("refresh");

	const handleCheckoutSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(PAYMENT_URL, {
				method: "POST",
				headers: {
					// "Content-Type": "application/x-www-form-urlencoded",
					"Content-Type": "application/json",
					Authorization: `token ${refreshToken}`, // Set the Authorization header with the refresh token
				},
				body: JSON.stringify({ product_id: productID }),
			});
			// Process the response
			if (response.ok) {
				console.log(response);
				const data = await response.json();
				console.log(data);
				console.log(data.session_url);
				window.location.href = data.session_url;
			} else {
				// Handle error response
				console.log(response);
			}
		} catch (error) {
			// Handle network or other errors
			console.log(error);
		}
	};

	// const options = {
	// 	// passing the client secret obtained from the server
	// 	clientSecret: '{{CLIENT_SECRET}}',
	//   };

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: "#fff",
			}}
		>
			<NavBar2 />
			
			<Elements stripe={stripePromise}>
				{/* <form
				onSubmit={handlePayButtonClick}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Text b size={20} css={{ marginBottom: "20px" }}>
					Subscribe to KamayaKya
				</Text>
				<button type="submit">
					Subscribe
				</button>
				<style jsx>
					{`
						button {
							width: 150px;
							height: 36px;
							background: #556cd6;
							border-radius: 4px;
							color: white;
							border: 0;
							font-weight: 600;
							cursor: pointer;
							transition: all 0.2s ease;
							box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
						}
					`}
				</style>
				<Button onPress={handleGetProduct} css={{ marginTop: "10px" }}>
					Get Product ID
				</Button>
			</form> */}

				<img
					src="kmk-logo (1).png"
					// className="image"
					height={"60px"}
					style={{ marginBottom: "20px", marginTop: '20px' }}
				></img>
				<Text b size={20}>
					Start Your Subscription with KamayaKya!
				</Text>
				{/* <Box>
					User Name: if username ? show edit option for biling Name
					GST Number get from user 
					Referral Code non editable 

				</Box> */}
				<form onSubmit={handleCheckoutSubmit}>
					<Button
						type="submit"
						css={{
							fontSize: 18,
							marginTop: "15px",
							marginBottom: "20px",
							borderRadius: '20px',
							backgroundImage:
								"linear-gradient(to top , #105B54, #0F734D, #0F734D)",
						}}
					>
						Subscribe
					</Button>
				</form>
			</Elements>
			{/* <Box>Stipe ID: {productID}</Box> */}
			<FaqsNew />
			<Footer />
		</section>
	);
}
