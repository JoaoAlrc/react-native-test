import theme from '@constants/theme';
import {getWidth, HeaderHeight} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  iconView: {
    marginTop: HeaderHeight,
    marginLeft: getWidth(16),
    width: getWidth(24),
    borderRadius: 50,
    padding: getWidth(4),
  },
  iconViewOpacity: {
    position: 'absolute',
    top: HeaderHeight,
    left: getWidth(16),
    backgroundColor: theme.COLORS.MUTED,
    opacity: 0.5,
    width: getWidth(24),
    borderRadius: 50,
    padding: getWidth(4),
  },
});
