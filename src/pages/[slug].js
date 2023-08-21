import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_SPECIFIC_BLOG } from "./api/URLs";
import { Box } from "@mui/material";
import AuthContext from "../components/AuthContext";
import { useContext } from "react";
import NavBar2 from "../components/Navbar2";
import NavBar from "../components/Navbar";
import FaqsNew from "./screens/FaqsNew";
import Footer from "./screens/Footer";
import { Loading, Text } from "@nextui-org/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (slug) {
        try {
          const refresh = localStorage.getItem("refresh");
          const response = await axios.get(`${GET_SPECIFIC_BLOG}${slug}`, {
            headers: {
              // Authorization: `Token ${refresh}`,
            },
          });
          setBlog(response.data);
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      }
    };
    fetchBlogData();
  }, [slug]);

  if (!blog) {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // maxWidth: "80rem",
          // paddingTop: "10vh",
          paddingBottom: "10vh",
          margin: "0 auto",
          fontSize: 30,
        }}
      >
        {isLoggedIn ? <NavBar2 /> : <NavBar />}
        <Loading
          size={"lg"}
          css={{ paddingTop: "20vh", paddingBottom: "20vh" }}
        />
        <FaqsNew />
        <Footer />
      </Box>
    );
  }

  return (
    <main style={{ backgroundColor: "#fff" }}>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "80rem",
          paddingTop: "25px",
          paddingBottom: "55px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <img
            placeholder={<Loading />}
            src={blog.image1}
            alt="Blog Image"
            width={"100%"}
            height={"500px"}
            style={{
              objectFit: "cover",
              marginBottom: "15px",
              borderRadius: "0px",
              backgroundColor: "lightgray",
            }}
          />
        </Box>
        <Text
          b
          size={55}
          css={{
            textAlign: "left",
            padding: "15px",
            lineHeight: "1.1",
            "@media only screen and (maxWidth: : 724px)": {
              fontSize: "35px",
              lineHeight: "1.2",
            },
          }}
        >
          {blog.title}
        </Text>
        <div
          style={{
            fontSize: 19,
            textAlign: "left",
            padding: "15px",
            fontWeight: "normal",
            fontFamily: "Arial",
            "@media only screen and (maxWidth: : 724px)": {
              fontSize: "18px",
              lineHeight: "1.2",
            },
          }}
        >
          {/*<span dangerouslySetInnerHTML={blog.description}></span>*/}
          {/*{blog.description}*/}
          {documentToReactComponents(blog.description)}
        </div>
      </Box>
      <FaqsNew />
      <Footer />
    </main>
  );
};

export default BlogPage;
