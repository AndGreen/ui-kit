import React, { useEffect, useState } from 'react';
import { loadPaymentScript } from './utils';
import PaymentWidget from './PaymentWidget';

const PaymentWidgetWrapper = ({ show }) => {
  const [scriptStatus, setScriptStatus] = useState(false);

  useEffect(() => {
    loadPaymentScript(() => {
      setScriptStatus(true);
    });
  });

  return <div>{show && scriptStatus && <PaymentWidget />}</div>;
};

export default PaymentWidgetWrapper;
