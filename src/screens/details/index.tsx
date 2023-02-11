import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Content from './components/content';

const Details = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Details;
