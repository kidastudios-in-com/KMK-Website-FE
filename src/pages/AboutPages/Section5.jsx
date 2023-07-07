import { Box } from "@mui/material";
import { Button, Dropdown, Modal, Text, useModal } from "@nextui-org/react";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useState } from "react/react.shared-subset";

const Section5 = () => {
  const { setVisible, bindings } = useModal();
  const [selectedPDF, setSelectedPDF] = useState(new Set(["SampleReport.pdf"]));

  const PdfValue = React.useMemo(
    () => Array.from(selectedPDF)[0]?.replaceAll("_", " ") || "",
    [selectedPDF]
  );
  return (
    <section
      style={{
        width: "100vw",
        // backgroundColor: "white",
        background: "#fafafa",
        paddingTop: "30px",
        paddingBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "80rem",
          display: "flex",
          flexDirection: "row",
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
            flexDirection: "column",
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
            src="https://kamayakya.com/KamayaKya%20Receommendations%20-%20Value%20Prop.mp4"
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
            paddingLeft: "75px",
            // paddingRight: "75px",
          }}
        >
          <Text
            b
            size={26}
            css={{
              lineHeight: 1.4,
              textAlign: "left",
              paddingBottom: "35px",
              paddingTop: "35px",
              "@media only screen and (max-width: 764px)": {
                textAlign: "left",
                fontSize: 25,
                lineHeight: 1.2,
                paddingLeft: "10px",
                paddingRight: "10px",
              },
            }}
          >
            <span style={{ fontSize: "18px", opacity: "0.75" }}>
              KamayaKya recommendations
            </span>
            <br />
            <span style={{ fontSize: "35px", fontWeight: "normal" }}>
              Subscribe to our best picks
            </span>
            <br />
            <br />
            <span style={{ fontSize: "22px", opacity: "0.75" }}>
              We only recommend stocks that we personally are willing to invest
              in. We research rigorously, so you don't have to.
            </span>
          </Text>
          {/*<Button*/}
          {/*  auto*/}
          {/*  // size={"xl"}/*/}
          {/*  onPress={() => setVisible(true)}*/}
          {/*  css={{*/}
          {/*    borderRadius: "10000px",*/}
          {/*    marginTop: 0,*/}
          {/*    backgroundColor: "#ff9f24",*/}
          {/*    zIndex: 0,*/}
          {/*    paddingLeft: 50,*/}
          {/*    paddingRight: 50,*/}
          {/*    height: "60px",*/}
          {/*    width: "90px",*/}
          {/*    "@media only screen and (max-width: 764px)": {*/}
          {/*      borderRadius: "15px",*/}
          {/*      paddingLeft: 15,*/}
          {/*      paddingRight: 15,*/}
          {/*      marginLeft: 0,*/}
          {/*      marginBottom: 0,*/}
          {/*      marginTop: "10px",*/}
          {/*      height: "55px",*/}
          {/*      width: "250px",*/}
          {/*    },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={20}*/}
          {/*    color="White"*/}
          {/*    css={{*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        fontSize: 18,*/}
          {/*        // padding: "1px 5px",*/}
          {/*        width: "auto",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Read our reports*/}
          {/*  </Text>*/}
          {/*</Button>*/}
          <Modal
            blur
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
            css={{
              width: "65vw",
              maxWidth: "65vw",
              alignSelf: "flex-end",
              background: "transparent",
              boxShadow: "none",
              borderRadius: "15px",
              "@media only screen and (max-width: 764px)": {
                width: "95vw !important",
                maxWidth: "95vw !important",
                maxHeight: "90vh !important",
              },
            }}
          >
            <Dropdown>
              <Dropdown.Button
                flat
                css={{
                  alignSelf: "center",
                  width: "100%",
                  backgroundColor: "#125a54",
                  color: "#fff",
                  fontSize: 19,
                  marginBottom: "20px",
                  borderRadius: "10px",
                  height: "50px",
                  "@media only screen and (max-width: 768px)": {
                    width: "100%",
                    fontSize: 15,
                    height: "50px",
                    marginBottom: "0px",
                    borderRadius: "10px 0 0",
                    "& span": {
                      // display: "none",
                    },
                  },
                }}
              >
                {PdfValue}
                {/*Report Types*/}
              </Dropdown.Button>
              <Dropdown.Menu
                // defaultSelectedKeys={'SampleReport.pdf'}
                aria-label="TimeActions"
                selectionMode="single"
                selectedKeys={selectedPDF}
                onSelectionChange={(key) => {
                  setSelectedPDF(key);
                }}
                style={{ width: "100%" }}
              >
                <Dropdown.Item key="SampleReport.pdf">
                  Half Page Report
                </Dropdown.Item>
                <Dropdown.Item
                  key="Ion Exchange Half Page Report - English.pdf"
                  css={{ width: "100vw" }}
                >
                  Ion Exchange Half Page Report - English
                </Dropdown.Item>
                <Dropdown.Item key="DetailedReport.pdf">
                  Detailed Report
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <iframe
              src={`${PdfValue}#view=FitH&toolbar=0`}
              // src={`Test1.pdf#toolbar=0`}
              style={{
                width: "100%",
                height: "75vh",
                borderColor: "transparent",
                borderRadius: "15px",
                borderWidth: "0px",
                zoom: "1",
              }}
              className="iframePdfMobile"
            />
            <Button
              flat
              onPress={() => setVisible(false)}
              css={{
                alignSelf: "end",
                width: "100%",
                backgroundColor: "#ffa12e",
                color: "#fff",
                fontSize: 19,
                marginTop: "20px",
                borderRadius: "10px",
                height: "50px",
                "@media only screen and (max-width: 768px)": {
                  width: "100%",
                  fontSize: 15,
                  height: "50px",
                  marginTop: "0px",
                  borderRadius: "0px 0px 10px",
                  "& span": {
                    // display: "none",
                  },
                },
              }}
            >
              Close
            </Button>
          </Modal>
        </Box>
      </Box>
    </section>
  );
};

export default Section5;
