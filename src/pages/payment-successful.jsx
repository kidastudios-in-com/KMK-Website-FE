import React, { useEffect, useState, useContext } from "react";
import { BILLING_DETAILS_URL, GET_USER, INVOICE_UPLOAD } from "./api/URLs";
import { Loading, Text } from "@nextui-org/react";
import AuthContext from "@/components/AuthContext";
import { useRouter } from "next/router";
import { pdf } from "@react-pdf/renderer";
import InvoicePDF from "./UserDetails/InvoicePDF";

const paymentsuccessful = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [UserDetails, setUserDetails] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (countdown === -1) {
      setShowMessage(true);
      setMessage("Taking longer than usual please wait...");
    }
  }, [countdown]);

  useEffect(() => {
    // if (isLoggedIn) {
    const fetchUserDetails = async () => {
      try {
        const refreshToken = localStorage.getItem("refresh");
        const response = await fetch(GET_USER, {
          method: "GET",
          headers: {
            Authorization: `Token ${refreshToken}`,
          },
        });
        const data = await response.json();
        setUser(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
    // }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserBillingDetails = async () => {
        try {
          const refreshToken = localStorage.getItem("refresh");
          const response = await fetch(BILLING_DETAILS_URL, {
            method: "GET",
            headers: {
              Authorization: `Token ${refreshToken}`,
            },
          });
          const data = await response.json();
          setUserDetails(data);
          // console.log(data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchUserBillingDetails();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (user) {
      // console.log(user);
      const getInvoice = async () => {
        const fullName = UserDetails?.name;
        const number = UserDetails?.phone;
        const email = UserDetails?.email;
        const gstin = UserDetails?.gst_number;
        const referralCode = user.referral_code ? user.referral_code : "";
        // const currentDate = new Date().toLocaleDateString('en-GB');
        console.log(
          fullName,
          user?.active_subscription,
          number,
          email,
          referralCode
        );
        const blob = await pdf(
          <InvoicePDF
            fullName={fullName}
            gstin={gstin}
            referralCode={referralCode}
          />
        ).toBlob();

        const formData = new FormData();
        formData.append("invoice", blob);
        // console.log(user?.active_subscription_id);
        try {
          const formData = new FormData();
          formData.append("invoice", blob, "Invoice.pdf");
          formData.append("subscription_id", user?.active_subscription_id);

          const response = await fetch(INVOICE_UPLOAD, {
            method: "POST",
            body: formData,
          });
          if (response.ok) {
            console.log(response);
            setShowMessage(true);
            setMessage("Invoice generated successfully");
            setIsLoading(false);
            // console.log("Invoice sent successfully!");
            router.push("/stock-picks");
          } else {
            console.log(response);
            console.log("Failed to send invoice.");
          }
        } catch (error) {
          console.error("Error sending the invoice:", error);
        }
      };
      getInvoice();
    }
  }, [user]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: "10px",
        backgroundColor: "white",
        background: "white",
      }}
    >
      <img
        src="./kmk-logo (1).png"
        alt="KamayaKya Logo"
        style={{ width: "220px", height: "60px", alignSelf: "center" }}
      />
      <Text b size={34}>
        Payment Successful!
      </Text>
      {showMessage ? (
        ""
      ) : (
        <Text b size={22}>
          Success! Your payment has rocketed into our account. Buckle up and get
          ready, your financial exploration is about to take off!
          <br />
          Please wait while your invoice is being generated...
        </Text>
      )}
      {isLoading ? <Loading size="lg" color={"success"} type="gradient" /> : ""}
      {showMessage ? (
        <Text b size={20}>
          {message}
        </Text>
      ) : (
        <Text b size={20}>
          You will be redirected in {countdown} seconds
        </Text>
      )}
      {isLoading ? (
        ""
      ) : (
        <Text b size={20}>
          Redirecting Now...
        </Text>
      )}
    </div>
  );
};

export default paymentsuccessful;
