import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

export interface AnchorProps extends TextProps {
  to: string;
}

const Anchor: React.FC<AnchorProps> = ({children, to, ...rest}) => {
  const Navigation = useNavigation();
  function navigationHandler(where: string) {
    Navigation.navigate(where as any);
  }
  return (
    <StyledAnchor
      onPress={() => {
        navigationHandler(to);
      }}
      {...rest}>
      {children}
    </StyledAnchor>
  );
};

const StyledAnchor = styled.Text`
  color: #3699ff;
`;

export default Anchor;
