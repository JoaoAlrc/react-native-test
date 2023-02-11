import theme from '@constants/theme';
import {getHeight, getWidth, HeaderHeight} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HeaderHeight,
    backgroundColor: theme.COLORS.BACKGROUND,
    padding: getWidth(16),
  },
  title: {
    color: theme.COLORS.WHITE,
    marginVertical: getHeight(16),
    fontSize: getWidth(16),
    fontWeight: 'bold',
  },
});
