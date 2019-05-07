import React from 'react';
import styled from 'styled-components';
import { LogoText } from '../../Logo';

const HeaderWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
`;

const HeaderShadow = styled.div`
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Header = () => (
  <HeaderWrapper>
    <HeaderShadow>
      <LogoText />
    </HeaderShadow>
  </HeaderWrapper>
);
