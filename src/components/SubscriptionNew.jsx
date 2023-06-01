import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box, Button } from "@mui/material";
import { MdDone } from "react-icons/md";

const SubscriptionNew = () => {
	return (
		<section
			style={{
				// paddingTop: "50px",
				paddingBottom: "150px",
				display: "flex",
				maxWidth: "2000px",
				backgroundColor: "#fff",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "20px",
					alignItems: "center",
				}}
			>
				<Card
					css={{
						height: "350px",
						width: "290px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: "2px",
						boxShadow: "none",
						filter: "1px",
					}}
				>
					<Text
						b
						size={18}
						css={{ lineHeight: 1, marginTop: "15px", marginBottom: "10px" }}
					>
						Basic
					</Text>
					<Text
						b
						size={30}
						css={{ lineHeight: 1, marginTop: "5px", marginBottom: "15px" }}
					>
						Limited Access
					</Text>
					<Button
						variant="contained"
						sx={{
							background: "#373737",
							width: "60%",
							"&:hover": {
								background: "#373737",
							},
						}}
					>
						<Text b color="#fff">
							Free
						</Text>
					</Button>
					<Divider
						css={{ background: "#000000", width: "90%", marginTop: "20px" }}
					/>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							marginTop: "20px",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Stock Analysis email alerts</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Stock Record</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>3 Stock Picks</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>3 Stock Reports</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Limited access to content</Text>
					</Box>
				</Card>
				<Card
				isHoverable
					css={{
						height: "450px",
						width: "320px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: "4px",
					}}
				>
					<div
						style={{
							width: "350px",
							height: "30px",
							background: "#00d784",
							textAlign: "center",
							paddingTop: "3px",
							paddingBottom: "3px",
						}}
					>
						<Text b color="#fff" size={14}>
							LOCK IN THIS LOW PRICE NOW
						</Text>
					</div>
					<img src="kmk-k.png" style={{ marginTop: "5px" }} />
					<Text b size={20} color="#00d784">
						Only
						<span style={{ color: "#fda629", fontSize: 28 }}> ₹ 2.75</span> per
						day
					</Text>
					<Button
						variant="contained"
						sx={{
							// width: "50%",
							marginTop: "10px",
							background: "#00d784",
							paddingTop: "10px",
							paddingBottom: "10px",
							paddingLeft: "30px",
							paddingRight: "30px",
							"&:hover": {
								background: "#00d784",
							},
						}}
					>
						<Text b color="#FFF" size={18}>
							Subscribe Now
						</Text>
					</Button>
					<Text b size={14} css={{ mt: "5px" }}>
						Billed Annualy
					</Text>
					<Divider
						css={{ background: "#000000", width: "90%", marginTop: "10px" }}
					/>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							marginTop: "10px",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						All Basic features, plus:
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Unlimited Stock Picks</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Previous Stock Reports</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Custom Stock Report</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>English, Hindi, Gujarati</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Custom Stock Report</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>WhatsApp Updates</Text>
					</Box>
				</Card>
				<Card
					css={{
						height: "350px",
						width: "290px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: "2px",
						boxShadow: "none",
						filter: "1px",
					}}
				>
					<Text b size={20} css={{ marginTop: "10px", lineHeight: 1 }}>
						PRO
					</Text>
					<Text b css={{ marginTop: "10px" }}>smallcase</Text>
					<Text b size={18} css={{ lineHeight: '1' }}>
						<span style={{ fontSize: 28 }}>₹ 983</span>/month
					</Text>
					<Button
						variant="contained"
						sx={{
							marginTop: '10px',
							background: "#373737",
							width: "60%",
							"&:hover": {
								background: "#373737",
							},
						}}
					>
						<Text b color="#fff">
							Register
						</Text>
					</Button>
					<Divider
						css={{ background: "#000000", width: "90%", marginTop: "10px" }}
					/>
					<Box
						sx={{
							marginTop: '10px',
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Complete Access Stock Picks</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Methodology</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>Stock Reports</Text>
					</Box>
					<Box
						sx={{
							alignSelf: "start",
							marginLeft: "5%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MdDone style={{ marginRight: "10px" }} />
						<Text b>WhatsApp Updates</Text>
					</Box>
				</Card>
			</Box>
		</section>
	);
};

export default SubscriptionNew;
