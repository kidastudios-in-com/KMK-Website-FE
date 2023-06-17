import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button, Input, Card, Text, Modal, Loading } from "@nextui-org/react";
import { Box, Alert } from "@mui/material";
import {
	REG_USER_EMAIL,
	REG_USER_MOBILE,
	VERIFY_USER,
} from "../pages/api/URLs";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BiLockAlt } from "react-icons/bi";

const LoginCard = () => {
	const router = useRouter();
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [showOtpModal, setShowOtpModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const [secondsRemaining, setSecondsRemaining] = useState(30);

	useEffect(() => {
		if (showOtpModal) {
			setSecondsRemaining(30); // Start the countdown timer when the modal is shown
		}
	}, [showOtpModal]);

	useEffect(() => {
		if (secondsRemaining > 0) {
			const timer = setTimeout(() => {
				setSecondsRemaining((prevSeconds) => prevSeconds - 1);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [secondsRemaining]);
	const isMobileValid = mobile.replace(/\D/g, "").length === 12;

	const handleInputChange = (value) => {
		// const inputValue = e.target.value;
		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
		setEmail(isEmail ? value : "");
		setMobile(isEmail ? "" : value);
	};
	var in30Minutes = 1 / 48;
	const showAlert = () => {
		setIsAlertVisible(true);
		setTimeout(() => {
			setIsAlertVisible(false);
		}, 5000);
	};

	useEffect(() => {
		if (error) {
			showAlert();
		}
	}, [error]);

	const handleRegister = async () => {
		console.log(mobile);
		setSecondsRemaining(30);
		let URLs = email !== "" ? REG_USER_EMAIL : REG_USER_MOBILE;
		setIsLoading(true);
		try {
			const response = await fetch(URLs, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					mobile: email !== "" ? undefined : "+" + mobile,
					email: email !== "" ? email : undefined,
				}),
			});
			if (response.ok) {
				const data = await response.json();
				setOtp(data.otp);
				setShowOtpModal(true);
			} else {
				setError("Failed to Login. Please try again.");
				showAlert();
			}
		} catch (e) {
			setError("An error occurred. Please try again later.");
			showAlert();
		} finally {
			setIsLoading(false);
		}
	};

	const handleOtpSubmit = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(VERIFY_USER, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					token: otp,
					email: email !== "" ? email : undefined,
					mobile: mobile !== "" ? "+" + mobile : undefined,
				}),
			});
			if (response.ok) {
				const data = await response.json();
				localStorage.setItem("access", data.access);
				localStorage.setItem("refresh", data.refresh);
				Cookies.set("refresh", data.refresh, { expires: in30Minutes });
				setShowOtpModal(false);
				router.push("/stock-picks");
			} else {
				setError("Failed to verify OTP. Please try again.");
				setShowOtpModal(true);
				showAlert();
			}
		} catch (e) {
			setError("An error occurred. Please try again later.");
			showAlert();
		}
		setIsLoading(false);
	};

	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				display: "flex",
				// maxWidth: "2000px",
				flexDirection: "row",
				// padding: "50px",
				paddingBottom: "5px",
				alignItems: "center",
				"@media only screen and (max-width: 600px)": {
					padding: "5px",
				},
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								"@media only screen and (max-width: 600px)": {
									// fontSize: 28,
									width: "100%",
								},
							}}
						>
							<Text
								b
								size={38}
								color="#ffa12e"
								css={{
									lineHeight: 1.2,
									"@media only screen and (max-width: 600px)": {
										fontSize: 28,
										width: "100%",
									},
								}}
							>
								Get Started Now!
							</Text>
							<Text
								b
								size={18}
								color="#202020"
								css={{
									lineHeight: 1.2,
									marginTop: "10px",
									marginBottom: "20px",
									"@media only screen and (max-width: 600px)": {
										fontSize: 14,
										width: "100%",
									},
								}}
							>
								Hello, start your investing journey with us
							</Text>
						</Box>
						<Card
							variant="flat"
							css={{
								borderRadius: "0px",
								display: "flex",
								alignItems: "center",
								paddingTop: "20px",
								// width: "450px",
								height: "250px",
								backgroundColor: "#fff",
								"@media only screen and (max-width: 600px)": {
									width: "100%",
								},
							}}
						>
							{isLoading && <Loading />}

							{isAlertVisible && (
								<Alert
									severity="error"
									onClose={() => setIsAlertVisible(false)}
								>
									{error}
								</Alert>
							)}
							<PhoneInput
								containerStyle={{
									marginBottom: "30px",
									alignSelf: "center",
									width: "300px",
								}}
								dropdownStyle={{ height: "250px", zIndex: 10 }}
								countryCodeEditable={false}
								country="in"
								placeholder="Enter mobile number"
								value={mobile}
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
							<Button
								auto
								onPress={handleRegister}
								disabled={isLoading || (!email && !mobile)}
								loading={isLoading}
								css={{
									backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
									padding: "0px 30px",
									borderRadius: "1000px",
									alignSelf: "center",
									zIndex: 0,
								}}
							>
								<BiLockAlt size={18} style={{ marginRight: '5px' }}/>
								LOGIN
							</Button>
						</Card>
					</div>
				</Box>
			</Box>

			<Modal
				open={showOtpModal}
				onClose={() => setShowOtpModal(false)}
				// style={{height: 300}}
			>
				{isAlertVisible && (
					<Alert severity="error" onClose={() => setIsAlertVisible(false)}>
						{error}
					</Alert>
				)}
				<Modal.Header>
					<Text b size={18}>
						ENTER OTP
					</Text>
				</Modal.Header>
				<Modal.Body
					style={{
						display: "flex",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					<OtpInput
						inputType="number"
						value={otp}
						numInputs={6}
						containerStyle={{ marginTop: "5px" }}
						inputStyle={{
							height: "50px",
							width: "50px",
							marginLeft: 2,
							marginRight: 2,
							border: "1px solid",
							borderRadius: "12px",
							background: "#fff",
						}}
						renderInput={(props) => (
							<input
								{...props}
								type="number"
								onKeyDown={(e) => blockInvalidChar(e, props.onKeyDown)}
							/>
						)}
						onChange={setOtp}
						renderSeparator={<span>-</span>}
						shouldAutoFocus={true}
						disabled={isLoading}
					/>
					<Button color={"success"} onPress={handleOtpSubmit}>
						Submit
					</Button>
					{secondsRemaining === 0 ? (
						<Button
							css={{ backgroundColor: "#fda629" }}
							onPress={handleRegister}
						>
							Resend OTP
						</Button>
					) : (
						<Text b>{`Resend OTP in ${secondsRemaining}s`}</Text>
					)}
				</Modal.Body>
			</Modal>
		</Box>
	);
};

export default LoginCard;

export const blockInvalidChar = (e, keydownFunction) => {
	if (e.key.match(/^[^\n]{1}$/)) {
		// Matching single character
		!e.key.match(/^[0-9]$/) && e.preventDefault(); // Prevent non-numeric characters
	}
	keydownFunction(e); // Execute package's onKeyDown function
};
