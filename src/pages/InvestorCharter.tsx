import NavBar from '@/components/Navbar2';
import React, { useContext } from 'react'
import FaqsNew from './screens/FaqsNew';
import Footer from './screens/Footer';
import AuthContext from '@/components/AuthContext';
import NavBar2 from '@/components/Navbar2';

const InvestorCharter = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      Investor Charter
      <FaqsNew />
      <Footer />
    </div>
  )
}

export default InvestorCharter;
