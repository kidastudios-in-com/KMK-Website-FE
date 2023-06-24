import React, { useContext } from 'react'
import AuthContext from '@/components/AuthContext';
import NavBar2 from '@/components/Navbar2';
import NavBar from '@/components/Navbar2';
import FaqsNew from './screens/FaqsNew';
import Footer from './screens/Footer';
import {Text} from "@nextui-org/react";
import {Box} from "@mui/material";

const PrivacyPolicy = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{backgroundColor: "#fff",}}>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
        <Box
            sx={{
                // paddingTop: "30px",
                display: "flex",
                // flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                maxWidth: "80rem",
                paddingLeft: "15px",
                paddingRight: "15px",
                background: "#fff",
                "@media only screen and (min-width: 672px)": {
                    paddingTop: "10vh",
                    paddingBottom: "10vh",
                },"@media only screen and (max-width: 672px)": {
                    // maxHeight: "100vh",
                    marginTop: "0px",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                },
            }}
        >
            <Text
                b
                size={70}
                css={{
                    marginTop: "0px",
                    width: "100%",
                    maxWidth: "80rem" /* 1280px */,
                    textAlign: "left",
                    lineHeight: 1.2,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    "@media only screen and (max-width: 764px)": {
                        fontSize: 45,
                        marginTop: "35px",
                        maxWidth: "100%",
                        textAlign: "left",
                    },
                }}
            >
                Privacy Policy
            </Text>
            <Text
                b
                size={20}
                css={{
                    marginTop: "20px",
                    width: "100%",
                    maxWidth: "80rem" /* 1280px */,
                    textAlign: "left",
                    lineHeight: 1.2,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    "@media only screen and (max-width: 764px)": {
                        fontSize: 15,
                        marginTop: "35px",
                        marginBottom: "35px",
                        maxWidth: "100%",
                        textAlign: "left",
                    },
                }}
            >
                Kamayakya Wealth Management Pvt. Ltd makes no warranties or representations, express or implied, on products and services offered through the platform. It accepts no liability for any damages or losses, however, caused in connection with the use of, or on the reliance of its research and recommendation services.

                Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, goal, time frame, risk and reward balance and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs. Performance and returns of any investment portfolio can neither be predicted nor guaranteed.

                Terms & Conditions
                The terms "We" / "Us" / "Our"/”Company”/”The Company'' individually and collectively refer to KamayaKya (kamayakya.com) and the terms "Visitor” or ”User” refer to the users. The terms "Website", "KamayaKya" individually and collectively refer to the KamayaKya website. This page states the Terms and Conditions under which you (Visitor) may visit this website (“Website”). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this website.

                This document/agreement/understanding is an electronic record in terms of Information Technology Act, 2000 and rules and regulations thereunder and is generated by a computer system and does not require any physical or digital signatures. This document is published in accordance with the provisions of Rule 3 of the Information Technology (Intermediaries Guidelines) Rules, 2011.

                Before you may use the Website, you must read all of the terms and conditions (“Terms”) herein and the Privacy Policy provided on the Website. By using the Company’s products, software, services, portal and Website and or the Advisory/services offered by third parties on the Website (“Services”), you understand and agree that the Company will treat your use of the Services as acceptance of these terms from such point of usage. You may not use the Services if you do not accept the Terms. If you do not agree to be bound by these Terms and the Privacy Policy, you may not use the Website in any way. It is strongly recommended for you to return to this page periodically to review the most current version of the Terms. The Company reserves the right at any time, at its sole discretion, to change or otherwise modify the Terms without prior notice, and your continued access or use of this Website signifies your acceptance of the updated or modified Terms. If you object to these Terms or any subsequent modifications to these Terms or become dissatisfied with the Website in any way, your only recourse is to immediately terminate use of the Website.

                Eligibility
                To register for an account you must be at least 13 years old. To subscribe and make payments you must be at least 18 years old or have your parent’s permission. If you know a user is under the age of 13, please report them to us at contact@kamayakya.com

                User Conduct
                Illegal Activities - Don’t break the law or encourage others to break the law.

                Abuse - Don’t harass or bully others, or promote violence or hatred towards others.

                Personal Information - Don’t distribute others’ personal information or otherwise abuse it. Creators with access to their users’ personal information should not use it for anything unrelated to KamayaKya.

                Fraud - Don’t post information that is false or otherwise misleading.

                Impersonation - Don’t impersonate anyone. Don’t use another’s account, or allow others to use your account.

                Username Squatting - Don’t create an account to prevent others from using the name or to sell the name.

                Intellectual Property - Don’t infringe on others’ intellectual property rights.

                Spam - Don’t spam others or distribute unsolicited advertising material.

                Malware - Don’t use KamayaKya to host or distribute, malicious or destructive software.

                Endorsement - Don’t claim endorsement by KamayaKya without our prior written approval.

                Service Degradation - Don’t degrade other’s’ use of KamayaKya.

                Data Mining - Don’t crawl, scrape or otherwise index information on KamayaKya without our explicit permission.

                Content Sharing – Distributing a creator’s content without explicit permission can expose you to legal litigation from the creator.

                Reverse Engineering - Don’t take apart KamayaKya to figure out our secret sauce. If you want to know just get in touch with us at contact@kamayakya.com

                Content Restrictions
                We restrict some types of content. You cannot:

                Create any content depicting explicitly sexual or violent acts in graphic detail.

                Create content using others' intellectual property, unless you have written permission to use it, or your use is protected by fair use.

                Any content that is illegal under Indian or local state laws or laws of the region that you reside in.

                We are not party to the agreement between creators and users. If a user requests a refund from us we will not refund in any case.

                Stock or Market Quotes
                You acknowledge and accept that stock quotes that may appear in KamayaKya communities are only provided for setting the context. We recommend not to use such quotes for trading purposes. Clients may use the data for individual trading for his/her own account, and for his/her end-use only but KamayaKya will be not liable for any profits/losses of clients. The Client shall not communicate or otherwise furnish, or permit to be communicated or otherwise furnished, such data, in any format, to any person/entity, nor allow any such person/entity to access, directly or indirectly, any of the data. The Client shall undertake all the necessary technical and organizational measures in order to guarantee the security of such data. The Client shall not disseminate the data to any person/entity. The Client shall not create/issue/introduce/license and/or allow any third party or index creator to create/issue/introduce any indices/product linked to the such data. The Client understands and agrees that the data constitutes valuable confidential information. The Client understands and agrees that he/she will have no rights (including to the intellectual property rights), title, or interest whatsoever, in and to such data, or in relation to the data.

                Force Majeure
                If performance of any Services or obligations under the terms and conditions of this Terms of Use or any other provisions of the Policies, by us or other third parties in fulfilment of associated transactions (for e.g. payment gateways etc.) is prevented, restricted, delayed or interfered with on account of a Force Majeure Event (defined below), then we (or associated third-parties) shall be excused from such performance to the extent of and during the period of such Force Majeure Event.

                A "Force Majeure Event" shall mean any event that is beyond our reasonable control and shall include, without limitation, sabotage, fire, flood, earthquakes, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorised access to computer, computer system or computer network, computer crashes, breach of security and encryption (provided it is beyond our reasonable commercial control), power or electricity failure or unavailability of adequate power or electricity.

                Communications
                When you use the Platform or send emails or other data, information or communication to us, you agree and understand that you are communicating with us electronically, and you consent to receive communications electronically from us periodically, and as and when required. We will communicate with you by email or by notices on the Platform or electronic records on the Platform or on your mobile number which will be deemed adequate service of notice. Further, you hereby authorize and give consent to us and our third-party service providers, to send you, from time to time, various information, alerts, SMS, messages, calls or commercial communications, and other such communications on your registered mobile number, whether or not this number is registered with National Do Not Call Registry, or listed in National Customer Preference Register. You also confirm that you are consenting to receiving such communications, and you will not hold us or our third- party service providers liable, or institute any complaint under the Telecom Commercial Communications Customer Preference (TRAI) Regulations, 2010 or such other applicable regulations including any amendment thereof, as may be applicable from time to time. This service will be auto renewed every month and if you wish to terminate this service, please write an email to contact@kamayakya.com

                Your Content
                By posting content on to Website you grant us a royalty-free, perpetual, irrevocable, non-exclusive, sublicensable, worldwide license to use, reproduce, distribute, perform, publicly display or prepare derivative works of your content. The purpose of this license is to allow us to operate KamayaKya, promote KamayaKya and promote your content on KamayaKya. We are not trying to steal your content or use it in an exploitative way. You may not post content that infringes on others' intellectual property or proprietary rights. Users may not use content posted by creators in any way not authorized by the creator.

                Use of Content
                All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website. You may not otherwise use, reproduce, distribute, perform, publicly display or prepare derivative works of our content unless we give you permission in writing. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation’s or entity’s written permission.

                Content we create is protected by copyright, trademark and trade secret laws. Some examples of our content are the text on the site, our logo, and our codebase. We grant you a license to use our logo and other copyrights or trademarks to promote KamayaKya service.

                Acceptable website use
                (A) Security Rules: Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation,

                accessing data not intended for such user or logging into a server or account which the user is not authorised to access.

                attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation.

                sending unsolicited electronic mail, sms, push notifications including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. The business and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.

                (B) General Rules: Visitors may not use the Web Site in order to transmit, distribute, store or destroy material:

                that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation OR

                in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others OR

                that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.

                Copyright Infringement
                If you believe that any content on KamayaKya infringes your copyrights, please send written notice to: contact@kamayakya.com

                This notice should include the following information:

                The electronic or physical signature of the copyright owner, or a person authorized to act on their behalf.

                A description of the copyrighted work that you claim has been infringed.

                A description of the exact location on KamayaKya of the content that you claim is infringing. This description must allow us to find and identify the content.

                Your name, address, telephone number and email address.

                A statement by you that: a. you believe in good faith that the use of the content that you claim to infringe your copyright is not authorized by law, the copyright owner, or the owner’s agent, b. all information contained in your copyright notice is accurate, and c. under penalty of perjury, you are either the copyright owner, or authorized to act on their behalf.

                In appropriate circumstances we may also terminate the accounts of repeat infringers.

                Stock or Market Quotes
                You acknowledge and accept that stock quotes that may appear in KamayaKya picks are only provided for setting the context. KamayaKya is NOT responsible for any damage or losses arising out of your trades.

                Indemnity
                You agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of the Website or their breach of the terms. Further, you, as a creator agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from claims by the users of the Website, the Securities and Exchange Board of India or any other regulatory or law enforcement agency.

                Warranty Disclaimer
                KamayaKya is provided “as is” and without warranty of any kind. Any warranty of merchantability, fitness for a particular purpose, non-infringement, and any other warranty is excluded to the greatest extent permitted by law. The disclaimers of warranty under this clause also apply to our affiliates and third party service providers.

                Limit of liability
                User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of substitute goods or/and services or resulting from any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user's transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages. User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent.

                User agrees that the Company shall not be responsible or liable to the user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall Company's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Company, if any, that is related to the cause of action.

                To the extent permitted by law, our liability for damages is limited to the amount of money we have earned through your use of KamayaKya. We are specifically not liable for loss associated with failure to deliver content and from losses caused by conflicting contractual agreements.

                Disclaimer of consequential damage
                In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages.

                Governing Law
                We encourage you to contact us if you have an issue. If a dispute does arise out of these terms or related to your use of KamayaKya, and it cannot be resolved after you talk with us, then it must be resolved in Pune under Maharashtra law.

                Maharashtra law, excluding its conflict of law provisions, governs these terms and all other KamayaKya policies. If a lawsuit does arise, both parties consent to the exclusive jurisdiction and venue of the courts located in Pune, Maharashtra, India.

                These terms and any referenced policies are the entire agreement between you and us, and supersede all prior agreements. If any provision of these terms is held to be unenforceable, that provision is modified to the extent necessary to enforce it. If a provision cannot be modified, it is severed from these terms, and all other provisions remain in force. If either party fails to enforce a right provided by these terms, it does not waive the ability to enforce any rights in the future.

                Third Party Content
                For Third Party Content, KamayaKya role is limited to providing a communication platform along with hosting services to third parties, to enable the transmission of the Third Party Content directly from third parties to You. The Third Party Content on the Site is directly uploaded onto the Site by third parties who avail of KamayaKya hosting services, without any intervention from KamayaKya in the uploading / transmission process. KamayaKya’s role is that of an ‘intermediary’ as defined under the Information Technology Act, 2000 and the rules thereunder, with regard to the Third Party Content. Being an intermediary, KamayaKya has no responsibility and / or liability in respect of any Third Party Content on the Site, including for intellectual property rights infringement, defamation, obscenity or any other violation under applicable law.

                Third Party Content on the Site may include text/weblinks/audio/video content and/or interactive content developed or owned by the third parties ("Online content").The Online content will be run and made available over the Site and do not have to be separately downloaded or installed.

                When You indulge in third party content , You agree and acknowledge that the Site does not create and/or broadcast any online content on its own accord and KamayaKya is not responsible or liable for the content or accuracy of the online content, including copyrights, that may be accessed by You through the Site. Please note that may be subject to its own content rules and code of conduct. Any personal data provided by You or collected automatically when You use the Service relating to the online content will be governed by the Privacy Notice accessible at our privacy policy. Please note certain Third Party Content may be available only on limited and/or compatible devices.

                KamayaKya does not endorse, market, advertise or publicize any Third Party Content on the Site and is not responsible or liable for any Third Party Content.

                KamayaKya does not pre-screen the Third Party Content and has no obligation to monitor any Third Party Content. Hence, KamayaKya does not have actual or specific knowledge of any Third Party Content on the Site. However, KamayaKya at its discretion and in accordance with applicable law may monitor any Third Party Content and may remove any Third Party Content from the Site if KamayaKya determines in its sole discretion that such Third Party Content is in violation of this Agreement or any applicable law. KamayaKya, at its discretion, may review the Third Party Content when, and only when, complaints are received from You. Such actions do not in any manner negate or dilute KamayaKya’s position as an intermediary or impose any liability on KamayaKya with respect to Third Party Content.

                KamayaKya will consider all communications, requests and suggestions sent by You and other members of the public provided that such communications are sent in a bona fide manner in good faith in the interest of the Site and public good. However, KamayaKya is not under any obligation to act on any such communications, requests and suggestions or respond to anyone. KamayaKya’s decision in this respect shall be final. Specifically, if any such request relates to a request / demand to take down/ disable/ remove/ delete any Third Party Content in the Site, KamayaKyais under no legal obligation to respond to or act on such requests. KamayaKya will take such action as KamayaKya is required to take under applicable law. If there is any valid court order or administrative order issued requiring KamayaKya take any action, then KamayaKya will comply with such court order or administrative order.

                Termination of Service
                KamayaKya reserves the right to immediately terminate, suspend, limit, or restrict Your account or Your use of the Services or access to Content at any time, without notice or liability, if KamayaKya so determines in its sole discretion, for any reason whatsoever, including that You have breached these Terms and Conditions, the Privacy Policy, violated any law, rule, or regulation, engaged in any inappropriate conduct, provided false or inaccurate information, or for any other reason. You hereby agree and consent to the above and agree and acknowledge that Novi can, at its sole discretion, exercise its right in relation to any or all of the above, and that KamayaKya, its directors, officers, employees, affiliates, agents, contractors, principals or licensors shall not be liable in any manner for the same; and You hereby agree, acknowledge and consent to the same. You hereby also agree that Novi shall not refund any amounts that you may have paid to access and/or use the Services.

                Disclosures
                KamayaKya is a SEBI registered research analyst.

                All information present on KamayaKya.com is to help investors in their decision-making process and shall not be considered as a recommendation or solicitation of an investment or investment strategy. Investors are responsible for their investment decisions and are responsible to validate all the information used to make the investment decision. Investor should understand that his/her investment decision is based on personal investment needs and risk tolerance, and performance information available on kamayakya.com is one amongst many other things that should be considered while making an investment decision. Past performance does not guarantee future returns and performance stocks are subject to market risk. Investments in the securities market are subject to market risks and investors should read all the related documents carefully before investing.


            </Text>

        </Box>
      <FaqsNew />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy;