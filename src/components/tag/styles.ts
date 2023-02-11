import theme from '@constants/theme';
import {getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tag: {
    backgroundColor: theme.COLORS.INACTIVE_TAB,
    marginRight: getWidth(8),
    marginBottom: getWidth(8),
    borderRadius: getWidth(8),
    paddingHorizontal: getWidth(8),
    paddingVertical: getWidth(4),
  },
  activeTag: {
    backgroundColor: theme.COLORS.ACTIVE_TAB,
    marginRight: getWidth(8),
    marginBottom: getWidth(8),
    borderRadius: getWidth(8),
    paddingHorizontal: getWidth(8),
    paddingVertical: getWidth(4),
  },
  text: {
    color: theme.COLORS.WHITE,
  },
  activeText: {
    color: theme.COLORS.INACTIVE_TAB,
  },
});
