import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Button, Loading, Text } from "@nextui-org/react";
import { BiChevronRight } from "react-icons/bi";
import { GET_BLOGS } from "../api/URLs";
import { useRouter } from "next/router";

const BlogSection2 = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const refresh = localStorage.getItem("refresh");
        const response = await fetch(GET_BLOGS, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `token ${refresh}`,
          },
        });
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main style={{ backgroundColor: "#fff" }}>
      <section
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "80rem",
          paddingTop: "10vh",
          paddingBottom: "10vh",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "80rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "15px",
            paddingRight: "15px",
            // flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              flexWrap: "wrap",
              gap: "30px",
              "@media only screen and (max-width: 764px)": {
                gap: "0px",
              },
            }}
          >
            {blogs.map((blog) => (
              <Box
                key={blog.id}
                sx={{
                  width: "280px",
                  height: "430px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginBottom: "50px",
                  "@media only screen and (max-width: 764px)": {
                    width: "100%",
                    height: "auto",
                    gap: "0px",
                  },
                }}
              >
                <div>
                  <Box sx={{ width: "100%", position: "relative" }}>
                    {isLoading && (
                      <Box
                        sx={{
                          width: "100%",
                          height: "190px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#fefefe",
                          zIndex: 1,
                          transition: "opacity 0.5s",
                        }}
                      >
                        <Loading type={"gradient"} />
                      </Box>
                    )}
                    <img
                      src={blog.image1}
                      alt="Blog image"
                      width={"100%"}
                      height={"180px"}
                      style={{
                        objectFit: "cover",
                        marginBottom: "15px",
                        borderRadius: "2.5px",
                        display: isLoading ? "none" : "block",
                        opacity: isLoading ? 0 : 1,
                        transition: "opacity 0.5s",
                      }}
                      onLoad={handleImageLoad}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      "@media only screen and (max-width: 764px)": {
                        width: "90%",
                      },
                    }}
                  >
                    {/*<Text b size={15} css={{ lineHeight: 1 }}>*/}
                    {/*	Team KamayaKya*/}
                    {/*</Text>*/}
                    <div
                      style={{
                        width: "20px",
                        height: "5px",
                        backgroundColor: "#FF9E24",
                        marginTop: "4px",
                        marginRight: "7.5px",
                        borderRadius: "10000px",
                      }}
                    ></div>
                    <Text
                      b
                      size={14}
                      css={{ lineHeight: 1, paddingBottom: "0px" }}
                    >
                      {new Date(blog.created).toLocaleDateString()}
                    </Text>
                  </Box>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text
                      b
                      size={24}
                      css={{
                        lineHeight: 1.1,
                        marginTop: "10px",
                        "@media only screen and (max-width: 764px)": {
                          width: "90%",
                        },
                      }}
                    >
                      {blog.title}
                    </Text>
                    <Text
                      b
                      size={14}
                      css={{ lineHeight: 1.2, marginTop: "5px" }}
                    >
                      {blog.description.length > 200
                        ? `${blog.description.substring(0, 100)}...`
                        : blog.description}
                    </Text>
                  </div>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    // alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    css={{
                      width: "100%",
                      borderRadius: "2.5px",
                      marginTop: "25px",
                      backgroundColor: "#142d51",
                    }}
                    onClick={() => router.push(`${blog.slug}`)}
                  >
                    <Text b size={14} css={{ color: "white" }}>
                      Read More
                    </Text>
                    <BiChevronRight
                      color="#fff"
                      size={20}
                      style={{ marginLeft: "20px" }}
                    />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </section>
    </main>
  );
};

export default BlogSection2;
