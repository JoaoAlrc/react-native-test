import {titleShadowStyles} from '@constants/common-styles';
import {Movie} from '@constants/types';
import {useMovie} from '@context/movie';
import {MainStackParamList} from '@navigation/navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Progress} from '../progress';
import {styles} from './styles';

type Props = {
  data: Movie[] | undefined;
  navigation: StackNavigationProp<MainStackParamList, 'Main', undefined>;
};

export const Gallery = ({data, navigation}: Props) => {
  const scrollX = new Animated.Value(0);
  const {setMovie} = useMovie();

  const onPressItem = (movie: Movie) => {
    setMovie(movie);
    navigation.navigate('Details');
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      decelerationRate={0}
      contentContainerStyle={[styles.marginGallery]}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}>
      {data?.map((item, key) => (
        <Pressable
          key={`gallery-image-${key}`}
          onPress={() => onPressItem(item)}>
          <ImageBackground
            resizeMode="cover"
            source={{uri: item.backdrop}}
            style={styles.mainImage}>
            <View style={titleShadowStyles}>
              <Text style={styles.title}>WOOKIE</Text>
              <Text style={styles.title}>MOVIES</Text>
              <Text style={[styles.subtitle, styles.bold]}>{item.title}</Text>
              <Text style={styles.subtitle} numberOfLines={6}>
                {item.overview}
              </Text>
            </View>
            <View style={styles.dotsContainer}>
              <Progress {...{data, scrollX}} />
            </View>
          </ImageBackground>
        </Pressable>
      ))}
    </ScrollView>
  );
};
