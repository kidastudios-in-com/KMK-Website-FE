import { Text, Button, Input, Card, Modal } from "@nextui-org/react";
import React, { useEffect, useState, useContext } from "react";
import { GET_USER, EDIT_USER, SUBSCRIPTION_HISTORY } from "../api/URLs";
import { RiEdit2Fill } from "react-icons/ri";
import AuthContext from "@/components/AuthContext";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Login from "@/components/Login";
import PhoneInput from "react-phone-input-2";

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [editingRef, setEditingREf] = useState(false);
    const [newName, setNewName] = useState("");
    const [saved, setSaved] = useState(false);
    const { isLoggedIn } = useContext(AuthContext);
    const [newReferralCode, setNewReferralCode] = useState("");
    const [referralCodeSaved, setReferralCodeSaved] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [billingName, setBillingName] = useState("");
    const [billingEmail, setBillingEmail] = useState("");
    const [billingNumber, setBillingNumber] = useState("");
    const [gstNo, setGstNo] = useState("");

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
                    // console.log(data);
                } catch (error) {
                    console.error("Error fetching user details:", error);
                }
            };
            fetchUserDetails();
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const fetchSubscription = async () => {
            try {
                const refreshToken = localStorage.getItem("refresh");
                const response = await fetch(SUBSCRIPTION_HISTORY, {
                    method: "GET",
                    headers: {
                        Authorization: `Token ${refreshToken}`,
                    },
                });
                const data = await response.json();
                setSubscription(data.list_of_subscriptions);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        fetchSubscription();
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
                body: JSON.stringify({ name: newName, referral: "" }),
            });
            const data = await response.json();
            setUser(data);
            setSaved(true);
            setEditing(false);
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    const handleSaveReferralCode = async () => {
        try {
            const refreshToken = localStorage.getItem("refresh");
            const response = await fetch(EDIT_USER, {
                method: "PUT",
                headers: {
                    Authorization: `Token ${refreshToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    referral: newReferralCode,
                    name: user.name ? user.name : newName,
                }),
            });
            const data = await response.json();
            setUser(data);
            setSaved(true);
            setEditing(false);
            setReferralCodeSaved(true); // Set referralCodeSaved to true
        } catch (error) {
            console.error("Error updating referral code:", error);
        }
    };

    const handleEditReferralCode = () => {
        if (!user?.referral) {
            setEditingREf(true);
            setNewReferralCode(user?.referral || "");
        }
    };

    const handleCancelReferralCode = () => {
        setEditingREf(false);
    };

    if (!user) {
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
                            width: "100vw",
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
                        sx={{
                            width: "50%",
                            height: "auto",
                            "@media only screen and (max-width: 764px)": {
                                width: "90vw !important",
                            },
                        }}
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
                                    marginBottom: "10px",
                                    marginTop: "10px",
                                    height: "55px",
                                    width: "100%",
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

    return (
        <section
            style={{ paddingTop: "0px", paddingBottom: "100px", background: "#fff" }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    // maxWidth: '80rem',
                }}
            >
                <Text
                    b
                    size={70}
                    css={{
                        marginTop: "10vh",
                        marginBottom: "40px",
                        // width: "90%",
                        maxWidth: "80rem" /* 1280px */,
                        textAlign: "center",
                        lineHeight: 1.2,
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        "@media only screen and (max-width: 764px)": {
                            fontSize: 45,
                            lineHeight: 1.1,
                            paddingLeft: "5px",
                            paddingRight: "5px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            maxWidth: "100%",
                            textAlign: "left",
                        },
                    }}
                >
                    Your profile
                </Text>
                <div
                    style={{
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "0px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            // border: "1px solid lightgrey",
                            borderRadius: "10000px",
                            padding: "0px 10px",
                            width: "100vw",
                            maxWidth: "600px",
                            height: "fit-content",
                        }}
                    >
                        {/*{editing ? (*/}
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "5px",
                            }}
                        >
                            <Text b size={15} style={{ paddingLeft: "20px" }}>
                                Full Name
                            </Text>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    rowGap: "20px",
                                    columnGap: "20px",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    // border: "1px solid lightgrey",
                                }}
                            >
                                <Input
                                    // underlined
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    css={{
                                        marginRight: "0px",
                                        width: "62.5%",
                                        border: "none",
                                        "@media only screen and (max-width: 764px)": {
                                            width: "100vw",
                                            marginRight: "0px",
                                        },
                                    }}
                                />
                                <Button
                                    color="success"
                                    auto
                                    onClick={handleSaveProfile}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Save
                                </Button>
                                <Button
                                    color="error"
                                    auto
                                    onClick={handCancel}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Undo
                                </Button>
                            </div>
                        </div>

                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            // border: "1px solid lightgrey",
                            borderRadius: "10000px",
                            padding: "0px 10px",
                            width: "100vw",
                            maxWidth: "600px",
                            height: "fit-content",
                        }}
                    >
                        {/*{editing ? (*/}
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "5px",
                            }}
                        >
                            <Text b size={15} style={{ paddingLeft: "20px" }}>
                                Email Address
                            </Text>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    rowGap: "20px",
                                    columnGap: "20px",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    // border: "1px solid lightgrey",
                                }}
                            >
                                <Input
                                    // underlined
                                    value={billingEmail}
                                    onChange={(e) => setBillingEmail(e.target.value)}
                                    css={{
                                        marginRight: "0px",
                                        width: "62.5%",
                                        border: "none",
                                        "@media only screen and (max-width: 764px)": {
                                            width: "100vw",
                                            marginRight: "0px",
                                        },
                                    }}
                                />
                                <Button
                                    color="success"
                                    auto
                                    onClick={handleSaveProfile}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Save
                                </Button>
                                <Button
                                    color="error"
                                    auto
                                    onClick={handCancel}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Undo
                                </Button>
                            </div>
                        </div>

                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            // border: "1px solid lightgrey",
                            borderRadius: "10000px",
                            padding: "0px 10px",
                            width: "100vw",
                            maxWidth: "600px",
                            height: "fit-content",
                        }}
                    >
                        {/*{editing ? (*/}
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "5px",
                            }}
                        >
                            <Text b size={15} style={{ paddingLeft: "20px" }}>
                                GSTIN
                            </Text>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    rowGap: "20px",
                                    columnGap: "20px",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    // border: "1px solid lightgrey",
                                }}
                            >
                                <Input
                                    // underlined
                                    value={gstNo}
                                    onChange={(e) => setGstNo(e.target.value)}
                                    css={{
                                        marginRight: "0px",
                                        width: "62.5%",
                                        border: "none",
                                        "@media only screen and (max-width: 764px)": {
                                            width: "100vw",
                                            marginRight: "0px",
                                        },
                                    }}
                                />
                                <Button
                                    color="success"
                                    auto
                                    onClick={handleSaveProfile}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Save
                                </Button>
                                <Button
                                    color="error"
                                    auto
                                    onClick={handCancel}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Undo
                                </Button>
                            </div>
                        </div>

                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            // border: "1px solid lightgrey",
                            borderRadius: "10000px",
                            padding: "0px 10px",
                            width: "100vw",
                            maxWidth: "600px",
                            height: "fit-content",
                        }}
                    >
                        {/*{editing ? (*/}
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "5px",
                            }}
                        >
                            <Text b size={15} style={{ paddingLeft: "20px" }}>
                                Referral Code
                            </Text>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    rowGap: "20px",
                                    columnGap: "20px",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    // border: "1px solid lightgrey",
                                }}
                            >
                                <Input
                                    // underlined
                                    value={newReferralCode}
                                    onChange={(e) => setNewReferralCode(e.target.value)}
                                    css={{
                                        marginRight: "0px",
                                        width: "62.5%",
                                        border: "none",
                                        "@media only screen and (max-width: 764px)": {
                                            width: "100vw",
                                            marginRight: "0px",
                                        },
                                    }}
                                />
                                <Button
                                    color="success"
                                    auto
                                    onClick={handleSaveProfile}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Save
                                </Button>
                                <Button
                                    color="error"
                                    auto
                                    onClick={handCancel}
                                    css={{ marginRight: "0px", borderRadius: "10000px" }}
                                >
                                    Undo
                                </Button>
                            </div>
                        </div>

                    </div>


                </div>


                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        width: "100%",
                        maxWidth: "600px",
                        justifyContent: "flex-start",
                        gap: "20px",
                        padding: "20px",
                    }}
                >
                    {subscription ? (
                        subscription.map((sub, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    // flexWrap: 'wrap',
                                    flexDirection: "column",
                                    backgroundColor: "lightgrey",
                                    border: "1px solid lightgrey",
                                    width: "48%",
                                    borderRadius: "20px",
                                    // mr: "5px",
                                    // mt: "10px",
                                    padding: "20px",
                                }}
                                className="subscriptionTypeBox-mobile"
                            >
                                <Text b>
                                    Plan:
                                    <br />
                                    <span style={{ fontSize: "25px" }}>{sub.plan}</span>
                                </Text>
                                <br />
                                <Text b>
                                    Start Date:{" "}
                                    {`${new Date(sub.start_date).getDate()} ${new Date(
                                        sub.start_date
                                    ).toLocaleString("default", {
                                        month: "short",
                                    })} ${new Date(sub.start_date).getFullYear()}`}
                                </Text>
                                <Text b>
                                    End Date:{" "}
                                    {sub.end_date
                                        ? `${new Date(sub.end_date).getDate()} ${new Date(
                                            sub.end_date
                                        ).toLocaleString("default", {
                                            month: "short",
                                        })} ${new Date(sub.end_date).getFullYear()}`
                                        : "N/A"}
                                </Text>
                            </Box>
                        ))
                    ) : (
                        <Text>No subscriptions found</Text>
                    )}
                </Box>
                <Button
                    css={{
                        width: "90%",
                        maxWidth: "600px",
                        background: "#fda629",
                        margin: "0px 20px",
                        borderRadius: "1000px",
                    }}
                >
                    Get Invoice
                </Button>
            </div>
        </section>
    );
};

export default UserDetails;