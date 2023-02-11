import Icon from '@components/icon';
import theme from '@constants/theme';
import {Movie} from '@constants/types';
import {getWidth} from '@constants/utils';
import {useUser} from '@context/user';
import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  movie: Movie;
  id: string;
};

const Item = ({movie, id}: Props) => {
  const {getRating, getMyListItem, setMyListItem} = useUser();
  const rating = getRating(id);
  const myList = getMyListItem(id);

  return (
    <ImageBackground source={{uri: movie.poster}} style={styles.poster}>
      {!!rating && (
        <View style={styles.row}>
          <Text style={styles.rating}>{rating}</Text>
          <Icon
            type="AntDesign"
            name={'star'}
            size={getWidth(18)}
            color={theme.COLORS.GOLD}
          />
        </View>
      )}
      <View
        style={[
          styles.viewMyListIconBackground,
          myList ? styles.highOpacity : styles.lowOpacity,
        ]}>
        <Icon
          type="MaterialCommunityIcons"
          name={myList ? 'movie-open-check-outline' : 'movie-open-plus-outline'}
          size={getWidth(24)}
          color={theme.COLORS.WHITE}
        />
      </View>
      <Pressable
        onPress={() => setMyListItem(movie, !myList ? 'ADD' : 'REMOVE')}
        style={styles.viewMyListIcon}>
        <Icon
          type="MaterialCommunityIcons"
          name={myList ? 'movie-open-check-outline' : 'movie-open-plus-outline'}
          size={getWidth(24)}
          color={theme.COLORS.WHITE}
        />
      </Pressable>
    </ImageBackground>
  );
};

export default Item;
