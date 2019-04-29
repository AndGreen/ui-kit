import React from 'react';

import { storiesOf } from '@storybook/react';
import PaymentWidget from './index';

storiesOf('PaymentWidget', module).add('modern', () => <PaymentWidget show />);
