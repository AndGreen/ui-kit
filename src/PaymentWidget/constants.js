import uuid from 'uuid';

const periodPrice = 10;
const periodType = 'MONTH';

export const widgetSettings = {
  // options
  publicId: 'pk_4533efc4d554254ad476820ddb3b1', // id из личного кабинета
  description: 'Пример оплаты (деньги сниматься не будут)', // назначение
  amount: periodPrice, // сумма
  currency: 'RUB', // валюта
  skin: 'modern', // дизайн виджета
  data: {
    productId: uuid(),
    periodPrice,
    periodType,
  },
};
