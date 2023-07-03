import { Text, Button, Input, Card, Modal } from "@nextui-org/react";
import React, { useEffect, useState, useContext } from "react";
import { GET_USER, EDIT_USER, SUBSCRIPTION_HISTORY } from "../api/URLs";
import { RiEdit2Fill } from "react-icons/ri";
import AuthContext from "@/components/AuthContext";
import { Box } from "@mui/material";

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
          console.log(data);
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

  const handleSaveReferralCode = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh");
      const response = await fetch(EDIT_USER, {
        method: "PUT",
        headers: {
          Authorization: `Token ${refreshToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ referral: newReferralCode }),
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
              // paddingRight: "75px",
            }}
          >
            {/*<Text*/}
            {/*  b*/}
            {/*  size={26}*/}
            {/*  css={{*/}
            {/*    lineHeight: 1.4,*/}
            {/*    textAlign: "left",*/}
            {/*    paddingBottom: "35px",*/}
            {/*    paddingTop: "35px",*/}
            {/*    "@media only screen and (max-width: 764px)": {*/}
            {/*      textAlign: "left",*/}
            {/*      fontSize: 25,*/}
            {/*      lineHeight: 1.2,*/}
            {/*      paddingLeft: "10px",*/}
            {/*      paddingRight: "10px",*/}
            {/*    },*/}
            {/*  }}*/}
            {/*>*/}
            {/*  */}
            {/*</Text>*/}
            <Button
              auto
              // size={"xl"}/
              onPress={() => setVisible(true)}
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
        }}
      >
        <Text
          b
          size={70}
          css={{
            marginTop: "40px",
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
              marginTop: "0px",
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
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid lightgrey",
              borderRadius: "10000px",
              padding: "10px 1px 10px 20px",
              width: "95vw",
              maxWidth: "500px",
              height: "65px",
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
                  css={{
                    background: "lightgrey",
                    borderRadius: "10000px",
                    fontSize: 20,
                    width: "60px",
                    height: "60px",
                    color: "grey",
                  }}
                >
                  <RiEdit2Fill />
                </Button>
              </>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid lightgrey",
              borderRadius: "10000px",
              padding: "10px 20px",
              width: "95vw",
              maxWidth: "500px",
              height: "65px",
            }}
          >
            <Text b size={20}>
              Subscription:
              {user.active_subscription ? user.active_subscription : "N/A"}
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid lightgrey",
              borderRadius: "10000px",
              padding: "10px 1px 10px 20px",
              width: "95vw",
              maxWidth: "500px",
              height: "65px",
            }}
          >
            {editingRef && !user?.referral ? (
              <>
                <Text b size={20}>
                  Referral Code:
                </Text>
                <Input
                  underlined
                  value={newReferralCode}
                  onChange={(e) => setNewReferralCode(e.target.value)}
                  css={{ marginRight: "10px" }}
                />
                <Button
                  color="success"
                  auto
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure? Once saved, it cannot be edited again."
                      )
                    ) {
                      handleSaveReferralCode();
                    }
                  }}
                  css={{ marginRight: "5px" }}
                >
                  Save
                </Button>
                <Button color="error" auto onClick={handleCancelReferralCode}>
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Text b size={20} css={{ marginRight: "20px" }}>
                  Referral Code: {user?.referral ? user.referral : "N/A"}
                </Text>
                {!user?.referral && (
                  <Button
                    onClick={handleEditReferralCode}
                    auto
                    css={{
                      background: "lightgrey",
                      borderRadius: "10000px",
                      fontSize: 20,
                      width: "60px",
                      height: "60px",
                      color: "grey",
                    }}
                  >
                    <RiEdit2Fill />
                  </Button>
                )}
                {referralCodeSaved && (
                  <Text css={{ color: "green", marginLeft: "10px" }}>
                    Referral code saved! Editing is disabled.
                  </Text>
                )}
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid lightgrey",
              borderRadius: "10000px",
              padding: "10px 20px",
              width: "95vw",
              maxWidth: "500px",
              height: "65px",
            }}
          >
            {user.end_date ? (
              <>
                <Text b size={20}>
                  Expire On: {new Date(user.end_date).toLocaleString()}
                </Text>
                <Text b size={20}>
                  {" | "}
                  Days Left:{" "}
                  {user?.end_date
                    ? Math.floor(
                        (new Date(user.end_date).getTime() -
                          new Date().getTime()) /
                          (1000 * 60 * 60 * 24)
                      )
                    : "N/A"}
                </Text>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <Box sx={{ display: "flex" }}>
          {subscription ? (
            subscription.map((sub, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid",
                  mr: "5px",
                  mt: "10px",
                  padding: "10px",
                }}
              >
                <Text b>Plan: {sub.plan}</Text>
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
        <Button css={{ background: "#fda629", marginTop: "20px" }}>
          Get Invoice
        </Button>
      </div>
    </section>
  );
};

export default UserDetails;
