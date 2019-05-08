export const loadPaymentScript = callback => {
  const existingScript = document.getElementById('cloudpayments');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://widget.cloudpayments.ru/bundles/cloudpayments';
    script.id = 'cloudpayments';
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export const startPayment = onSuccess => {
  const widget = new window.cp.CloudPayments();
  widget.charge(
    {
      // options
      publicId: 'pk_4533efc4d554254ad476820ddb3b1', // id из личного кабинета
      description: 'Пример оплаты (деньги сниматься не будут)', // назначение
      amount: 10, // сумма
      currency: 'RUB', // валюта
      skin: 'modern', // дизайн виджета
    },
    () => {
      onSuccess();
    },
  );
};
