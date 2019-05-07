import React, { useEffect, useState } from 'react';
import { loadPaymentScript } from './utils';
import { PaymentWidgetConfig } from './PaymentWidgetConfig';

export const PaymentWidget = ({ show }) => {
  const [scriptStatus, setScriptStatus] = useState(false);

  useEffect(() => {
    loadPaymentScript(() => {
      setScriptStatus(true);
    });
  });

  return <div>{show && scriptStatus && <PaymentWidgetConfig />}</div>;
};