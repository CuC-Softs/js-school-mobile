import React from 'react';
import styled from 'styled-components/native';

interface AuthLayout {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayout> = ({children}) => {
  return <Container>{children}</Container>;
};

export const Container = styled.View`
  padding: 25px;
  margin-top: 50px;
`;

export default AuthLayout;
