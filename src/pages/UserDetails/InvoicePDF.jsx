import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		fontFamily: "Helvetica",
		padding: "20px",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: "20px",
	},
	logo: {
		height: "60px",
		width: "200px",
	},
	invoiceTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: "auto",
	},
	address: {
		marginBottom: "10px",
	},
	section: {
		marginBottom: "10px",
	},
});

const currentDate = new Date();
const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}-${(
	currentDate.getMonth() + 1
)
	.toString()
	.padStart(2, "0")}-${currentDate.getFullYear()}`;

const InvoicePDF = ({
	fullName,
	gstin,
	referralCode,
	phone_number,
	startDate,
}) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.header}>
				<img
					src="./kmk-logo (1).png"
					alt="KamayaKya Logo"
					style={styles.logo}
				/>
				<Text style={styles.invoiceTitle}>INVOICE</Text>
			</View>
			<View style={styles.address}>
				<Text>KamayaKya Wealth Management Private Limited</Text>
			</View>
			<View style={styles.address}>
				<Text style={{ fontSize: "16" }}>
					S NO 347/A/16/F P 189, FLAT NO 6, BOAT CLUB ROAD, Pune, Pune,
					Maharashtra, 411001
				</Text>
			</View>
			<View style={styles.section}>
				<Text>Bill To:</Text>
			</View>
			<View style={styles.section}>
				<Text>Full Name: {fullName}</Text>
				<Text>Mobile: {phone_number}</Text>
			</View>
			<View style={styles.section}>
				<Text>GSTIN: {gstin ? gstin : "N/A"}</Text>
			</View>
			<View style={styles.section}>
				<Text>Referral Code: {referralCode ? referralCode : "N/A"}</Text>
			</View>
			<View style={styles.section}>
				<Text>
					Invoice Date:{" "}
					{startDate
						? `${new Date(startDate).getDate()} ${new Date(
								startDate
						  ).toLocaleString("default", {
								month: "short",
						  })} ${new Date(startDate).getFullYear()}`
						: formattedDate}
				</Text>
				{/* <Text>Invoice Date: {endDate ? endDate : formattedDate}</Text> */}
			</View>
			<View style={styles.section}>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						padding: "5%",
						gap: "50px",
					}}
				>
					<Text style={{ width: "40%" }}>Item Description</Text>
					<Text style={{ width: "20%" }}>Amount</Text>
				</View>
			</View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						padding: "5%",
						gap: "50px",
					}}
				>
					<Text style={{ width: "40%" }}>
						KamayaKya VIP+ 1 year subscription
					</Text>
					<Text style={{ width: "20%" }}>₹ 12711.86</Text>
				</View>
        <View
					style={{
						display: "flex",
						flexDirection: "row",
						padding: "5%",
						gap: "50px",
					}}
				>
					<Text style={{ width: "40%" }}>
						Sub Total =
					</Text>
					<Text style={{ width: "20%" }}>Rs. 12,711.86/-</Text>
				</View>
        <View
					style={{
						display: "flex",
						flexDirection: "row",
						padding: "5%",
						gap: "50px",
					}}
				>
					<Text style={{ width: "40%" }}>
						GST(18%) =
					</Text>
					<Text style={{ width: "20%" }}>Rs. 2,288/-</Text>
				</View>
		</Page>
	</Document>
);

export default InvoicePDF;
