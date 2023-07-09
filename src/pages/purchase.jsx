import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Card, Input, Loading, Modal, Text } from "@nextui-org/react";
import { BILLING_URL, GET_PRODUCT, PAYMENT_URL } from "./api/URLs";
import { Box, IconButton } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import NavBar2 from "@/components/Navbar2";
import FaqsNew from "../pages/screens/FaqsNew";
import Footer from "../pages/screens/Footer";
import AuthContext from "@/components/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../components/Login";
import PhoneInput from "react-phone-input-2";

// const stripePromise = loadStripe(
// 	"pk_test_51N3dAPSFPooNZtZaCwGwRUC1IHpC4HqARVbxMBia13Fqan4H6SoLZUhLz21xqqMhtDU5Kiurtzia2uznSEbGSADk00LRBh1V2p"
// );
const Stripe_Key = process.env.NEXT_PUBLIC_STRIPE_KEY;

const stripePromise = loadStripe(Stripe_Key);

export default function PreviewPage() {
	const [productID, setProductID] = useState("");
	const { isLoggedIn } = useContext(AuthContext);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [openBillingModal, setOpenBillingModal] = useState(false);
	const [billingName, setBillingName] = useState("");
	const [billingEmail, setBillingEmail] = useState("");
	const [billingNumber, setBillingNumber] = useState("");
	const [gstNo, setGstNo] = useState("");
	const [loading, setLoading] = useState(false);
	const refreshToken = localStorage.getItem("refresh");

	const handleOpenBillingModal = () => {
		setOpenBillingModal(true);
	};
	const handleCloseBillingModal = () => {
		setOpenBillingModal(false);
	};
	const handleLogin = () => {
		setShowLoginModal(true);
	};

	const handleCloseLoginModal = () => {
		setShowLoginModal(false);
	};

	const handleInputChange = (value) => {
		setBillingNumber(value);
	};

	const handleEmailChange = (e) => {
		setBillingEmail(e.target.value);
	};

	const handleNameChange = (e) => {
		setBillingName(e.target.value);
	};

	const handleGSTChange = (e) => {
		setGstNo(e.target.value);
	};

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
				// console.log(data);
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

	const handleSaveAndPay = async () => {
		try {
			setLoading(true);

			const billingData = {
				full_name: billingName,
				phone: billingNumber,
				email: billingEmail,
				gst_no: gstNo ? gstNo : "",
			};

			// Make API call to BILLING_URL
			const billingResponse = await fetch(BILLING_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `token ${refreshToken}`,
				},
				body: JSON.stringify(billingData),
			});

			if (billingResponse.ok) {
				// Billing API call was successful
				// Perform subsequent API call
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
			} else {
				// Subsequent API call failed
				// Handle the error
				console.log("After 1st Call");
			}
			// Billing API call failed
			// console.log("Billing API call failed");

			setLoading(false);
		} catch (error) {
			console.error("Error:", error);
			setLoading(false);
		}
	};

	if (!isLoggedIn) {
		return (
			<section
				style={{
					// height: "35vh",
					display: "flex",
					justifyContent: "center",
					backgroundColor: "#fff",
					padding: "50px",
				}}
			>
				<Box
					sx={{
						width: "100%",
						maxWidth: "80rem",
						display: "flex",
						flexDirection: "column",
						flexWrap: "wrap",
						alignContent: "center",
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						paddingLeft: "20px",
						paddingRight: "20px",
						"@media only screen and (max-width: 764px)": {
							width: "100%",
							paddingLeft: "15px",
							paddingRight: "15px",
							alignContent: "flex-start",
							justifyContent: "flex-start",
							alignItems: "flex-start",
							alignSelf: "flex-start",
							flexDirection: "column-reverse",
						},
					}}
				>
					<Box
						sx={{ width: "50%", height: "auto" }}
						className="aboutSectionGifAndText"
					>
						<video
							muted
							autoPlay
							loop
							src="https://kamayakya.com/In%20Depth%20Research%20-%20Why%20Us.mp4"
							style={{ borderRadius: "30px", width: "100%", height: "100%" }}
						/>
					</Box>
					<Box
						className="aboutSectionGifAndText mobileAboutText"
						sx={{
							width: "50%",
							display: "flex",
							flexDirection: "column",
							alignSelf: "center",
							paddingRight: "0px",
						}}
					>
						<Button
							auto
							onPress={handleLogin}
							css={{
								borderRadius: "10000px",
								marginTop: 30,
								backgroundColor: "#ff9f24",
								zIndex: 0,
								paddingLeft: 50,
								paddingRight: 50,
								height: "50px",
								width: "90px",
								alignSelf: "center",
								// marginBottom: "15px",
								"@media only screen and (max-width: 764px)": {
									borderRadius: "15px",
									paddingLeft: 15,
									paddingRight: 15,
									marginLeft: 0,
									marginBottom: 0,
									marginTop: "10px",
									height: "55px",
									width: "250px",
								},
							}}
						>
							<Text
								b
								size={20}
								color="White"
								css={{
									"@media only screen and (max-width: 764px)": {
										fontSize: 18,
										// padding: "1px 5px",
										width: "auto",
									},
								}}
							>
								Login
							</Text>
						</Button>
					</Box>
					<Modal
						width="450px"
						blur
						open={showLoginModal}
						onClose={handleCloseLoginModal}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<img src="kmk-k.png" style={{ maxWidth: "260px" }} />
							<IconButton
								sx={{
									width: "40px",
									"&:hover": { background: "#fff" },
									// alignSelf: "end",
									right: "20px",
								}}
								onClick={() => handleCloseLoginModal()}
							>
								<CloseIcon sx={{ color: "#e81123" }} />
							</IconButton>
						</Box>
						<Modal.Body>
							<Login />
						</Modal.Body>
					</Modal>
				</Box>
			</section>
		);
	}

	// const handleCheckoutSubmit = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 		const response = await fetch(PAYMENT_URL, {
	// 			method: "POST",
	// 			headers: {
	// 				// "Content-Type": "application/x-www-form-urlencoded",
	// 				"Content-Type": "application/json",
	// 				Authorization: `token ${refreshToken}`, // Set the Authorization header with the refresh token
	// 			},
	// 			body: JSON.stringify({ product_id: productID }),
	// 		});
	// 		// Process the response
	// 		if (response.ok) {
	// 			console.log(response);
	// 			const data = await response.json();
	// 			console.log(data);
	// 			console.log(data.session_url);
	// 			window.location.href = data.session_url;
	// 		} else {
	// 			// Handle error response
	// 			console.log(response);
	// 		}
	// 	} catch (error) {
	// 		// Handle network or other errors
	// 		console.log(error);
	// 	}
	// };

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
				<form
				// onSubmit={handleCheckoutSubmit}
				>
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
						{/* <Button
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
						</Button> */}
						<Button
							auto
							onPress={handleOpenBillingModal}
							css={{
								// width: "100%",
								height: "50px",
								fontSize: 23,
								marginTop: "20px",
								// marginLeft: "20px",
								borderRadius: "7000.5px",
								// border: "2.5px solid #440886",
								backgroundImage:
									"linear-gradient(to right , #51168C, #3C4AB3, #32C0C8)",
							}}
						>
							Subscribe Now
						</Button>
					</Box>
				</form>
			</Elements>

			<Modal
				open={openBillingModal}
				onClose={handleCloseBillingModal}
				css={{
					alignSelf: "center",
					background: "transparent",
					boxShadow: "none",
					borderRadius: "15px",
					// width: '420px',
					"@media only screen and (max-width: 764px)": {
						width: "95vw !important",
						maxWidth: "95vw !important",
					},
				}}
			>
				{/* <img src="kmk-k.png" style={{ width: "50px" }} /> */}

				<Card
					css={{
						width: "380px",
						height: "520px",
						alignSelf: "center",
						borderRadius: "24px",
						"@media only screen and (max-width: 764px)": {
							width: "95vw !important",
							maxWidth: "95vw !important",
						},
					}}
				>
					<IconButton
						sx={{
							position: "absolute",
							width: "40px",
							"&:hover": { background: "#fff" },
							top: "5px",
							right: "0px",
							paddingRight: "30px",
							"@media only screen and (max-width: 764px)": {
								top: "5px",
								right: "0px",
							},
						}}
						onClick={handleCloseBillingModal}
					>
						<CloseIcon sx={{ color: "#e81123" }} />
					</IconButton>
					<Text
						b
						color="#000"
						css={{
							fontSize: 40,
							lineHeight: 1.2,
							marginTop: "40px",
							marginBottom: "20px",
							"@media only screen and (max-width: 764px)": {
								fontSize: 30,
								width: "100%",
							},
						}}
					>
						Invoice Details
					</Text>
					<Text
						b
						css={{
							alignSelf: "start",
							marginLeft: "50px",
							fontSize: 12,
							color: "#125a54",
						}}
					>
						* required
					</Text>
					<Input
						required
						placeholder="eg: Aniket Kulkarni"
						clearable
						size="lg"
						value={billingName}
						onChange={handleNameChange}
						css={{
							marginBottom: "10px",
							alignSelf: "center",
							width: "300px",
							height: "50px",
							borderRadius: "1000px",
						}}
						className="countryPhone"
					/>
					<Text
						b
						css={{
							alignSelf: "start",
							marginLeft: "50px",
							fontSize: 12,
							color: "#125a54",
						}}
					>
						* required
					</Text>
					<PhoneInput
						containerStyle={{
							marginBottom: "10px",
							alignSelf: "center",
							width: "300px",
						}}
						dropdownStyle={{ height: "250px", zIndex: 10 }}
						countryCodeEditable={false}
						country="in"
						placeholder="eg: 9012345678"
						value={billingNumber}
						onChange={handleInputChange}
						inputProps={{
							required: true,
							autoFocus: true,
						}}
						inputExtraProps={{
							mask: "+(999) 999 9999",
						}}
						containerClass="countryPhone"
					/>
					<Text
						b
						css={{
							alignSelf: "start",
							marginLeft: "50px",
							fontSize: 12,
							color: "#125a54",
						}}
					>
						* required
					</Text>
					<Input
						required
						placeholder="eg: support@kamayakya.com"
						clearable
						size="lg"
						value={billingEmail}
						onChange={handleEmailChange}
						css={{
							marginBottom: "10px",
							alignSelf: "center",
							width: "300px",
							height: "50px",
							borderRadius: "1000px",
						}}
						className="countryPhone"
					/>
					<Text
						b
						css={{
							alignSelf: "start",
							marginLeft: "50px",
							fontSize: 12,
							color: "grey",
						}}
					>
						optional
					</Text>
					<Input
						placeholder="eg: 22AAAAA0000A1Z5"
						clearable
						size="lg"
						value={gstNo}
						onChange={handleGSTChange}
						css={{
							marginBottom: "10px",
							alignSelf: "center",
							width: "300px",
							height: "50px",
							borderRadius: "1000px",
						}}
						className="countryPhone"
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-evenly",
							marginTop: "20px",
						}}
					>
						<Button
							auto
							onPress={handleSaveAndPay}
							css={{
								width: "50%",
								fontSize: 18,
								borderRadius: "1000px",
								background: "linear-gradient(to top , #fb7716,#fe9807)",
							}}
						>
							{loading ? (
								<Loading color={"white"} css={{ background: "transparent" }} />
							) : (
								"Save & Pay "
							)}
						</Button>
					</Box>
				</Card>
			</Modal>
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
