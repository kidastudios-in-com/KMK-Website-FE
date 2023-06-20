import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Text } from "@nextui-org/react";
import { GET_PRODUCT, PAYMENT_URL } from "./api/URLs";
import { Box } from "@mui/material";

const stripePromise = loadStripe(
	"pk_test_51N3dAPSFPooNZtZaCwGwRUC1IHpC4HqARVbxMBia13Fqan4H6SoLZUhLz21xqqMhtDU5Kiurtzia2uznSEbGSADk00LRBh1V2p"
);

export default function PreviewPage() {
	const [productID, setProductID] = useState("");

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

	const handlePayButtonClick = async () => {
		try {
			console.log("api call");
			const response = await fetch(PAYMENT_URL, {
				method: "POST",
        body: JSON.stringify({ productID }),
				// Add any necessary headers or body to the request
			});

			if (response.ok) {
				const session = await response.json();
				const stripe = await stripePromise;
				const { error } = await stripe.redirectToCheckout({
					sessionId: session.id,
				});

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

	return (
		<section
			style={{
				display: "flex",
        flexDirection: 'column',
				justifyContent: "center",
				alignItems: "center",
				maxWidth: "2000px",
			}}
		>
			<form
				onSubmit={handlePayButtonClick}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Text b size={20}>
					Subscribe to KamayaKya
				</Text>
				<button type="submit" role="link">
					Pay 999
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
				<Button onPress={handleGetProduct}>Get Product ID</Button>
			</form>
      <Box>
        Stipe ID: {productID}
      </Box>
		</section>
	);
}
