import React from 'react';

import { storiesOf } from '@storybook/react';
import { Logo } from './Logo';
import { LogoText } from './LogoText';

storiesOf('Logo', module)
  .add('icon', () => <Logo />)
  .add('full', () => <LogoText />);
