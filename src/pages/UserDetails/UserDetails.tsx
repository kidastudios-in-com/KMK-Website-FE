import { Text, Button, Input, Card } from "@nextui-org/react";
import React, { useEffect, useState, useContext } from "react";
import { GET_USER, EDIT_USER } from "../api/URLs";
import { RiEdit2Fill } from "react-icons/ri";
import AuthContext from "@/components/AuthContext";

const UserDetails = () => {
	const [user, setUser] = useState<any>(null);
	const [editing, setEditing] = useState(false);
	const [newName, setNewName] = useState("");
	const [saved, setSaved] = useState(false);
	const { isLoggedIn } = useContext(AuthContext);

	useEffect(() => {
		if (isLoggedIn) {
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
				} catch (error) {
					console.error("Error fetching user details:", error);
				}
			};
			fetchUserDetails();
		}
	}, [isLoggedIn]);

	const handleEditProfile = () => {
		setEditing(true);
		setNewName(user?.name || "");
	};

	const handCancel = () => {
		setEditing(false);
	};

	const handleSaveProfile = async () => {
		try {
			const refreshToken = localStorage.getItem("refresh");
			const response = await fetch(EDIT_USER, {
				method: "PUT",
				headers: {
					Authorization: `Token ${refreshToken}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: newName }),
			});
			const data = await response.json();
			setUser(data);
			setSaved(true);
			setEditing(false);
		} catch (error) {
			console.error("Error updating user details:", error);
		}
	};

	if (!user) {
		return (
			<section
				style={{ height: "35vh", display: "flex", justifyContent: "center" }}
			>
				<Card
					css={{
						display: "flex",
						alignSelf: "center",
						width: "400px",
						background: "#fff",
						textAlign: 'center',
						fontSize: 28,
						border: '1px solid #125a54',
						borderRadius: '5px',
						color: '#ffa12e'
					}}
				>
					Please Log-In To Access Your Account Details
				</Card>
			</section>
		);
	}

	return (
		<section style={{ paddingTop: "50px", paddingBottom: "50px" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Text b size={36}>
					User Details
				</Text>
				<div
					style={{
						display: "flex",
						alignItems: "start",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							border: "1px solid black",
							borderRadius: "14px",
							padding: "8px",
						}}
					>
						{editing ? (
							<>
								<Text b size={20}>
									Name:
								</Text>
								<Input
									underlined
									value={newName}
									onChange={(e) => setNewName(e.target.value)}
									css={{ marginRight: "10px" }}
								/>
								<Button
									color="success"
									auto
									onClick={handleSaveProfile}
									css={{ marginRight: "5px" }}
								>
									Save
								</Button>
								<Button color="error" auto onClick={handCancel}>
									Cancel
								</Button>
							</>
						) : (
							<>
								<Text b size={20} css={{ marginRight: "20px" }}>
									Name: {user?.name ? user.name : "N/A"}
								</Text>
								<Button
									onClick={handleEditProfile}
									auto
									css={{ background: "#ef4958", fontSize: 18 }}
								>
									<RiEdit2Fill />
								</Button>
							</>
						)}
					</div>
					<div
						style={{
							border: "1px solid black",
							borderRadius: "14px",
							padding: "8px",
							marginTop: "10px",
						}}
					>
						<Text b size={20}>
							ID: {user?.id ? user.id : "N/A"}
						</Text>
					</div>
					<div
						style={{
							border: "1px solid black",
							borderRadius: "14px",
							padding: "8px",
							marginTop: "10px",
						}}
					>
						<Text b size={20}>
							Subscription:
							{user.active_subscription ? user.active_subscription : "N/A"}
						</Text>
					</div>
					{user.end_date ? (
						<>
							<Text b size={20}>
								Expire On: {new Date(user.end_date).toLocaleString()}
							</Text>
						</>
					) : (
						""
					)}
				</div>
				<Button css={{ background: "#fda629", marginTop: "20px" }}>
					Get Invoice
				</Button>
			</div>
		</section>
	);
};

export default UserDetails;
