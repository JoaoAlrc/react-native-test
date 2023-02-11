import theme from '@constants/theme';
import {getHeight, getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerInfo: {
    position: 'absolute',
    top: getHeight(110),
    flexDirection: 'row',
    paddingHorizontal: getWidth(16),
  },
  justifyHeaderItems: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: getWidth(18),
  },
  titlePosition: {
    top: getHeight(114),
    left: getHeight(8),
    flexDirection: 'row',
  },
  backdrop: {
    height: getHeight(220),
    width: '100%',
  },
  poster: {
    height: getHeight(220),
    width: getWidth(140),
    resizeMode: 'stretch',
  },
});
