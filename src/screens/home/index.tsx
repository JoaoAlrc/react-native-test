import React from 'react';
import {ActivityIndicator, ScrollView, StatusBar, View} from 'react-native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '@navigation/navigationTypes';
import {styles} from './styles';
import ItemsList from './components/itemsList';
import {useMovie} from '@context/movie';
import {Movie} from '@constants/types';
import {Gallery} from './components/galery';

type Props = {
  navigation: StackNavigationProp<MainStackParamList, 'Main', undefined>;
};

const Home = ({navigation}: Props) => {
  const {movies, genres, isLoadingMovies} = useMovie();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Gallery
          {...{navigation}}
          data={movies
            ?.map(item => item)
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)}
        />
        {isLoadingMovies ? (
          <ActivityIndicator />
        ) : (
          genres?.map((item, index) => {
            return (
              <ItemsList
                key={index.toString()}
                {...{navigation}}
                title={item}
                data={movies
                  ?.filter((movie: Movie) => movie.genres.find(i => i === item))
                  .sort(() => 0.5 - Math.random())}
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
