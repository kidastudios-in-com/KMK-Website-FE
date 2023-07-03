import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Text } from "@nextui-org/react";
import { GET_PRODUCT, PAYMENT_URL } from "./api/URLs";
import { Box } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import NavBar2 from "@/components/Navbar2";
import FaqsNew from "../pages/screens/FaqsNew";
import Footer from "../pages/screens/Footer";
import { Padding } from "@mui/icons-material";

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
        {/* <Box>
					User Name: if username ? show edit option for biling Name
					GST Number get from user 
					Referral Code non editable 

				</Box> */}
        <form onSubmit={handleCheckoutSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "456px",
              height: "300px",
              backgroundImage: "url(dummy_card.png)",
              borderRadius: "24px",
              marginTop: "20px",
              objectFit: "cover",
            }}
          >
            <Text b size={20} color="#fff" css={{ ml: "20px", mt: "10px" }}>
              Pay via Debit/Credit Card
            </Text>
            <Button
              auto
              type="submit"
              css={{
                width: "200px",
                fontSize: 18,
                marginTop: "150px",
                marginLeft: "20px",
                borderRadius: "20px",
                backgroundImage:
                  "linear-gradient(to top , #105B54, #0F734D, #0F734D)",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </form>
      </Elements>
      {/* <Box> */}
      <Text b size={20} css={{ mt: "20px" }}>
        Pay via UPI : kamayakya@upi
      </Text>
      <img src="dummy_upi.jpeg" />
      {/* <Box> */}
      <Text b size={30} color="#125a54" css={{ mt: "20px" }}>
        Account Transfer:
      </Text>
      {/* </Box> */}
      <Text b size={16} css={{ width: "950px" }}>
        If you are transferring through Cheque/DD/Direct account then please
        send an email to info@aurumcapital.in mentioning your name, email id,
        account number, bank name, transaction number and the amount
        transferred. We do not accept cash. Please do not deposit CASH. Payment
        can be through Cheque, DD, or direct account transfer.
      </Text>
      {/* </Box> */}
      <Box
        sx={{
          display: "flex",
          background: "#d3d3d3",
          border: "2px solid",
          flexDirection: "column",
          mt: "20px",
          mb: "50px",
          padding: "20px",
        }}
      >
        <Text b>Account Name: AURUM CAPITAL</Text>
        <Text b>Account Type:Current Account</Text>
        <Text b> Account Number: 7212058645</Text>
        <Text b> Bank: Kotak Mahindra Bank</Text>
        <Text b>IFSC Code: KKBK0001771</Text>
        <Text b>Branch Code: 1771</Text>
        <Text b>Branch Location: Pune-Satara Road, Pune</Text>
      </Box>
      <FaqsNew />
      <Footer />
    </section>
  );
}
