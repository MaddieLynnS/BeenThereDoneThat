import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './tabs/Home';
import LoginScreen from './tabs/Login';
import PostsScreen from './tabs/Posts';
import NewPostScreen from './tabs/NewPost';
import { PostsProvider } from './PostsContext';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {title: 'Welcome'},
    },
    Login: {
      screen: LoginScreen,
    },
    Posts: {
      screen: PostsScreen
    },
    NewPost: {
      screen: NewPostScreen,
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <PostsProvider>
      <Navigation />
    </PostsProvider>
  );
}