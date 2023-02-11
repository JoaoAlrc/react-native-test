import theme from '@constants/theme';
import {getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: getWidth(16),
    fontWeight: '600',
    marginLeft: getWidth(16),
    color: theme.COLORS.WHITE,
  },
  separator: {
    height: '100%',
    width: getWidth(4),
  },
  content: {
    padding: getWidth(16),
  },
});
