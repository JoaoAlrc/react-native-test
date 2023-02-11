import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

type Props = {
  text: string;
  active: number;
  onPress: () => void;
};

const Tag = ({text, active, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[active ? styles.activeTag : styles.tag]}>
      <Text style={[active ? styles.activeText : styles.text]}>{text}</Text>
    </Pressable>
  );
};

export default Tag;
