import React from 'react';
import { storiesOf } from '@storybook/react';

import { Agreement } from './Agreement';

storiesOf('Blocks/Agreement', module).add('default', () => (
  <Agreement>
    Нажимая на кнопку, вы соглашаетесь с <a>правилами и условиями</a>, 
    и с <a>политикой конфиденциальности</a>
  </Agreement>
));
