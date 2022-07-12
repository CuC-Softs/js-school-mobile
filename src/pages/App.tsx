import React from 'react';
import {Button, Headline} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';
import styled from 'styled-components/native';

const App = () => {
  const {signOut} = useAuth();
  return (
    <Container>
      <Headline>App</Headline>
      <Button
        onPress={() => {
          signOut();
        }}>
        Logout
      </Button>
    </Container>
  );
};

const Container = styled.View`
  padding: 25px;
  margin-top: 50px;
`;

export default App;
