import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import Routes from './routes';
import {Provider as PaperProvider} from 'react-native-paper';
import merge from 'deepmerge';
import theme from './styles/theme';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

const combinedTheme = merge(NavigationDefaultTheme, theme);

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <PaperProvider theme={combinedTheme}>
        <NavigationContainer theme={combinedTheme}>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
