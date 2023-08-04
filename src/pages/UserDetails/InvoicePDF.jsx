import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Divider, Table } from "@mui/material";

const styles = StyleSheet.create({
  page: {
    // fontFamily: "Helvetica",
    // padding: "20px",
    // backgroundColor: "white"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "20px",
  },
  logo: {
    height: "50px",
    // width: "200px",
  },
  invoiceTitle: {
    fontSize: 15,
    fontWeight: "bold",
    // marginLeft: "auto",
  },
  address: {
    marginBottom: "10px",
    padding: "20px",
  },
  section: {
    marginBottom: "0px",
    padding: "0px",
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
  <div style={{ backgroundColor: "#fff", padding: "10px" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <img
            src="/kmk-logo%20(1).png"
            alt="KamayaKya Logo"
            style={styles.logo}
          />
        </View>
        {/**/}
        <Divider
          style={{
            margin: "20px 5px",
            opacity: "1",
            backgroundColor: "#FE9F28",
            color: "#FE9F28",
          }}
        />
        {/**/}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <View style={{ paddingLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "27.5px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                INVOICE
              </Text>
            </View>
            <View style={{ paddingLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "15px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                INVOICE #2023-1001
              </Text>
            </View>
            <View style={{ paddingLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "15px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                DATED:{" "}
                {startDate
                  ? `${new Date(startDate).getDate()} ${new Date(
                      startDate
                    ).toLocaleString("default", {
                      month: "short",
                    })} ${new Date(startDate).getFullYear()}`
                  : formattedDate}
              </Text>
            </View>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                NAME: {fullName ? fullName : "VARUN JOGESH MEHTA"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                PHONE: {phone_number ? phone_number : "+91 9665933612"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                GSTIN: {gstin ? gstin : "27DUUPM1306J1Z9"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                REFERRAL CODE: {referralCode ? referralCode : "TEST420"}
              </Text>
            </View>
          </div>
        </div>
        {/**/}
        <Divider
          color={"#135B55"}
          style={{
            backgroundColor: "#FE9F28",
            color: "#FE9F28",
            margin: "20px 5px",
            opacity: "0",
          }}
        />
        {/**/}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              backgroundColor: "#104E54",
              padding: "10px",
              borderRight: "none",
            }}
          >
            <View style={{ paddingLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "15px",
                  color: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                ITEM DESCRIPTION
              </Text>
            </View>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignItems: "center",
              backgroundColor: "#104E54",
              padding: "10px",
              borderLeft: "1px solid white",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "15px",
                  color: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                TOTAL
              </Text>
            </View>
          </div>
        </div>
        {/*  */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              backgroundColor: "#fff",
              padding: "10px",
              border: "1px solid #104E54",
              borderRight: "none",
            }}
          >
            <View style={{ paddingLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                KAMAYAKYA VIP+ YEARLY SUBSCRIPTION
              </Text>
            </View>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "10px",
              border: "1px solid #104E54",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                ₹ 12,711.86
              </Text>
            </View>
          </div>
        </div>
        {/*  */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              backgroundColor: "#fff",
              padding: "10px",
              borderRight: "1px solid white",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              backgroundColor: "#104E54",
              padding: "10px",
              borderBottom: "1px solid white",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                SUB-TOTAL
              </Text>
            </View>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "10px",
              border: "1px solid #104E54",
              borderTop: "none",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                ₹ 12,711.86
              </Text>
            </View>
          </div>
        </div>
        {/*  */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              backgroundColor: "#fff",
              padding: "10px",
              borderRight: "1px solid white",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              backgroundColor: "#104E54",
              padding: "10px",
              borderBottom: "1px solid white",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                GST(18%)
              </Text>
            </View>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "10px",
              border: "1px solid #104E54",
              borderTop: "none",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                ₹ 2,288.14
              </Text>
            </View>
          </div>
        </div>
        {/*  */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              backgroundColor: "#fff",
              padding: "10px",
              borderRight: "1px solid white",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              backgroundColor: "#104E54",
              padding: "10px",
              borderBottom: "1px solid white",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                DISCOUNT
              </Text>
            </View>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "10px",
              border: "1px solid #104E54",
              borderTop: "none",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                -
              </Text>
            </View>
          </div>
        </div>
        {/*  */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              backgroundColor: "#fff",
              padding: "10px",
              borderRight: "1px solid white",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              backgroundColor: "#FE9F28",
              padding: "10px",
              // borderBottom: "1px solid white",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#000",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                TOTAL
              </Text>
            </View>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "10px",
              border: "1px solid #104E54",
              borderTop: "0px",
            }}
          >
            <View style={styles.section}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#104E54",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                ₹ 15,000.00
              </Text>
            </View>
          </div>
        </div>
        {/*  */}

        {/*<View style={styles.section}>*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      display: "flex",*/}
        {/*      flexDirection: "row",*/}
        {/*      padding: "5%",*/}
        {/*      gap: "50px",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Text style={{ width: "40%" }}>Item Description</Text>*/}
        {/*    <Text style={{ width: "20%" }}>Amount</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    display: "flex",*/}
        {/*    flexDirection: "row",*/}
        {/*    padding: "5%",*/}
        {/*    gap: "50px",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text style={{ width: "40%" }}>*/}
        {/*    KamayaKya VIP+ 1 year subscription*/}
        {/*  </Text>*/}
        {/*  <Text style={{ width: "20%" }}>₹ 12711.86</Text>*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    display: "flex",*/}
        {/*    flexDirection: "row",*/}
        {/*    padding: "5%",*/}
        {/*    gap: "50px",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text style={{ width: "40%" }}>Sub Total =</Text>*/}
        {/*  <Text style={{ width: "20%" }}>Rs. 12,711.86/-</Text>*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    display: "flex",*/}
        {/*    flexDirection: "row",*/}
        {/*    padding: "5%",*/}
        {/*    gap: "50px",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text style={{ width: "40%" }}>GST(18%) =</Text>*/}
        {/*  <Text style={{ width: "20%" }}>Rs. 2,288/-</Text>*/}
        {/*</View>*/}
        {/**/}
        <Divider
          color={"#135B55"}
          style={{
            backgroundColor: "#FE9F28",
            color: "#FE9F28",
            margin: "15px 0px",
            opacity: "0",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: "17.5px",
              textAlign: "center",
              color: "#0F4E54",
            }}
          >
            THANKS FOR YOUR BUSINESS!
          </Text>
        </View>
        {/**/}
        <Divider
          color={"#135B55"}
          style={{
            backgroundColor: "#FE9F28",
            color: "#FE9F28",
            margin: "30px 0px",
            opacity: "1",
          }}
        />
        {/**/}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: "10.5px",
              textAlign: "center",
              color: "#0F4E54",
            }}
          >
            S.NO.347/A/16, FLAT NO 6, NEW NIRMAL APARTMENT, F.P.189, DHOLE PATIL
            ROAD, SANGAMWADI, PUNE-411001
          </Text>
          <Text
            style={{
              fontSize: "10.5px",
              textAlign: "center",
              color: "#0F4E54",
            }}
          >
            SEBI RESEARCH ANALYST REGISTRATION NUMBER: INH000009843
          </Text>
          <Text
            style={{
              fontSize: "10.5px",
              textAlign: "center",
              color: "#0F4E54",
            }}
          >
            GST REGISTRATION NUMBER: 27AAJCK1075B1ZS
          </Text>
        </View>
        {/**/}
        <Divider
          color={"#135B55"}
          style={{
            backgroundColor: "#FE9F28",
            color: "#FE9F28",
            margin: "30px 0px",
            opacity: "1",
          }}
        />
        {/**/}
      </Page>
    </Document>
  </div>
);

export default InvoicePDF;
