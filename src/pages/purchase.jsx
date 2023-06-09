import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Text } from "@nextui-org/react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	"pk_test_51NE58PSBuQnJr5tOm45oUslfEQGBH28PFEuKFLFexSRbUoJOUBggt0CX8sT4UfPL39cBHEHDappW7GVnoVGCJepg00EiYN6VTs"
);
export default function PreviewPage() {
	React.useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get("success")) {
			console.log("Order placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
			console.log(
				"Order canceled -- continue to shop around and checkout when you’re ready."
			);
		}
	}, []);

	return (
		<section
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				maxWidth: "2000px",
			}}
		>
			<form
				action="/api/checkout_sessions"
				method="POST"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Text b size={20}>
					Subscibe to KamayaKya
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
			</form>
		</section>
	);
}
