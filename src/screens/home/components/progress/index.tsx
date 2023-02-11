import {Movie} from '@constants/types';
import React from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {styles} from './styles';

const {width} = Dimensions.get('window');

type DataItem = {
  data: Movie[] | undefined;
  scrollX: Animated.Value;
};

export const Progress = ({data, scrollX}: DataItem) => {
  const position = Animated.divide(scrollX, width);

  return (
    <View style={styles.row}>
      {data?.map((_, i) => {
        const opacity = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });

        const dotWidth = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [8, 18, 8],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i}
            style={[styles.dots, {opacity, width: dotWidth}]}
          />
        );
      })}
    </View>
  );
};
