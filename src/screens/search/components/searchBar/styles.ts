import theme from '@constants/theme';
import {getHeight, getWidth, HeaderHeight} from '@constants/utils';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HeaderHeight,
    backgroundColor: theme.COLORS.BACKGROUND,
    padding: getWidth(16),
  },
  input: {
    borderRadius: 4,
    fontSize: getHeight(14),
    width: width - getWidth(70),
    paddingHorizontal: getWidth(8),
    paddingVertical: getWidth(4),
    color: theme.COLORS.INACTIVE_TAB,
  },
  iconButton: {
    paddingHorizontal: getWidth(16),
    paddingVertical: getWidth(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
