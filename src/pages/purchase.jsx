import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Text } from "@nextui-org/react";
import { PAYMENT_URL } from "./api/URLs";

const stripePromise = loadStripe(
  "pk_test_51N3dAPSFPooNZtZaCwGwRUC1IHpC4HqARVbxMBia13Fqan4H6SoLZUhLz21xqqMhtDU5Kiurtzia2uznSEbGSADk00LRBh1V2p"
);

export default function PreviewPage() {
  const handlePayButtonClick = async () => {
    try {
		console.log('api call');
      const response = await fetch(PAYMENT_URL, {
        method: "POST",
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
	  console.log('no call');
    }
  };

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
      </form>
    </section>
  );
}
