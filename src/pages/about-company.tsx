import React from 'react'
import Section1 from './AboutPages/Section1';
import Section2 from './AboutPages/Section2';
import NavBar from '../components/Navbar';
import Section3 from './AboutPages/Section3';
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';

const AboutCompany = () => {
  return (
    <section id='aboutUs'>
      <NavBar/>
      {/* <Section1/> */}
      <Section2/>
      <Section3/>
      <FaqsNew />
      <FAQs />
    </section>
  )
}

export default AboutCompany;
