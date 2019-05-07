import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(
    141.47deg,
    #fcbf13 -25.59%,
    #ffab00 2.63%,
    #ff6a00 43.86%,
    #ff5850 79.31%,
    #ff7fad 113.31%
  );
  border: none;
  border-radius: 45px;

  color: white;
  cursor: pointer;

  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;

  padding: 20px 0;

  width: 385px;

  &:active,
  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

