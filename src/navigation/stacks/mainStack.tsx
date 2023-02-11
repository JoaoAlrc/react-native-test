import React from 'react';
import Details from '@screens/details';
import {Stack} from '@navigation/navigators';
import {MainTabs} from '@navigation/tabs/mainTabs';

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
