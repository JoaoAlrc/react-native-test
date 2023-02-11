import {useMovie} from '@context/movie';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Filter from './components/filter';
import SearchBar from './components/searchBar';
import {styles} from './styles';

const Search = () => {
  const {genres, classifications, casts, directors} = useMovie();
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.title}>Filter by:</Text>
      <ScrollView>
        {genres?.length && (
          <Filter data={genres} label="Genres:" type="genres" />
        )}
        {casts?.length && <Filter data={casts} label="Casts:" type="cast" />}
        {directors?.length && (
          <Filter data={directors} label="Directors:" type="director" />
        )}
        {classifications?.length && (
          <Filter
            data={classifications}
            label="Classifications:"
            type="classification"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
