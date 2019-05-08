import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextSmall } from './TextSmall';
import { Text } from './Text';
import { TextMedium } from './TextMedium';
import { TextTitle } from './TextTitle';

storiesOf('Text', module)
  .add('small', () => (
    <TextSmall>
      Вы можете отменить подписку в любой момент в личном кабинете
    </TextSmall>
  ))
  .add('default', () => <Text>Стоимость вашей страховки составит</Text>)
  .add('medium title', () => <TextMedium>200 руб/мес</TextMedium>)
  .add('title', () => <TextTitle>Подписка на страховку</TextTitle>);
