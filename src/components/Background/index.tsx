import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles'

interface Props {
    children: React.ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
        source={require('../../../assets/backgroudImg.png')}
        style={{flex: 1}}
    >
        { children }
    </ImageBackground>
  );
}