import Icon from '@components/icon';
import theme from '@constants/theme';
import {Movie} from '@constants/types';
import {getWidth} from '@constants/utils';
import {useMovie} from '@context/movie';
import {useUser} from '@context/user';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  movie: Movie;
};

const Item = ({movie}: Props) => {
  const navigation = useNavigation();
  const {setMovie} = useMovie();
  const {getRating} = useUser();
  const rating = getRating(movie.id);
  const onPressItem = () => {
    setMovie(movie);
    navigation.navigate('Details');
  };
  return (
    <Pressable
      onPress={() => onPressItem()}
      style={[styles.row, styles.container]}>
      <Image source={{uri: movie.poster}} style={styles.poster} />
      <View style={[styles.content]}>
        <View style={styles.row}>
          <Text style={styles.rating}>{rating}</Text>
          <Icon
            type="AntDesign"
            name={'star'}
            size={getWidth(24)}
            color={theme.COLORS.GOLD}
          />
        </View>
        <Text style={styles.text} numberOfLines={2}>
          {movie.title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Item;
