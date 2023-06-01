import NavBar from '@/components/Navbar2';
import React from 'react'
import FaqsNew from './screens/FaqsNew';
import FAQs from './screens/FAQs';

const InvestorCharter = () => {
  return (
    <div>
      <NavBar />
      Investor Charter
      <FaqsNew />
      <FAQs />
    </div>
  )
}

export default InvestorCharter;
