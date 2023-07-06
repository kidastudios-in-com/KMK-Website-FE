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
              width: "500px",
              maxWidth: "80rem",
              // height: "300px",
              alignContent: "center",
              padding: "15px",
              marginTop: "30px",
            }}
            className="paymentsPage-box"
          >
            <img
              src={"Card UI.png"}
              style={{ width: "100%", height: "auto" }}
            />
            {/*<Text b size={20} color="#fff" css={{ ml: "20px", mt: "10px" }}>*/}
            {/*  Pay via Debit/Credit Card*/}
            {/*</Text>*/}
            <Button
              auto
              type="submit"
              css={{
                // width: "200px",
                height: "50px",
                fontSize: 23,
                // marginTop: "150px",
                // marginLeft: "20px",
                borderRadius: "7000.5px",
                border: "2.5px solid #440886",
                backgroundImage:
                  "linear-gradient(to right , #51168C, #3C4AB3, #32C0C8)",
              }}
            >
              Pay now
            </Button>
          </Box>
        </form>
      </Elements>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          maxWidth: "80rem",
          // height: "300px",
          alignContent: "center",
          justifyContent: "center",
          padding: "15px",
        }}
        className="paymentsPage-box"
      >
        <Text
          b
          size={35}
          color="#000"
          css={{
            width: "100%",
            mt: "30px",
            alignSelf: "center",
            "@media only screen and (max-width: 764px)": {
              mt: "10px",
            },
          }}
        >
          Account Transfer:
        </Text>
        <Text
          size={21}
          css={{
            width: "100%",
            "@media only screen and (max-width: 764px)": {
              fontSize: "17px",
              lineHeight: "1.3",
            },
          }}
        >
          If you are transferring through <b>Cheque/DD/Direct</b> account then
          please send an email to{" "}
          <a href="mailto: contact@kamayakya.com">contact@kamayakya.com</a>{" "}
          <b>
            mentioning your name, email id, account number, bank name,
            transaction number and the amount transferred
          </b>
          . We do not accept cash. Please do not deposit CASH. Payment can be
          through Cheque, DD, or direct account transfer.
        </Text>
        {/* <Box> */}
        <Box
          sx={{
            width: "500px",
            maxWidth: "80rem",
            display: "flex",
            background: "#d3d3d3",
            // border: "2px solid",
            borderRadius: "20px",
            flexDirection: "column",
            mt: "20px",
            padding: "20px",
          }}
          className="paymentsPage-box-account"
        >
          <Text
            size={18}
            css={{
              "@media only screen and (max-width: 764px)": {
                fontSize: "16px",
                lineHeight: "1.3",
              },
            }}
          >
            Account Name: <b>AURUM CAPITAL</b>
          </Text>
          <Text size={18}>
            Account Type: <b>Current Account</b>
          </Text>
          <Text size={18}>
            Account Number: <b>7212058645</b>
          </Text>
          <Text size={18}>
            Bank: <b>Kotak Mahindra Bank</b>
          </Text>
          <Text size={18}>
            IFSC Code: <b>KKBK0001771</b>
          </Text>
          <Text size={18}>
            Branch Code: <b>1771</b>
          </Text>
          <Text size={18}>
            Branch Location: <b>Pune-Satara Road, Pune</b>
          </Text>
        </Box>
        <img
          src="dummy_upi.jpeg"
          style={{
            width: "500px",
            maxWidth: "80rem",
            height: "auto",
            marginTop: "30px",
            marginBottom: "50px",
          }}
          className="paymentsPage-box-account"
        />

        {/* <Box> */}
        {/* </Box> */}
        {/*<Text b size={16} css={{ width: "950px" }}>*/}
        {/*  If you are transferring through Cheque/DD/Direct account then please*/}
        {/*  send an email to info@aurumcapital.in mentioning your name, email id,*/}
        {/*  account number, bank name, transaction number and the amount*/}
        {/*  transferred. We do not accept cash. Please do not deposit CASH. Payment*/}
        {/*  can be through Cheque, DD, or direct account transfer.*/}
        {/*</Text>*/}
        {/* </Box> */}
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    display: "flex",*/}
        {/*    background: "#d3d3d3",*/}
        {/*    border: "2px solid",*/}
        {/*    flexDirection: "column",*/}
        {/*    mt: "20px",*/}
        {/*    mb: "50px",*/}
        {/*    padding: "20px",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text b>Account Name: AURUM CAPITAL</Text>*/}
        {/*  <Text b>Account Type:Current Account</Text>*/}
        {/*  <Text b> Account Number: 7212058645</Text>*/}
        {/*  <Text b> Bank: Kotak Mahindra Bank</Text>*/}
        {/*  <Text b>IFSC Code: KKBK0001771</Text>*/}
        {/*  <Text b>Branch Code: 1771</Text>*/}
        {/*  <Text b>Branch Location: Pune-Satara Road, Pune</Text>*/}
        {/*</Box>*/}
      </Box>
      <FaqsNew />
      <Footer />
    </section>
  );
}
