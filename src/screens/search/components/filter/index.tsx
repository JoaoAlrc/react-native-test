import Tag from '@components/tag';
import {useMovie} from '@context/movie';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  label: string;
  type: string;
  data: string[] | null | undefined;
};

const Filter = ({label, type, data}: Props) => {
  const {updateFilters, getActiveFilters} = useMovie();
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <ScrollView style={styles.filterContent}>
        <View style={styles.row}>
          {data?.map((text, index) => {
            const active = getActiveFilters(text, type);
            return (
              <Tag
                key={index.toString()}
                {...{text, active}}
                onPress={() =>
                  updateFilters(text, type, active ? 'REMOVE' : 'ADD')
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Filter;
