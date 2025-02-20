import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Add } from './screens/Add';
import { History } from './screens/History';
import { Quote } from './screens/Quote';
import { NotFound } from './screens/NotFound';

import { IconButton } from 'react-native-paper';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Главная',
        tabBarIcon: ({ color, size }) => (
          <IconButton
            icon={"home"}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Add: {
      screen: Add,
      options: {
        title: 'Добавить запись',
        tabBarIcon: ({ color, size }) => (
          <IconButton
            icon={"plus"}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    History: {
      screen: History,
      options: {
        title: 'История',
        tabBarIcon: ({ color, size }) => (
          <IconButton
            icon={"history"}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Quote: {
      screen: Quote,
      options: {
        title: 'Получить цитату',
        tabBarIcon: ({ color, size }) => (
          <IconButton
            icon={"request"}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
