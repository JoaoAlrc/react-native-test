import Icon from '@components/icon';
import theme from '@constants/theme';
import {getWidth} from '@constants/utils';
import {useUser} from '@context/user';
import React from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './styles';

type RatingProps = {
  id: string;
  rating: number;
};

const Rating = ({id, rating}: RatingProps) => {
  const {setMovieRating} = useUser();
  const starRatingOptions = [1, 2, 3, 4, 5];

  const animatedButtonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{scale: animatedButtonScale}],
  };

  return (
    <View style={styles.stars}>
      {starRatingOptions.map(option => (
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => setMovieRating(id, option, !rating ? 'ADD' : 'UPDATE')}
          key={option}>
          <Animated.View style={animatedScaleStyle}>
            <Icon
              type="AntDesign"
              name={rating >= option ? 'star' : 'staro'}
              size={getWidth(26)}
              color={rating >= option ? theme.COLORS.GOLD : theme.COLORS.MUTED}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};
export default Rating;
