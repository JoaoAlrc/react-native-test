import theme from '@constants/theme';
import {getHeight, getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: getHeight(8),
  },
  content: {
    padding: getHeight(8),
  },
  poster: {
    height: getHeight(150),
    width: getWidth(100),
    padding: getWidth(4),
    resizeMode: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: getWidth(24),
    color: theme.COLORS.GOLD,
  },
  text: {
    fontSize: getWidth(16),
    color: theme.COLORS.WHITE,
    marginTop: 'auto',
  },
});
