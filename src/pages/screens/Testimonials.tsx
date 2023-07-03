import React, { useEffect, useRef } from "react";
import { Box, Avatar } from "@mui/material";
import { Text } from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      const scrollWidth = current.scrollWidth;
      const containerWidth = current.offsetWidth;

      const scroll = () => {
        if (current) {
          const scrollLeft = current.scrollLeft;
          if (scrollLeft + containerWidth >= scrollWidth) {
            current.scrollTo({
              left: 0,
              behavior: "auto",
            });
          } else {
            current.scrollTo({
              left: scrollLeft + 1,
              behavior: "auto",
            });
          }
          requestAnimationFrame(scroll);
        }
      };

      scroll();
    }
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#fff",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          maxWidth: "2000px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // maxWidth: "1300px",
            textAlign: "center",
            marginBottom: "50px",
            justifyContent: "center",
            "@media only screen and (max-width: 600px)": {
              // width: '40%',
              display: "flex",
              flexWrap: "wrap",
              marginBottom: "10px",
            },
          }}
        >
          <Text
            b
            size={60}
            css={{
              // "@media only screen and (max-width: 600px)": {
              // 	fontSize: 30,
              // 	// width: "80%",
              // 	display: "flex",
              // 	justifyContent: "center",
              // 	flexWrap: "wrap",
              // 	alignSelf: 'center',
              // },
              "@media only screen and (max-width: 768px)": {
                fontSize: 30,
                width: "70%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                alignSelf: "center",
              },
            }}
          >
            Satisfied Customers Are Our Best Ads
          </Text>
        </Box>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            // overflow: "hidden",
            whiteSpace: "nowrap",
            marginBottom: 50,
            width: "1300px",
            height: "300px",
          }}
          ref={scrollRef}
          className="scroll-box"
        >
          {[...Array(20)].map((_, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: 400,
                maxWidth: 500,
                marginRight: 5,
                height: 250,
                mt: 5,
              }}
            >
              <FaQuoteLeft color="#0f734d" size={30} />
              <Text
                b
                size={28}
                css={{
                  maxWidth: "400px",
                  whiteSpace: "normal",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "35px",
                  paddingRight: "45px",
                  lineHeight: 1.2,
                  "@media only screen and (max-width: 768px)": {
                    fontSize: 22,
                  },
                }}
              >
                Thanks to KamayaKya I can now Invest with Zero Stress and i
                recommend it to you
              </Text>
              <FaQuoteRight
                color="#0f734d"
                size={30}
                style={{ marginTop: 0, marginRight: 20, alignSelf: "end" }}
              />
              <div
                style={{
                  marginTop: -10,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  sx={{ width: 30, height: 30 }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Text b size={22} color="#888888" css={{ lineHeight: 1.2 }}>
                    Wade Warren
                  </Text>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
