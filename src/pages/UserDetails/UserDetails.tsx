import { Text, Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { GET_USER, EDIT_USER } from "../api/URLs";
import { RiEdit2Fill } from "react-icons/ri";

const UserDetails = () => {
	const [user, setUser] = useState<any>(null);
	const [editing, setEditing] = useState(false);
	const [newName, setNewName] = useState("");
	const [saved, setSaved] = useState(false);

	useEffect(() => {
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
	}, []);

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
		return <div>Loading...</div>;
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
							<Text b size={20}>Expire On: {new Date(user.end_date).toLocaleString()}</Text>
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
