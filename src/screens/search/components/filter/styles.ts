import theme from '@constants/theme';
import {getHeight, getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    color: theme.COLORS.WHITE,
    marginBottom: getHeight(8),
    fontSize: getWidth(14),
    fontWeight: '500',
  },
  filterContent: {
    maxHeight: getHeight(100),
    marginBottom: getHeight(16),
  },
});
