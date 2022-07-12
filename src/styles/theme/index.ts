import {configureFonts, DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';
import fonts from './fonts';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: configureFonts(fonts),
};

export default theme;
