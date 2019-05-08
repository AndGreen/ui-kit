import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';

export const BadgetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 170px;
  padding-left: 10px;
  background: #fff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
`;

export const BadgetLogo = () => (
  <BadgetWrapper>
    <Logo />
  </BadgetWrapper>
);
