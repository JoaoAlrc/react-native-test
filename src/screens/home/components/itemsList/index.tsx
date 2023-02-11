import React from 'react';
import {View, Text, FlatList, SafeAreaView, Pressable} from 'react-native';
import {Movie} from '@constants/types';
import {MainStackParamList} from '@navigation/navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useMovie} from '@context/movie';
import {styles} from './styles';
import Item from '../item';

type Props = {
  title: string;
  data: Movie[] | undefined;
  navigation: StackNavigationProp<MainStackParamList, 'Main', undefined>;
};

type RenderItem = {
  item: Movie;
};

const separator = () => <View style={styles.separator} />;

const ItemsList = ({title, data, navigation}: Props) => {
  const {setMovie} = useMovie();

  const onPressItem = (movie: Movie) => {
    setMovie(movie);
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({item}: RenderItem) => (
          <Pressable onPress={() => onPressItem(item)}>
            <Item movie={item} id={item.id} />
          </Pressable>
        )}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={separator}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
};

export default ItemsList;
