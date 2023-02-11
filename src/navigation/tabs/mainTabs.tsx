import React from 'react';
import {Tab} from '@navigation/navigators';
import Search from '@screens/search';
import Home from '@screens/home';
import Icon from '@components/icon';
import theme from '@constants/theme';
import {useUser} from '@context/user';
import MyList from '@screens/myList';

export const MainTabs = () => {
  const {myList} = useUser();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.BACKGROUND,
        },
        tabBarInactiveTintColor: theme.COLORS.INACTIVE_TAB,
        tabBarActiveTintColor: theme.COLORS.ACTIVE_TAB,
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type="AntDesign" name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="MyList"
        component={MyList}
        options={{
          tabBarBadge: myList.length || '',
          tabBarBadgeStyle: {
            backgroundColor: myList.length
              ? theme.COLORS.INACTIVE_TAB
              : theme.COLORS.TRANSPARENT,
          },
          tabBarIcon: ({color, size}) => (
            <Icon
              type="MaterialCommunityIcons"
              name="movie-open-check-outline"
              {...{size, color}}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type="AntDesign" name="search1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
