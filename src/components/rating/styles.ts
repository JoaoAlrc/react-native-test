import {getHeight, getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  stars: {
    position: 'absolute',
    top: getHeight(70),
    flexDirection: 'row',
    padding: getWidth(8),
    width: '100%',
  },
});
