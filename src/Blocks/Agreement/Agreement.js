import React from 'react';
import styled from 'styled-components';
import { TextSmall } from '../../Text';

const AgreementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F7F7F7;
  padding: 20px;
  width: 100%;
`;

const AgreementText = styled(TextSmall)`
  color: #000;

  > a {
    text-decoration: underline;
  }
`;

export const Agreement = ({children}) => {
  return (
    <AgreementWrapper>
      <AgreementText>{children}</AgreementText>
    </AgreementWrapper>
  )
};