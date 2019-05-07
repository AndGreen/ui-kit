import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  background-color: #182033;
  color: white;
  display: flex;
  height: 80px;

  justify-content: center;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      © Mango Techsurance
    </FooterWrapper>
  )
}
