import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '@navigation/navigationTypes';
import {styles} from './styles';
import {useUser} from '@context/user';
import Item from './components/item';

type Props = {
  navigation: StackNavigationProp<MainStackParamList, 'Main', undefined>;
};

const MyList = ({navigation}: Props) => {
  const {myList} = useUser();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>My List</Text>
      <ScrollView>
        {myList?.map((item, index) => {
          return <Item key={index.toString()} {...{navigation}} movie={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default MyList;
