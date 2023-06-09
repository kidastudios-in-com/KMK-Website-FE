import { SpinTheWheel } from "@/components/SpinTheWheel";
import { Button, Card, Input, Modal, Text, Loading } from "@nextui-org/react";
import { Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import { REG_USER_EMAIL, REG_USER_MOBILE, VERIFY_USER } from "./api/URLs";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";
import RegistrationCards from "../components/SubscriptionCards";

const Registration = () => {
	const router = useRouter();
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [showOtpModal, setShowOtpModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [isAlertVisible, setIsAlertVisible] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setMobile("");
	};

	const handleMobileChange = (e) => {
		setMobile(e.target.value);
		setEmail("");
	};

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
		let URLs = email !== "" ? REG_USER_EMAIL : REG_USER_MOBILE;
		setIsLoading(true);
		try {
			const response = await fetch(URLs, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					mobile: mobile,
					// password: password,
					email: email,
				}),
			});
			if (response.ok) {
				const data = await response.json();
				setOtp(data.otp);
				setShowOtpModal(true);
			} else {
				console.log("RESPONSE NOT OK");
				setError("Failed to Login. Please try again.");
				showAlert();
			}
		} catch (e) {
			console.log(e);
			setError("An error occurred. Please try again later.");
			showAlert();
		}
		setIsLoading(false);
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
					mobile: mobile !== "" ? mobile : undefined,
				}),
			});
			if (response.ok) {
				const data = await response.json();
				localStorage.setItem("access", data.access);
				localStorage.setItem("refresh", data.refresh);
				setShowOtpModal(false);
				router.push("/stock-picks");
			} else {
				console.log("RESPONSE NOT OK");
				setError("Failed to verify OTP. Please try again.");
				setShowOtpModal(true);
				showAlert();
			}
		} catch (e) {
			console.log(e);
			setError("An error occurred. Please try again later.");
			showAlert();
		}
		setIsLoading(false);
	};

	return (
		<div
			style={{
				backgroundColor: "#fff",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* <SpinTheWheel /> */}
				<RegistrationCards />
				<div style={{ marginLeft: "50px" }}>
					<Card isHoverable style={{ width: 400 }}>
						{isLoading && <Loading />}
						<Card.Body>
							{isAlertVisible && (
								<Alert
									severity="error"
									onClose={() => setIsAlertVisible(false)}
								>
									{error}
								</Alert>
							)}
							<Input
								labelLeft="Email"
								placeholder="email@example.com"
								clearable
								size="lg"
								value={email}
								onChange={handleEmailChange}
								css={{ marginBottom: 5 }}
							/>
							<Text b css={{ alignSelf: "center" }}>
								OR
							</Text>
							<Input
								labelLeft="Mobile "
								placeholder="+911234567890"
								clearable
								// min={0}
								// inputMode='numeric'
								// type="number"
								size="lg"
								value={mobile}
								onChange={handleMobileChange}
								css={{ marginBottom: 20, marginTop: 5 }}
							/>
							<Button color={"success"} onPress={handleRegister}>
								Register
							</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
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
				<Modal.Body>
					<OtpInput
						value={otp}
						numInputs={6}
						containerStyle={{ marginTop: 10 }}
						inputStyle={{
							height: "50px",
							width: "50px",
							marginLeft: 2,
							marginRight: 2,
						}}
						onChange={setOtp}
						renderSeparator={<span>-</span>}
						shouldAutoFocus
						renderInput={(props) => <input {...props} />}
					/>
					<Button color={"success"} onPress={handleOtpSubmit}>
						Submit
					</Button>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Registration;
