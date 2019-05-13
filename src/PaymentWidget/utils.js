import { widgetSettings } from './constants';

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
  widget.charge(widgetSettings, () => {
    onSuccess();
  });
};
