import React from 'react';
import { useLocation } from 'react-router-dom';
import Bill from '../Components/Bill';

const BillingPage = () => {
  const location = useLocation(); 
  const { addedItems } = location.state || { addedItems: [] }; // Default to empty array if no state passed

  return <Bill addedItems={addedItems} />;
};

export default BillingPage;
