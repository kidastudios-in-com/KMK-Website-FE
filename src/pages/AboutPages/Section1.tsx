import { Divider } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section1 = () => {
  return (
    <section
      style={{
        width: "100vw",
        background: "#edf6f8",
        padding: "140px 15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Divider
            sx={{
              width: "120px",
              backgroundColor: "#ff9f24",
              height: "5px",
              borderRadius: "200px",
            }}
          />
          <Text
            b
            size={55}
            css={{
              textAlign: "center",
              lineHeight: 1,
              mt: "15px",
              mb: "5px",
              "@media only screen and (max-width: 764px)": {
                textAlign: "left",
                fontSize: 42,
                lineHeight: 1,
                marginTop: "5px",
                marginBottom: "5px",
              },
            }}
          >
            Our Story
          </Text>
        </div>
        <div style={{ width: "100%", paddingTop: "20px" }}>
          <Text
            b
            size={24}
            css={{
              textAlign: "center",
              lineHeight: 1.15,
              "@media only screen and (max-width: 764px)": {
                textAlign: "left",
                fontSize: 18,
                lineHeight: 1,
              },
            }}
          >
            KamayaKya focuses on the Small-Cap segment, which can yield huge
            returns if invested in the right companies. They provide data-driven
            research to recommend top-notch stocks in the SME, Micro-cap, and
            Small-Cap segment. They carefully select these stocks after
            analyzing factors such as cash flow, growth, management quality, and
            more. They do not use technical analysis but instead focus on
            fundamental triggers such as capacity expansion and favorable
            policies. KamayaKya provides concise and detailed reports in
            multiple languages, allowing you to do a background check before
            investing.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Section1;