import {inputShadowStyles} from '@constants/common-styles';
import theme from '@constants/theme';
import {getHeight, getWidth, HeaderHeight} from '@constants/utils';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  marginGallery: {
    marginBottom: getHeight(9),
  },
  bold: {
    fontWeight: 'bold',
  },
  mainImage: {
    width,
    height: getHeight(260),
    paddingTop: HeaderHeight - getHeight(16),
  },
  dotsContainer: {
    position: 'absolute',
    bottom: getWidth(16),
    ...inputShadowStyles,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 9,
    alignSelf: 'center',
  },
  mt150: {
    marginTop: 150,
  },
  title: {
    color: theme.COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: getWidth(24),
  },
  subtitle: {
    color: theme.COLORS.WHITE,
    textAlign: 'center',
    fontSize: getWidth(14),
    marginTop: getHeight(8),
  },
});
