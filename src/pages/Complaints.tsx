import NavBar from '@/components/Navbar2';
import React, { useContext } from 'react'
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';
import AuthContext from '@/components/AuthContext';
import NavBar2 from '@/components/Navbar2';

const Complaints = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      Complaints
      <FaqsNew />
      <FAQs />
    </div>
  )
}

export default Complaints;
