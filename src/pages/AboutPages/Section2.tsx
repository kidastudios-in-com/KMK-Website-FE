import { Box } from "@mui/material";
import { Text } from "@nextui-org/react";
import React from "react";

const Section2 = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: "110px",
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
          padding: "0 15px",
        }}
      >
        <Text
          b
          size={60}
          css={{
            textAlign: "center",
            paddingBottom: "30px",
            "@media only screen and (max-width: 764px)": {
              textAlign: "left",
              fontSize: 45,
              lineHeight: 1,
              paddingBottom: "10px",
              alignSelf: "flex-start",
              marginTop: "-30px",
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
              fontSize: 20,
              lineHeight: 1.1,
            },
          }}
        >
          One of our primary goals is to minimize risks for our clients. To
          achieve this, we filter out the noise of the market and focus solely
          on reliable data and research. By doing so, we ensure that our
          recommendations are based on solid foundations, reducing the potential
          risks associated with investing in these hidden gems.
        </Text>
        <Box
          sx={{
            marginTop: "70px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "80rem",
            justifyContent: "center",
            gap: "50px",
            "@media only screen and (max-width: 764px)": {
              gap: "10px",
              marginTop: "50px",
              justifyContent: "flex-start",
            },
          }}
        >
          {/* Person 1 */}
          {/*<Box*/}
          {/*  sx={{*/}
          {/*    display: "flex",*/}
          {/*    flexDirection: "column",*/}
          {/*    marginBottom: "80px",*/}
          {/*    maxWidth: "300px",*/}
          {/*    alignItems: "flex-start",*/}
          {/*    "@media only screen and (max-width: 764px)": {*/}
          {/*      width: "100%",*/}
          {/*      // height: "500px",*/}
          {/*      marginBottom: "20px",*/}
          {/*      maxWidth: "350px",*/}
          {/*    },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <img*/}
          {/*    src="https://www.greenapplewellness.com.au/wp-content/uploads/image-placeholder-350x350-1.png"*/}
          {/*    alt="Dhiren Shah | KamayaKya Wealth Management"*/}
          {/*    // width="100%";*/}
          {/*    className="pfpTeam-mobile"*/}
          {/*    style={{*/}
          {/*      height: "350px",*/}
          {/*      // maxHeight: "350px",*/}
          {/*      // maxWidth: "250px",*/}
          {/*      width: "250px",*/}
          {/*      objectFit: "cover",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      width: "40px",*/}
          {/*      height: "4px",*/}
          {/*      backgroundColor: "#FF9E24",*/}
          {/*      marginTop: "20px",*/}
          {/*      marginBottom: "7.5px",*/}
          {/*      borderRadius: "1000px",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={28}*/}
          {/*    css={{*/}
          {/*      marginTop: 0,*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.1,*/}
          {/*        fontSize: 35,*/}
          {/*        marginTop: "5px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Dhiren Shah*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={16}*/}
          {/*    css={{*/}
          {/*      lineHeight: 1,*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.1,*/}
          {/*        fontSize: 17.5,*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    (Director & Co-Founder)*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    size={15}*/}
          {/*    css={{*/}
          {/*      lineHeight: 1.2,*/}
          {/*      maxWidth: "250px",*/}
          {/*      marginTop: "10px",*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.2,*/}
          {/*        fontSize: 17.5,*/}
          {/*        maxWidth: "100%",*/}
          {/*        marginTop: "10px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    For the past 25 years, Dhiren has been an enthusiastic equity*/}
          {/*    investor who possesses a strong passion for small-cap stocks.*/}
          {/*    Additionally, he manages well-established businesses within the{" "}*/}
          {/*    e-Commerce, Animation Software, and Media sectors.*/}
          {/*  </Text>*/}
          {/*</Box>*/}
          {/* Person 2 */}
          {/*<Box*/}
          {/*  sx={{*/}
          {/*    display: "flex",*/}
          {/*    flexDirection: "column",*/}
          {/*    marginBottom: "80px",*/}
          {/*    maxWidth: "300px",*/}
          {/*    alignItems: "flex-start",*/}
          {/*    "@media only screen and (max-width: 764px)": {*/}
          {/*      width: "100%",*/}
          {/*      // height: "500px",*/}
          {/*      marginBottom: "20px",*/}
          {/*      maxWidth: "350px",*/}
          {/*    },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <img*/}
          {/*    src="https://www.greenapplewellness.com.au/wp-content/uploads/image-placeholder-350x350-1.png"*/}
          {/*    alt="Nitya Shah | KamayaKya Wealth Management"*/}
          {/*    // width="100%";*/}
          {/*    className="pfpTeam-mobile"*/}
          {/*    style={{*/}
          {/*      height: "350px",*/}
          {/*      // maxHeight: "350px",*/}
          {/*      // maxWidth: "250px",*/}
          {/*      width: "250px",*/}
          {/*      objectFit: "cover",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      width: "40px",*/}
          {/*      height: "4px",*/}
          {/*      backgroundColor: "#FF9E24",*/}
          {/*      marginTop: "20px",*/}
          {/*      marginBottom: "7.5px",*/}
          {/*      borderRadius: "1000px",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={28}*/}
          {/*    css={{*/}
          {/*      marginTop: 0,*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.1,*/}
          {/*        fontSize: 35,*/}
          {/*        marginTop: "5px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Nitya Shah*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={16}*/}
          {/*    css={{*/}
          {/*      lineHeight: 1,*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.1,*/}
          {/*        fontSize: 17.5,*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    (Director & Co-Founder)*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    size={15}*/}
          {/*    css={{*/}
          {/*      lineHeight: 1.2,*/}
          {/*      maxWidth: "250px",*/}
          {/*      marginTop: "10px",*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.2,*/}
          {/*        fontSize: 17.5,*/}
          {/*        maxWidth: "100%",*/}
          {/*        marginTop: "10px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Nitya, currently in the final year of M.Com, is a CFA Level 2*/}
          {/*    candidate. With a solid 5-year background in investing, Nitya has*/}
          {/*    also gained valuable experience in product development and*/}
          {/*    investment research during a 2-year tenure at an Investment*/}
          {/*    Advisory firm.*/}
          {/*  </Text>*/}
          {/*</Box>*/}
          {/* Person 3 */}
          {/*<Box*/}
          {/*  sx={{*/}
          {/*    display: "flex",*/}
          {/*    flexDirection: "column",*/}
          {/*    marginBottom: "80px",*/}
          {/*    maxWidth: "300px",*/}
          {/*    alignItems: "flex-start",*/}
          {/*    "@media only screen and (max-width: 764px)": {*/}
          {/*      width: "100%",*/}
          {/*      // height: "500px",*/}
          {/*      marginBottom: "20px",*/}
          {/*      maxWidth: "350px",*/}
          {/*    },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <img*/}
          {/*    src="https://www.greenapplewellness.com.au/wp-content/uploads/image-placeholder-350x350-1.png"*/}
          {/*    alt="Aniket Kulkarni | KamayaKya Wealth Management"*/}
          {/*    // width="100%";*/}
          {/*    className="pfpTeam-mobile"*/}
          {/*    style={{*/}
          {/*      height: "350px",*/}
          {/*      // maxHeight: "350px",*/}
          {/*      // maxWidth: "250px",*/}
          {/*      width: "250px",*/}
          {/*      objectFit: "cover",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      width: "40px",*/}
          {/*      height: "4px",*/}
          {/*      backgroundColor: "#FF9E24",*/}
          {/*      marginTop: "20px",*/}
          {/*      marginBottom: "7.5px",*/}
          {/*      borderRadius: "1000px",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={28}*/}
          {/*    css={{*/}
          {/*      marginTop: 0,*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.1,*/}
          {/*        fontSize: 35,*/}
          {/*        marginTop: "5px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Aniket Kulkarni*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    b*/}
          {/*    size={16}*/}
          {/*    css={{*/}
          {/*      lineHeight: 1,*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.1,*/}
          {/*        fontSize: 17.5,*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    (Director & Co-Founder)*/}
          {/*  </Text>*/}
          {/*  <Text*/}
          {/*    size={15}*/}
          {/*    css={{*/}
          {/*      lineHeight: 1.2,*/}
          {/*      maxWidth: "250px",*/}
          {/*      marginTop: "10px",*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        lineHeight: 1.2,*/}
          {/*        fontSize: 17.5,*/}
          {/*        maxWidth: "100%",*/}
          {/*        marginTop: "10px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    With a wealth of entrepreneurial experience spanning over 10 years*/}
          {/*    in sports and internet businesses, Aniket also boasts more than 3*/}
          {/*    years of expertise in equity research and over 5 years in the*/}
          {/*    field of investing.*/}
          {/*  </Text>*/}
          {/*</Box>*/}

          {/* Person 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 764px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
                maxWidth: "350px",
              },
            }}
          >
            <img
              src="https://www.greenapplewellness.com.au/wp-content/uploads/image-placeholder-350x350-1.png"
              alt="Dhiren Shah | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "265px",
                // maxHeight: "350px",
                // maxWidth: "265pxpx",
                width: "265px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: "#FF9E24",
                marginTop: "20px",
                marginBottom: "7.5px",
                borderRadius: "1000px",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 0,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 35,
                  marginTop: "5px",
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
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 17.5,
                },
              }}
            >
              (Director & Co-Founder)
            </Text>
            <Text
              size={15}
              css={{
                lineHeight: 1.2,
                maxWidth: "265px",
                marginTop: "10px",
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.2,
                  fontSize: 17.5,
                  maxWidth: "100%",
                  marginTop: "10px",
                },
              }}
            >
              For the past 25 years, Dhiren has been an enthusiastic equity
              investor who possesses a strong passion for small-cap stocks.
              Additionally, he manages well-established businesses within the
              e-Commerce, Animation Software, and Media sectors.
            </Text>
          </Box>

          {/* Person 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 764px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
                maxWidth: "350px",
              },
            }}
          >
            <img
              src="/nityaShah.jpg"
              alt="Nitya Shah | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "265px",
                // maxHeight: "350px",
                // maxWidth: "265pxpx",
                width: "265px",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: "#FF9E24",
                marginTop: "20px",
                marginBottom: "7.5px",
                borderRadius: "1000px",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 0,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 35,
                  marginTop: "5px",
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
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 17.5,
                },
              }}
            >
              (Director & Co-Founder)
            </Text>
            <Text
              size={15}
              css={{
                lineHeight: 1.2,
                maxWidth: "265px",
                marginTop: "10px",
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.2,
                  fontSize: 17.5,
                  maxWidth: "100%",
                  marginTop: "10px",
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
          {/* Person 3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 764px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
                maxWidth: "350px",
              },
            }}
          >
            <img
              src="/aniketKulkarni.JPG"
              alt="Aniket Kulkarni | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "265px",
                // maxHeight: "350px",
                // maxWidth: "265pxpx",
                width: "265px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: "#FF9E24",
                marginTop: "20px",
                marginBottom: "7.5px",
                borderRadius: "1000px",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 0,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 35,
                  marginTop: "5px",
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
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 17.5,
                },
              }}
            >
              (Director & Co-Founder)
            </Text>
            <Text
              size={15}
              css={{
                lineHeight: 1.2,
                maxWidth: "265px",
                marginTop: "10px",
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.2,
                  fontSize: 17.5,
                  maxWidth: "100%",
                  marginTop: "10px",
                },
              }}
            >
              With a wealth of entrepreneurial experience spanning over 10 years
              in sports and internet businesses, Aniket also boasts more than 3
              years of expertise in equity research and over 5 years in the
              field of investing.
            </Text>
          </Box>
          {/* Person 4 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 764px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
                maxWidth: "350px",
              },
            }}
          >
            <img
              src="/tusharRaghate.JPG"
              alt="Tushar Raghatate | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "265px",
                // maxHeight: "350px",
                // maxWidth: "265pxpx",
                width: "265px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: "#FF9E24",
                marginTop: "20px",
                marginBottom: "7.5px",
                borderRadius: "1000px",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 0,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 35,
                  marginTop: "5px",
                },
              }}
            >
              Tushar Raghatate
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 17.5,
                },
              }}
            >
              (Equity Research Analyst)
            </Text>
            <Text
              size={15}
              css={{
                lineHeight: 1.2,
                maxWidth: "265px",
                marginTop: "10px",
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.2,
                  fontSize: 17.5,
                  maxWidth: "100%",
                  marginTop: "10px",
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
          {/* Person 5 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 764px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
                maxWidth: "350px",
              },
            }}
          >
            <img
              src="/tusharRaghate.JPG"
              alt="Tushar Raghatate | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "265px",
                // maxHeight: "350px",
                // maxWidth: "265pxpx",
                width: "265px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: "#FF9E24",
                marginTop: "20px",
                marginBottom: "7.5px",
                borderRadius: "1000px",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 0,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 35,
                  marginTop: "5px",
                },
              }}
            >
              Tushar Raghatate
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 17.5,
                },
              }}
            >
              (Equity Research Analyst)
            </Text>
            <Text
              size={15}
              css={{
                lineHeight: 1.2,
                maxWidth: "265px",
                marginTop: "10px",
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.2,
                  fontSize: 17.5,
                  maxWidth: "100%",
                  marginTop: "10px",
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
          {/* Person 6 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "80px",
              maxWidth: "300px",
              alignItems: "flex-start",
              "@media only screen and (max-width: 764px)": {
                width: "100%",
                // height: "500px",
                marginBottom: "20px",
                maxWidth: "350px",
              },
            }}
          >
            <img
              src="/tusharRaghate.JPG"
              alt="Tushar Raghatate | KamayaKya Wealth Management"
              // width="100%";
              className="pfpTeam-mobile"
              style={{
                height: "265px",
                // maxHeight: "350px",
                // maxWidth: "265pxpx",
                width: "265px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "4px",
                backgroundColor: "#FF9E24",
                marginTop: "20px",
                marginBottom: "7.5px",
                borderRadius: "1000px",
              }}
            />
            <Text
              b
              size={28}
              css={{
                marginTop: 0,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 35,
                  marginTop: "5px",
                },
              }}
            >
              Tushar Raghatate
            </Text>
            <Text
              b
              size={16}
              css={{
                lineHeight: 1,
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.1,
                  fontSize: 17.5,
                },
              }}
            >
              (Equity Research Analyst)
            </Text>
            <Text
              size={15}
              css={{
                lineHeight: 1.2,
                maxWidth: "265px",
                marginTop: "10px",
                "@media only screen and (max-width: 764px)": {
                  lineHeight: 1.2,
                  fontSize: 17.5,
                  maxWidth: "100%",
                  marginTop: "10px",
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
          {/*  <Box*/}
          {/*    sx={{*/}
          {/*      display: "flex",*/}
          {/*      flexDirection: "column",*/}
          {/*      marginBottom: "80px",*/}
          {/*      maxWidth: "300px",*/}
          {/*      alignItems: "flex-start",*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        width: "98%",*/}
          {/*        // height: "500px",*/}
          {/*        marginBottom: "20px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      src="https://kamayakya.com/nitya-shah.webp"*/}
          {/*      alt="Nitya Shah | KamayaKya Wealth Management"*/}
          {/*      className="pfpTeam-mobile"*/}
          {/*      style={{*/}
          {/*        height: "350px",*/}
          {/*        maxHeight: "350px",*/}
          {/*        maxWidth: "250px",*/}
          {/*        width: "250px",*/}
          {/*        objectFit: "cover",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Text*/}
          {/*      b*/}
          {/*      size={28}*/}
          {/*      css={{*/}
          {/*        marginTop: 10,*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 20,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      Nitya Shah*/}
          {/*    </Text>*/}
          {/*    <Text*/}
          {/*      b*/}
          {/*      size={17}*/}
          {/*      css={{*/}
          {/*        lineHeight: 1,*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 13,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      (Director & Co-Founder)*/}
          {/*    </Text>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        width: "40px",*/}
          {/*        height: "4px",*/}
          {/*        backgroundColor: "#FF9E24",*/}
          {/*        marginTop: "10px",*/}
          {/*        marginBottom: "10px",*/}
          {/*        borderRadius: "1000px",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Text*/}
          {/*      size={19}*/}
          {/*      css={{*/}
          {/*        lineHeight: 1.2,*/}
          {/*        maxWidth: "250px",*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 13,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      Nitya, currently in the final year of M.Com, is a CFA Level 2*/}
          {/*      candidate. With a solid <b>5-year background in investing</b>,*/}
          {/*      Nitya has also gained valuable experience in product development*/}
          {/*      and investment research during a{" "}*/}
          {/*      <b>2-year tenure at an Investment Advisory firm.</b>*/}
          {/*    </Text>*/}
          {/*  </Box>*/}
          {/*  <Box*/}
          {/*    sx={{*/}
          {/*      display: "flex",*/}
          {/*      flexDirection: "column",*/}
          {/*      marginBottom: "80px",*/}
          {/*      maxWidth: "300px",*/}
          {/*      alignItems: "flex-start",*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        width: "98%",*/}
          {/*        // height: "500px",*/}
          {/*        marginBottom: "20px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      src="https://kamayakya.com/aniket-kulkarni.webp"*/}
          {/*      alt="Aniket Kulkarni | KamayaKya Wealth Management"*/}
          {/*      width="100%"*/}
          {/*      className="pfpTeam-mobile"*/}
          {/*      style={{*/}
          {/*        height: "350px",*/}
          {/*        maxHeight: "350px",*/}
          {/*        maxWidth: "250px",*/}
          {/*        width: "250px",*/}
          {/*        objectFit: "cover",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Text*/}
          {/*      b*/}
          {/*      size={28}*/}
          {/*      css={{*/}
          {/*        marginTop: 10,*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 20,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      Aniket Kulkarni*/}
          {/*    </Text>*/}
          {/*    <Text*/}
          {/*      b*/}
          {/*      size={16}*/}
          {/*      css={{*/}
          {/*        lineHeight: 1,*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 13,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      (Director & Co-Founder)*/}
          {/*    </Text>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        width: "40px",*/}
          {/*        height: "4px",*/}
          {/*        backgroundColor: "#FF9E24",*/}
          {/*        marginTop: "10px",*/}
          {/*        marginBottom: "10px",*/}
          {/*        borderRadius: "1000px",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Text*/}
          {/*      size={19}*/}
          {/*      css={{*/}
          {/*        lineHeight: 1.2,*/}
          {/*        maxWidth: "250px",*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 13,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      With a wealth of{" "}*/}
          {/*      <b>entrepreneurial experience spanning over 10 years</b> in sports*/}
          {/*      and internet businesses, Aniket also boasts more than{" "}*/}
          {/*      <b>*/}
          {/*        3 years of expertise in equity research and over 5 years in the*/}
          {/*        field of investing.*/}
          {/*      </b>*/}
          {/*    </Text>*/}
          {/*  </Box>*/}
          {/*  <Box*/}
          {/*    sx={{*/}
          {/*      display: "flex",*/}
          {/*      flexDirection: "column",*/}
          {/*      marginBottom: "80px",*/}
          {/*      maxWidth: "300px",*/}
          {/*      alignItems: "flex-start",*/}
          {/*      "@media only screen and (max-width: 764px)": {*/}
          {/*        width: "98%",*/}
          {/*        // height: "500px",*/}
          {/*        marginBottom: "20px",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      src="https://kamayakya.com/tushar-raghatate.webp"*/}
          {/*      alt="KamayaKya Wealth Management"*/}
          {/*      width="100%"*/}
          {/*      className="pfpTeam-mobile"*/}
          {/*      style={{*/}
          {/*        height: "350px",*/}
          {/*        maxHeight: "350px",*/}
          {/*        maxWidth: "250px",*/}
          {/*        width: "250px",*/}
          {/*        objectFit: "cover",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Text*/}
          {/*      b*/}
          {/*      size={28}*/}
          {/*      css={{*/}
          {/*        marginTop: 10,*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 20,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      Tushar Raghatate*/}
          {/*    </Text>*/}
          {/*    <Text*/}
          {/*      b*/}
          {/*      size={16}*/}
          {/*      css={{*/}
          {/*        lineHeight: 1.2,*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 13,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      (Equity Research Analyst)*/}
          {/*    </Text>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        width: "40px",*/}
          {/*        height: "4px",*/}
          {/*        backgroundColor: "#FF9E24",*/}
          {/*        marginTop: "10px",*/}
          {/*        marginBottom: "10px",*/}
          {/*        borderRadius: "1000px",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Text*/}
          {/*      size={19}*/}
          {/*      css={{*/}
          {/*        lineHeight: 1.2,*/}
          {/*        maxWidth: "250px",*/}
          {/*        "@media only screen and (max-width: 764px)": {*/}
          {/*          lineHeight: 1.1,*/}
          {/*          fontSize: 13,*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      With over <b>2 years of experience</b>, Tushar possesses a deep*/}
          {/*      understanding of diverse sectors such as{" "}*/}
          {/*      <b>*/}
          {/*        capital goods, building materials, infrastructure, cement,*/}
          {/*        steel, power, and consumer durables.*/}
          {/*      </b>*/}
          {/*    </Text>*/}
          {/*  </Box>*/}
        </Box>
      </div>
    </section>
  );
};

export default Section2;
