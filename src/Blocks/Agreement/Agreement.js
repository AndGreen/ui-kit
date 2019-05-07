import React from 'react';
import styled from 'styled-components';
import { TextSmall } from '../../Text';

const AgreementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  padding: 20px;
  width: 100%;
`;

const AgreementText = styled(TextSmall)`
  color: #000;

  > a {
    text-decoration: underline;
  }
`;

export const Agreement = () => {
  return (
    <AgreementWrapper>
      <AgreementText>
        Нажимая на кнопку, вы соглашаетесь с <a>правилами и условиями</a>, 
        и с <a>политикой конфиденциальности</a>
      </AgreementText>
    </AgreementWrapper>
  );
};
