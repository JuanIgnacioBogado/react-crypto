import styled from '@emotion/styled';

const Text = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  border-radius: 8px;
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
export const Error = ({ children }) => <Text>{children}</Text>;
