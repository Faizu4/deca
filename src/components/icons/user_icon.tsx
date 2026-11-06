// src/components/icons.
import React from 'react-native-svg';
import { Svg, Path, Polyline, Circle, Mask } from 'react-native-svg';

export const UserIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Mask id="user-mask">
      <Circle cx="12" cy="12" r="12" fill="white" />
    </Mask>
    <Circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" />
    <Svg mask="url(#user-mask)">
      <Circle cx="12" cy="9" r="3.5" stroke="black" strokeWidth="2" />
      <Circle cx="12" cy="21" r="6.5" stroke="black" strokeWidth="2" />
    </Svg>
  </Svg>
);

