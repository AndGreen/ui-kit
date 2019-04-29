import React, { useEffect } from 'react';

const PaymentWidget = ({ onSuccess, onFail }) => {
  useEffect(() => {
    const widget = new window.cp.CloudPayments();
    widget.charge(
      {
        // options
        publicId: 'test_api_00000000000000000000001', // id из личного кабинета
        description: 'Пример оплаты (деньги сниматься не будут)', // назначение
        amount: 10, // сумма
        currency: 'RUB', // валюта
        invoiceId: '1234567', // номер заказа  (необязательно)
        accountId: 'user@example.com', // идентификатор плательщика (необязательно)
        skin: 'modern', // дизайн виджета
        data: {
          myProp: 'myProp value', // произвольный набор параметров
        },
      },
      options => {
        onSuccess(options);
      },
      (reason, options) => {
        onFail(reason, options);
      },
    );
  });

  return <React.Fragment />;
};

export default PaymentWidget;
