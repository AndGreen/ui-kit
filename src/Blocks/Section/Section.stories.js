import React from 'react';
import { storiesOf } from '@storybook/react';
import { Section, SectionBlock, Padding } from './Section';

storiesOf('Blocks/Section', module).add('default', () => (
  <Section>
    <Padding>
      <SectionBlock>Section</SectionBlock>
    </Padding>
  </Section>
));
