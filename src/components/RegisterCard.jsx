import { Button, Card, Input, Modal, Text, Loading } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Alert, Box } from "@mui/material";
import {
	REG_USER_EMAIL,
	REG_USER_MOBILE,
	VERIFY_USER,
} from "../pages/api/URLs";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";

const RegisterCard = () => {
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
				setError("Failed to Register. Please try again.");
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
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
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
						},
					}}
				>
					Hello, start your investing journey with us
				</Text>
			</Box>
			<Card
				variant="flat"
				css={{
					width: 450,
					background: "#fff",
					"@media only screen and (max-width: 600px)": {
						width: "100%",
					},
				}}
			>
				{isLoading && <Loading />}
				<Card.Body>
					{isAlertVisible && (
						<Alert severity="error" onClose={() => setIsAlertVisible(false)}>
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
						css={{ marginBottom: "20px", marginTop: "20px" }}
					/>
					<Button
						color={"success"}
						onPress={handleRegister}
						disabled={isLoading || (!email && !mobile)}
						loading={isLoading}
					>
						Get OTP
					</Button>
				</Card.Body>
			</Card>
			<Modal open={showOtpModal} onClose={() => setShowOtpModal(false)}>
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
						containerStyle={{ marginTop: 10 }}
						inputStyle={{
							height: "50px",
							width: "50px",
							marginLeft: 2,
							marginRight: 2,
							border: "1px solid",
							borderRadius: "12px",
							background: "#fff",
						}}
						onChange={setOtp}
						renderSeparator={<span>-</span>}
						shouldAutoFocus
						renderInput={(props) => <input {...props} />}
					/>
					<Button
						color={"success"}
						onPress={handleOtpSubmit}
						disabled={isLoading || !email}
						loading={isLoading}
					>
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
		</div>
	);
};

export default RegisterCard;
