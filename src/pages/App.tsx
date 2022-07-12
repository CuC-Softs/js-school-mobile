import {View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Text} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const App = () => {
  const {signOut} = useAuth();
  return (
    <View style={{padding: 25}}>
      <Text>App</Text>
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
