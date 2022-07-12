import {Theme} from 'react-native-paper/src/types';
import {configureFonts, DefaultTheme} from 'react-native-paper';
import fonts from './fonts';

const theme: Theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    background: '#151521',
    text: '#fff',
    primary: '#3699ff',
    surface: '#1e1e2d',
    accent: '#f64e60',
    onSurface: '#fffaaa',
    backdrop: '#191920',
    placeholder: '#fffaaa',
  },
  dark: true,
  fonts: configureFonts(fonts),
};

export default theme;
