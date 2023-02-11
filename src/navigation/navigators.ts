import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStackParamList, MainTabsParamList} from './navigationTypes';

export const Stack = createStackNavigator<MainStackParamList>();
export const Tab = createBottomTabNavigator<MainTabsParamList>();
