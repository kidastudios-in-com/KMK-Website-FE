import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  Divider,
  Text,
  Loading,
  Modal,
  Dropdown,
} from "@nextui-org/react";
import { ArrowCircleUp, DocumentText } from "iconsax-react";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GET_ALL_URL } from "../pages/api/URLs";
import {
  Box,
  Grid,
  Alert,
  IconButton,
  TextField,
  InputBase,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaIndustry, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineLock, MdFilterList } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { useRouter } from "next/router";
import ReactCardFlip from "react-card-flip";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { DocumentAskPasswordEvent } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import packageJson from "../../package.json";
import AuthContext from "./AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import { SearchNormal, Filter } from "iconsax-react";
import Marquee from "react-fast-marquee";

const StockCard = () => {
  const router = useRouter();
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [flipStates, setFlipStates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReportUrl, setSelectedReportUrl] = useState("");
  const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];
  const { isLoggedIn } = useContext(AuthContext);
  // console.log(pdfjsVersion);

  const staticNumbers = [94, 17, 49, 28];

  const handleOpenModal = (documentUrl) => {
    setSelectedReportUrl(documentUrl);
    console.log(selectedReportUrl);
    setShowModal(true);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [showCert, setShowCert] = useState(false);

  const handleCert = () => {
    setShowCert(true);
  };

  const handleCertClose = () => {
    setShowCert(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAskPassword = (e) => {
    e.verifyPassword("$420%69#kamayakya#69%420$");
  };

  const handleClick = (index) => {
    const newFlipStates = flipStates.map((state, i) =>
      i == index ? !state : false
    );
    setFlipStates(newFlipStates);
  };

  const [industries, setIndustries] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const handleIndustrySelection = (industry) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(
        selectedIndustries.filter((item) => item !== industry)
      );
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };
  const selectedValue = React.useMemo(
    () => Array.from(selectedIndustries).join(", ").replaceAll("_", " "),
    [selectedIndustries]
  );

  useEffect(() => {
    const uniqueIndustries = [
      ...new Set(stocks.map((stock) => stock.stock_industry)),
    ];
    setIndustries(uniqueIndustries);
  }, [filteredStocks]);

  // const [timeSort, setTimeSort] = useState(new Set([""]));
  const [timeSort, setTimeSort] = useState("");
  // const [upsideSort, setUpsideSort] = useState(new Set([""]));
  const [upsideSort, setUpsideSort] = useState("");
  const [selectedPDF, setSelectedPDF] = useState(new Set([selectedReportUrl]));

  const PdfValue = React.useMemo(
    () => Array.from(selectedPDF)[0]?.replaceAll("_", " ") || "",
    [selectedPDF]
  );

  const timeSortValue = (event) => {
    setTimeSort(event.target.value);
    setUpsideSort("");
  };
  // React.useMemo(
  // 	() => Array.from(timeSort)[0]?.replaceAll("_", " ") || "",
  // 	[timeSort]
  // );

  const upsideSortValue = (event) => {
    setUpsideSort(event.target.value);
    setTimeSort("");
  };

  // React.useMemo(
  // 	() => Array.from(upsideSort)[0]?.replaceAll("_", " ") || "",
  // 	[upsideSort]
  // );

  useEffect(() => {
    // console.log(selectedIndustries);
    const filteredAndSortedStocks = stocks
      .filter((stock) => {
        let passTimeFilter = true;
        let passUpsideFilter = true;
        let passSearchFilter = true;

        if (timeSort === "ascending") {
          passTimeFilter = stock.time_left > 0;
        } else if (timeSort === "descending") {
          passTimeFilter = stock.time_left >= 0;
        }

        if (upsideSort === "ascending") {
          passUpsideFilter = stock.upside_left > 0;
        } else if (upsideSort === "descending") {
          passUpsideFilter = stock.upside_left >= 0;
        }

        if (searchQuery.trim() !== "") {
          passSearchFilter =
            stock.stock_name
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            stock.stock_symbol.includes(searchQuery);
          // console.log(searchQuery)
        }

        return passTimeFilter && passUpsideFilter && passSearchFilter;
      })
      .filter((stock) => {
        if (selectedValue.length === 0) {
          return true; // Include all stocks if no industries are selected
        } else {
          return selectedValue.includes(stock.stock_industry);
        }
      })
      .sort((stockA, stockB) => {
        if (timeSort === "ascending") {
          return stockA.time_left - stockB.time_left;
        } else if (timeSort === "descending") {
          return stockB.time_left - stockA.time_left;
        } else if (upsideSort === "ascending") {
          return stockA.upside_left - stockB.upside_left;
        } else if (upsideSort === "descending") {
          return stockB.upside_left - stockA.upside_left;
        }

        return 0;
      });
    // console.log(filteredAndSortedStocks);
    setFilteredStocks(filteredAndSortedStocks);
  }, [stocks, timeSort, upsideSort, searchQuery, selectedIndustries]);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleFirstCard = () => {
    if (isLoggedIn) {
      router.push("/purchase");
    } else {
      handleLogin();
    }
  };

  const showAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 10000);
  };

  useEffect(() => {
    if (error) {
      showAlert();
    }
  }, [error]);

  useEffect(() => {
    if (isLoggedIn) {
      const refresh = localStorage.getItem("refresh");
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await axios.get(GET_ALL_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `token ${refresh}`,
            },
          });
          setStocks(response.data);
          setFlipStates(new Array(response.data.length).fill(false));
        } catch (error) {
          setError("Please Login First to see our stock picks!");
          showAlert();
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [isLoggedIn]);

  const handleClearSelection = () => {
    setSelectedIndustries([]);
    setTimeSort("");
    setUpsideSort("");
  };

  return (
    <div
      style={{
        // maxWidth: "80rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 100,
        backgroundColor: "#fff",
        alignItems: "center",
        // backgroundImage:
        //   "url(https://www.wrightresearch.in/static/img/home/home_banner.svg?bbdddc9ba9b4)",
        // objectPosition: "center",
        // backgroundPositionY: "center",
        // backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          paddingTop: "5vh",
          paddingBottom: "20px",
          "@media only screen and (max-width: 764px)": {
            // maxHeight: "100vh",
            marginTop: "0px",
            paddingTop: "0px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "10px",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "15px",
            paddingBottom: "15px",
            // marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            backgroundImage: "linear-gradient(to top , #0d2c7b, #6067b5)",
            alignItems: "center",
            // backgroundImage: "linear-gradient(to top , #106052, #0f734d)",
            borderRadius: "12.5px",
            "@media only screen and (max-width: 764px)": {
              paddingLeft: "5px",
              paddingRight: "5px",
              marginTop: "0px",
              borderRadius: "10px",
              alignItems: "flex-start",
              backgroundImage: "linear-gradient(to top , #fff, #fff)",
            },
          }}
        >
          <Text
            b
            size={28}
            color="#FFF"
            css={{
              fontWeight: "bolder",
              "@media only screen and (max-width: 764px)": {
                fontSize: 18,
                width: "100%",
                textAlign: "left",
                color: "#021C61",
              },
            }}
            onClick={handleCert}
          >
            SEBI Registered: INH000009843
          </Text>
        </Box>
        <Modal
          // width="790px"
          blur
          open={showCert}
          onClose={handleCertClose}
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
            },
          }}
        >
          <iframe
            src="Kamayakya-SEBI-License.pdf#view=FitH&toolbar=0"
            alt="SEBI Certificate"
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
          {/* <Modal.Footer justify="center"> */}
          <Button
            auto
            onClick={handleCertClose}
            css={{
              // alignSelf: "end",
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
          {/* </Modal.Footer> */}
        </Modal>
        <Text
          b
          size={70}
          css={{
            marginTop: "40px",
            marginBottom: "0px",
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
          Stocks to buy
        </Text>
      </Box>
      {isLoggedIn ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "0px",
            marginBottom: "4%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Search Bar */}
          <Box
            sx={{
              border: "2px solid #ffa12e",
              borderRadius: "10000px",
              padding: "0px 15px",
              paddingTop: "2px",
              display: "flex",
              alignItems: "center",
              "@media only screen and (max-width: 768px)": {
                padding: "0px 15px",
              },
            }}
          >
            <IconButton>
              <SearchNormal size={30} color="#125a54" />
            </IconButton>
            <InputBase
              placeholder="Ion Exchange (OR) IONEXCHANG"
              variant="standard"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: 20,
                lineHeight: 1,
                textAlign: "center",
                width: "440px",
                padding: "10px 10px",
                "@media only screen and (max-width: 768px)": {
                  width: "90%",
                  fontSize: 20,
                },
              }}
            />
          </Box>

          <IconButton
            onClick={toggleDrawer}
            css={{
              width: "30px !important",
              maxWidth: "30px !important",
              "@media only screen and (max-width: 768px)": {
                width: "30px",
                maxWidth: "30px",
              },
            }}
          >
            <Filter size={30} color="#125a54" />
          </IconButton>
          {/* Side Drawer Filtering & Sorting */}
          <SwipeableDrawer
            anchor="right"
            open={isDrawerOpen}
            onOpen={() => setIsDrawerOpen(true)}
            onClose={toggleDrawer}
            sx={{
              width: {
                xs: "100vw",
                sm: "20vw",
              },
              maxWidth: {
                xs: "100%",
                sm: "20%",
              },
              "& .MuiDrawer-paper": {
                width: {
                  xs: "100vw",
                  sm: "20vw",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "20%",
                },
              },
            }}
          >
            <List>
              <ListItemButton
                onClick={() => {
                  toggleDrawer();
                }}
                sx={{
                  justifyContent: "end",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <CloseIcon />
              </ListItemButton>
              <Text b size={20} css={{ paddingLeft: "30px" }}>
                Filter :
              </Text>
              <ListItem>
                <FormControl
                  sx={{ mt: "5px", ml: "15px" }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel>By Industries</FormLabel>
                  <FormGroup>
                    {/* <Grid container spacing={2}> */}
                    {industries.map((industry, index) => (
                      // <Grid item xs={6} key={industry}>
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selectedIndustries.includes(industry)}
                            onChange={() => handleIndustrySelection(industry)}
                          />
                        }
                        label={industry}
                      />
                      // </Grid>
                    ))}
                    {/* </Grid> */}
                  </FormGroup>
                  <FormHelperText>Multiple Selection</FormHelperText>
                </FormControl>
              </ListItem>
              {/* <ListItem sx={{ justifyContent: "center" }}>
								<Dropdown>
									<Dropdown.Button
										flat
										css={{
											// height: "70px",
											// marginLeft: "20px",
											width: "250px",
											backgroundColor: "#fff",
											borderRadius: "10000px",
											border: "2px solid #ffa12e",
											color: "#202020",
											fontSize: 16,
											"@media only screen and (max-width: 768px)": {
												width: "70%",
												"& span": {
													// display: "none",
												},
											},
										}}
									>
										<FaIndustry size={20} style={{ marginRight: "0px" }} />
										<span
											style={{
												marginLeft: "10px",
												"@media only screen and (maxWidth: 600px)": {
													marginLeft: "0px",
												},
											}}
										>
											Industries
										</span>
									</Dropdown.Button>
									<Dropdown.Menu
										selectionMode="multiple"
										selectedKeys={selectedIndustries}
										onSelectionChange={(keys) => setSelectedIndustries(keys)}
									>
										{industries.map((industry) => (
											<Dropdown.Item
												key={industry}
												onClick={() => handleIndustrySelection(industry)}
											>
												{industry}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</ListItem> */}
              <Text b size={20} css={{ paddingLeft: "30px" }}>
                Sort :
              </Text>
              <ListItem>
                <FormControl sx={{ mt: "5px", ml: "15px" }}>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    By Time Left
                  </FormLabel>
                  <RadioGroup value={timeSort} onChange={timeSortValue}>
                    <FormControlLabel
                      value="ascending"
                      control={<Radio />}
                      label="Earliest First"
                    />
                    <FormControlLabel
                      value="descending"
                      control={<Radio />}
                      label="Latest First"
                    />
                  </RadioGroup>
                </FormControl>
              </ListItem>
              {/* <ListItem sx={{ justifyContent: "center" }}>
								<Dropdown>
									<Dropdown.Button
										flat
										css={{
											width: "250px",
											backgroundColor: "#fff",
											borderRadius: "10000px",
											border: "2px solid #ffa12e",
											color: "#202020",
											fontSize: 16,
											"@media only screen and (max-width: 768px)": {
												width: "70%",
												"& span": {
													// display: "none",
												},
											},
										}}
									>
										<AiOutlineFieldTime
											size={22}
											style={{ marginRight: "0px" }}
										/>
										<span
											style={{
												marginLeft: "10px",
												"@media only screen and (max-width: 768px)": {
													marginLeft: "0px",
												},
											}}
										>
											Time Left
										</span>
									</Dropdown.Button>
									<Dropdown.Menu
										aria-label="TimeActions"
										selectionMode="single"
										selectedKeys={timeSort}
										onSelectionChange={(key) => setTimeSort(key)}
									>
										<Dropdown.Item key="ascending">
											Earliest First
										</Dropdown.Item>
										<Dropdown.Item key="descending">Latest First</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</ListItem> */}
              <ListItem>
                <FormControl sx={{ ml: "15px" }}>
                  <FormLabel id="controlled-radio-buttons">
                    By Upside Left
                  </FormLabel>
                  <RadioGroup value={upsideSort} onChange={upsideSortValue}>
                    <FormControlLabel
                      value="ascending"
                      control={<Radio />}
                      label="Lowest to Highest"
                    />
                    <FormControlLabel
                      value="descending"
                      control={<Radio />}
                      label="Highest To Lowest"
                    />
                  </RadioGroup>

                  {/* {upsideSort !== "" && (
										<Button variant="contained" onClick={handleClearSelection}>
											Clear Selection
										</Button>
									)}
									{selectedIndustries.length > 0 && (
										<Button variant="contained" onClick={handleClearSelection}>
											Clear Selection
										</Button>
									)}
									{timeSort !== "" && (
										<Button variant="contained" onClick={handleClearSelection}>
											Clear Selection
										</Button>
									)} */}
                </FormControl>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }}>
                {upsideSort !== "" ||
                selectedIndustries.length > 0 ||
                timeSort !== "" ? (
                  <Button
                    auto
                    onPress={handleClearSelection}
                    css={{ background: "#ffa12e", fontSize: 17, width: "100%" }}
                  >
                    Clear Selection
                  </Button>
                ) : null}
              </ListItem>
              {/* <ListItem sx={{ justifyContent: "center" }}>
								<Dropdown>
									<Dropdown.Button
										flat
										css={{
											width: "250px",
											backgroundColor: "#fff",
											borderRadius: "10000px",
											border: "2px solid #ffa12e",
											color: "#202020",
											fontSize: 16,
											"@media only screen and (max-width: 768px)": {
												width: "70%",
												"& span": {
													// display: "none",
												},
											},
										}}
									>
										<Filter size={20} />
										<span
											style={{
												marginLeft: "10px",
												"@media only screen and (max-width: 768px)": {
													marginLeft: "0px",
												},
											}}
										>
											Upside Left
										</span>
									</Dropdown.Button>
									<Dropdown.Menu
										aria-label="UpsideActions"
										selectionMode="single"
										selectedKeys={upsideSort}
										onSelectionChange={setUpsideSort}
									>
										<Dropdown.Item key="ascending">
											Lowest to Highest
										</Dropdown.Item>
										<Dropdown.Item key="descending">
											Highest To Lowest
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</ListItem> */}
            </List>
          </SwipeableDrawer>
        </Box>
      ) : (
        <></>
      )}
      {isLoading && (
        <Loading type={"gradient"} style={{ marginBottom: "50px" }} />
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          container
          justifyContent={"center"}
          gap={"20px"}
          sx={{
            background: "#fff",
            boxShadow: "none",
            "@media only screen and (max-width: 768px)": {
              gap: "1vw",
            },
          }}
        >
          {filteredStocks.map((stock, index) => (
            <Grid
              key={stock.id}
              item
              xs={"auto"}
              sm={"auto"}
              md={"auto"}
              lg={"auto"}
            >
              <ReactCardFlip
                isFlipped={flipStates[index]}
                flipDirection="horizontal"
              >
                {/* Front face */}
                <Card
                  isHoverable
                  css={{
                    height: "580px",
                    width: "285px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "40px",
                    border: "2px solid",
                    borderColor: "#ffa12e",
                    marginBottom: "0px",
                    boxShadow: "none",
                    filter: "none",
                    "@media only screen and (max-width: 768px)": {
                      width: "95vw",
                      maxWidth: "620px",
                      height: "770px",
                      borderRadius: "35px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginTop: "20px",
                      marginBottom: "20px",
                      minWidth: "90%",
                      maxWidth: "90%",
                      height: "600px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      "@media only screen and (max-width: 768px)": {
                        marginLeft: "5px",
                        marginRight: "5px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        backgroundColor: "#fff",
                        marginBottom: "15px",
                        width: "90%",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "30px",
                          paddingTop: "7.5px",
                          paddingBottom: "7.5px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          backgroundImage:
                            "linear-gradient(to top , #FF9D28, #ffa736)",
                          marginBottom: "15px",
                          marginTop: "5px",
                          borderRadius: "10000px",
                          lineHeight: 1,
                        }}
                        className="stockCardMobile-industry"
                      >
                        <Text
                          b
                          size={14}
                          color="Black"
                          css={{
                            lineHeight: 1.2,
                            "@media only screen and (max-width: 768px)": {
                              fontSize: "16px",
                            },
                          }}
                        >
                          {stock.stock_industry.length > 23 ? (
                            <Marquee
                              delay={2}
                              speed={30}
                              style={{ marginRight: "20px" }}
                            >
                              <span style={{ paddingRight: "20px" }}>
                                {stock.stock_industry}
                              </span>
                            </Marquee>
                          ) : (
                            <>{stock.stock_industry}</> || <Loading /> || "N/A"
                          )}
                        </Text>
                      </Box>
                      <Text
                        b
                        size={26}
                        css={{
                          minWidth: "100%",
                          maxWidth: "100%",
                          textAlign: "center",
                          lineHeight: 1.2,
                          "@media only screen and (max-width: 768px)": {
                            fontSize: 25,
                            paddingTop: "5px",
                            paddingBottom: "5px",
                          },
                        }}
                      >
                        {stock.stock_name.length > 20 ? (
                          <Marquee
                            delay={2}
                            speed={30}
                            style={{ marginRight: "20px" }}
                          >
                            <span style={{ paddingRight: "40px" }}>
                              {stock.stock_name}
                            </span>
                          </Marquee>
                        ) : (
                          <>{stock.stock_name}</>
                        )}
                      </Text>
                    </Box>
                    <Box
                      sx={{
                        width: "90%",
                        backgroundImage:
                          "linear-gradient(to top , #106052, #0f734d)",
                        borderRadius: "17.5px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        },
                      }}
                    >
                      <Text
                        b
                        size={20}
                        color="#fff"
                        css={{
                          lineHeight: 1.5,
                          "@media only screen and (max-width: 768px)": {
                            fontSize: 19,
                          },
                        }}
                      >
                        Upside Left
                      </Text>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ArrowCircleUp size={25} color="#fff" />
                        <Text
                          b
                          size={48}
                          color="#fff"
                          css={{
                            lineHeight: 1,
                            marginLeft: "3px",
                            marginRight: "3px",
                            "@media only screen and (max-width: 768px)": {
                              fontSize: 70,
                            },
                          }}
                        >
                          {`${Math.round(stock.upside_left)}` || <Loading /> ||
                            "-"}
                        </Text>
                        <span
                          style={{
                            fontSize: 25,
                            color: "#FFF",
                            "@media only screen and (max-width: 768px)": {
                              fontSize: 10,
                            },
                          }}
                        >
                          %
                        </span>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        mt: "20px",
                        width: "90%",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Text
                            b
                            css={{
                              lineHeight: 1.1,
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 21,
                              },
                            }}
                            size={15}
                          >
                            MKT. CAP.
                          </Text>
                          <Text
                            b
                            size={15}
                            css={{
                              lineHeight: 1.1,
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 15,
                              },
                            }}
                          >
                            (IN Cr.)
                          </Text>
                        </div>
                        <Text
                          b
                          css={{
                            flex: 1,
                            textAlign: "right",
                            "@media only screen and (max-width: 768px)": {
                              fontSize: 30,
                            },
                          }}
                          size={22}
                        >
                          {`${stock.market_cap}` || <Loading /> || "N/A"}
                        </Text>
                      </div>
                      <Divider
                        height={2}
                        style={{
                          backgroundColor: "#ffa12e",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              b
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 21,
                                },
                              }}
                              size={15}
                            >
                              CMP
                            </Text>
                            <Text
                              b
                              size={15}
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 15,
                                },
                              }}
                            >
                              (in ₹)
                            </Text>
                          </div>
                          <Text
                            b
                            css={{
                              flex: 1,
                              textAlign: "right",
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 30,
                              },
                            }}
                            size={22}
                          >
                            {`${stock.live_price}` || <Loading /> || "N/A"}
                          </Text>
                        </div>
                        <Divider
                          height={2}
                          style={{
                            backgroundColor: "#ffa12e",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              b
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 21,
                                },
                              }}
                              size={15}
                            >
                              TARGET PRICE
                            </Text>
                            <Text
                              b
                              size={15}
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 15,
                                },
                              }}
                            >
                              (IN ₹)
                            </Text>
                          </div>
                          <Text
                            b
                            css={{
                              flex: 1,
                              textAlign: "right",
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 30,
                              },
                            }}
                            size={22}
                          >
                            {`${stock.target_price}` || <Loading /> || "N/A"}
                          </Text>
                        </div>
                        <Divider
                          height={2}
                          style={{
                            backgroundColor: "#ffa12e",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        />

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              b
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 21,
                                },
                              }}
                              size={15}
                            >
                              TIME LEFT
                            </Text>
                            <Text
                              b
                              size={15}
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 15,
                                },
                              }}
                            >
                              (IN DAYS)
                            </Text>
                          </div>
                          <Text
                            b
                            css={{
                              flex: 1,
                              textAlign: "right",
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 30,
                              },
                            }}
                            size={22}
                          >
                            {`${stock.time_left}` || <Loading /> || "N/A"}
                          </Text>
                        </div>
                      </div>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bottom: "5px",
                      width: "85%",
                      marginBottom: "25px",
                      "@media only screen and (max-width: 768px)": {
                        width: "90%",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <Button
                      auto
                      onPress={() => handleClick(index)}
                      css={{
                        top: "0px",
                        alignSelf: "center",
                        width: "100%",
                        borderRadius: "10000px",
                        backgroundImage:
                          "linear-gradient(to top , #FF9D28, #ffa736)",
                        fontSize: 18,
                        "@media only screen and (max-width: 768px)": {
                          fontSize: 15,
                          lineHeight: 1,
                          height: "30px",
                        },
                      }}
                    >
                      View reports
                    </Button>
                    <Button
                      auto
                      onClick={() => handleOpenModal("SampleReport.pdf")}
                      css={{
                        top: "10px",
                        // marginTop: "10%",
                        color: "#106052",
                        width: "100%",
                        borderRadius: "10000px",
                        backgroundColor: "#fff",
                        // backgroundImage:
                        //   "linear-gradient(to top , #106052, #0f734d)",
                        fontSize: 15,
                        height: "20px",
                        "@media only screen and (max-width: 768px)": {
                          top: "115px",
                          lineHeight: 1,
                          height: "20px",
                          fontSize: 15,
                        },
                      }}
                    >
                      Disclosure
                    </Button>
                  </Box>
                </Card>
                <Card
                  isHoverable
                  css={{
                    height: "580px",
                    width: "285px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "40px",
                    border: "2px solid",
                    borderColor: "#ffa12e",
                    marginBottom: "0px",
                    "@media only screen and (max-width: 768px)": {
                      width: "95vw",
                      maxWidth: "620px",
                      height: "570px",
                      borderRadius: "35px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginTop: "20px",
                      marginBottom: "20px",
                      minWidth: "90%",
                      maxWidth: "90%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        backgroundColor: "#fff",
                        marginBottom: "15px",
                        width: "90%",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          paddingTop: "7.5px",
                          paddingBottom: "7.5px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          backgroundImage:
                            "linear-gradient(to top , #FF9D28, #ffa736)",
                          marginBottom: "15px",
                          marginTop: "5px",
                          borderRadius: "10000px",
                          lineHeight: 1,
                        }}
                      >
                        <Text b size={14} color="Black" css={{ lineHeight: 1 }}>
                          {stock.stock_industry || <Loading /> || "N/A"}
                        </Text>
                      </Box>
                      <Text
                        b
                        size={26}
                        css={{
                          minWidth: "100%",
                          maxWidth: "100%",
                          textAlign: "center",
                          lineHeight: 1.2,
                          "@media only screen and (max-width: 768px)": {
                            fontSize: 30,
                          },
                        }}
                      >
                        {/* {stock.stock_name || <Loading /> || "N/A"} */}
                        {stock.stock_name.length > 20 ? (
                          <Marquee
                            speed={30}
                            delay={2}
                            style={{ marginRight: "20px" }}
                          >
                            <span style={{ paddingRight: "40px" }}>
                              {stock.stock_name}
                            </span>
                          </Marquee>
                        ) : (
                          <>{stock.stock_name}</>
                        )}
                      </Text>
                    </Box>
                    <Box
                      sx={{
                        width: "90%",
                        backgroundImage:
                          "linear-gradient(to top , #106052, #0f734d)",
                        borderRadius: "17.5px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <Text
                        b
                        size={20}
                        color="#fff"
                        css={{
                          lineHeight: 1.5,
                        }}
                      >
                        Upside Left
                      </Text>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ArrowCircleUp size={25} color="#fff" />
                        <Text
                          b
                          size={48}
                          color="#fff"
                          css={{
                            lineHeight: 1,
                            marginLeft: "3px",
                            marginRight: "3px",
                            "@media only screen and (max-width: 768px)": {
                              fontSize: 60,
                            },
                          }}
                        >
                          {`${Math.round(stock.upside_left)}` || <Loading /> ||
                            "-"}
                        </Text>
                        <span style={{ fontSize: 25, color: "#FFF" }}>%</span>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "start",
                        marginTop: "15px",
                      }}
                    >
                      <Text
                        b
                        size={20}
                        color="#125a54"
                        css={{
                          "@media only screen and (max-width: 768px)": {
                            fontSize: 18,
                          },
                        }}
                      >
                        English
                      </Text>
                      {stock.stock_reports.map((report, reportIndex) => (
                        <div key={report.report_name} style={{}}>
                          <IconButton
                            key={report.report_name}
                            onClick={() => handleOpenModal(report.document)}
                            sx={{
                              "&:hover": { background: "#fff" },
                              borderRadius: "0px",
                              paddingLeft: "0px",
                            }}
                          >
                            <DocumentText size={25} />
                            <Text
                              b
                              size={18}
                              css={{
                                marginLeft: "5px",
                                alignSelf: "start",
                                lineHeight: 1.5,
                              }}
                            >
                              {report.report_name}
                            </Text>
                          </IconButton>
                        </div>
                      ))}
                    </Box>

                    <Button
                      auto
                      onPress={() => handleClick(index)}
                      css={{
                        // marginTop: "5%",
                        fontSize: 18,
                        top: "145px",
                        width: "100%",
                        borderRadius: "10000px",
                        backgroundImage:
                          "linear-gradient(to top , #FF9D28, #ffa736)",
                        "@media only screen and (max-width: 768px)": {
                          top: "125px",
                          lineHeight: 1,
                          height: "30px",
                          fontSize: 15,
                        },
                      }}
                    >
                      Stock Details
                    </Button>
                    <Modal
                      blur
                      // width="100%"
                      // height="75vh"
                      open={showModal}
                      onClose={handleCloseModal}
                      aria-labelledby="modal-title"
                      aria-describedby="modal-description"
                      css={{
                        borderRadius: "15px",
                        background: "transparent",
                        boxShadow: "none",
                        // backdropFilter: "blur(8px)",
                      }}
                      className="iframePdfMobile"
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
                              borderRadius: "10px 10px 0 0",
                              "& span": {
                                // display: "none",
                              },
                            },
                          }}
                        >
                          {PdfValue}
                          {/* Report Types */}
                        </Dropdown.Button>

                        <Dropdown.Menu
                          // defaultSelectedKeys={'SampleReport.pdf'}
                          aria-label="TimeActions"
                          selectionMode="single"
                          selectedKeys={selectedPDF}
                          onSelectionChange={(key) => setSelectedPDF(key)}
                          style={{ width: "100%" }}
                        >
                          {stock.stock_reports.map((report) => (
                            <Dropdown.Item key={report.report_name}>
                              {report.report_name}
                            </Dropdown.Item>
                          ))}
                          {/* <Dropdown.Item key="SampleReport.pdf">
														Half Page Report
													</Dropdown.Item>
													<Dropdown.Item
														key="IonExchangeHalfPageReport-English.pdf"
														css={{ width: "100vw" }}
													>
														Ion Exchange Half Page Report - English
													</Dropdown.Item>
													<Dropdown.Item key="DetailedReport.pdf">
														Detailed Report
													</Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                      <Worker
                        workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js`}
                      >
                        <Box
                          sx={{
                            height: "75vh",
                            // width: "100%",
                            "@media only screen and (max-width: 768px)": {
                              // width: '500px',
                              // height: '80%',
                            },
                          }}
                        >
                          <Viewer
                            // src="SampleReport.pdf#toolbar=0"
                            fileUrl={`${selectedReportUrl}#view=FitH&toolbar=0`}
                            onDocumentAskPassword={handleAskPassword}
                            // defaultScale={SpecialZoomLevel.PageWidth}
                          />
                        </Box>
                      </Worker>
                      <Button
                        flat
                        onPress={handleCloseModal}
                        css={{
                          // alignSelf: "end",
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
                            borderRadius: "0px 0px 10px 10px",
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
                </Card>
              </ReactCardFlip>
            </Grid>
          ))}
          {stocks.length <= 3 && (
            <Grid>
              <Card
                isHoverable
                css={{
                  height: "575px",
                  width: "285px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "35px",
                  background: "#fff",
                  filter: "none",
                  justifyContent: "center",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundImage:
                    "linear-gradient(to top , #105B54, #0F734D, #0F734D)",
                  "@media only screen and (max-width: 768px)": {
                    // order: 4,
                    width: "95vw",
                    maxWidth: "620px",
                  },
                }}
              >
                <img
                  src="kamayakya-logo-white.png"
                  style={{ marginTop: "5px", width: "75%" }}
                />

                <Divider
                  css={{
                    background: "#fff",
                    opacity: "0.5",
                    width: "30px",
                    height: "3px",
                    marginTop: "20px",
                  }}
                />

                <Box
                  sx={{
                    width: "100%",
                    alignSelf: "start",
                    marginTop: "20px",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      marginRight: "10px",
                      color: "#fff",
                      fontSize: 20,
                      alignSelf: "start",
                      marginTop: "5px",
                      opacity: 0.9,
                    }}
                  />
                  <Text
                    b
                    color="#fff"
                    size={20}
                    css={{ lineHeight: 1.2, opacity: 0.9 }}
                  >
                    2-4 individual stock picks every month
                  </Text>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    alignSelf: "start",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      marginRight: "10px",
                      color: "#fff",
                      fontSize: 20,
                      alignSelf: "start",
                      marginTop: "5px",
                      opacity: 0.9,
                    }}
                  />
                  <Text
                    b
                    color="#fff"
                    size={20}
                    css={{ lineHeight: 1.2, opacity: 0.9 }}
                  >
                    NSE + BSE + SME stock picks
                  </Text>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    alignSelf: "start",
                    // marginTop: "20px",
                    marginBottom: "10px",
                    // marginLeft: "5%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      marginRight: "10px",
                      color: "#fff",
                      fontSize: 20,
                      alignSelf: "start",
                      marginTop: "5px",
                      opacity: 0.9,
                    }}
                  />
                  <Text
                    b
                    color="#fff"
                    size={20}
                    css={{ lineHeight: 1.2, opacity: 0.9 }}
                  >
                    WhatsApp & Email updates
                  </Text>
                </Box>
                <Divider
                  css={{
                    background: "#fff",
                    opacity: "0.5",
                    width: "30px",
                    height: "3px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
                <Button
                  // variant="contained"
                  css={{
                    width: "75%",
                    background: "linear-gradient(to top , #fb7716,#fe9807)",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "10000px",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to top , #FF9D28, #ffa736)",
                    },
                  }}
                  onPress={handleFirstCard}
                >
                  <Text b color="#FFF" size={18}>
                    Subscribe Now
                  </Text>
                </Button>

                <Text
                  b
                  size={20}
                  color="#fff"
                  css={{
                    textAlign: "center",
                    marginTop: "10px",
                    "@media only screen and (max-width: 768px)": {
                      fontSize: "20px",
                    },
                  }}
                >
                  for ₹
                  <span
                    style={{ color: "#fff", fontSize: 30, lineHeight: 1.2 }}
                  >
                    11,800/year
                  </span>
                </Text>

                <Text
                  b
                  size={18}
                  color="#FFF"
                  css={{ mt: "0px", opacity: 0.75, lineHeight: 1 }}
                >
                  inclusive of taxes
                </Text>
              </Card>
              <Modal
                blur
                // width="1200px"
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
            </Grid>
          )}
          {/* {stocks.length <= 3 && stocks.map((stock) => ( */}
          {/* {stocks.length <= 3 &&
					Array.from({ length: 4 }).map((_, index) => ( */}
          {stocks.length <= 3 &&
            staticNumbers.map((number, index) => (
              <Grid
                // key={stock.id}
                key={index}
                item
                xs={"auto"}
                sm={"auto"}
                md={"auto"}
                lg={"auto"}
                style={{ alignItems: "center" }}
              >
                <Card
                  variant="flat"
                  css={{
                    height: "575px",
                    width: "285px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "40px",
                    border: "2px solid",
                    borderColor: "#ffa12e",
                    marginBottom: "20px",
                    boxShadow: "none",
                    filter: "none",
                    "@media only screen and (max-width: 768px)": {
                      width: "95vw",
                      maxWidth: "620px",
                      height: "570px",
                      borderRadius: "35px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: "90%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: "5px",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        backgroundColor: "#fff",
                        marginBottom: "15px",
                        width: "90%",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          zIndex: 0,
                          width: "100%",
                          paddingTop: "7.5px",
                          paddingBottom: "7.5px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          backgroundImage:
                            "linear-gradient(to top , #FF9D28, #ffa736)",
                          marginBottom: "15px",
                          marginTop: "5px",
                          borderRadius: "10000px",
                          lineHeight: 1,
                        }}
                      >
                        <Text b size={14} color="Black" css={{ lineHeight: 1 }}>
                          {/* {stock.stock_industry} */}
                          {`<Industry>`}
                        </Text>
                      </Box>
                      <Text
                        b
                        size={26}
                        css={{
                          minWidth: "100%",
                          maxWidth: "100%",
                          textAlign: "center",
                          lineHeight: 1.2,
                          position: "relative",
                          zIndex: 0,
                          "@media only screen and (max-width: 768px)": {
                            fontSize: 20,
                          },
                        }}
                      >
                        {`<Stock Name>`}
                      </Text>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backdropFilter: "blur(8px)",
                          zIndex: 0,
                          WebkitBackdropFilter: "blur(8px)",
                          margin: "15px",
                          "@media only screen and (max-width: 768px)": {
                            margin: "0px",
                          },
                        }}
                      >{` `}</Box>
                    </Box>
                    <Box
                      sx={{
                        zIndex: 1,
                        width: "90%",
                        backgroundImage:
                          "linear-gradient(to top , #106052, #0f734d)",
                        borderRadius: "17.5px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <Text
                        b
                        size={20}
                        color="#fff"
                        css={{
                          lineHeight: 1.5,
                        }}
                      >
                        Upside Left
                      </Text>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ArrowCircleUp size={25} color="#fff" />
                        <Text
                          b
                          size={48}
                          color="#fff"
                          css={{
                            lineHeight: 1,
                            marginLeft: "3px",
                            marginRight: "3px",
                            "@media only screen and (max-width: 768px)": {
                              fontSize: 30,
                            },
                          }}
                        >
                          {`${number}`}
                        </Text>
                        <span style={{ fontSize: 25, color: "#FFF" }}>%</span>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        // zIndex: 1,
                        width: "90%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pt: 1,
                        pb: 1,
                        marginTop: 2,
                        mb: "20px",
                        backgroundImage:
                          "linear-gradient(to top , #FF9D28, #ffa736)",
                        borderRadius: "10000px",
                        "@media only screen and (max-width: 768px)": {
                          width: "100%",
                        },
                      }}
                    >
                      <SpeedIcon color="#fff" style={{ fontSize: 20 }} />
                      <Text
                        b
                        style={{ marginLeft: 5, color: "Black", lineHeight: 1 }}
                        size={14}
                      >
                        {`Medium Risk`}
                      </Text>
                    </Box>
                    <Box sx={{ minWidth: "90%", maxWidth: "90%" }}>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              b
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 13,
                                },
                              }}
                              size={15}
                            >
                              CURRENT
                            </Text>
                            <Text
                              b
                              size={15}
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 13,
                                },
                              }}
                            >
                              PRICE (in ₹)
                            </Text>
                          </div>
                          <Text
                            b
                            css={{
                              flex: 1,
                              textAlign: "right",
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 20,
                              },
                            }}
                            size={22}
                          >
                            {`XXXX.XX`}
                          </Text>
                        </div>
                        <Divider
                          height={1.5}
                          style={{
                            backgroundColor: "#ffa12e",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Text
                              b
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 13,
                                },
                              }}
                              size={15}
                            >
                              TIME LEFT
                            </Text>
                            <Text
                              b
                              size={15}
                              css={{
                                lineHeight: 1.1,
                                "@media only screen and (max-width: 768px)": {
                                  fontSize: 13,
                                },
                              }}
                            >
                              (IN DAYS)
                            </Text>
                          </div>
                          <Text
                            b
                            css={{
                              flex: 1,
                              textAlign: "right",
                              "@media only screen and (max-width: 768px)": {
                                fontSize: 20,
                              },
                            }}
                            size={22}
                          >
                            {`XXX`}
                          </Text>
                        </div>
                        <div
                          style={{
                            zIndex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <MdOutlineLock color="#ffa12e" size={50} />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row",
                              marginTop: "20px",
                            }}
                          >
                            <Button
                              on
                              onPress={handleFirstCard}
                              css={{ backgroundColor: "transparent" }}
                            >
                              <Text b size={20}>
                                {isLoggedIn ? "Subscribe" : "Login"}
                              </Text>
                              <BiChevronRight size={24} color="#000000" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default StockCard;
