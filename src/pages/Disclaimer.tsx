import NavBar from '@/components/Navbar2';
import FaqsNew from './screens/FaqsNew';
import Footer from './screens/Footer';
import React, { useContext } from 'react'
import AuthContext from '@/components/AuthContext';
import NavBar2 from '@/components/Navbar2';

const Disclaimer = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      Disclaimer
      <FaqsNew />
      <Footer />
    </div>
  )
}

export default Disclaimer;
