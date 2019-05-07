
import { addDecorator, configure } from '@storybook/react';
import * as React from 'react';
import GlobalStyle from '../src/GlobalStyles';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = (cb) => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);