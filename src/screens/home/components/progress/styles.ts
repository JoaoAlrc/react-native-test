import theme from '@constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  dots: {
    height: 6,
    margin: 5.3,
    borderRadius: 3,
    backgroundColor: theme.COLORS.MUTED,
  },
});
