import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../../pages/App';

const AppRouter = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppRouter.Navigator screenOptions={{headerShown: false}}>
      <AppRouter.Screen name="App" component={App} />
    </AppRouter.Navigator>
  );
};

export default AppRoutes;
