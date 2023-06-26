import { Box } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section2 = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: "50px",
        paddingBottom: "60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100vw",
          maxWidth: "80rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        <Text
          b
          size={60}
          css={{
            textAlign: "center",
            "@media only screen and (max-width: 764px)": {
              textAlign: "left",
              fontSize: 52,
              lineHeight: 1,
              paddingBottom: "10px",
            },
          }}
        >
          Meet The Team
        </Text>
        <Text
          b
          size={25}
          css={{
            textAlign: "center",
            "@media only screen and (max-width: 764px)": {
              textAlign: "left",
              fontSize: 17.5,
              lineHeight: 1.1,
            },
          }}
        >
          KamayaKya was born when we saw a major opportunity in the market - the
          Small-Cap segment. If invested at the right time, these companies can
          give you massive returns. But how do you know which company will grow?
          Data-driven Research
        </Text>
        <Box
          sx={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "80rem",
            justifyContent: "center",
            gap: "25px",
            "@media only screen and (max-width: 672px)": {
              gap: "0%",
              marginTop: "50px",
              justifyContent: "flex-start",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 672px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
              },
            }}
          >
            <img
              src="https://kamayakya.com/dhiren-shah.webp"
              alt="Dhiren Shah | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "350px",
                // maxHeight: "350px",
                // maxWidth: "250px",
                width: "250px",
                objectFit: "cover",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 10,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 25,
                },
              }}
            >
              Dhiren Shah
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 16,
                },
              }}
            >
              (Director & Co-Founder)
            </Text>
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#FF9E24",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Text
              size={16}
              css={{
                lineHeight: 1.1,
                maxWidth: "250px",
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 16,
                },
              }}
            >
              For the past 25 years, Dhiren has been an enthusiastic equity
              investor who possesses a strong passion for small-cap stocks.
              Additionally, he manages well-established businesses within the
              e-Commerce, Animation Software, and Media sectors.
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 672px)": {
                width: "98%",
                // height: "500px",
                marginBottom: "20px",
              },
            }}
          >
            <img
              src="https://kamayakya.com/nitya-shah.webp"
              alt="Nitya Shah | KamayaKya Wealth Management"
              className="pfpTeam-mobile"
              style={{
                height: "350px",
                maxHeight: "350px",
                maxWidth: "250px",
                width: "250px",
                objectFit: "cover",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 10,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 20,
                },
              }}
            >
              Nitya Shah
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 13,
                },
              }}
            >
              (Director & Co-Founder)
            </Text>
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#FF9E24",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Text
              size={16}
              css={{
                lineHeight: 1.1,
                maxWidth: "250px",
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 13,
                },
              }}
            >
              Nitya, currently in the final year of M.Com, is a CFA Level 2
              candidate. With a solid 5-year background in investing, Nitya has
              also gained valuable experience in product development and
              investment research during a 2-year tenure at an Investment
              Advisory firm.
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 672px)": {
                width: "98%",
                // height: "500px",
                marginBottom: "20px",
              },
            }}
          >
            <img
              src="https://kamayakya.com/aniket-kulkarni.webp"
              alt="Aniket Kulkarni | KamayaKya Wealth Management"
              width="100%"
              className="pfpTeam-mobile"
              style={{
                height: "350px",
                maxHeight: "350px",
                maxWidth: "250px",
                width: "250px",
                objectFit: "cover",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 10,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 20,
                },
              }}
            >
              Aniket Kulkarni
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 13,
                },
              }}
            >
              (Director & Co-Founder)
            </Text>
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#FF9E24",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Text
              size={16}
              css={{
                lineHeight: 1.1,
                maxWidth: "250px",
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 13,
                },
              }}
            >
              With a wealth of entrepreneurial experience spanning over 10 years
              in sports and internet businesses, Aniket also boasts more than 3
              years of expertise in equity research and over 5 years in the
              field of investing.
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 672px)": {
                width: "98%",
                // height: "500px",
                marginBottom: "20px",
              },
            }}
          >
            <img
              src="https://kamayakya.com/tushar-raghatate.webp"
              alt="KamayaKya Wealth Management"
              width="100%"
              className="pfpTeam-mobile"
              style={{
                height: "350px",
                maxHeight: "350px",
                maxWidth: "250px",
                width: "250px",
                objectFit: "cover",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 10,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 20,
                },
              }}
            >
              Tushar Raghatate
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1.2,
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 13,
                },
              }}
            >
              (Equity Research Analyst)
            </Text>
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#FF9E24",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Text
              size={16}
              css={{
                lineHeight: 1.1,
                maxWidth: "250px",
                "@media only screen and (max-width: 672px)": {
                  lineHeight: 1.1,
                  fontSize: 13,
                },
              }}
            >
              Tushar, brings a comprehensive skill set to the table. With a
              solid background of over 2 years of experience, Tushar possesses a
              deep understanding of diverse sectors such as capital goods,
              building materials, infrastructure, cement, steel, power, and
              consumer durables.
            </Text>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default Section2;