import React, { useContext } from 'react'
import AuthContext from '@/components/AuthContext';
import NavBar2 from '@/components/Navbar2';
import NavBar from '@/components/Navbar2';
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';

const TermsAndCond = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      Terms and Conditions
      <FaqsNew />
      <FAQs />
    </div>
  )
}

export default TermsAndCond;
