import React, { useContext } from 'react'
import AuthContext from '@/components/AuthContext';
import NavBar2 from '@/components/Navbar2';
import NavBar from '@/components/Navbar2';
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';

const PrivacyPolicy = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      Privacy Policy
      <FaqsNew />
      <FAQs />
    </div>
  )
}

export default PrivacyPolicy;
