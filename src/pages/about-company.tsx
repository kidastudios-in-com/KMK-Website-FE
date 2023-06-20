import React, { useContext } from 'react'
import Section1 from './AboutPages/Section1';
import Section2 from './AboutPages/Section2';
import NavBar from '../components/Navbar';
import Section3 from './AboutPages/Section3';
import Section4 from './AboutPages/Section4';
import FaqsNew from './screens/FaqsNew';
import Footer from './screens/Footer';
import NavBar2 from '@/components/Navbar2';
import AuthContext from '@/components/AuthContext';

const AboutCompany = () => {
	const { isLoggedIn } = useContext(AuthContext);
  return (
    <section id='aboutUs'>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      <Section2/>
      <Section1/>
      <Section3/>
      <Section4/>
      <FaqsNew />
      <Footer />
    </section>
  )
}

export default AboutCompany;
