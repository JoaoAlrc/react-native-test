import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import Icon from '@components/icon';
import {getWidth} from '@constants/utils';
import {useNavigation} from '@react-navigation/native';
import theme from '@constants/theme';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <View style={styles.iconViewOpacity}>
        <Icon
          type="AntDesign"
          name="left"
          size={getWidth(16)}
          color={theme.COLORS.WHITE}
        />
      </View>
      <View style={styles.iconView}>
        <Icon
          type="AntDesign"
          name="left"
          size={getWidth(16)}
          color={theme.COLORS.WHITE}
        />
      </View>
    </Pressable>
  );
};

export default BackButton;
