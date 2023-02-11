import theme from '@constants/theme';
import {getHeight, getWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  poster: {
    height: getHeight(180),
    width: getWidth(120),
    padding: getWidth(4),
    resizeMode: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: getWidth(18),
    color: theme.COLORS.GOLD,
  },
  viewMyListIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: getWidth(4),
    zIndex: 100,
  },
  viewMyListIconBackground: {
    flex: 1,
    position: 'absolute',
    bottom: getWidth(4),
    right: getWidth(4),
    padding: getWidth(4),
    borderRadius: 50,
  },
  lowOpacity: {
    opacity: 0.8,
    backgroundColor: theme.COLORS.ACTIVE_TAB,
  },
  highOpacity: {
    opacity: 1,
    backgroundColor: theme.COLORS.INACTIVE_TAB,
  },
});
