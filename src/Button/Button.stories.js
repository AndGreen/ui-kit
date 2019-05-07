import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { ButtonTransparent } from './ButtonTransparent';

storiesOf('Button', module)
  .add('colorized', () => <Button>Стать подписчиком</Button>)
  .add('transparent', () => <ButtonTransparent>Посмотреть демо полиса</ButtonTransparent>);
