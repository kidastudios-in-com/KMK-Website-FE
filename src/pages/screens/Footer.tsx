import { Box, IconButton } from "@mui/material";
import { Divider, Text } from "@nextui-org/react";
import React from "react";
import Navbar from "../../components/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from "@nextui-org/react";
import Head from "next/head";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    // <main
    // 	id="FAQs"
    // 	style={{
    // 		display: "flex",
    // 		justifyContent: "center",
    // 		alignItems: "center",
    // 		backgroundColor: "#fff",
    // 		width: "100vw",
    // 		height: "100%",
    // 		paddingTop: "10vh",
    // 		paddingBottom: "5vh",
    // 	}}
    // >
    //
    // 	<div style={{ width: "100%", maxWidth: "80rem" }}>
    // 		<Box
    // 			sx={{
    // 				display: "flex",
    // 				flexWrap: "wrap",
    // 				justifyContent: "space-between",
    // 				maxWidth: "80rem",
    // 				width: "100%",
    // 				"@media only screen and (max-width: 672px)": {
    // 					justifyContent: "flex-start",
    // 					alignItems: "flex-start",
    // 					width: "auto",
    // 					paddingLeft: "15px",
    // 					paddingRight: "15px",
    // 					marginTop: "-5vh",
    // 				},
    // 			}}
    // 		>
    // 			<img src="./kmk-logo.png" alt="LOGO" height={60} width={220} />
    // 			<Box
    // 				sx={{
    // 					display: "flex",
    // 					flexDirection: "row",
    // 					marginTop: "30px",
    // 					gap: "15px",
    // 					justifyContent: "center",
    // 					alignItems: "center",
    // 					paddingLeft: "15px",
    // 					paddingRight: "15px",
    // 					"@media only screen and (max-width: 672px)": {
    // 						justifyContent: "flex-start",
    // 						alignItems: "flex-start",
    // 						width: "100vw",
    // 						marginTop: "20px",
    // 					},
    // 				}}
    // 			>
    // 				<Text
    // 					b
    // 					size={18}
    // 					css={{
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: 11,
    // 							width: "auto",
    // 						},
    // 					}}
    // 				>
    // 					<Link href="/TermsAndCond" css={{ color: "Black" }}>
    // 						Terms & Conditions
    // 					</Link>
    // 				</Text>
    // 				<Text
    // 					b
    // 					size={18}
    // 					css={{
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: 11,
    // 							width: "auto",
    // 						},
    // 					}}
    // 				>
    // 					<Link href="/PrivacyPolicy" css={{ color: "Black" }}>
    // 						Privacy Policy
    // 					</Link>
    // 				</Text>
    // 				<Text
    // 					b
    // 					size={18}
    // 					css={{
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: 11,
    // 							width: "auto",
    // 						},
    // 					}}
    // 				>
    // 					<Link href="/Disclaimer" css={{ color: "Black" }}>
    // 						Disclaimer
    // 					</Link>
    // 				</Text>
    // 				<Text
    // 					b
    // 					size={18}
    // 					css={{
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: 11,
    // 							width: "auto",
    // 						},
    // 					}}
    // 				>
    // 					<Link href="/InvestorCharter" css={{ color: "Black" }}>
    // 						Investor Charter
    // 					</Link>
    // 				</Text>
    // 				<Text
    // 					b
    // 					size={18}
    // 					css={{
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: 11,
    // 							width: "auto",
    // 						},
    // 					}}
    // 				>
    // 					<Link href="/Complaints" css={{ color: "Black" }}>
    // 						Complaints
    // 					</Link>
    // 				</Text>
    // 			</Box>
    // 			<Box
    // 				sx={{
    // 					display: "flex",
    // 					justifyContent: "start",
    // 					alignItems: "start",
    // 					gap: "10px",
    // 					// marginTop: 2,
    // 					"@media only screen and (max-width: 672px)": {
    // 						marginTop: "15px",
    // 						justifyContent: "flex-start",
    // 						alignItems: "flex-start",
    // 						width: "100vw",
    // 					},
    // 				}}
    // 			>
    // 				<IconButton
    // 					onClick={() =>
    // 						window.open("https://www.facebook.com/KamayaKya/", "_blank")
    // 					}
    // 				>
    // 					<FaFacebook size={30} color="#1877f2" />
    // 				</IconButton>
    // 				<IconButton
    // 					onClick={() =>
    // 						window.open(
    // 							"https://www.instagram.com/kamakyaofficial/",
    // 							"_blank"
    // 						)
    // 					}
    // 				>
    // 					<img src="/kmk-instagram.png" height={30} width={30} />
    // 				</IconButton>
    // 				<IconButton
    // 					onClick={() =>
    // 						window.open(
    // 							"https://www.linkedin.com/company/kamayakya/",
    // 							"_blank"
    // 						)
    // 					}
    // 				>
    // 					<FaLinkedinIn size={30} color="#0077b5" />
    // 				</IconButton>
    // 				<IconButton
    // 					onClick={() =>
    // 						window.open("https://twitter.com/KamayaKyaIndia", "_blank")
    // 					}
    // 				>
    // 					<FaTwitter size={30} color="#1d9bf0" />
    // 				</IconButton>
    // 			</Box>
    // 		</Box>
    //
    // 		<Box
    // 			sx={{ display: "flex", flexDirection: "column", marginTop: "35px", marginBottom: "35px" }}
    // 		>
    // 			<Text
    // 				b
    // 				size={15}
    // 				css={{
    // 					textAlign: "center",
    // 					"@media only screen and (max-width: 672px)": {
    // 						marginTop: "-15px",
    // 						textAlign: "left",
    // 						fontSize: 11,
    // 						lineHeight: 1.2,
    // 						paddingLeft: "15px",
    // 						paddingRight: "15px",
    // 					},
    // 				}}
    // 			>
    // 				Kamayakya Wealth Management Pvt. Ltd makes no warranties or
    // 				representations, express or implied, on products and services
    // 				offered through the platform. It accepts no liability for any
    // 				damages or losses, however, caused in connection with the use of, or
    // 				on the reliance of its research and recommendation services.
    // 				Past performance is not indicative of future returns. Please
    // 				consider your specific investment requirements, risk tolerance,
    // 				goal, time frame, risk and reward balance and the cost associated
    // 				with the investment before choosing a fund, or designing a portfolio
    // 				that suits your needs. Performance and returns of any investment
    // 				portfolio can neither be predicted nor guaranteed.
    // 			</Text>
    // 		</Box>
    // 		<Box
    // 			sx={{
    // 				display: "flex",
    // 				alignSelf: "center",
    // 				textAlign: "center",
    // 				justifyContent: "space-evenly",
    // 				marginTop: "50px",
    // 				alignItems: "center",
    // 				flexWrap: "wrap",
    // 				"@media only screen and (max-width: 672px)": {
    // 					marginTop: "0px",
    // 					fontSize: 11,
    // 					lineHeight: 1.2,
    // 					paddingLeft: "15px",
    // 					paddingRight: "15px",
    // 					alignSelf: "flex-start",
    // 					justifyContent: "flex-start",
    // 					width: "100vw",
    // 				},
    // 			}}
    // 		>
    // 			<Box
    // 				sx={{
    // 					display: "flex",
    // 					flexDirection: "row",
    // 					// maxWidth: "250px",
    // 					alignItems: "center",
    // 					"@media only screen and (max-width: 672px)": {
    // 						alignSelf: "flex-start",
    // 						textAlign: "flex-start",
    // 					},
    // 				}}
    // 			>
    // 				<img src="MSME logo.png" width={"auto"} height={"50px"} />
    // 				<Box sx={{
    // 					display: "flex",
    // 					flexDirection: "column",
    // 					alignItems: "flex-start",
    // 					justifyContent: "flex-start",
    // 				}}>
    // 					<Text b size={14} css={{
    // 						textAlign: 'start',
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: "11px",
    // 							paddingLeft: "10px",
    // 						},
    // 					}}>
    // 						Udyam Registration Number:
    // 					</Text>
    // 					<Text b size={20} css={{ textDecoration: 'underline',
    // 						"@media only screen and (max-width: 672px)": {
    // 							fontSize: "15px",
    // 							paddingLeft: "10px",
    // 						}, }}>
    // 						UDYAM-MH-26-0204983
    // 					</Text>
    // 				</Box>
    // 			</Box>
    // 			<Box
    // 				sx={{ display: "flex", flexDirection: "row", alignItems: "center",
    // 					"@media only screen and (max-width: 672px)": {
    // 						marginTop: "10px",
    // 					},
    // 				}}
    // 			>
    // 				<img src="SEBI.png" width={"auto"} height={"50px"}/>
    // 				<Box sx={{
    // 					display: "flex",
    // 					flexDirection: "column",
    // 					alignItems: "flex-start",
    // 					justifyContent: "flex-start",
    // 				}}>
    // 				<Text b size={14} css={{ textAlign: 'start',
    // 					"@media only screen and (max-width: 672px)": {
    // 						fontSize: "11px",
    // 						paddingLeft: "10px",
    // 					}, }}>
    // 					Registration No:
    // 				</Text>
    // 				<Text b size={20} css={{ textDecoration: 'underline',
    // 					"@media only screen and (max-width: 672px)": {
    // 						fontSize: "15px",
    // 						paddingLeft: "10px",
    // 					}, }}>
    // 					INH000009843
    // 				</Text>
    // 				</Box>
    // 			</Box>
    // 			<Box
    // 				sx={{
    // 					display: "flex",
    // 					flexDirection: "row",
    // 					// maxWidth: "200px",
    // 					alignItems: "flex-start",
    // 					justifyContent: "flex-start",
    // 					"@media only screen and (max-width: 672px)": {
    // 						marginTop: "10px",
    // 					},
    // 				}}
    // 			>
    // 				<img src="Startup India Logo.png" width={"auto"} height={"50px"} />
    // 				<Box sx={{
    // 					display: "flex",
    // 					flexDirection: "column",
    // 					alignItems: "center",
    // 				}}>
    // 				<Text b size={14} css={{
    // 					textAlign: 'start',
    // 					"@media only screen and (max-width: 672px)": {
    // 						fontSize: "11px",
    // 						paddingLeft: "10px",
    // 					},}}>
    // 					Certificate No:
    // 				</Text>
    // 				<Text b size={20} css={{ textDecoration: 'underline',
    // 					"@media only screen and (max-width: 672px)": {
    // 						fontSize: "15px",
    // 						paddingLeft: "10px",
    // 					}, }}>
    // 					DIPP95081
    // 				</Text>
    // 				</Box>
    // 			</Box>
    // 		</Box>
    //
    // 		<Box
    // 			sx={{
    // 				display: "flex",
    // 				flexWrap: "wrap",
    // 				justifyContent: "center",
    // 				alignItems: "center",
    // 				marginTop: 2,
    // 				"@media only screen and (max-width: 672px)": {
    // 					justifyContent: "center",
    // 					width: "auto",
    // 				},
    // 			}}
    // 		>
    // 			<Text
    // 				b
    // 				size={15}
    // 				css={{
    // 					marginTop: "20px",
    // 					color:"#000000",
    // 					"@media only screen and (max-width: 672px)": {
    // 						fontSize: 12,
    // 						width: "100vw",
    // 						paddingLeft: "15px",
    // 						paddingRight: "15px",
    // 					},
    // 				}}
    // 			>
    // 				© Copyright 2023 KamayaKya. All rights reserved
    // 			</Text>
    // 		</Box>
    // 	</div>
    // </main>

    <header>
      <div>
        {/* Divider */}
        <div className="bottomNavbar-dividerSection">
          <span className="bottomNavbar-divider" />
        </div>
        {/* Logo */}
        <nav>
          <Link href={"/"}>
            <a>
              <img
                src="./kmk-logo (1).png"
                className="kamayakyaLogoBottomNavbar"
                alt="kamayakya"
              />
            </a>
          </Link>
        </nav>
        {/* Pages */}
        <div>
          <nav className="bottomNavbarPageLinks">
            <Link href={""}>
              <a>
                <Text className="bottomNavbarPageLinks-text">
                  Terms & Conditions
                </Text>
              </a>
            </Link>
          </nav>
          <nav className="bottomNavbarPageLinks">
            <Link href={""}>
              <a>
                <Text className="bottomNavbarPageLinks-text">Disclaimer</Text>
              </a>
            </Link>
          </nav>
          <nav className="bottomNavbarPageLinks">
            <Link href={""}>
              <a>
                <Text className="bottomNavbarPageLinks-text">
                  Investor Charter
                </Text>
              </a>
            </Link>
          </nav>
          <nav className="bottomNavbarPageLinks">
            <Link href={""}>
              <a>
                <Text className="bottomNavbarPageLinks-text">Complaints</Text>
              </a>
            </Link>
          </nav>
          <nav className="bottomNavbarPageLinks">
            <Link href={""}>
              <a>
                <Text className="bottomNavbarPageLinks-text">
                  Privacy Policy
                </Text>
              </a>
            </Link>
          </nav>
        </div>
        {/* Social Links */}
        <div>
          <nav className="bottomNavbarPageLinks socialDesign">
            <SocialIcon
              className="socialIcons"
              url="https://www.facebook.com/KamayaKya"
              style={{ height: "30px", width: "30px" }}
            />
          </nav>
          <nav className="bottomNavbarPageLinks socialDesign">
            <SocialIcon
              className="socialIcons"
              url="https://instagram.com/kamayakyaofficial?igshid=YmMyMTA2M2Y="
              style={{ height: "30px", width: "30px" }}
            />
          </nav>
          <nav className="bottomNavbarPageLinks socialDesign">
            <SocialIcon
              className="socialIcons"
              url="https://www.linkedin.com/company/kamayakya/"
              style={{ height: "30px", width: "30px" }}
            />
          </nav>
          <nav className="bottomNavbarPageLinks socialDesign">
            <SocialIcon
              className="socialIcons"
              url="https://twitter.com/KamayaKyaIndia?s=20&t=LGnZi-Xq9J6m993h9E7BCw"
              style={{ height: "30px", width: "30px" }}
            />
          </nav>
          <nav className="bottomNavbarPageLinks socialDesign">
            <SocialIcon
              className="socialIcons"
              url="https://telegram.com/"
              style={{ height: "30px", width: "30px" }}
            />
          </nav>
        </div>
      </div>
      <div className="padding-top-header">
        <Text className="copyright warning">
          Kamayakya Wealth Management Pvt. Ltd makes no warranties or
          representations, express or implied, on products and services offered
          through the platform. It accepts no liability for any damages or
          losses, however, caused in connection with the use of, or on the
          reliance of its research and recommendation services. Past performance
          is not indicative of future returns. Please consider your specific
          investment requirements, risk tolerance, goal, time frame, risk and
          reward balance and the cost associated with the investment before
          choosing a fund, or designing a portfolio that suits your needs.
          Performance and returns of any investment portfolio can neither be
          predicted nor guaranteed.
        </Text>
      </div>
      {/* Divider */}
      <div className="bottomNavbar-dividerSection padding-top-divider">
        <span className="bottomNavbar-divider" />
      </div>
      {/* Logos */}
      <div className="registrationLogos-div">
        <div className="registrationLogosIndividualCard">
          <div className="registrationLogosIndividualCard-row">
            <img
              className="registrationLogosIndividualCard-row-logo"
              src="./SEBI.png"
              alt="SEBI NUMBER INH000009843"
            />
          </div>
          <div className="registrationLogosIndividualCard-column">
            <Text className="registrationLogosIndividualCard-column-header">
              Registration No.
            </Text>
            <Text className="registrationLogosIndividualCard-column-number">
              INH000009843
            </Text>
          </div>
        </div>
        <div className="registrationLogosIndividualCard">
          <div className="registrationLogosIndividualCard-row">
            <img
              className="registrationLogosIndividualCard-row-logo"
              src="./MSME logo.png"
              alt="SEBI NUMBER INH000009843"
            />
          </div>
          <div className="registrationLogosIndividualCard-column">
            <Text className="registrationLogosIndividualCard-column-header">
              Udyam Registration No.
            </Text>
            <Text className="registrationLogosIndividualCard-column-number">
              UDYAM-MH-26-0204983
            </Text>
          </div>
        </div>
        <div className="registrationLogosIndividualCard">
          <div className="registrationLogosIndividualCard-row">
            <img
              className="registrationLogosIndividualCard-row-logo"
              src="./Startup India Logo.png"
              alt="SEBI NUMBER INH000009843"
            />
          </div>
          <div className="registrationLogosIndividualCard-column">
            <Text className="registrationLogosIndividualCard-column-header">
              Certificate No.
            </Text>
            <Text className="registrationLogosIndividualCard-column-number">
              DIPP95081
            </Text>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <Text className="copyright">
          © 2023 KamayaKya Wealth Management Pvt. Ltd., all rights reserved.
        </Text>
      </div>
      {/*/!* Divider *!/*/}
      {/*<div className="bottomNavbar-dividerSection">*/}
      {/*	<span className="bottomNavbar-divider" />*/}
      {/*</div>*/}
      {/* Certificates */}
      {/*<div className="bottomNavbar-dividerSection registrationLogos">*/}
      {/*	<div className="registrationLogos-positioning">*/}
      {/*		<Box*/}
      {/*			sx={{ display: "flex", flexDirection: "row", alignItems: "center",*/}
      {/*				paddingLeft: "15px",*/}
      {/*				"@media only screen and (max-width: 672px)": {*/}
      {/*					marginTop: "10px",*/}
      {/*				},*/}
      {/*			}}*/}
      {/*		>*/}
      {/*			<img src="SEBI.png" width={"auto"} height={"40px"}/>*/}
      {/*			<Box sx={{*/}
      {/*				display: "flex",*/}
      {/*				flexDirection: "column",*/}
      {/*				alignItems: "flex-start",*/}
      {/*				justifyContent: "flex-start",*/}
      {/*			}}>*/}
      {/*				<Text b size={12} css={{ textAlign: 'start',*/}
      {/*					"@media only screen and (max-width: 672px)": {*/}
      {/*						fontSize: "11px",*/}
      {/*						paddingLeft: "10px",*/}
      {/*					}, }}>*/}
      {/*					SEBI Registration:*/}
      {/*				</Text>*/}
      {/*				<Text b size={14} css={{ textDecoration: 'underline',*/}
      {/*					"@media only screen and (max-width: 672px)": {*/}
      {/*						fontSize: "15px",*/}
      {/*						paddingLeft: "10px",*/}
      {/*					}, }}>*/}
      {/*					INH000009843*/}
      {/*				</Text>*/}
      {/*			</Box>*/}
      {/*		</Box>*/}
      {/*		<Box*/}
      {/*			sx={{ display: "flex", flexDirection: "row", alignItems: "center",*/}
      {/*				paddingTop: "10px",*/}
      {/*				paddingLeft: "15px",*/}
      {/*				"@media only screen and (max-width: 672px)": {*/}
      {/*					marginTop: "10px",*/}
      {/*				},*/}
      {/*			}}*/}
      {/*		>*/}
      {/*			<img src="MSME logo.png" width={"auto"} height={"40px"}/>*/}
      {/*			<Box sx={{*/}
      {/*				display: "flex",*/}
      {/*				flexDirection: "column",*/}
      {/*				alignItems: "flex-start",*/}
      {/*				justifyContent: "flex-start",*/}
      {/*			}}>*/}
      {/*				<Text b size={12} css={{ textAlign: 'start',*/}
      {/*					"@media only screen and (max-width: 672px)": {*/}
      {/*						fontSize: "11px",*/}
      {/*						paddingLeft: "10px",*/}
      {/*					}, }}>*/}
      {/*					MSME Udyam Registration:*/}
      {/*				</Text>*/}
      {/*				<Text b size={14} css={{ textDecoration: 'underline',*/}
      {/*					"@media only screen and (max-width: 672px)": {*/}
      {/*						fontSize: "15px",*/}
      {/*						paddingLeft: "10px",*/}
      {/*					}, }}>*/}
      {/*					UDYAM-MH-26-0204983*/}
      {/*				</Text>*/}
      {/*			</Box>*/}
      {/*		</Box>*/}
      {/*		<Box*/}
      {/*			sx={{ display: "flex", flexDirection: "row", alignItems: "center",*/}
      {/*				paddingTop: "10px",*/}
      {/*				paddingLeft: "15px",*/}
      {/*				"@media only screen and (max-width: 672px)": {*/}
      {/*					marginTop: "10px",*/}
      {/*				},*/}
      {/*			}}*/}
      {/*		>*/}
      {/*			<img src="Startup India Logo.png" width={"auto"} height={"40px"}/>*/}
      {/*			<Box sx={{*/}
      {/*				display: "flex",*/}
      {/*				flexDirection: "column",*/}
      {/*				alignItems: "flex-start",*/}
      {/*				justifyContent: "flex-start",*/}
      {/*			}}>*/}
      {/*				<Text b size={12} css={{ textAlign: 'start',*/}
      {/*					"@media only screen and (max-width: 672px)": {*/}
      {/*						fontSize: "11px",*/}
      {/*						paddingLeft: "10px",*/}
      {/*					}, }}>*/}
      {/*					Startup India Certificate:*/}
      {/*				</Text>*/}
      {/*				<Text b size={14} css={{ textDecoration: 'underline',*/}
      {/*					"@media only screen and (max-width: 672px)": {*/}
      {/*						fontSize: "15px",*/}
      {/*						paddingLeft: "10px",*/}
      {/*					}, }}>*/}
      {/*					DIPP95081*/}
      {/*				</Text>*/}
      {/*			</Box>*/}
      {/*		</Box>*/}
      {/*	</div>*/}
      {/*</div>*/}
      {/*	<div className="copyright-box">*/}
      {/*		<Text className="copyright">© 2023 KamayaKya Wealth Management Pvt. Ltd., all rights reserved.</Text>*/}
      {/*		<Text className="copyright warning">Kamayakya Wealth Management Pvt. Ltd makes no warranties or representations, express or implied, on products and services offered through the platform. It accepts no liability for any damages or losses, however, caused in connection with the use of, or on the reliance of its research and recommendation services.*/}
      {/*			Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, goal, time frame, risk and reward balance and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs. Performance and returns of any investment portfolio can neither be predicted nor guaranteed.*/}
      {/*		</Text>*/}
      {/*	</div>*/}
      {/*</div>*/}
    </header>
  );
};

export default Footer;
