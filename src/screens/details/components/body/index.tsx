import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {useMovie} from '@context/movie';
import moment from 'moment';

const Body = () => {
  const {movie} = useMovie();

  return (
    <View style={styles.container}>
      <View style={styles.alignInfoText}>
        <Text style={styles.text}>
          {moment(movie?.released_on).format('YYYY')}
        </Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.text}>{movie?.length}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.text}>{movie?.director}</Text>
      </View>
      <Text style={[styles.text, styles.mb1]}>
        Cast: {movie?.cast.join(', ')}
      </Text>
      <Text style={styles.text}>{movie?.overview}</Text>
    </View>
  );
};

export default Body;
