import {View} from 'react-native';
import React from 'react';
import {Button, Headline} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const App = () => {
  const {signOut} = useAuth();
  return (
    <View style={{padding: 25, marginTop: 20}}>
      <Headline>App</Headline>
      <Button
        onPress={() => {
          signOut();
        }}>
        Logout
      </Button>
    </View>
  );
};

export default App;
