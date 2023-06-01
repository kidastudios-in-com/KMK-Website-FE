import NavBar from '@/components/Navbar2';
import React from 'react'
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';

const TermsAndCond = () => {
  return (
    <div>
      <NavBar />
      Terms and Conditions
      <FaqsNew />
      <FAQs />
    </div>
  )
}

export default TermsAndCond;
