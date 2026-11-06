// src/components/icons.
import React from 'react-native-svg';
import { Svg, Path, Polyline, Circle, Mask } from 'react-native-svg';

export const FileIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <Polyline
      points="13 2 13 9 20 9"    
      stroke="currentColor"
      strokeWidth="2"
    />
  </Svg>
);


