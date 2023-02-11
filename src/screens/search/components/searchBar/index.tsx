import Input from '@components/forms/input';
import Icon from '@components/icon';
import theme from '@constants/theme';
import {useMovie} from '@context/movie';
import React from 'react';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type Form = {
  search: string;
};

const SearchBar = () => {
  const {control, watch, setValue} = useForm<Form>({
    defaultValues: {search: ''},
  });
  const {setSearch} = useMovie();
  const search = watch('search');

  useEffect(() => {
    setSearch(search);
  }, [search, setSearch]);

  return (
    <View style={styles.row}>
      <Input
        shadowLess
        name="search"
        control={control}
        placeholder="What are you looking for?"
        placeholderTextColor={theme.COLORS.ACTIVE_TAB}
        style={styles.input}
      />
      {!search.length ? (
        <Icon
          type="AntDesign"
          name="search1"
          size={16}
          color={theme.COLORS.ACTIVE_TAB}
        />
      ) : (
        <Pressable onPress={() => setValue('search', '')}>
          <Text style={{color: theme.COLORS.WHITE}}>Clear</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
