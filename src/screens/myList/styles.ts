import theme from '@constants/theme';
import {getHeight, getWidth, HeaderHeight} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
    paddingTop: HeaderHeight,
    paddingHorizontal: getWidth(16),
  },
  title: {
    color: theme.COLORS.WHITE,
    textAlign: 'center',
    marginBottom: getHeight(32),
    fontSize: getWidth(16),
    fontWeight: 'bold',
  },
});
