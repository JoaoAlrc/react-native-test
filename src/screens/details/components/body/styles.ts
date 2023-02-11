import theme from '@constants/theme';
import {getHeight, getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getHeight(116),
    paddingBottom: getHeight(16),
    paddingHorizontal: getWidth(16),
  },
  alignInfoText: {
    flexDirection: 'row',
    marginBottom: getHeight(16),
  },
  mb1: {
    marginBottom: getHeight(16),
  },
  separator: {
    color: theme.COLORS.WHITE,
    fontSize: getWidth(14),
    marginHorizontal: getWidth(8),
  },
  text: {
    color: theme.COLORS.WHITE,
    fontSize: getWidth(14),
  },
});
