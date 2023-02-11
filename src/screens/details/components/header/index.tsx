import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {useMovie} from '@context/movie';
import {titleShadowStyles} from '@constants/common-styles';
import BackButton from '@components/backButton';
import Rating from '@components/rating';
import {useUser} from '@context/user';

const Header = () => {
  const {movie} = useMovie();
  const {getRating} = useUser();

  return (
    <ImageBackground source={{uri: movie?.backdrop}} style={styles.backdrop}>
      <BackButton />
      <View style={styles.headerInfo}>
        <Image source={{uri: movie?.poster}} style={styles.poster} />
        <View style={styles.justifyHeaderItems}>
          <View style={[styles.titlePosition, titleShadowStyles]}>
            <Text style={styles.title} numberOfLines={3}>
              {movie?.title} ({movie?.imdb_rating})
            </Text>
          </View>
          <Rating id={movie?.id!} rating={getRating(movie?.id)} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;
