import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Text } from "@nextui-org/react";
import { GET_PRODUCT, PAYMENT_URL } from "./api/URLs";
import { Box } from "@mui/material";
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
	"pk_test_51NIAaOSI2jzUvqLXPBiVnCIeshgiVn9SeFY3oGrRnYKSLyezrspBuPItJWxuAboUWCGYZ7dCpT66crOe26Fe2L8Y00LoX7UM4Z"
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

	const handlePayButtonClick = async () => {
		try {
			console.log("api call");
			console.log(productID);
			const refreshToken = localStorage.getItem("refresh");
			const response = await fetch(PAYMENT_URL, {
				method: "POST",
				headers: {
					// "Content-Type": "application/json",
					Authorization: `token ${refreshToken}`,
				},
				body: JSON.stringify({ product_id : productID }),
				// Add any necessary headers or body to the request
			});

			if (response.ok) {
				const data = await response.json();
				console, log(response);
				console.log(data);

				if (error) {
					// Handle any error during redirection
					console.error(error);
				}
			} else {
				// Handle API call error
				console.error("API call failed");
			}
		} catch (error) {
			// Handle any other error
			console.error(error);
			console.log("no call");
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
				paddingTop: "50px",
			}}
		>
			{/* <Elements stripe={stripePromise} > */}
			<form
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
				{/* <Button onPress={handleGetProduct} css={{ marginTop: "10px" }}>
					Get Product ID
				</Button> */}
			</form>
			{/* </Elements> */}
			<Box>Stipe ID: {productID}</Box>
		</section>
	);
}
