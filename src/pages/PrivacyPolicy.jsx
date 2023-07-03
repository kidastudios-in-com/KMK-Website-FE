import React, { useContext } from "react";
import AuthContext from "@/components/AuthContext";
import NavBar2 from "@/components/Navbar2";
import NavBar from "@/components/Navbar2";
import FaqsNew from "./screens/FaqsNew";
import Footer from "./screens/Footer";
import { Text } from "@nextui-org/react";
import { Box } from "@mui/material";

const PrivacyPolicy = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: "#fff" }}>
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
          paddingLeft: "15px",
          paddingRight: "15px",
          background: "#fff",
          "@media only screen and (min-width: 672px)": {
            paddingTop: "2.5vh",
            paddingBottom: "10vh",
          },
          "@media only screen and (max-width: 672px)": {
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
          size={60}
          css={{
            marginTop: "0px",
            width: "100%",
            maxWidth: "80rem" /* 1280px */,
            textAlign: "center",
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
          size={20}
          css={{
            marginTop: "2.5vh",
            width: "100%",
            maxWidth: "80rem" /* 1280px */,
            textAlign: "left",
            lineHeight: 1.4,
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
          <br />
          <b>General</b> <br /> a. This Website with the URL of kamayakya.com
          ("Website/Site") is operated by Kamayakya Wealth Management Pvt. Ltd.
          ("We/Our/Us"). We are committed to protecting and respecting your
          privacy. We do collect your personal information and process your
          personal data in accordance with the IT Act, 2000 (21 of 2000) and
          other national and state laws which relate to the processing of
          personal data. <br />
          b. Please read the following carefully to understand our views and
          practices regarding your personal data. We collect your personal
          information in order to provide and continually improve our products
          and services. <br /> c. Our privacy policy is subject to change at any
          time without notice. To make sure you are aware of any changes, please
          review this policy periodically. <br />
          d. All partner firms and any third-party working with or for Us, and
          who have access to personal information, will be expected to read and
          comply with this policy.
          <br />
          <br />
          <b>How we collect the information</b> <br /> a. From you directly and
          through this Site: We may collect information through the Website when
          you visit. The data we collect depends on the context of your
          interactions with our Website. <br />
          b. Through business interaction: We may collect information through
          business interaction with you or your employees. <br /> c. From other
          sources: We may receive information from other sources, such as public
          databases; joint marketing partners; social media platforms; or other
          third parties such as:
          <br />
          i. Updated delivery and address information from our carriers or other
          third parties, which we use to correct our records and deliver your
          next purchase or communication more easily.
          <br />
          ii. Information about your interactions with the products and services
          offered by our subsidiaries.
          <br />
          <br />
          <b>Information we collect</b> <br /> a. We collect information
          primarily to provide better services to all of our customers. <br />
          b. We collect the following information from you when you use or
          signup on our Website: name, email address & phone number <br /> c. We
          do collect the following sensitive personal information from you when
          you use or sign up on our Website: Financial data
          <br />
          d. When you visit our Site, some information is automatically
          collected. This may include information such as the Operating Systems
          (OS) running on your device, Internet Protocol (IP) address, access
          times, browser type, and language, and the website you visited before
          our Site. We also collect information about how you use Our products
          or services.
          <br />
          e. We automatically collect purchase or content use history, which we
          sometimes aggregate with similar information from other customers to
          create features such as Best Seller, Top Rated, etc.
          <br />
          f. The full Uniform Resource Locators (URL) clickstream to, through
          and from our website (including date and time); cookie number;
          products and/or content you viewed or searched for; page response
          times; download errors; length of visits to certain pages; page
          interaction information (such as scrolling, clicks, and mouse- overs).
          <br />
          g. We automatically collect information using "Cookies". Cookies are
          small data files stored on your hard drive. Among other things,
          cookies help us improve our Site, our marketing activities, and your
          experience. We use cookies to see which areas and features are popular
          and to count visits to our Site.
          <br />
          h. Most Web browsers are set to accept cookies by default. If you
          prefer, you can choose to set your browser to remove cookies and to
          reject cookies. If you set your browser to reject cookies, some
          features will be unavailable. For more information on how to reject
          cookies, see your browser‘s instructions on changing your cookie
          settings.
          <br />
          i. By using this Website, you are agreeing that We may advertise your
          feedback on the Website and marketing materials.
          <br />
          ii. We will retain your information as long as we require this to
          provide you with the goods and services and for such period as
          mandated by the laws concerned.
          <br />
          iii. If you opt to receive marketing correspondence from us, subscribe
          to our mailing list or newsletters, enter into any of our competitions
          or provide us with your details at networking events, we may use your
          personal data for our legitimate interests in order to provide you
          with details about our goods, services, business updates and events.
          <br />
          <br />
          <b>How we use information</b> <br /> a. We use the information we
          collect primarily to provide, maintain, protect, and improve our
          current products and services. <br />
          b. We use the information collected through this website as described
          in this policy and we may use your information to: <br /> i. Improve
          our services, Site and how we operate our businesses;
          <br />
          ii. Understand and enhance your experience using our Site, products,
          and services;
          <br />
          iii. Personalize our products or services and make recommendations;
          <br />
          iv. Provide and deliver products and services you request;
          <br />
          v. Process, manage, complete, and account for transactions;
          <br />
          vi. Provide customer support and respond to your requests, comments,
          and inquiries;
          <br />
          vii. Create and manage the online accounts you manage on our Website;
          <br />
          viii. Send you related information, including confirmations, invoices,
          technical notices, updates, security alerts and support and
          administrative messages;
          <br />
          ix. Communicate with you about promotions, upcoming events, and news
          about products and services;
          <br />
          x. We may process your personal information without your knowledge or
          consent where required by applicable law or regulation for the
          purposes of verification of identity or for prevention, detection, or
          investigation, including of cyber incidents, prosecution, and
          punishment of offences;
          <br />
          xi. Protect, investigate, and deter against fraudulent, unauthorized,
          or illegal activity. or illegal activity. or illegal activity.
          <br />
          <br />
          <b>Data transfer</b> <br /> a. Information about our users is an
          important part of our business and we take due care to protect the
          same. <br />
          b. We share your data with your consent or to complete any transaction
          or provide any product or service you have requested or authorized. We
          also share data with our affiliates and subsidiaries, with vendors
          working on our behalf. <br /> c. We may employ other companies and
          individuals to perform functions on our behalf. The functions include
          fulfilling orders for products or services, delivering packages,
          sending postal mail and e-mail, removing repetitive information from
          customer lists, providing marketing assistance, providing search
          results and links (including paid listings and links), processing
          payments, transmitting content, scoring credit risk, and providing
          customer service.
          <br />
          d. These third-party service providers have access to personal
          information needed to perform their functions but may not use it for
          other purposes. Further, they must process the personal information in
          accordance with this Privacy Policy and as permitted by applicable
          data protection laws.
          <br />
          e. We release accounts and other personal information when we believe
          it is appropriate to comply with the law, enforce or apply our
          conditions of use, and other agreements, protect the rights, property
          or safety of Us, our users, or others. This includes exchanging
          information with other companies and organizations for fraud
          protection and credit risk reduction.
          <br />
          <br />
          <b>Cookies</b> <br /> a. To optimize our web presence, we use cookies.
          These are small text files stored on your computer‘s main memory.
          These cookies are deleted after you close the browser. Other cookies
          remain on your computer (long-term cookies) and permit its recognition
          on your next visit. This allows us to improve your access to our site.
          This helps us to learn more about your interests, and provides you
          with essential features and services, including: <br />
          i. Keeping track of items stored in your shopping basket. <br /> ii.
          Conducting research and diagnostics to improve the content, products,
          and services.
          <br /> iii. Preventing fraudulent activity.
          <br /> iv. Improving security.
          <br />
          b. Our cookies allow you to take advantage of some of our essential
          features. For instance, if you block or otherwise reject our cookies,
          you will not be able to add items to your shopping basket, proceed to
          checkout, or use any products or services that require you to sign in.
          <br />
          c. Approved third parties also may set cookies when you interact with
          Our services.
          <br />
          d. Third parties include search engines, providers of measurement and
          analytics services, social media networks, and advertising companies.
          <br />
          e. Third parties use cookies in the process of delivering content,
          including ads relevant to your interests, to measure the effectiveness
          of their ads, and to perform services on behalf of Us.
          <br />
          f. You can prevent the storage of cookies by choosing a "disable
          cookies" option in your browser settings. But this can limit the
          functionality of our services.
          <br />
          <br />
          <b>Data security</b> <br /> a. We take due care to protect customer
          data. Technical measures are in place to prevent unauthorized or
          unlawful access to data and against accidental loss or destruction of,
          or damage to, data. The employees who are dealing with the data have
          been trained to protect the data from any illegal or unauthorized
          usage.
          <br />
          b. We work to protect the security of your information during
          transmission by using Secure Sockets Locker (SSL) software, which
          encrypts information you input. SSL allows sensitive information such
          as credit card numbers, UID‘s and login credentials to be transmitted
          securely.
          <br />
          c. We maintain physical, electronic, and procedural safeguards in
          connection with the collection, storage, and disclosure of personal
          customer information.
          <br />
          d. We take reasonable steps to help protect your personal information
          in an effort to prevent the loss, misuse, and unauthorized access,
          disclosure alteration and destruction. It is your responsibility to
          protect your user names and passwords to help prevent anyone from
          accessing or abusing your accounts and services. You should not use or
          reuse the same passwords you use with other accounts as your password
          for our services.
          <br />
          e. It is important for you to protect against unauthorized access to
          your password and your computers, devices, and applications. Be sure
          to sign off when you finish using a shared computer.
          <br />
          f. The information you provide to us is shared on our secure servers.
          We have implemented appropriate physical, technical and organizational
          measures designed to secure your information against accidental loss
          and unauthorized access, use, alteration, or disclosure. In addition,
          we limit access to personal data to those employees, agents,
          contractors, and other third parties that have a legitimate business
          need for such access.
          <br />
          g. Information collected from you will be stored for such period as
          required to complete the transaction entered into with you or such
          period as mandated under the applicable laws.
          <br />
          <br />
          <b>Links to third parts site/apps</b> <br /> Our Site may, from time
          to time, contain links to and from other websites of third parties.
          Please note that if you follow a link to any of these websites, such
          websites will apply different terms to the collection and privacy of
          your personal data, and we do not accept any responsibility or
          liability for these policies. When you leave our Site, we encourage
          you to read the privacy policy of every website you visit.
          <br />
          <br />
          <b>Social network plugins</b> <br /> This Website incorporates plugins
          and/or buttons for social networks, in order to allow easy sharing on
          your favourite social networks. These plugins are programmed so as not
          to set any cookies when assessing the page to safeguard the privacy of
          users. Cookies may be set if you make voluntary use of the plugin. The
          collection and use of information obtained by means of the plugin are
          governed by the respective privacy policies of the social networks.
          <br />
          <br />
          <b>Sharing of personal information</b> <br /> We do not share your
          personal data with third parties without your prior consent other
          than:
          <br /> i. With third parties who work on our behalf provided such
          third parties adhere to the data protection principles set out in the
          IT Act, 2000 (21 of 2000) and other applicable legislation, or enter
          into a written agreement with Us requiring that the third party
          provide at least the same level of privacy protection as is required
          by such principles;
          <br /> ii. To comply with laws or to respond to lawful requests and
          legal process;
          <br /> iii. To protect the rights and property of Us, our agents,
          customers, and others including to enforce our agreements, policies,
          and terms of use;
          <br /> iv. In an emergency, including to protect the personal safety
          of any person; and
          <br /> v. For the purpose of a business deal (or negotiation of a
          business deal) involving the sale or transfer of all or a part of our
          business or assets (business deals may include, for example, any
          merger, financing, acquisition, divestiture, or bankruptcy transaction
          or proceeding).
          <br />
          <br />
          <b>Children</b> <br /> If you are under 18, or the age of majority in
          the jurisdiction in which you reside, you may only use Our Website
          with the consent of your parent or legal guardian. In any case, We
          will not be liable for any cause of action that arose due to non-
          compliance with this section.
          <br />
          <br />
          <b>Your information choices & changes</b> <br /> a. You can also make
          choices about the collection and processing of your data by Us. You
          can access your personal data and opt-out of certain services provided
          by the Us. In some cases, your ability to control and access your data
          will be subject to applicable laws.
          <br /> b. You may opt-out of receiving promotional emails from Us by
          following the instructions in those emails. If you opt-out, we may
          still send you non- promotional emails, such as emails about our
          ongoing business relationship. You may also send requests about you
          got preferences, changes and deletions to your information including
          requests to opt-out of sharing your personal information with third
          parties by sending an email to the email address provided at the
          bottom of this document.
          <br />
          <br />
          <b>Changes to this policy</b> <br /> We may change this policy from
          time to time. If we make any changes to this policy, we will change
          the "Last Updated" date above. You agree that your continued use of
          our services after such changes have been published to our services
          will constitute your acceptance of such revised policy.
          <br />
          <br />
          <b>Newsletter</b> <br /> Following subscription to the newsletter,
          your e-mail address is used for our advertising purposes until you
          cancel the newsletter again. Cancellation is possible at any time. The
          following consent has been expressly granted by you separately, or
          possibly in the course of an ordering process: (I am accepting to
          receive newsletter from this website), you may revoke your consent at
          any time with future effect. If you no longer want to receive the
          newsletter, then unsubscribe by clicking on unsubscribe option given
          in the email footer.
          <br />
          <br />
          <b>
            If you have any concern about privacy or grievances with Us, please
            contact us with a thorough description and we will try to resolve
            the issue for you.
          </b>
          <br />
          <br />
          Name: <b>Aniket Kulkarni</b>
          <br />
          Phone Number:{" "}
          <b>
            <a href="tel:+919175939641">+91 9175939641</a>
          </b>
          <br />
          Email Address:{" "}
          <b>
            <a href="email:contact@kamayakya.com">contact@kamayakya.com</a>
          </b>
        </Text>
      </Box>
      <FaqsNew />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
