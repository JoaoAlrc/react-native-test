import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import {StyleProp, TextStyle} from 'react-native';

type Props = {
  name: string;
  size?: number;
  color?: string;
  type: string;
  style?: StyleProp<TextStyle>;
};

function Icon({name, size, color, type, style}: Props) {
  switch (type) {
    case 'Feather':
      return <IconFeather {...{style, size, color, name}} />;
    case 'Entypo':
      return <IconEntypo {...{style, size, color, name}} />;
    case 'Foundation':
      return <IconFoundation {...{style, size, color, name}} />;
    case 'Octicons':
      return <IconOcticons {...{style, size, color, name}} />;
    case 'FontAwesome':
      return <IconFontAwesome {...{style, size, color, name}} />;
    case 'Fontisto':
      return <IconFontisto {...{style, size, color, name}} />;
    case 'SimpleLineIcons':
      return <IconSimpleLineIcons {...{style, size, color, name}} />;
    case 'MaterialIcons':
      return <IconMaterialIcons {...{style, size, color, name}} />;
    case 'MaterialCommunityIcons':
      return <IconMaterialCommunityIcons {...{style, size, color, name}} />;
    case 'AntDesign':
      return <IconAntDesign {...{style, size, color, name}} />;
    case 'FontAwesome5':
      return <IconFontAwesome5 {...{style, size, color, name}} />;
    case 'Ionicons':
      return <IconIonicons {...{style, size, color, name}} />;
    case 'EvilIcons':
      return <IconEvilIcons {...{style, size, color, name}} />;
    default:
      return null;
  }
}

export default Icon;
