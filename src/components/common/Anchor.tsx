import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TextProps} from 'react-native';
import {Text} from 'react-native-paper';

// export const A = styled.Text`
//   color: blue;
// `;
// import { Container } from './styles';
export interface AnchorProps extends TextProps {
  to: string;
}

const Anchor: React.FC<AnchorProps> = ({children, to, ...rest}) => {
  const Navigation = useNavigation();
  function navigationHandler(where: string) {
    Navigation.navigate(where as any);
  }
  return (
    <Text
      style={{color: 'blue'}}
      onPress={() => {
        navigationHandler(to);
      }}
      {...rest}>
      {children}
    </Text>
  );
};

export default Anchor;
